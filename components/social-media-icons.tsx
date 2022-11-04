import Image from 'next/image';
import { useAppContext } from '../context/state';

export default function SocialMediaIcons() {
  const { theme } = useAppContext();

  return (
    <div className="smi-container">
      <Image
        alt="link to instagram"
        src={`/${theme}/instagram.svg`}
        width={38.1}
        height={40}
        onClick={() => {
          window
            .open('https://www.instagram.com/mrabalogu', '_blank', 'noopener')
            ?.focus();
        }}
        className="tw-cursor-pointer"
      />
      <Image
        alt="link to github"
        src={`/${theme}/github.svg`}
        width={38.1}
        height={40}
        onClick={() => {
          window
            .open('https://github.com/ninjamovesonly', '_blank', 'noopener')
            ?.focus();
        }}
        className="tw-cursor-pointer"
      />
      <Image
        alt="link to twitter"
        src={`/${theme}/twitter.svg`}
        width={38.1}
        height={40}
        onClick={() => {
          window
            .open('https://twitter.com/MrAbalogu_', '_blank', 'noopener')
            ?.focus();
        }}
        className="tw-cursor-pointer"
      />
      <Image
        alt="link to linkedin"
        src={`/${theme}/linkedin.svg`}
        width={38.1}
        height={40}
        onClick={() => {
          window
            .open(
              'https://www.linkedin.com/in/chineduabalogu',
              '_blank',
              'noopener'
            )
            ?.focus();
        }}
        className="tw-cursor-pointer"
      />
      <Image
        alt="link to mail"
        src={`/${theme}/mail.svg`}
        width={38.1}
        height={40}
        onClick={() =>
          (window.location.href = 'mailto:chineduabalogu@gmail.com')
        }
        className="tw-cursor-pointer"
      />
    </div>
  );
}
