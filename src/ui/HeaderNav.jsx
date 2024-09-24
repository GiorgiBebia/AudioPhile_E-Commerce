import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { scrollToTop } from "./ScrollToTop";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
} from "./Cart/cartSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { Category } from "./Category";

export function HeaderNav() {
  const [openCart, setOpenCart] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const divRef = useRef(null);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  function toggleCart() {
    setOpenCart((open) => !open);
  }

  function toggleBurger() {
    setOpenBurger((open) => !open);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpenCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function emptyCart() {
    dispatch(clearCart());
  }

  const totalSum = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] mobile:max-w-[327px] w-full flex justify-between mx-auto pt-[32px] items-center ">
      <div className="flex gap-[42px] mobile:gap-[73px] items-center">
        <GiHamburgerMenu
          className="hidden tablet:block w-[25px] h-[25px] text-white"
          onClick={toggleBurger}
        />
        <Link to="/" onClick={scrollToTop}>
          <img src="img/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="w-[429px] h-[25px] flex justify-between items-center tablet:hidden">
        <Link
          className="text-white font-manrope font-bold text-[13px] tracking-[2px] hover:text-[#D87D4A]"
          to="/"
        >
          HOME
        </Link>
        <Link
          className="text-white font-manrope font-bold text-[13px] tracking-[2px] hover:text-[#D87D4A]"
          to="/headphones"
        >
          HEADPHONES
        </Link>
        <Link
          className="text-white font-manrope font-bold text-[13px] tracking-[2px] hover:text-[#D87D4A]"
          to="/speakers"
        >
          SPEAKERS
        </Link>
        <Link
          className="text-white font-manrope font-bold text-[13px] tracking-[2px] hover:text-[#D87D4A]"
          to="/earphones"
        >
          EARPHONES
        </Link>
      </div>
      <IoCartOutline
        className="text-white w-[25px] h-[25px]"
        onClick={toggleCart}
      />
      {openCart && (
        <div
          className="absolute w-[377px] mobile:w-[327px] bg-white top-[90px] tablet:top-[114px] left-[898px] tablet:left-[351px] mobile:left-[24px] rounded-[8px] shadow-2xl"
          ref={divRef}
        >
          {cart.length < 1 ? (
            <div className="font-manrope text-[30px] font-bold w-[200px] mx-auto m-5">
              Cart is Empty
            </div>
          ) : (
            <>
              <div className="flex justify-between w-[313px] mx-auto mt-[31px] mb-[32px]">
                <span className="font-manrope font-bold text-[18px] tracking-[1.29px]">
                  CART ({cart.length})
                </span>
                <span
                  className="font-manrope text-[15px] underline text-gray-500 hover:text-[#D87D4A] cursor-pointer"
                  onClick={emptyCart}
                >
                  Remove All
                </span>
              </div>
              {cart.map((item) => (
                <CartMiniBar key={item.name} item={item} />
              ))}
              <div className="flex justify-between w-[308px] mobile:w-[270px] mx-auto mt-[8px] mb-[24px]">
                <span className="font-manrope text-[15px]">TOTAL</span>
                <span>{totalSum} ₾</span>
              </div>
              <Link to="/checkout" onClick={scrollToTop}>
                <button className="w-[313px] mobile:w-[271px] h-[48px] bg-[#D87D4A] ml-[33px] mb-[31px] font-manrope font-bold text-[13px] tracking-[1px] text-white hover:bg-[#FBAF85]">
                  CHECKOUT
                </button>
              </Link>
            </>
          )}
        </div>
      )}
      {openBurger && (
        <div className="absolute w-[768px] mobile:w-[375px] h-[340px] mobile:h-[750px] bg-white top-[90px] left-0 rounded-b-[8px] shadow-2xl">
          <Category openBurger={openBurger} />
        </div>
      )}
    </div>
  );
}

function CartMiniBar({ item }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(
    cart.find((items) => items.name === item.name)?.quantity || 1
  );

  useEffect(() => {
    const currentItem = cart.find((items) => items.name === item.name);
    if (currentItem) {
      setQuantity(currentItem.quantity);
    }
  }, [cart, item.name]);

  function decrementQuantity() {
    if (quantity <= 1) {
      dispatch(removeCartItem(item));
    } else {
      setQuantity((q) => q - 1);
      dispatch(decreaseItemQuantity(item));
    }
  }

  function incrementQuantity() {
    setQuantity((q) => q + 1);

    dispatch(increaseItemQuantity(item));
  }

  return (
    <div className="mb-[24px] w-[313px] mobile:w-[271px] h-[64px] flex justify-between mx-auto items-center">
      <img
        className="w-[64px] h-[64px] rounded-[4px]"
        src={item.cartImg}
        alt={item.name}
      />
      <div className="w-[100px] h-[50px] flex flex-col justify-between">
        <span className="font-manrope font-bold text-[15px]">{item.name}</span>
        <span className="font-manrope text-[14px] text-gray-500">
          {item.price} ₾
        </span>
      </div>
      <div className="flex items-center w-[96px] h-[32px] bg-[#F1F1F1] ">
        <button
          className="rounded-full border-none w-[30px] h-[32px]  flex justify-center items-center"
          onClick={decrementQuantity}
          aria-label="Decrease Quantity"
        >
          ➖
        </button>
        <input
          className="w-[50px] h-[32px] text-center bg-[#F1F1F1]"
          type="number"
          name="quantityNumber"
          id={`quantity-${item.id}`}
          value={quantity}
          readOnly
        />
        <button
          className="rounded-full border-none w-[30px] h-[32px]  flex justify-center items-center"
          onClick={incrementQuantity}
          aria-label="Increase Quantity"
        >
          ➕
        </button>
      </div>
    </div>
  );
}
