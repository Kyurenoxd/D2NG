import React from 'react'
import type { AppProps } from 'next/app'
import { Onest } from 'next/font/google'
import '../styles/globals.scss'

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-onest',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={onest.variable}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp