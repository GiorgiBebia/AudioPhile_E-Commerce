import { Category } from "../../Category";
import { Footer } from "../../Footer";
import { HomeAbout } from "../../HomeAbout";
import { HeadphoneHeader } from "./HeadphoneHeader";
import { XX99Mark2 } from "./XX99Mark2";
import { XX99Mark1 } from "./XX99Mark1";
import { XX59Headphones } from "./XX59Headphones";

function Headphones() {
  return (
    <div>
      <HeadphoneHeader />
      <XX99Mark2 />
      <XX99Mark1 />
      <XX59Headphones />
      <Category />
      <HomeAbout />
      <Footer />
    </div>
  );
}

export default Headphones;
