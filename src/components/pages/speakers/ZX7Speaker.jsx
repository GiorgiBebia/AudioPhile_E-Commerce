import { Link } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollToTop";

export function ZX7Speaker() {
  const name = "ZX7 SPEAKER";
  const splitedName = name.split(" ");
  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] mobile:max-w-[327px] w-full h-[560px] tablet:h-[671px] mobile:h-[681px] mx-auto mt-[160px] tablet:mt-[120px] flex tablet:flex-col">
      <img
        className="hidden tablet:block mobile:hidden"
        src="img/tabletZX7SpeakerSpeakers.png"
        alt="ZX7 SPEAKER"
      />
      <img
        className="hidden tablet:hidden mobile:block"
        src="img/mobileZX7SpeakerSpeakers.png"
        alt="ZX7 SPEAKER"
      />

      <div className="mt-[126px] tablet:mt-[52px] mobile:mt-[32px] mr-[125px] tablet:mx-auto w-[445px] tablet:w-[572px] mobile:w-[327px] h-[308px] tablet:h-[267px] mobile:h-[297px] flex flex-col justify-between tablet:items-center">
        <h2 className="font-manrope font-bold text-[40px] mobile:text-[28px] tablet:text-center">
          {splitedName[0]} <br /> {splitedName[1]}
        </h2>
        <p className="font-manrope text-[15px] text-gray-500 tablet:text-center">
          Stream high quality sound wirelessly with minimal loss. The ZX7
          bookshelf speaker uses high-end audiophile components that represents
          the top of the line powered speakers for home or studio use.
        </p>
        <Link to={`/product/${name}`} onClick={scrollToTop}>
          <button className="w-[160px] h-[48px] bg-[#D87D4A] text-white hover:bg-[#FBAF85]">
            SEE PRODUCT
          </button>
        </Link>
      </div>

      <img
        className="tablet:hidden"
        src="img/zx7SpeakerSpeakers.png"
        alt="ZX7 SPEAKER"
      />
    </div>
  );
}
