import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-48 w-full text-center md:text-6xl md:mt-32 dark:text-light">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Analytics
        </motion.div>
        <Skill name="SQL" x="-24vw" y="2vw" />
        <Skill name="Python" x="-6vw" y="-10vw" />
        <Skill name="Power BI" x="20vw" y="6vw" />
        <Skill name="Tableau" x="0vw" y="12vw" />
        <Skill name="Pandas" x="-20vw" y="-15vw" />
        <Skill name="NumPy" x="16vw" y="-12vw" />
        <Skill name="Excel & DAX" x="30vw" y="-5vw" />
        <Skill name="Data Cleaning" x="0vw" y="-20vw" />
        <Skill name="EDA" x="-24vw" y="17vw" />
        <Skill name="Statistics" x="18vw" y="18vw" />
        <Skill name="PostgreSQL" x="-10vw" y="22vw" />
        <Skill name="Git" x="10vw" y="-22vw" />
      </div>
    </>
  );
};

const ExperienceDetail = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm mt-2 dark:text-light/90">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-48 md:my-32">
      <h2 className="font-bold text-8xl mb-24 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light">
        Experience & Journey
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <div className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:left-4" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <ExperienceDetail
            position="Pursuing Data Analyst"
            company="Independent Analytics & Case Studies"
            companyLink="https://github.com/Saurav-Shelke"
            time="Present"
            address="India"
            work="Currently pursuing Data Analysis full-time. Executing comprehensive exploratory data analysis (EDA), advanced SQL querying, data cleaning, and statistical modeling using Python (Pandas, NumPy). Building interactive executive dashboards in Power BI and Tableau to solve real-world business problems."
          />
          <ExperienceDetail
            position="BE in Computer Science & Engineering (Completed)"
            company="Engineering Academic Projects"
            companyLink="https://github.com/Saurav-Shelke"
            time="Graduated"
            address="Pune, India"
            work="Successfully completed Bachelor of Engineering in Computer Science and Engineering (BE CSE). Built strong engineering fundamentals in Database Management Systems (DBMS), Relational Database Design, SQL query optimization, Object-Oriented Programming, and Data Structures."
          />
          <ExperienceDetail
            position="Virtual Experience Participant"
            company="Accenture Data Analytics"
            companyLink="https://www.theforage.com"
            time="Completed"
            address="Remote"
            work="Completed real-world client simulation: cleaned, merged, and modeled 7 distinct datasets to extract engagement trends, identify top 5 content categories, and present data-backed recommendations."
          />
        </ul>
      </div>
    </div>
  );
};

const EducationDetail = ({ type, time, place, info }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm mt-2 dark:text-light/90">{info}</p>
      </div>
    </li>
  );
};

const Education = () => {
  return (
    <div className="my-48 md:my-32">
      <h2 className="font-bold text-8xl mb-24 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <div className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:left-4" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <EducationDetail
            type="Bachelor of Engineering in Computer Science and Engineering (BE CSE)"
            time="Completed"
            place="Savitribai Phule Pune University (SPPU)"
            info="Graduated with a strong academic foundation in Database Management Systems (DBMS), Data Structures & Algorithms, Object-Oriented Programming, and Applied Mathematics & Statistics."
          />
          <EducationDetail
            type="Data Analytics Specialization & Practical Learning"
            time="Currently Pursuing"
            place="Self-Directed & Online Specializations"
            info="Dedicated focus on practical Data Analysis: Advanced SQL (Window Functions, CTEs, Joins), Python for Data Analysis (Pandas, NumPy, Matplotlib, Seaborn), Advanced Excel, Power BI, and Tableau."
          />
        </ul>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <Head>
        <title>Saurav Shelke | About - Data Analyst</title>
        <meta
          name="description"
          content="About Saurav Shelke - BE CSE Graduate pursuing Data Analysis. Skilled in SQL, Python, Power BI, Tableau, and data storytelling."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Data Fuels Purpose & Impact!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m <strong>Saurav Shelke</strong>. Having completed my <strong>B.E. in Computer Science and Engineering (BE CSE)</strong>, I am currently pursuing <strong>Data Analysis</strong> with a focus on uncovering meaningful patterns and turning complex numbers into clear, actionable business strategies.
              </p>
              <p className="my-4 font-medium">
                My computer science engineering background provides a solid foundation in database management systems (DBMS), data structures, and algorithmic logic. I leverage these technical skills across the entire analytics lifecycle—from exploratory data analysis (EDA) and data wrangling to KPI tracking and business intelligence modeling.
              </p>
              <p className="font-medium">
                Currently, I am actively building end-to-end data analytics case studies using <strong>SQL</strong>, <strong>Python (Pandas, NumPy)</strong>, <strong>Power BI</strong>, and <strong>Tableau</strong>, dedicated to helping organizations make confident, data-driven decisions.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src="/images/profile/Untitled design.png"
                alt="Saurav Shelke"
                className="w-full h-auto rounded-2xl"
                priority
                width={433}
                height={576}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  1M+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Data Points Analyzed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  15+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Analytical Case Studies
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  10+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Interactive Dashboards
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
