import Header from "./header";
import Footer from "./footer";
import Body from "./body";

export default function ShowMeLove() {
  return (
    <div className="sml-home-container">
      <Header index={true} />
      <Body index={true} />
      <Footer index={true} />
    </div>
  );
}
