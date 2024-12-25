import { HeaderLine } from "../../../components/HeaderLine";
import { HeaderNav } from "../../../components/HeaderNav";

export function SpeakersHeader() {
  return (
    <div className="w-full h-[336px] bg-black">
      <HeaderNav />
      <HeaderLine />
      <h1 className="font-manrope text-[40px] tracking-[1.43px] text-white w-[215px] mx-auto mt-[98px] font-bold">
        SPEAKERS
      </h1>
    </div>
  );
}
