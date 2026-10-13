import React from 'react';
import Link from 'next/link';
import Layout from './Layout';

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 gap-4">
        <span>{new Date().getFullYear()} &copy; Saurav Shelke. All Rights Reserved.</span>
        <div className="flex items-center">
          Built with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;
          <Link
            href="https://github.com/Saurav-Shelke"
            target="_blank"
            className="underline underline-offset-2 hover:text-primary dark:hover:text-primaryDark transition-colors"
          >
            Saurav Shelke
          </Link>
        </div>
        <Link
          href="https://github.com/Saurav-Shelke"
          target="_blank"
          className="underline underline-offset-2 hover:text-primary dark:hover:text-primaryDark transition-colors"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
}
