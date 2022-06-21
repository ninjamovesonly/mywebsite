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
      <Button
        label="resume / cv"
        link="https://drive.google.com/file/d/13wkMe0JRYpnXpIEhSsQPZmVNNemQTR33/view?usp=sharing"
      />
    </section>
  );
}
