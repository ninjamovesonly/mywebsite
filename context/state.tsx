import { createContext, useContext, useState } from 'react';

const AppContext = createContext<any>({});

const sharedState = {
  coverLetter: `Nedu is a Full-stack software engineer that is very passionate about building products for the web, that solves real problems using javascript.\n He writes a lot of his web APIs with nodejs and client applications using reactjs prefferrably with the nextjs library.\n He is currently part of the team that runs a software dev studio. You can view some devstack's works at`,
  projects: [
    {
      name: 'Show me love - personal - ',
      route: '/showmelove/profile',
      description: 'Support nigerian creatives',
      details: {
        jobTitle: 'Personal Project',
        companyName: 'ShowMeLove',
        from: 'Jun 2022',
        to: 'Present',
        months: '2 months',
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
        months: '1 month',
        jobDescription:
          'Supporting with the development of both the frontend web application and backend api in nodejs',
        screenshots: [],
      },
    },
    {
      name: 'Takyon - ',
      route: 'https://takyon-frontend-staging.herokuapp.com/',
      description:
        'Lead the development of both the frontend dapp app in react and backend api in nodejs',
      details: {
        jobTitle: 'Software Developer',
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
      route: 'http://devstack.ng/',
      description: 'Creative Director',
      details: {
        jobTitle: 'Creative Director',
        companyName: 'Devstack',
        from: 'Jan 2021',
        to: 'Present',
        months: '2 years',
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
        jobTitle: 'Full-stack developer',
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
  ],
};

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  return (
    <AppContext.Provider value={{ sharedState, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
