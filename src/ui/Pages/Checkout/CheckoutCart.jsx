export function CheckoutCart({ item }) {
  return (
    <div className="w-[284px] tablet:w-[623px] mobile:w-[279px] h-[64px] mb-[24px] flex justify-between">
      <img
        className="w-[64px] h-[64px] rounded-[8px]"
        src={item.cartImg}
        alt={item.name}
      />
      <div className="w-[100px] h-[50px] flex flex-col justify-between">
        <span className="font-manrope font-bold text-[15px]">{item.name}</span>
        <span className="font-manrope text-[14px] text-gray-500">
          {item.price} ₾
        </span>
      </div>
      <span className="font-manrope font-bold text-[15px] text-gray-500">
        x{item.quantity}
      </span>
    </div>
  );
}
