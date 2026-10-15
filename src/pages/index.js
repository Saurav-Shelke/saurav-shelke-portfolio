import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saurav Shelke | Data Analyst Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Saurav Shelke - B.E. Computer Science Graduate & Data Analyst specializing in SQL, Python, Power BI, Tableau, and Exploratory Data Analysis."
        />
        <meta
          name="keywords"
          content="Saurav Shelke, Data Analyst, BE CSE, SQL, Python, Power BI, Tableau, EDA, Business Intelligence, Data Analytics Portfolio, Data Cleaning, Pune"
        />
        <meta name="author" content="Saurav Shelke" />
        <link rel="canonical" href="https://sauravshelke.dev/" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sauravshelke.dev/" />
        <meta property="og:title" content="Saurav Shelke | Data Analyst Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Saurav Shelke - B.E. Computer Science Graduate & Data Analyst specializing in SQL, Python, Power BI, Tableau, and Exploratory Data Analysis."
        />
        <meta
          property="og:image"
          content="https://sauravshelke.dev/images/articles/powerbi-executive-kpi-cover.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saurav Shelke | Data Analyst Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio of Saurav Shelke - B.E. Computer Science Graduate & Data Analyst specializing in SQL, Python, Power BI, Tableau, and Exploratory Data Analysis."
        />
        <meta
          name="twitter:image"
          content="https://sauravshelke.dev/images/articles/powerbi-executive-kpi-cover.jpg"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col gap-12">
            <div className="w-1/2 md:w-full flex justify-center">
              <Image
                src="/images/profile/Untitled design.png"
                alt="Saurav Shelke"
                className="w-full h-auto md:w-full max-w-[450px] rounded-2xl drop-shadow-xl"
                priority
                width={433}
                height={576}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Transforming Raw Data Into Actionable Business Insights."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Having completed my B.E. in Computer Science and Engineering, I am pursuing Data Analysis. I specialize in turning complex datasets into actionable business intelligence through Exploratory Data Analysis (EDA), advanced SQL querying, Python data pipelines, and interactive BI dashboards in Power BI and Tableau.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center gap-4">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="/projects"
                  className="flex items-center border-2 border-solid border-dark text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light dark:border-light dark:text-light hover:dark:bg-light hover:dark:text-dark md:p-2 md:px-4 md:text-base"
                >
                  View Projects
                </Link>
                <Link
                  href="mailto:shelkesaurav77@gmail.com"
                  className="ml-2 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src="/images/svgs/miscellaneous_icons_1.svg"
            alt="Lightbulb"
            className="w-full h-auto"
            width={96}
            height={96}
          />
        </div>
      </main>
    </>
  )
}
