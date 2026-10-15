import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Saurav Shelke',
    jobTitle: 'Data Analyst',
    url: 'https://sauravshelke.dev',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Savitribai Phule Pune University (SPPU)',
    },
    knowsAbout: [
      'Data Analysis',
      'SQL',
      'Python',
      'Power BI',
      'Tableau',
      'Exploratory Data Analysis',
      'Business Intelligence',
      'Database Management Systems',
    ],
    sameAs: [
      'https://www.linkedin.com/in/saurav-shelke-680a38434/',
      'https://github.com/Saurav-Shelke',
      'https://instagram.com',
    ],
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen transition-colors duration-300`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
