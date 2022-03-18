import ProfilePicture from "./profile/profile-picture-box";
import Support from "./profile/support";
import WebsiteLinkBox from "./profile/website-link-box";

export default function Body() {
  return (
    <div className="sml-body-container">
      <ProfilePicture />
      <p>Nedu Prince</p>

      <hr />
      <div className="sml-body-layout">
        <div className="sbl-first">
          <span>
            Show <u>Prince Nedu</u> some <b>love!</b>
          </span>
          <Support />
        </div>
        <div className="sbl-second">
          <WebsiteLinkBox />
        </div>
      </div>
    </div>
  );
}
