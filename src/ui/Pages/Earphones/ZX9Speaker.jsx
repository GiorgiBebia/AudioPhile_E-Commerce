import { Link } from "react-router-dom";
import { scrollToTop } from "../../ScrollToTop";

export function ZX9Speaker() {
  const name = "YX1 WIRELESS EARPHONES";
  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] mobile:max-w-[327px] w-full h-[560px] tablet:h-[706px] mobile:h-[724px] mx-auto mt-[160px] tablet:mt-[120px] flex tablet:flex-col">
      <img
        className="tablet:hidden"
        src="img/yx1WirelessEarphones.png"
        alt="YX1 Wireless Earphones"
      />

      <img
        className="hidden tablet:block mobile:hidden"
        src="img/tabletYX1Wireless.png"
        alt="YX1 Wireless Earphones"
      />
      <img
        className="hidden tablet:hidden mobile:block"
        src="img/mobileYX1Wireless.png"
        alt="YX1 Wireless Earphones"
      />

      <div className="mt-[109px] tablet:mt-[52px] mobile:mt-[32px] ml-[125px] tablet:mx-auto w-[445px] tablet:w-[572px] mobile:w-[327px] h-[343px] tablet:h-[302px] mobile:h-[340px] flex flex-col justify-between tablet:items-center">
        <span className="font-manrope text-[14px] text-[#D87D4A] tracking-[10px]">
          NEW PRODUCT
        </span>
        <h2 className="font-manrope font-bold text-[40px] mobile:text-[28px] tablet:text-center tablet:w-[275px]">
          {name}
        </h2>
        <p className="font-manrope text-[15px] text-gray-500 tablet:text-center">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <Link to={`/product/${name}`} onClick={scrollToTop}>
          <button className="w-[160px] h-[48px] bg-[#D87D4A] text-white hover:bg-[#FBAF85]">
            SEE PRODUCT
          </button>
        </Link>
      </div>
    </div>
  );
}
