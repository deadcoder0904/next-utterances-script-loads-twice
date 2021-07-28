import * as React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" themes={['light', 'dark']}>
      <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
