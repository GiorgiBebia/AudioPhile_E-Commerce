import { useDispatch, useSelector } from "react-redux";
import { GoBack } from "../../GoBack";
import { Footer } from "../../Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { clearCart } from "../../../redux/cartSlice";
import { CheckoutCartIsEmpty } from "./CheckoutCartIsEmpty";
import { CheckoutHeader } from "./CheckoutHeader";
import { CheckoutMain } from "./CheckoutMain";

function Checkout() {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const { cart } = useSelector((state) => state.cart);
  const totalSum = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const SHIPPING_PRICE = 50;
  const vat = (totalSum * 0.2).toFixed(0);
  const grandTotal = Number(totalSum) + Number(SHIPPING_PRICE) + Number(vat);

  const dispatch = useDispatch();

  function goHomeAfterCheckout() {
    setOrderConfirmed(false);
    dispatch(clearCart());
  }

  return (
    <div className={orderConfirmed ? "bg-[#979797] relative" : "bg-[#F1F1F1] "}>
      <CheckoutHeader />
      <div className={orderConfirmed ? "blur-md" : ""}>
        <GoBack />
        {cart.length < 1 ? (
          <CheckoutCartIsEmpty />
        ) : (
          <CheckoutMain setOrderConfirmed={setOrderConfirmed} />
        )}
      </div>
      <Footer />

      {orderConfirmed && (
        <div className="w-[540px] mobile:w-[327px] h-[581px] mobile:h-[645px] absolute bg-white top-[350px] mobile:top-[224px] left-[450px] tablet:left-[114px] mobile:left-[24px] z-10 rounded-[8px] pl-[48px] mobile:pl-[32px]">
          <img
            className="mt-[48px] mobile:mt-[32px]"
            src="img/confirm.png"
            alt="Confirm Image"
          />
          <h2 className="font-manrope font-bold text-[32px] mobile:text-[24px] tracking-[1.14px] mobile:tracking-[0.86px] w-[290px] h-[85px] mt-[33px]">
            THANK YOU <br /> FOR YOUR ORDER
          </h2>
          <p className="mt-[24px] font-manrope text-[15px] text-gray-500">
            You will receive an email confirmation shortly.
          </p>
          <div className="w-[444px] mobile:w-[263px] h-[140px] mobile:h-[232px] flex rounded-[8px] mt-[33px] overflow-hidden mobile:flex-col">
            <div className="w-[246px] mobile:w-[263px] h-[140px] bg-[#F1F1F1] flex flex-col items-center">
              <div className="w-[246px] h-[85px] p-[24px] flex justify-between">
                <img
                  className="w-[50px] h-[50px]"
                  src={cart[0].cartImg}
                  alt={cart[0].name}
                />
                <div className="w-[100px] h-[50px] flex flex-col justify-between">
                  <span className="font-manrope font-bold text-[15px]">
                    {cart[0].name}
                  </span>
                  <span className="font-manrope text-[14px] text-gray-500">
                    {cart[0].price} ₾
                  </span>
                </div>
                <span className="font-manrope font-bold text-[15px] text-gray-500">
                  x{cart[0].quantity}
                </span>
              </div>
              <div className="w-[198px] h-[1px] bg-[#979797] mx-auto mb-[14px]"></div>
              {cart.length > 1 && (
                <span className="font-manrope font-bold text-[12px] text-gray-500">
                  and {cart.length - 1} other item(s)
                </span>
              )}
            </div>
            <div className="w-[198px] mobile:w-[263px] h-[140px] mobile:h-[92px] bg-black">
              <h3 className="text-gray-500 mt-[41px] mobile:mt-[15px] ml-[32px] font-manrope text-[15px]">
                GRAND TOTAL
              </h3>
              <span className="text-white mt-[8px] ml-[33px] font-manrope text-[18px] font-bold inline-block">
                {grandTotal} ₾
              </span>
            </div>
          </div>
          <Link to="/" onClick={goHomeAfterCheckout}>
            <button className="w-[444px] mobile:w-[263px] h-[48px] bg-[#D87D4A] text-white font-manrope font-bold text-[13px] tracking-[1px] mt-[61px] mobile:mt-[23px]  hover:border-[#FBAF85] mobile:roudned-[8px]">
              BACK TO HOME
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
