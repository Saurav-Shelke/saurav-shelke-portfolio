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

const ArticleItem = ({ img, title, date, link }) => {
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
        <title>Saurav Shelke | Articles Page</title>
        <meta
          name="description"
          content="Articles on modern React, Next.js, and web development by Saurav Shelke."
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination in your project."
              time="9 min read"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/pagination component in reactjs.jpg"
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Discover how to build custom loading screens in React with 3 different methods to dramatically improve your user experience."
              time="10 min read"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/create loading screen in react js.jpg"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
            All Articles
          </h2>

          <ul className="flex flex-col items-center justify-center">
            <ArticleItem
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2026"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/form validation in reactjs using custom react hook.png"
            />
            <ArticleItem
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="February 18, 2026"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/smooth scrolling in reactjs.png"
            />
            <ArticleItem
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="January 14, 2026"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/create modal component in react using react portals.png"
            />
            <ArticleItem
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="December 28, 2025"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/todo list app built using react redux and framer motion.png"
            />
            <ArticleItem
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="November 12, 2025"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/What is Redux with easy explanation.png"
            />
            <ArticleItem
              title="What Is Higher Order Component (Hoc) In React?"
              date="October 05, 2025"
              link="https://github.com/Saurav-Shelke"
              img="/images/articles/What is higher order component in React.jpg"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
