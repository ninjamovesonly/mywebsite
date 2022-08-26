import Image from 'next/image';

export default function Screenshots() {
  return (
    <div>
      <Image
        src="https://chineduabaloguswebsite.s3.eu-west-2.amazonaws.com/mistho-1.svg"
        alt="screenshot image"
        width="300px"
        height="160px"
        className="tw-inline-block"
      />
      <Image
        src="https://chineduabaloguswebsite.s3.eu-west-2.amazonaws.com/mistho-1.svg"
        alt="screenshot image"
        width="300px"
        height="160px"
        className="tw-inline-block"
      />
    </div>
  );
}
