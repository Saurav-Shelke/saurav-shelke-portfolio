import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1b1b1b" />
        {/* Google Search Console Verification Placeholder */}
        <meta
          name="google-site-verification"
          content="GOOGLE_SEARCH_CONSOLE_VERIFICATION_KEY"
        />
        {/* Search Engine Robots Rules */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
