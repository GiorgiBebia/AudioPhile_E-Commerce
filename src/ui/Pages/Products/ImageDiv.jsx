export function ImageDiv({ newItem }) {
  newItem.secondImg = "img/xx99Mark2Second.png";
  newItem.thirdImg = "img/xx99Mark2Third.png";
  newItem.fourImg = "img/xx99Mark2Four.png";
  return (
    <div className="flex gap-[32px] max-w-[1110px] tablet:max-w-[690px] mobile:max-w-[327px] w-full mt-[160px] tablet:mt-[120px] mobile:mt-[88px] mx-auto mobile:flex mobile:flex-col">
      <div className="flex flex-col gap-[32px]">
        <img
          className="tablet:w-[277px] mobile:w-[327px]"
          src={newItem.secondImg}
          alt={newItem.name}
        />
        <img
          className="tablet:w-[277px] mobile:w-[327px]"
          src={newItem.thirdImg}
          alt={newItem.name}
        />
      </div>
      <img
        className="tablet:w-[395px] mobile:w-[327px]"
        src={newItem.fourImg}
        alt={newItem.name}
      />
    </div>
  );
}
