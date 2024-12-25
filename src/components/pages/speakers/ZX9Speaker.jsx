import { Link } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollToTop";

export function ZX9Speaker() {
  const name = "ZX9 SPEAKER";
  const splitedName = name.split(" ");
  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] mobile:max-w-[327px] w-full h-[560px] tablet:h-[706px] mobile:h-[724px] mx-auto mt-[160px] tablet:mt-[120px] mobile:mt-[64px] flex tablet:flex-col ">
      <img
        className="tablet:hidden"
        src="img/zx9SpeakerSpeakers.png"
        alt="ZX9 Speaker"
      />

      <img
        className="hidden tablet:block mobile:hidden"
        src="img/tabletZX9SpeakerSpeakers.png"
        alt="ZX9 Speaker"
      />
      <img
        className="hidden tablet:hidden mobile:block"
        src="img/mobileZX9SpeakerSpeakers.png"
        alt="ZX9 Speaker"
      />

      <div className="mt-[109px] tablet:mt-[52px] mobile:mt-[32px] ml-[125px] tablet:mx-auto w-[445px] tablet:w-[572px] mobile:w-[327px] h-[343px] tablet:h-[302px] mobile:h-[340px] flex flex-col justify-between tablet:items-center">
        <span className="font-manrope text-[14px] text-[#D87D4A] tracking-[10px]">
          NEW PRODUCT
        </span>
        <h2 className="font-manrope font-bold text-[40px] mobile:text-[28px] tablet:text-center">
          {splitedName[0]} <br /> {splitedName[1]}
        </h2>
        <p className="font-manrope text-[15px] text-gray-500 tablet:text-center">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity --
          creating new possibilities for more pleasing and practical audio
          setups.
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
