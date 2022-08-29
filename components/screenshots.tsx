import Image from 'next/image';

type ScreenshotsProps = {
  screenshots: string[];
};

export default function Screenshots({ screenshots }: ScreenshotsProps) {
  return (
    <div className="horizontal-scroller tw-w-full tw-overflow-auto tw-whitespace-nowrap tw-mb-[6rem] lg:tw-mb-0">
      {screenshots.map((screenshot, index) => (
        <Image
          key={index}
          src={screenshot}
          alt="screenshot image"
          width="300px"
          height="160px"
          className="tw-inline-block"
        />
      ))}
    </div>
  );
}
