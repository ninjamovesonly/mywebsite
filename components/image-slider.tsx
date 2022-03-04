import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ImageSlider() {
  return (
    <div className={styles["slider-container"]}>
      <Image
        alt="photo from instagram api"
        src="/img-mobile.png"
        width="100%"
        height="100%"
        objectFit="contain"
      />
    </div>
  );
}
