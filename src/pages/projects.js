import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          width={800}
          height={500}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light/80 sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center gap-4">
          <Link href={github} target="_blank" className="w-10" aria-label="GitHub Repository">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          width={600}
          height={400}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light md:text-base"
          >
            View Dashboard
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6" aria-label="GitHub Repository">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Data Analytics Projects & Dashboards | Saurav Shelke</title>
        <meta
          name="description"
          content="Explore end-to-end Data Analytics projects by Saurav Shelke: E-Commerce RFM Segmentation, Power BI Executive Dashboards, and SQL Cohort Analysis."
        />
        <meta
          name="keywords"
          content="Data Analytics Projects, Power BI Dashboards, SQL Projects, Tableau Projects, RFM Customer Segmentation, Cohort Analysis, Python EDA, Saurav Shelke"
        />
        <link rel="canonical" href="https://sauravshelke.dev/projects" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sauravshelke.dev/projects" />
        <meta property="og:title" content="Data Analytics Projects & Dashboards | Saurav Shelke" />
        <meta
          property="og:description"
          content="Explore end-to-end Data Analytics projects by Saurav Shelke: E-Commerce RFM Segmentation, Power BI Executive Dashboards, and SQL Cohort Analysis."
        />
        <meta
          property="og:image"
          content="https://sauravshelke.dev/images/articles/powerbi-executive-kpi-cover.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Data Analytics Projects & Dashboards | Saurav Shelke" />
        <meta
          name="twitter:description"
          content="Explore end-to-end Data Analytics projects by Saurav Shelke: E-Commerce RFM Segmentation, Power BI Executive Dashboards, and SQL Cohort Analysis."
        />
        <meta
          name="twitter:image"
          content="https://sauravshelke.dev/images/articles/powerbi-executive-kpi-cover.jpg"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Data Speaks When Analyzed Right!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="E-Commerce Customer Segmentation & RFM Analysis"
                img="/images/projects/crypto-screener-cover-image.jpg"
                summary="An end-to-end customer analytics model utilizing Python (Pandas, Seaborn) and SQL to calculate Recency, Frequency, and Monetary (RFM) scores for 100,000+ orders. Segmented customers into actionable cohorts (Champions, At-Risk, Churned) and delivered strategic retention recommendations."
                link="https://github.com/Saurav-Shelke"
                github="https://github.com/Saurav-Shelke"
                type="Featured Analytics Case Study"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Executive Sales & Profitability Dashboard"
                img="/images/projects/agency-website-cover-image.jpg"
                link="https://github.com/Saurav-Shelke"
                github="https://github.com/Saurav-Shelke"
                type="Power BI & DAX"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Customer Retention & SQL Cohort Analysis"
                img="/images/projects/devdreaming.jpg"
                link="https://github.com/Saurav-Shelke"
                github="https://github.com/Saurav-Shelke"
                type="SQL & Database Modeling"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Telecom Customer Churn Risk & Driver Analysis"
                img="/images/projects/fashion-studio-website.jpg"
                summary="Comprehensive Exploratory Data Analysis (EDA) on a 7,000+ customer telecom dataset. Discovered key churn drivers (contract duration, customer service escalation frequency, monthly charges), mapped correlation matrices, and produced an executive mitigation roadmap."
                link="https://github.com/Saurav-Shelke"
                github="https://github.com/Saurav-Shelke"
                type="Featured EDA & Statistical Modeling"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Financial Market Volatility & Portfolio Risk Analyzer"
                img="/images/projects/portfolio-cover-image.jpg"
                link="https://github.com/Saurav-Shelke"
                github="https://github.com/Saurav-Shelke"
                type="Python & Financial Analytics"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Healthcare Operational Flow & Wait Times"
                img="/images/projects/nft-collection-website-cover-image.jpg"
                link="https://github.com/Saurav-Shelke"
                github="https://github.com/Saurav-Shelke"
                type="Tableau & Healthcare BI"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
