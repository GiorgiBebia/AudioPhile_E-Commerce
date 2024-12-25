import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

export function Category({ openBurger }) {
  return (
    <div
      className={
        openBurger
          ? "max-w-[1110px] tablet:max-w-[689px] w-full h-[204px] mobile:h-[683px] mx-auto mt-[100px] flex gap-[30px] mobile:flex-col mobile:items-center mobile:gap-[70px]"
          : "max-w-[1110px] tablet:max-w-[689px] w-full h-[204px] mobile:h-[635px] mx-auto mt-[200px] mobile:mt-[120px] flex gap-[30px] mobile:gap-[70px] mobile:flex-col mobile:items-center"
      }
    >
      <div className="w-[350px] tablet:w-[223px] mobile:w-[327px] h-[204px] tablet:h-[165px] bg-[#f1f1f1] relative rounded-[8px]">
        <img
          className="absolute top-[-80px] tablet:top-[-52px] left-[113px] tablet:left-[73px] mobile:left-[124px] tablet:w-[80px]"
          src="img/headphones.png"
          alt="Headphones"
        />
        <span className="top-[116px] tablet:top-[88px] left-[108px] tablet:left-[58px] mobile:left-[109px] absolute font-manrope font-bold text-[18px] tablet:text-[15px] tracking-[1.29px] tablet:tracking-[1.07px]">
          HEADPHONES
        </span>
        <Link to="/headphones" onClick={scrollToTop}>
          <div className="flex top-[156px] tablet:top-[125px] left-[141px] tablet:left-[83px] mobile:left-[135px] absolute items-center gap-[13px]">
            <span className="font-manrope text-[13px] tracking-[1px] hover:text-[#D87D4A]">
              SHOP
            </span>
            <IoIosArrowForward className="text-[#D87D4A]" />
          </div>
        </Link>
      </div>

      <div className="w-[350px] tablet:w-[223px] mobile:w-[327px] h-[204px] tablet:h-[165px] bg-[#f1f1f1] relative rounded-[8px]">
        <img
          className="absolute top-[-80px] tablet:top-[-52px] left-[113px] tablet:left-[69px] mobile:left-[121px] tablet:w-[80px]"
          src="img/speakers.png"
          alt="Speakers"
        />
        <span className="top-[116px] tablet:top-[88px] left-[108px] tablet:left-[70px] mobile:left-[122px] absolute font-manrope font-bold text-[18px] tablet:text-[15px] tracking-[1.29px] tablet:tracking-[1.07px]">
          SPEAKERS
        </span>
        <Link to="/speakers" onClick={scrollToTop}>
          <div className="flex top-[156px] tablet:top-[125px] left-[141px] tablet:left-[83px] mobile:left-[135px] absolute items-center gap-[13px]">
            <span className="font-manrope text-[13px] tracking-[1px] hover:text-[#D87D4A]">
              SHOP
            </span>
            <IoIosArrowForward className="text-[#D87D4A]" />
          </div>
        </Link>
      </div>

      <div className="w-[350px] tablet:w-[223px] mobile:w-[327px] h-[204px] tablet:h-[165px] bg-[#f1f1f1] relative rounded-[8px]">
        <img
          className="absolute top-[-80px] tablet:top-[-52px] left-[113px] tablet:left-[57px] mobile:left-[112px] tablet:w-[103px]"
          src="img/earphones.png"
          alt="Earphones"
        />
        <span className="top-[116px] tablet:top-[88px] left-[108px] tablet:left-[64px] mobile:left-[115px] absolute font-manrope font-bold text-[18px] tablet:text-[15px] tracking-[1.29px] tablet:tracking-[1.07px]">
          EARPHONES
        </span>
        <Link to="/earphones" onClick={scrollToTop}>
          <div className="flex top-[156px] tablet:top-[125px] left-[141px] tablet:left-[83px] mobile:left-[135px] absolute items-center gap-[13px]">
            <span className="font-manrope text-[13px] tracking-[1px] hover:text-[#D87D4A]">
              SHOP
            </span>
            <IoIosArrowForward className="text-[#D87D4A]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
