import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollToTop";

export function AlsoLikeItems({ item }) {
  const a = encodeURIComponent(item.newlink);

  const navigate = useNavigate();

  return (
    <div className="w-[350px] mobile:w-[327px] h-[471px] mobile:h-[265px] flex flex-col justify-between">
      <img className="tablet:hidden" src={item.img} alt={item.name} />
      <img
        className="hidden tablet:block mobile:hidden"
        src={item.tabletImg}
        alt={item.name}
      />
      <img
        className="hidden tablet:hidden mobile:block"
        src={item.mobileImg}
        alt={item.name}
      />
      <span className="text-center font-manrope font-bold mobile:text-[24px]">
        {item.name}
      </span>

      <button
        className="w-[160px] h-[48px] bg-[#D87D4A] text-[13px] font-manrope text-white mx-auto hover:bg-[#FBAF85]"
        onClick={() => {
          navigate(`/product/${a}`);
          scrollToTop();
        }}
      >
        SEE PRODUCT
      </button>
    </div>
  );
}
