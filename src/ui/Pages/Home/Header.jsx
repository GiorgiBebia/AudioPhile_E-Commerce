import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import { HeaderLine } from "../../HeaderLine";
import { HeaderNav } from "../../HeaderNav";
import { scrollToTop } from "../../ScrollToTop";

export function Header() {
  const name = products[0].name;
  return (
    <div className="max-w-[1440px] w-full h-[729px] bg-[url('/img/headerBackground.png')] tablet:bg-[url('/img/tabletHeaderBackground.png')] mobile:bg-[url('/img/mobileHeaderBackground.png')] bg-black">
      <HeaderNav />

      <HeaderLine />

      <div className="flex flex-col justify-between w-[398px] tablet:w-[379px] mobile:w-[328px] h-[346px] mobile:h-[290px] mt-[128px] tablet:mt-[126px] mobile:mt-[108px] ml-[165px] tablet:ml-[194px] mobile:ml-[23px] tablet:items-center">
        <h3 className="w-[210px] h-[19px] font-manrope text-[14px] tracking-[10px] text-gray-600">
          NEW PRODUCT
        </h3>
        <h2 className="w-[396px] mobile:w-[328px] font-manrope text-[56px] mobile:text-[36px] tracking-[2px] mobile:tracking-[1.29px] text-white font-bold tablet:text-center">
          {name}
        </h2>
        <p className="w-[349px] tablet:w-[328px] h-[75px] font-manrope text-[15px] text-gray-300 tablet:text-center">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to={`/product/${name}`} onClick={scrollToTop}>
          <button className="w-[160px] h-[48px] bg-[#D87D4A] border-none font-manrope text-white text-[13px] tracking-[1px] font-bold hover:bg-[#FBAF85]">
            SEE PRODUCT
          </button>
        </Link>
      </div>
    </div>
  );
}
