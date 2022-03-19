import { SmlHeaderProps } from "../../types/show-me-love";
import ProfileHeader from "./profile/header";

function HomeHeader() {
  return (
    <div className="sml-header-container">
      <span className="sml-logo-span">
        Show<b>Me</b>Love
      </span>
      <span
        className="theidea-span"
        onClick={() =>
          window
            .open(
              "https://docs.google.com/document/d/e/2PACX-1vSoDqG_HoTHfDnAo1YmwAms9yvnJ7cvHxkE5s94_dGiIT88Ma8y9gfBBxtcKKmrF7v_nHJ0QPuwfKpK/pub",
              "_blank"
            )
            ?.focus()
        }
      >
        <u>
          the <b>idea</b>
        </u>
      </span>
    </div>
  );
}

export default function Header({ index }: SmlHeaderProps) {
  return index ? <HomeHeader /> : <ProfileHeader />;
}
