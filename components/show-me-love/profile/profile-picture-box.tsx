import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div className="sml-profilepicture-box">
      <Image
        className="sml-profilepicture"
        alt="profile picture"
        src="/chinedu-pp.jpg"
        width={100}
        height={110}
      />
    </div>
  );
}
