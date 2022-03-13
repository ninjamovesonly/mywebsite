import ImageSlider from "./image-slider";
import CoverLetter from "./cover-letter";
import Projects from "./projects";
import Button from "./button";

export default function Body() {
  return (
    <section>
      <div className="image-coverletter-container">
        <ImageSlider />
        <CoverLetter />
      </div>
      <Projects />
      <Button label="resume / cv" />
    </section>
  );
}
