import Image from "next/image";

export default function ShareButton() {
  return (
    <div>
      <Image alt="share icon" src="/share.png" width={20} height={20} />
    </div>
  );
}
