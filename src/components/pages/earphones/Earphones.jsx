import { Category } from "../../Category";
import { Footer } from "../../Footer";
import { HomeAbout } from "../../HomeAbout";
import { EarphonesHeader } from "./EarphonesHeader";
import { ZX9Speaker } from "./ZX9Speaker";

function Earphones() {
  return (
    <div>
      <EarphonesHeader />
      <ZX9Speaker />
      <Category />
      <HomeAbout />
      <Footer />
    </div>
  );
}

export default Earphones;
