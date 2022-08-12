import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ImageSlider() {
  return (
    <div className={`${styles["slider-container"]} ic-first`}>
      <Image
        alt="photo from instagram api"
        src="/newbgimg2.jpg"
        width={310}
        height={207}
      />
    </div>
  );
}
