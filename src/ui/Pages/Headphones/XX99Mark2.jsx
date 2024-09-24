import { Link } from "react-router-dom";
import { scrollToTop } from "../../ScrollToTop";

export function XX99Mark2() {
  const name = `XX99 MARK II HEADPHONES`;

  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] mobile:max-w-[327px] w-full h-[560px] tablet:h-[706px] mobile:h-[724px] mx-auto mt-[160px] tablet:mt-[120px] mobile:mt-[64px] flex tablet:flex-col tablet:gap-[52px] mobile:gap-[32px]">
      <img
        className="tablet:hidden"
        src="img/xx99Mark2.png"
        alt="XX99 Mark II"
      />
      <img
        className="hidden tablet:block mobile:hidden"
        src="img/tabletXX99Mark2.png"
        alt="XX99 Mark II"
      />
      <img
        className="hidden tablet:hidden mobile:block"
        src="img/mobileXX99Mark2.png"
        alt="XX99 Mark II"
      />

      <div className="mt-[109px] tablet:mt-0 ml-[125px] w-[445px] tablet:w-[572px] mobile:w-[327px] h-[343px] tablet:h-[302px] mobile:h-[340px] flex flex-col justify-between tablet:mx-auto">
        <span className="font-manrope text-[14px] text-[#D87D4A] tracking-[10px] tablet:text-center">
          NEW PRODUCT
        </span>
        <h2 className="font-manrope font-bold text-[40px] mobile:text-[28px] tablet:text-center tablet:w-[275px] self-center">
          {name}
        </h2>
        <p className="font-manrope text-[15px] text-gray-500 tablet:text-center">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Link
          className="tablet:text-center"
          to={`/product/${name}`}
          onClick={scrollToTop}
        >
          <button className="w-[160px] h-[48px] bg-[#D87D4A] text-white hover:bg-[#FBAF85]">
            SEE PRODUCT
          </button>
        </Link>
      </div>
    </div>
  );
}
