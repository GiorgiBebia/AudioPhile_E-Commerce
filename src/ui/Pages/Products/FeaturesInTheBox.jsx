import { BoxItems } from "./BoxItems";

export function FeaturesInTheBox({ newItem }) {
  return (
    <div className="max-w-[1110px] tablet:max-w-[690px] mobile:max-w-[327px] w-full h-[318px] tablet:h-[690px] mobile:h-[840px] mt-[160px] tablet:mt-[120px] mobile:mt-[88px] mx-auto flex justify-between tablet:flex-col">
      <div className="w-[635px] mobile:w-[327px]">
        <h2 className="font-manrope font-bold text-[32px] tracking-[1.14px]">
          FEATURES
        </h2>
        <p className="max-w-[635px] mobile:max-w-[327px] w-full h-[250px] mobile:h-[475px] mt-[32px] font-manrope text-[15px] text-gray-500">
          {newItem.features}
        </p>
      </div>

      <div className="w-[350px] mobile:w-[327px] tablet:flex tablet:w-[549px] tablet:justify-between mobile:flex-col">
        <h2 className="font-manrope font-bold text-[32px] tracking-[1.14px] mb-[32px]">
          IN THE BOX
        </h2>
        <div>
          {newItem.inTheBox.map((item) => (
            <BoxItems item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
