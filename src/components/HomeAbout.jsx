export function HomeAbout() {
  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] mobile:max-w-[327px] w-full h-[588px] tablet:h-[633px] mobile:h-[698px] mx-auto mt-[200px] mobile:mt-[120px] flex gap-[125px] tablet:gap-[63px] mobile:gap-[40px] tablet:flex-col">
      <img
        className="w-[689px] h-[300px] hidden tablet:block mobile:hidden"
        src="img/tabletManPhoto.png"
        alt="Man Photo"
      />
      <img
        className="w-[689px] h-[300px] hidden tablet:hidden mobile:block"
        src="img/mobileManPhoto.png"
        alt="Man Photo"
      />
      <div className="w-[445px] tablet:w-[573px] mobile:w-[327px] h-[295px] tablet:h-[270px] mobile:h-[358px] pt-[147px] tablet:pt-0 tablet:mx-auto">
        <h2 className="font-manrope text-[40px] mobile:text-[28px] tracking-[1.43px] mobile:tracking-[1px] font-bold tablet:text-center">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="font-manrope text-[15px] mt-[32px] tablet:text-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        className="w-[540px] h-[588px] tablet:hidden"
        src="img/manPhoto.png"
        alt="Man Photo"
      />
    </div>
  );
}
