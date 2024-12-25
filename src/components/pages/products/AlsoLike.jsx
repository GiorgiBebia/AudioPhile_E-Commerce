import { useState } from "react";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { miniProducts } from "../../../data/miniProducts";
import { AlsoLikeItems } from "./AlsoLikeItems";

export function AlsoLike({ item }) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = miniProducts.filter(
    (miniItem) => miniItem.name !== item.name
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(miniProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="max-w-[1110px] tablet:max-w-[691px] mobile:max-w-[327px] w-full mx-auto flex flex-col gap-[64px] mt-[160px] mobile:mt-[120px] mobile:h-[983px]">
      <div className="max-w-[1110px] tablet:max-w-[691px] mobile:max-w-[327px] w-full mx-auto flex justify-between mobile:items-center">
        <div
          className="w-[46px] h-[46px] bg-[#D9DBE9] rounded-full flex items-center justify-center"
          style={{
            cursor: currentPage > 1 ? "pointer" : "not-allowed",
          }}
          onClick={
            currentPage > 1
              ? () => handlePageChange(currentPage - 1)
              : undefined
          }
        >
          <MdOutlineArrowBack className="w-[34px] h-[34px]" />
        </div>
        <h2 className="font-manrope text-[32px] mobile:text-[22px] font-bold tracking-[1.14px]">
          YOU MAY ALSO LIKE
        </h2>
        <div
          className="w-[46px] h-[46px] bg-[#D9DBE9] rounded-full flex items-center justify-center"
          style={{
            cursor: currentPage < totalPages ? "pointer" : "not-allowed",
          }}
          onClick={
            currentPage < totalPages
              ? () => handlePageChange(currentPage + 1)
              : undefined
          }
        >
          <MdOutlineArrowForward className="w-[34px] h-[34px]" />
        </div>
      </div>

      <div className="max-w-[1110px] tablet:max-w-[691px] w-full mx-auto flex gap-[30px] items-center justify-center mobile:flex-col">
        {currentItems.map((item) => (
          <AlsoLikeItems item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}
