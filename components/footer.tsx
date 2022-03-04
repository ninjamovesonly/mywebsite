import SocialMediaIcons from "./social-media-icons";

export default function Footer({ page }) {
  return (
    <>
      {page === "home" && <SocialMediaIcons />}
      {/* {page === "others" && <SocialMediaIcons />} */}
    </>
  );
}
