import Image from "next/image";
import { useAppContext } from "../context/state";

export default function SocialMediaIcons() {
  const { theme }: any = useAppContext();

  return (
    <div className="smi-container">
      <Image
        alt="link to leetcode"
        src={`/${theme}/leetcode.svg`}
        width={38.1}
        height={40}
      />
      <Image
        alt="link to instagram"
        src={`/${theme}/instagram.svg`}
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
    </div>
  );
}
