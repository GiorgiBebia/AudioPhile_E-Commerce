import { HeaderLine } from "../../HeaderLine";
import { HeaderNav } from "../../HeaderNav";

export function HeadphoneHeader() {
  return (
    <div className="w-full h-[336px] bg-black">
      <HeaderNav />
      <HeaderLine />
      <h1 className="font-manrope text-[40px] tracking-[1.43px] text-white w-[283px] mx-auto mt-[98px] font-bold">
        HEADPHONES
      </h1>
    </div>
  );
}
