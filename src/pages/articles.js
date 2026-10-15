import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          width={600}
          height={350}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg dark:text-light">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-light/80">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  );
};

const ArticleItem = ({ title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 50 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col sm:items-start"
    >
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline sm:text-base">
          {title}
        </h2>
      </Link>
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark min-w-max sm:self-start sm:pl-0 sm:pt-2">
        {date}
      </span>
    </motion.li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Saurav Shelke | Articles & Data Insights</title>
        <meta
          name="description"
          content="Technical guides, SQL analyses, and business intelligence case studies by Saurav Shelke."
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Insights That Drive Decisions!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title="Mastering SQL Window Functions & CTEs For Cohort Retention Analysis"
              summary="A deep dive into LEAD, LAG, ROW_NUMBER, and Common Table Expressions to calculate customer cohort retention and month-over-month growth analytics in PostgreSQL."
              time="8 min read"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/sql-cohort-analysis-cover.jpg"
            />
            <FeaturedArticle
              title="Designing Executive Power BI Dashboards: From Raw Data To Actionable KPIs"
              summary="Learn best practices for data modeling, star schemas, dynamic DAX measures, and visual storytelling to build business dashboards that leadership teams rely on."
              time="10 min read"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/powerbi-executive-kpi-cover.jpg"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
            All Articles & Insights
          </h2>

          <ul className="flex flex-col items-center justify-center">
            <ArticleItem
              title="5 Common Data Cleaning Pitfalls In Pandas And How To Avoid Them"
              date="April 2026"
              link="https://github.com/Saurav-Shelke"
            />
            <ArticleItem
              title="RFM Segmentation Demystified: Turning Transaction Logs Into Marketing Retention"
              date="March 2026"
              link="https://github.com/Saurav-Shelke"
            />
            <ArticleItem
              title="Exploratory Data Analysis: Why Visualizing Distributions Matters More Than Summary Averages"
              date="February 2026"
              link="https://github.com/Saurav-Shelke"
            />
            <ArticleItem
              title="The CS Engineering Advantage In Data Analytics: Writing High-Performance SQL Queries"
              date="January 2026"
              link="https://github.com/Saurav-Shelke"
            />
            <ArticleItem
              title="Understanding Customer Lifetime Value (CLV) Calculation Models With Python"
              date="December 2025"
              link="https://github.com/Saurav-Shelke"
            />
            <ArticleItem
              title="Demystifying A/B Testing: Statistical Significance For Practical Business Decisions"
              date="November 2025"
              link="https://github.com/Saurav-Shelke"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
