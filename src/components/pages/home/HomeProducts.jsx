import { Link } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollToTop";

export function HomeProducts() {
  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] w-full flex flex-col gap-[48px] mt-[168px] mobile:mt-[120px] mx-auto">
      <div className="bg-[url('/img/zx9Speaker.png')] tablet:bg-[url('/img/tabletZX9Speaker.png')] mobile:bg-[url('/img/mobileZX9Speaker.png')] max-w-[1110px] tablet:max-w-[768px] mobile:max-w-[327px] w-full h-[560px] tablet:h-[720px] mobile:h-[600px] mobile:mx-auto">
        <div className="w-[349px] mobile:w-[280px] h-[303px] mobile:h-[251px] mt-[133px] tablet:mt-[353px] mobile:mt-[294px] ml-[666px] tablet:ml-[171px] mobile:ml-[23px] flex flex-col justify-between tablet:items-center">
          <h2 className="font-manrope text-[56px] mobile:text-[36px] tracking-[2px] mobile:tracking-[1.29px] text-white flex flex-col justify-between leading-[58px] tablet:text-center mobile:w-[230px]">
            ZX9 SPEAKER
          </h2>
          <p className="font-manrope text-[15px] w-[349px] mobile:w-[280px] h-[75px] text-gray-200 tablet:text-center">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/product/ZX9%20SPEAKER" onClick={scrollToTop}>
            <button className="w-[160px] h-[48px] bg-black text-[13px] text-white font-manrope font-bold hover:bg-[#4C4C4C]">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[url('/img/zx7Speaker.png')] tablet:bg-[url('/img/tabletZX7Speaker.png')] mobile:bg-[url('/img/mobileZX7Speaker.png')] max-w-[1110px] tablet:max-w-[689px] mobile:max-w-[327px] w-full h-[320px] mobile:h-[320px] mobile:mx-auto">
        <div className="w-[202px] h-[118px] pt-[101px] pl-[95px] mobile:pl-[24px]">
          <h2 className="font-manrope text-[28px] tracking-[2px] w-[202px]">
            ZX7 SPEAKER
          </h2>
          <Link to="/product/ZX7%20SPEAKER" onClick={scrollToTop}>
            <button className="border border-black w-[160px] h-[48px] font-manrope text-[13px] font-bold mt-[32px] hover:bg-black hover:text-white">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      <div className="flex gap-[30px] tablet:gap-[11px] mobile:gap-[24px] mobile:flex-col mobile:mx-auto mobile:w-[327px]">
        <img
          className="w-[540px] h-[320px] tablet:hidden"
          src="img/yx1Earphones.png"
          alt="YX1 Earphones"
        />
        <img
          className="w-[339px] h-[320px] hidden tablet:block mobile:hidden"
          src="img/tabletYX1Earphones.jpg"
          alt="YX1 Earphones"
        />
        <img
          className="w-[327px] h-[200px] hidden tablet:hidden mobile:block"
          src="img/mobileYX1Earphones.png"
          alt="YX1 Earphones"
        />

        <div className="w-[540px] tablet:w-[339px] mobile:w-[327px] h-[320px] mobile:h-[200px] bg-[#979797] tablet:bg-[#F1F1F1] rounded-[8px]">
          <div className="pt-[101px] mobile:pt-[41px] pl-[95px] tablet:pl-[41px] mobile:pl-[24px] tablet:w-[290px] tablet:h-[118px]">
            <h2 className="font-manrope text-[28px] font-bold tracking-[2px]">
              YX1 EARPHONES
            </h2>
            <Link
              to="/product/YX1%20WIRELESS%20EARPHONES"
              onClick={scrollToTop}
            >
              <button className="w-[160px] h-[48px] mt-[32px] border border-black hover:bg-black hover:text-white">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
