import Image from "next/image";
import { useAppContext } from "../context/state";

export default function SocialMediaIcons() {
  const { theme }: any = useAppContext();

  return (
    <>
      <Image
        alt="link to leetcode"
        src={`/${theme}/leetcode.svg`}
        width={38.1}
        height={40}
      />
      <Image
        alt="link to medium"
        src={`/${theme}/medium.svg`}
        width={38.1}
        height={40}
      />
      <Image
        alt="link to github"
        src={`/${theme}/github.svg`}
        width={38.1}
        height={40}
      />
      <Image
        alt="link to twitter"
        src={`/${theme}/twitter.svg`}
        width={38.1}
        height={40}
      />
      <Image
        alt="link to linkedin"
        src={`/${theme}/linkedin.svg`}
        width={38.1}
        height={40}
      />
      <Image
        alt="link to mail"
        src={`/${theme}/mail.svg`}
        width={38.1}
        height={40}
      />
    </>
  );
}
