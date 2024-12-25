import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

export function Footer() {
  return (
    <div className="mt-[200px] tablet:mt-[96px] tablet:max-w-[768px] mobile:max-w-[375px] w-full h-[365px] tablet:h-[400px] mobile:h-[654px] bg-black ">
      <div className="max-w-[1110px] tablet:max-w-[689px] w-full flex flex-col mx-auto">
        <div className="w-[101px] h-1 bg-[#D87D4A] mobile:mx-auto"></div>
        <div className="w-[1110px] tablet:w-[429px] mobile:w-[143px] flex justify-between mt-[71px] tablet:mt-[56px] mobile:mt-[48px] tablet:h-[82px] mobile:h-[221px] tablet:flex-col mobile:items-center mobile:mx-auto mobile:justify-normal mobile:gap-[48px]">
          <Link to="/" onClick={scrollToTop}>
            <img className="w-[143px] h-[25px]" src="img/logo.png" alt="Logo" />
          </Link>
          <div className="max-w-[427px] mobile:max-w-[108px] w-full h-[25px] mobile:h-[148px] flex justify-between items-center mobile:flex-col">
            <Link
              className="text-white font-manrope text-[13px] tracking-[2px] hover:text-[#D87D4A]"
              to="/"
              onClick={scrollToTop}
            >
              HOME
            </Link>
            <Link
              className="text-white font-manrope text-[13px] tracking-[2px] hover:text-[#D87D4A]"
              to="/headphones"
              onClick={scrollToTop}
            >
              HEADPHONES
            </Link>
            <Link
              className="text-white font-manrope text-[13px] tracking-[2px] hover:text-[#D87D4A]"
              to="/speakers"
              onClick={scrollToTop}
            >
              SPEAKERS
            </Link>
            <Link
              className="text-white font-manrope text-[13px] tracking-[2px] hover:text-[#D87D4A]"
              to="/earphones"
              onClick={scrollToTop}
            >
              EARPHONES
            </Link>
          </div>
        </div>
        <p className="w-[540px] tablet:w-[687px] mobile:w-[327px] h-[100px] tablet:h-[75px] mobile:h-[150px] font-manrope text-[15px] text-gray-500 mt-[36px] tablet:mt-[32px] mobile:mt-[48px] mobile:mx-auto mobile:text-center">
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>
        <div className="w-[1110px] tablet:w-[689px] mobile:w-[258px] flex justify-between mt-[56px] tablet:mt-[80px] mobile:mt-[48px] mobile:mx-auto mobile:flex-col mobile:text-center mobile:items-center mobile:gap-[20px]">
          <span className="font-manrope text-[15px] text-gray-500">
            Copyright 2024. All Rights Reserved. Giorgi Bebia
          </span>
          <div className="w-[104px] h-[24px] flex justify-between">
            <ImFacebook2 className="text-white w-[24px] h-[24px] hover:text-[#D87D4A]" />
            <FaXTwitter className="text-white w-[24px] h-[24px] hover:text-[#D87D4A]" />
            <LuInstagram className="text-white w-[24px] h-[24px] hover:text-[#D87D4A]" />
          </div>
        </div>
      </div>
    </div>
  );
}
