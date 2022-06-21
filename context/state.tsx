import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const sharedState = {
  coverLetter: `Nedu is a Full-stack software engineer that is very passionate about building products for the web, that solves real problems using javascript.\n He writes a lot of his web APIs with nodejs and client applications using reactjs prefferably with the nextjs library.\n He is currently part of the team that runs a software dev studio. You can view some devstack's works at`,
  projects: [
    {
      name: "Takyon - ",
      route: "https://takyon-frontend-staging.herokuapp.com/",
      description:
        "Leading the development of both the frontend dapp app in react and backend api in nodejs",
    },
    {
      name: "Qilo - ",
      route: "https://qilo.co/",
      description: "Software Engineering Advisor",
    },
    {
      name: "NOX - ",
      route: "https://www.joinnox.com/",
      description:
        "Supporting with the development of both the frontend web application and backend api in nodejs",
    },
    {
      name: "Mistho GMBH - ",
      route: "https://mistho.io/",
      description:
        "Core focus was on the backend in nodejs but also involved in some frontend tasks in react and reported to 2 principal engineers",
    },
    {
      name: "Newcraft - ",
      route: "https://www.ycombinator.com/companies/newcraft/",
      description:
        "Lead integrating and scraping external websites using ruby on rails api, frontend client web app in vuejs and reported to a principal engineer",
    },
    {
      name: "Show me love - personal - ",
      route: "/showmelove/profile",
      description: "Support nigerian creatives",
    },
    {
      name: "Pomodoro Timer - practice - ",
      route: "/pomodoro",
      description: "Time your focus periods and short breaks",
    },
  ],
};

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  const [bgColor, setBgColor] = useState("inherit");

  return (
    <AppContext.Provider
      value={{ sharedState, theme, setTheme, bgColor, setBgColor }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
