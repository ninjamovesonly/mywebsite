export default interface MyData {
  fullName: String;
  coverLetter: String;
  email: String;
  projects: [
    {
      name: String;
      url: String;
    }
  ];
  images: [
    {
      identifier: String;
      url: String;
    }
  ];
  resumeUrl: String;
}
