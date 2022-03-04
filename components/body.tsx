import ImageSlider from "./image-slider";
import styles from "../styles/Home.module.css";
import CoverLetter from "./cover-letter";
import Projects from "./projects";
import Button from "./button";

export default function Body() {
  return (
    <section>
      <ImageSlider />
      <CoverLetter />
      <Projects />
      <Button label="resume / cv" />
    </section>
  );
}
