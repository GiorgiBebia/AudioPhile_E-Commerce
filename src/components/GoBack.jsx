import { useNavigate } from "react-router-dom";

export function GoBack() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <div
      className="mt-[79px] tablet:mt-[33px] ml-[165px] tablet:ml-[40px]"
      onClick={handleClick}
    >
      <span className="font-manrope text-[15px] cursor-pointer hover:bg-[#D87D4A]">
        Go Back
      </span>
    </div>
  );
}
