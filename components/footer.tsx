import HomeLinkIcon from "./home-link-icon";
import SocialMediaIcons from "./social-media-icons";

export default function Footer({ page }: { page: string }) {
  return (
    <>
      {page === "home" && <SocialMediaIcons />}
      {page === "others" && <HomeLinkIcon />}
    </>
  );
}
