export function BoxItems({ item }) {
  return (
    <div className="mb-2 flex gap-6">
      <span className="font-manrope font-bold text-[15px] text-[#D87D4A] w-[18px] h-[25px]">
        {item.quantity}x
      </span>
      <span className="font-manrope text-[15px] text-gray-500">
        {item.name}
      </span>
    </div>
  );
}
