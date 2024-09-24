import { Category } from "../../Category";
import { Footer } from "../../Footer";
import { HomeAbout } from "../../HomeAbout";
import { ZX7Speaker } from "./ZX7Speaker";
import { SpeakersHeader } from "./SpeakersHeader";
import { ZX9Speaker } from "./ZX9Speaker";

function Speakers() {
  return (
    <div>
      <SpeakersHeader />
      <ZX9Speaker />
      <ZX7Speaker />
      <Category />
      <HomeAbout />
      <Footer />
    </div>
  );
}

export default Speakers;
