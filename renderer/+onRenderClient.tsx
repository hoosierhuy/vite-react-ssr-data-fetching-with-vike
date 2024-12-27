// https://vike.dev/onRenderClient
export { onRenderClient }

import ReactDOM from 'react-dom/client'
import { Layout } from './Layout'
import { getPageTitle } from './getPageTitle'
import type { OnRenderClientAsync } from 'vike/types'

let root: ReactDOM.Root
const onRenderClient: OnRenderClientAsync = async (
  pageContext
): ReturnType<OnRenderClientAsync> => {
  const { Page } = pageContext

  // This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
  // to support SPA
  if (!Page)
    throw new Error(
      'My onRenderClient() hook expects pageContext.Page to be defined'
    )

  const container = document.getElementById('react-root')
  if (!container) throw new Error('DOM element #react-root not found')

  const page = (
    <Layout pageContext={pageContext}>
      <Page />
    </Layout>
  )
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
  document.title = getPageTitle(pageContext)
  // I am dynamically setting the description meta tag to the description of the product coming from the API.  Docs: https://vike.dev/meta#example-title-and-description
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      'content',
      pageContext.data?.description ||
        'Enjoy the many wonderful products at affordable prices from Dummy Inc store.'
    )
}
