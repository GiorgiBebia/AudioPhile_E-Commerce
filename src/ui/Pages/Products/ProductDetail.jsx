import { useLocation } from "react-router-dom";
import { miniProducts } from "../../../data/miniProducts";
import { products } from "../../../data/products";
import { HeaderNav } from "../../HeaderNav";
import { useEffect, useState } from "react";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { Category } from "../../Category";
import { HomeAbout } from "../../HomeAbout";
import { Footer } from "../../Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
  toggleCartState,
} from "../../Cart/cartSlice";
import { GoBack } from "../../GoBack";

function ProductDetail() {
  const arr = [...products, ...miniProducts];
  const location = useLocation();
  const link = location.pathname.split("/");
  link.shift();
  link.shift();
  const newLink = link[0].split("%20").join(" ");
  const item = arr.find((item) => item.name === newLink);

  return (
    <div>
      <ProductHeader />
      <GoBack />
      <ProductMain newItem={item} />
      <FeaturesInTheBox newItem={item} />
      <ImageDiv newItem={item} />
      <AlsoLike item={item} />
      <Category />
      <HomeAbout />
      <Footer />
    </div>
  );
}

export default ProductDetail;

function ProductHeader() {
  return (
    <div className="bg-black max-w-[1440px] w-full h-[97px]">
      <HeaderNav />
    </div>
  );
}

function ProductMain({ newItem }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [addToCart, setAddToCart] = useState(false);
  const checkAddToCartItem = useSelector((state) => state.cart.cart || []);

  const [quantity, setQuantity] = useState(
    cart.find((items) => items.name === newItem.name)?.quantity || 1
  );

  useEffect(() => {
    const currentItem = cart.find((item) => item.name === newItem.cartName);

    if (currentItem) {
      setQuantity(currentItem.quantity);
    }
  }, [cart, newItem.cartName, newItem.name]);

  function decrementQuantity() {
    if (quantity <= 1) {
      dispatch(removeCartItem(newItem));
    } else {
      dispatch(decreaseItemQuantity(newItem));
      setQuantity((q) => q - 1);
    }
  }

  function incrementQuantity() {
    setQuantity((q) => q + 1);

    dispatch(increaseItemQuantity(newItem));
  }

  function addToCartItem() {
    const item = {
      name: newItem.cartName,
      img: newItem.firstImg,
      price: newItem.price,
      quantity,
      totalPrice: newItem.price * quantity,
      cartImg: newItem.cartImg,
    };

    addToCart
      ? dispatch(removeCartItem(newItem))
      : dispatch(toggleCartState(item));
  }

  useEffect(() => {
    const clickAddToCart = checkAddToCartItem.some(
      (item) => item.name === newItem.cartName
    );
    setAddToCart(clickAddToCart);
  }, [checkAddToCartItem, newItem.cartName, addToCart]);

  return (
    <div className="max-w-[1110px] tablet:max-w-[690px] mobile:max-w-[327px] w-full h-[560px] tablet:h-[480px] mobile:h-[755px] mt-[56px] tablet:mt-[24px] mx-auto flex gap-[124.5px] tablet:gap-[69px] mobile:gap-[32px] mobile:flex-col">
      <img
        className="tablet:hidden"
        src={newItem.firstImg}
        alt={newItem.name}
      />
      <img
        className="hidden tablet:block mobile:hidden"
        src={newItem.tabletImg}
        alt={newItem.name}
      />
      <img
        className="hidden tablet:hidden mobile:block w-[327px] h-[327px]"
        src={newItem.mobileImg}
        alt={newItem.name}
      />
      <div className="w-[445.5px] mobile:w-[327px] h-[407px]  flex flex-col justify-between">
        {newItem.isNew && (
          <span className="tracking-[10px] font-manrope text-[14px] text-[#D87D4A]">
            NEW PRODUCT
          </span>
        )}
        <span className="font-manrope text-[40px] font-bold">
          {newItem.name}
        </span>
        <p className="font-manrope text-[15px] mobile:w-[327px] mobile:h-[125px]">
          {newItem.about}
        </p>
        <span className="font-manrope font-bold text-[18px]">
          {newItem.price} ₾
        </span>
        <div className="flex gap-4 mobile:w-[327px]">
          <div className="flex items-center w-[120px] h-[48px] bg-[#F1F1F1] ">
            <button
              className="rounded-full border-none w-[30px] h-[30px] flex justify-center items-center"
              onClick={decrementQuantity}
              aria-label="Decrease Quantity"
            >
              ➖
            </button>
            <input
              className="w-[72px] h-[44px] text-center bg-[#F1F1F1]"
              type="number"
              name="quantityNumber"
              id={`quantity-${newItem.id}`}
              value={quantity}
              readOnly
            />
            <button
              className="rounded-full border-none w-[30px] h-[30px] flex justify-center items-center"
              onClick={incrementQuantity}
              aria-label="Increase Quantity"
            >
              ➕
            </button>
          </div>
          <button
            className="w-[160px] h-[48px] bg-[#D87D4A] text-white font-manrope font-bold text-[13px] tracking-[1px] hover:bg-[#FBAF85]"
            onClick={addToCartItem}
          >
            {!addToCart ? `ADD TO CART` : `REMOVE FROM CART`}
          </button>
        </div>
      </div>
    </div>
  );
}

function FeaturesInTheBox({ newItem }) {
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

function BoxItems({ item }) {
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

function ImageDiv({ newItem }) {
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

function AlsoLike({ item }) {
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

function AlsoLikeItems({ item }) {
  return (
    <div className="w-[350px] mobile:w-[327px] h-[471px] mobile:h-[265px] flex flex-col justify-between">
      <img className="tablet:hidden" src={item.img} alt={item.name} />
      <img
        className="hidden tablet:block mobile:hidden"
        src={item.tabletImg}
        alt={item.name}
      />
      <img
        className="hidden tablet:hidden mobile:block"
        src={item.mobileImg}
        alt={item.name}
      />
      <span className="text-center font-manrope font-bold mobile:text-[24px]">
        {item.name}
      </span>
      <button className="w-[160px] h-[48px] bg-[#D87D4A] text-[13px] font-manrope text-white mx-auto hover:bg-[#FBAF85]">
        SEE PRODUCT
      </button>
    </div>
  );
}
