import type { Config } from 'vike/types'

// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
  clientRouting: true,
  // https://vike.dev/meta
  meta: {
    // Define new setting 'title'
    title: {
      env: { server: true, client: true },
    },
    // Define new setting 'description' in the meta tag
    description: {
      env: { server: true, client: true },
    },
  },
  hydrationCanBeAborted: true,
} satisfies Config
