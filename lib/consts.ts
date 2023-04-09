import { monthDifference } from './util';

export const THEME_COLORS = {
  light: 'light',
  dark: 'dark',
};

export const POMODORO_TIME_STATUS = {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  IDLE: 'IDLE',
};

export const POMODORO_TIME_LABELS = {
  START_TO_FOCUS: 'Start to Focus',
  STOP: 'Stop',
  CONTINUE: 'Continue',
  PAUSE: 'Pause',
};

export const DEFAULT_TIME_INTERVAL = 1000;

export const SECONDS = 1000;
export const MINUTES = SECONDS * 60;
export const HOUR = MINUTES * 60;

export const PROJECTS = {
  coverLetter: `Nedu is a Full-stack software engineer that is very passionate about building products for the web, that solves real problems using javascript.\n He writes a lot of his web APIs with nodejs and client applications using reactjs prefferrably with the nextjs library.\n He is currently part of the team that runs a software dev studio. You can view some devstack's works at`,
  projects: [
    {
      name: 'Show me love - personal - ',
      route: 'https://www.showmelove.ng/',
      description: 'Support nigerian creatives',
      details: {
        jobTitle: 'Personal Project',
        companyName: 'ShowMeLove',
        from: 'Jun 2022',
        to: 'Present',
        months: `${monthDifference(new Date(2022, 5), new Date())} months`,
        jobDescription: 'Personal project',
        screenshots: [],
      },
    },
    {
      name: 'Artizan - ',
      route: 'https://www.artizan.app/',
      description:
        'On-demand digital plaform for skilled/handy workers, professionals, traders etc in Nigeria',
      details: {
        jobTitle: 'Co-Founder & Lead Engineer',
        companyName: 'Artizan',
        from: 'Aug 2022',
        to: 'Present',
        months: `${monthDifference(new Date(2022, 7), new Date())} months`,
        jobDescription: 'Personal project',
        screenshots: [],
      },
    },
    {
      name: 'NOX - ',
      route: 'https://nox-web.vercel.app/',
      description:
        'Supporting with the development of both the frontend web application and backend api in nodejs',
      details: {
        jobTitle: 'Software Engineer',
        companyName: 'Nox',
        from: 'Aug 2022',
        to: 'Present',
        months: `${monthDifference(new Date(2022, 5), new Date())} months`,
        jobDescription:
          'Supporting with the development of both the frontend web application and backend api in nodejs',
        screenshots: [],
      },
    },
    {
      name: 'Takyon - ',
      route: 'https://www.takyon.io/',
      description:
        'Lead the development of both the frontend dapp app in react and backend api in nodejs',
      details: {
        jobTitle: 'Software Developer - Contract',
        companyName: 'Takyon',
        from: 'Apr 2022',
        to: 'Aug 2022',
        months: '5 months',
        jobDescription:
          'Lead the development team of 3 Engineers for both the frontend react dapp client app and backend node api using a mongodb database',
        screenshots: [],
      },
    },
    {
      name: 'Devstack - ',
      route: 'https://devstack-dev.github.io/',
      description: 'Creative Director',
      details: {
        jobTitle: 'Creative Director',
        companyName: 'Devstack',
        from: 'Jan 2021',
        to: 'Present',
        months: `${monthDifference(new Date(2021, 0), new Date())} months`,
        jobDescription:
          'Devstack is a Software development Studio with a diverse team of product managers, mobile application developers, Financial experts, Full stack principal engineers and ui-ux designers.',
        screenshots: [],
      },
    },
    {
      name: 'Mistho GMBH - ',
      route: 'https://mistho.io/',
      description:
        'Core focus was on the backend in nodejs but also involved in some frontend tasks in react and reported to 2 principal engineers',
      details: {
        jobTitle: 'Full-stack developer - Contract',
        companyName: 'Mistho GMBH',
        from: 'Jun 2021',
        to: 'Dec 2021',
        months: '7 months',
        jobDescription:
          'Worked alongside 2 principal Engineers I reported to where I engineered a scraper service using node to collect user’s payroll data from payroll provider’s website, structuring, persisting user’s salary data and making it available to be consumed via a rest json api',
        screenshots: [
          'https://chineduabaloguswebsite.s3.eu-west-2.amazonaws.com/mistho-1.svg',
        ],
      },
    },
    {
      name: 'Newcraft - ',
      route: 'https://www.ycombinator.com/companies/newcraft/',
      description:
        'Lead integrating and scraping external websites using ruby on rails api, frontend client web app in vuejs and reported to a principal engineer',
      details: {
        jobTitle: 'Integrations Lead',
        companyName: 'Newcraft',
        from: 'May 2019',
        to: 'Feb 2021',
        months: '2 years',
        jobDescription:
          'Worked alongside 2 principal Engineers I reported to where I engineered a scraper service using node to collect user’s payroll data from payroll provider’s website, structuring, persisting user’s salary data and making it available to be consumed via a rest json api',
        screenshots: [],
      },
    },
    {
      name: 'NNPC HMO - ',
      route: 'https://nnpchmo.com/',
      description:
        'Developed and managed internal resource web applications for business processes and website',
      details: {
        jobTitle: 'Software Engineering - IT Executive',
        companyName: 'NNPC HMO',
        from: 'Sept 2015',
        to: 'Dec 2019',
        months: '4 years',
        jobDescription:
          'Developed and managed internal resource web applications for business processes and website',
        screenshots: [],
      },
    },
    {
      name: 'On Deck - ',
      route: 'https://ondeck-react.vercel.app/',
      description: 'Feature prototype figma design conversion to react',
      details: {
        jobTitle: 'React Dev',
        companyName: 'On Deck',
        from: 'Prototype',
        to: 'Prototype',
        months: 'Prototype',
        jobDescription: 'Feature prototype figma design conversion to react',
        screenshots: [],
      },
    },
    {
      name: 'Pomodoro Timer - practice - ',
      route: '/pomodoro',
      description: 'Time your focus periods and short breaks',
      details: {
        jobTitle: 'Practice',
        companyName: 'Practice',
        from: 'null',
        to: 'null',
        months: 'null',
        jobDescription: 'null',
        screenshots: [],
      },
    },
    {
      name: 'Benny Hotel - ',
      route: 'https://www.bennyhotel.ng/',
      description: 'Bed and Breakfast',
      details: {
        jobTitle: 'Director',
        companyName: 'Benny Hotel',
        from: 'From date of incorporation',
        to: 'Present',
        months: 'Years',
        jobDescription: 'Family business',
        screenshots: [],
      },
    },
    {
      name: 'Filterland - ',
      route: 'https://filterland.ng/',
      description:
        'Sole manufacturers of Oil, Gas and Air filters in West Africa',
      details: {
        jobTitle: 'Director',
        companyName: 'Filerland Industries',
        from: 'From date of incorporation',
        to: 'Present',
        months: 'Years',
        jobDescription: 'Family business',
        screenshots: [],
      },
    },
  ],
};
