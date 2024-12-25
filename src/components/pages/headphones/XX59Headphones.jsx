import { Link } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollToTop";

export function XX59Headphones() {
  const name = "XX59 HEADPHONES";
  const splitedName = name.split(" ");
  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] mobile:w-[327px] w-full h-[560px] tablet:h-[671px] mobile:h-[681px] mx-auto mt-[160px] tablet:mt-[120px] flex tablet:flex-col tablet:items-center">
      <img
        className="tablet:hidden"
        src="img/xx59Headphones.png"
        alt="XX59 Headphones"
      />

      <img
        className="hidden tablet:block mobile:hidden"
        src="img/tabletXX59Headphones.png"
        alt="XX59 Headphones"
      />
      <img
        className="hidden tablet:hidden mobile:block"
        src="img/mobileXX59Headphones.png"
        alt="XX59 Headphones"
      />

      <div className="mt-[109px] tablet:mt-[52px] mobile:mt-[32px] ml-[125px] tablet:ml-0 target:mx-auto w-[445px] tablet:w-[572px] mobile:w-[327px] h-[308px] tablet:h-[267px] mobile:h-[297px] flex flex-col justify-between tablet:items-center">
        <h2 className="font-manrope font-bold text-[40px] mobile:text-[28px] tablet:text-center">
          {splitedName[0]} <br /> {splitedName[1]}
        </h2>
        <p className="font-manrope text-[15px] text-gray-500 tablet:text-center">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
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
