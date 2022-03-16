import ProfilePicture from "./profile-picture-box";
import ProjectLinks from "./project-links";
import Support from "./support";
import WebsiteLinkBox from "./website-link-box";

export default function Body() {
  return (
    <>
      <ProfilePicture />
      <span>Show Prince Nedu some love!</span>
      <Support />
      <WebsiteLinkBox />
      <ProjectLinks />
    </>
  );
}
