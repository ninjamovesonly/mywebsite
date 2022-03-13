import HeaderContainer from "./header";
import BodyContainer from "./body";
import FooterContainer from "./footer";

export default function Home() {
  const page = "home";

  return (
    <div className="home-container">
      <HeaderContainer />
      <BodyContainer />
      <FooterContainer page={page} />
    </div>
  );
}
