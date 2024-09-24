import { Link } from "react-router-dom";
import { scrollToTop } from "../../ScrollToTop";

export function XX99Mark1() {
  const name = "XX99 MARK I HEADPHONES";
  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] mobile:w-[327px] w-full h-[560px] tablet:h-[689px] mobile:h-[681px] mx-auto mt-[160px] tablet:mt-[120px] flex tablet:flex-col">
      <img
        className="hidden tablet:block mobile:hidden"
        src="img/tabletXX99Mark1.png"
        alt="XX99 Mark I"
      />
      <img
        className="hidden tablet:hidden mobile:block"
        src="img/mobileXX99Mark1.png"
        alt="XX99 Mark I"
      />

      <div className="mt-[126px] tablet:mt-[52px] mobile:mt-[32px] mr-[125px] tablet:mx-auto w-[445px] tablet:w-[572px] mobile:w-[327px] h-[308px] tablet:h-[267px] mobile:h-[297px] flex flex-col justify-between tablet:items-center">
        <h2 className="font-manrope font-bold text-[40px] mobile:text-[28px] tablet:text-center tablet:w-[270px]">
          {name}
        </h2>
        <p className="font-manrope text-[15px] text-gray-500 tablet:text-center">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <Link to={`/product/${name}`} onClick={scrollToTop}>
          <button className="w-[160px] h-[48px] bg-[#D87D4A] text-white hover:bg-[#FBAF85]">
            SEE PRODUCT
          </button>
        </Link>
      </div>

      <img
        className="tablet:hidden"
        src="img/xx99Mark1.png"
        alt="XX99 Mark I"
      />
    </div>
  );
}
