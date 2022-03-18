import Image from "next/image";

export default function ShareButton() {
  return (
    <div className="share-btn-container">
      <Image alt="share icon" src="/share.png" width={20} height={20} />
    </div>
  );
}
