// https://vike.dev/onPageTransitionEnd
export { onPageTransitionEnd }

import type { OnPageTransitionEndAsync } from 'vike/types'

const onPageTransitionEnd: OnPageTransitionEndAsync =
  async (): ReturnType<OnPageTransitionEndAsync> => {
    console.info('Page transition end')

    document.querySelector('body')!.classList.remove('page-is-transitioning')
  }
