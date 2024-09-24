import { HeaderLine } from "../../HeaderLine";
import { HeaderNav } from "../../HeaderNav";

export function SpeakersHeader() {
  return (
    <div className="max-w-[1440px] w-full h-[336px] bg-black">
      <HeaderNav />
      <HeaderLine />
      <h1 className="font-manrope text-[40px] tracking-[1.43px] text-white w-[215px] mx-auto mt-[98px] font-bold">
        SPEAKERS
      </h1>
    </div>
  );
}
