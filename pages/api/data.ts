// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import MyData from "./types/my_data";

const myJsonData: MyData = {
  fullName: "Chinedu Prince Abalogu",
  email: "chineduabalogu@yahoo.com",
  coverLetter: `I am a Full-stack software engineer that is very passionate about building products for the web that solves real problems using javascript, ruby and c++.
  I write a lot of APIs with nodejs and client applications using reactjs, prefferably with the nextjs framework. I run a software development studio with a couple of other 
  smart individuals and you can view some our works at`,
  projects: [
    {
      name: "Pomodoro Timer",
      url: "https://test.ng/",
    },
  ],
  images: [
    {
      identifier: "12",
      url: "https://test.io/",
    },
  ],
  resumeUrl: "https://test.co",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MyData>
) {
  res.status(200).json(myJsonData);
}
