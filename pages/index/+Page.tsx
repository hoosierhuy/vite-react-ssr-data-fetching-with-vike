export { Page }

function Page() {
  return (
    <>
      <h2>
        Fetching Data, (and other functionality) in a Vite/React SSR App using
        Vike
      </h2>
      <p>
        Vike is one option to securely fetch initial data in a Vite/React server
        side rendered application. Documentation may be found{' '}
        <a href="https://vike.dev/" target="_blank">
          here
        </a>
        . The <a href="https://vike.dev/team">creators</a> of Vike recommends
        using{' '}
        <a href="https://batijs.dev/" target="_blank">
          Bati
        </a>{' '}
        to spin up a new Vite/React/Vike project, however, in order to help you
        understand how Vike works behind the scenes, I manually set up this
        Vite/React/Vike project to fetch data on the{' '}
        <em>
          <strong>server</strong>
        </em>{' '}
        side, and how to use that data to help with SEO, to include dynamically
        setting the meta tag's description attribute to have the value of the
        Product's description updated dynamically, and also dynamically setting
        the page's html <em>title</em> tag to match the Product's title from the
        API.
      </p>
    </>
  )
}
