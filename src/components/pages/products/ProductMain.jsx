import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
  toggleCartState,
} from "../../../redux/cartSlice";
import { useEffect, useState } from "react";

export function ProductMain({ newItem }) {
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
      <div className="w-[445.5px] mobile:w-[327px] h-[407px] flex flex-col justify-between mt-[77px] tablet:mt-[45px] mobile:mt-[32px]">
        {newItem.isNew && (
          <span className="tracking-[10px] font-manrope text-[14px] text-[#D87D4A] mobile:mb-[24px]">
            NEW PRODUCT
          </span>
        )}
        <span className="font-manrope text-[40px] font-bold">
          {newItem.name}
        </span>
        <p className="font-manrope text-[15px] mobile:w-[327px] mobile:h-[125px] mobile:my-[24px]">
          {newItem.about}
        </p>
        <span className="font-manrope font-bold text-[18px] mobile:mb-[31px]">
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
