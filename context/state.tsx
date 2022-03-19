import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const sharedState = {
  coverLetter: `Nedu is a Full-stack software engineer that is very passionate about building products for the web, that solves real problems using javascript.\n He write a lot of his web APIs with nodejs and client applications using reactjs prefferably with the nextjs library.\n He is currently part of the team that runs a software dev studio. You can view some devstack's works at`,
  projects: [
    {
      name: "Pomodoro Timer - ",
      route: "/pomodoro",
      description: "Time your focus periods and short breaks",
    },
    {
      name: "Show me love - ",
      route: "/showmelove/profile",
      description: "Support nigerian creatives",
    },
  ],
};

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider value={{ sharedState, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
