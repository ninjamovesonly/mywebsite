import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ImageSlider() {
  return (
    <div className={styles["slider-container"]}>
      <Image
        alt="photo from instagram api"
        src="/img-mobile.png"
        width={347.81}
        height={182.95}
      />
    </div>
  );
}
