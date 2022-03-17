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
        link="https://docs.google.com/document/d/e/2PACX-1vT4kIHTKYdu0ThfKOCxaifR8lTxYRoh9JBWU5KaCBhiqmr37Qxx0I3l6bcWboVHA1Yeq8RRntShQtf4/pub"
      />
    </section>
  );
}
