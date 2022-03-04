import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const sharedState = {
  coverLetter: `I am a Full-stack software engineer that is very 
  passionate about building products for the web that 
  solves real problems using Javascript.\n
  I write a lot of my APIs with NodeJs, Client
  applications using ReactJs prefferably with the 
  NextJs library.\n
  I am currently running a Software Development Studio
  Devstack, You can view some our works at
  devstack.ng.`,
  projects: [
    {
      name: "Pomodoro Timer",
      route: "/pomodoro",
      description: "Time your focus periods and short breaks",
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
