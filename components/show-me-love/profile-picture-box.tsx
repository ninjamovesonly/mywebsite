import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div>
      <Image
        alt="profile picture"
        src="/chinedu-pp.jpg"
        width={100}
        height={100}
      />
    </div>
  );
}
