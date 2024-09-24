import { useDispatch, useSelector } from "react-redux";
import { GoBack } from "../../GoBack";
import { HeaderNav } from "../../HeaderNav";
import { Footer } from "../../Footer";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { clearCart } from "../../Cart/cartSlice";

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

function CheckoutCartIsEmpty() {
  return (
    <div className="w-[240px] h-[50px] text-[36px] font-manrope font-bold text-center mx-auto mt-[200px]">
      Cart is Empty
    </div>
  );
}

function CheckoutHeader() {
  return (
    <div className="bg-black max-w-[1440px] w-full h-[97px]">
      <HeaderNav />
    </div>
  );
}

function CheckoutMain({ setOrderConfirmed }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [emoneyNumber, setEmoneyNumber] = useState("");
  const [emoneyPin, setEmoneyPin] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorEmoneyNumber, setErrorEmoneyNumber] = useState(false);
  const [errorEmoneyPin, setErrorEmoneyPin] = useState(false);

  const [paymentEmoney, setPaymentEmoney] = useState(true);

  const { cart } = useSelector((state) => state.cart);
  const totalSum = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const SHIPPING_PRICE = 50;
  const vat = (totalSum * 0.2).toFixed(0);
  const grandTotal = Number(totalSum) + Number(SHIPPING_PRICE) + Number(vat);

  // useEffect(() => {
  //   if (paymentEmoney) {
  //     console.log(`trueeeeeeeeeeee`);
  //     setErrorEmoneyNumber(true);
  //     setErrorEmoneyPin(true);
  //   } else {
  //     console.log(`falseeeeeee`);
  //     setErrorEmoneyNumber(false);
  //     setErrorEmoneyPin(false);
  //   }
  // }, [paymentEmoney]);

  function handleSubmitPay() {
    const newErrorName = name.trim().length === 0;
    const newErrorEmail = !email.includes("@");
    const newErrorPhoneNumber = phoneNumber.trim().length !== 9;
    const newErrorAddress = address.trim().length === 0;
    const newErrorEmoneyNumber =
      paymentEmoney && emoneyNumber.trim().length !== 9;
    const newErrorEmoneyPin = paymentEmoney && emoneyPin.trim().length !== 4;

    setErrorName(newErrorName);
    setErrorEmail(newErrorEmail);
    setErrorPhoneNumber(newErrorPhoneNumber);
    setErrorAddress(newErrorAddress);
    setErrorEmoneyNumber(newErrorEmoneyNumber);
    setErrorEmoneyPin(newErrorEmoneyPin);

    if (
      !newErrorName &&
      !newErrorEmail &&
      !newErrorPhoneNumber &&
      !newErrorAddress &&
      !newErrorEmoneyNumber &&
      !newErrorEmoneyPin
    ) {
      setOrderConfirmed(true);
    }
  }

  return (
    <div className="max-w-[1110px] tablet:max-w-[689px] w-full h-[1126px] tablet:h-[1805px] mx-auto mt-[38px] flex gap-[30px] tablet:flex-col">
      <div className="w-[730px] tablet:w-[689px] mobile:w-[327px] h-[1126px] tablet:h-[1084px] mobile:h-[1378px] bg-white flex flex-col justify-evenly pl-[48px] tablet:pl-[27.5px] mobile:pl-[24px] rounded-[8px] mobile:mx-auto mobile:pt-[24px] mobile:pb-[30px]">
        <h2 className="font-manrope text-[32px] mobile:text-[28px] font-bold tracking-[1.14px] tablet:mt-[20px] mobile:tracking-[1px]">
          CHECKOUT
        </h2>

        <div className="flex flex-col gap-[24px] mobile:w-[280px] mobile:h-[332px] mobile:flex-col tablet:mt-[20px] mobile:mt-[32px]">
          <span className="font-manrope font-bold text-[13px] tracking-[0.93px] text-[#D98D4A]">
            BILLING DETAILS
          </span>
          <div className="flex gap-[16px] mobile:flex-col">
            <div className="flex flex-col gap-[9px]">
              <div className="flex justify-between">
                <label
                  className="font-manrope font-bold text-[12px]"
                  htmlFor="fullName"
                >
                  Name
                </label>
                {errorName && (
                  <span className="text-red-500 font-manrope font-bold text-[12px]">
                    Enter Name
                  </span>
                )}
              </div>
              <input
                className={`w-[309px] mobile:w-[280px] h-[56px] border ${
                  errorName ? "border-red-500" : "border-[#CFCFCF]"
                }  rounded-[8px] placeholder:font-manrope placeholder:font-bold placeholder:pl-[24px] hover:border-[#D87D4A]`}
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Alexei Ward"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[9px]">
              <div className="flex justify-between">
                <label
                  className="font-manrope font-bold text-[12px]"
                  htmlFor="email"
                >
                  Email Address
                </label>
                {errorEmail && (
                  <span className="text-red-500 font-manrope font-bold text-[12px]">
                    Enter Correct Email
                  </span>
                )}
              </div>
              <input
                className={`w-[309px] mobile:w-[280px] h-[56px] border ${
                  errorEmail ? "border-red-500" : "border-[#CFCFCF]"
                }  rounded-[8px] placeholder:font-manrope placeholder:font-bold placeholder:pl-[24px] hover:border-[#D87D4A]`}
                type="email"
                name="email"
                id="email"
                placeholder="alexei@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[9px]">
            <div className="flex gap-[105px] mobile:gap-[73px]">
              <label
                className="font-manrope font-bold text-[12px]"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              {errorPhoneNumber && (
                <span className="text-red-500 font-manrope font-bold text-[12px]">
                  Enter Phone Number
                </span>
              )}
            </div>
            <input
              className={`w-[309px] mobile:w-[280px] h-[56px] border  ${
                errorPhoneNumber ? "border-red-500" : "border-[#CFCFCF]"
              } rounded-[8px] placeholder:font-manrope placeholder:font-bold placeholder:pl-[24px] hover:border-[#D87D4A]`}
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="+1 202-555-0136"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[24px] mobile:w-[280px] mobile:h-[437px] tablet:mt-[20px] mobile:mt-[32px]">
          <span className="font-manrope font-bold text-[13px] text-[#D87D4A] tracking-[0.93px]">
            SHIPPING INFO
          </span>
          <div className="flex flex-col gap-[9px]">
            <div className="flex gap-[505px] mobile:gap-[150px]">
              <label
                className="font-manrope font-bold text-[12px]"
                htmlFor="address"
              >
                Address
              </label>
              {errorAddress && (
                <span className="text-red-500 font-manrope font-bold text-[12px]">
                  Enter Address
                </span>
              )}
            </div>
            <input
              className={`w-[634px] mobile:w-[280px] h-[56px] border ${
                errorAddress ? "border-red-500" : "border-[#CFCFCF]"
              } rounded-[8px] placeholder:font-manrope placeholder:font-bold placeholder:pl-[24px] hover:border-[#D87D4A]`}
              type="text"
              name="address"
              id="address"
              placeholder="1137 Williams Avenue"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex gap-[16px] mobile:flex-col">
            <div className="flex flex-col gap-[9px]">
              <label
                className="font-manrope font-bold text-[12px]"
                htmlFor="zipCode"
              >
                ZIP Code
              </label>
              <input
                className="w-[309px] mobile:w-[280px] h-[56px] border border-[#CFCFCF] rounded-[8px] placeholder:font-manrope placeholder:font-bold placeholder:pl-[24px] hover:border-[#D87D4A]"
                type="number"
                name="zipCode"
                id="zipCode"
                placeholder="10001"
              />
            </div>
            <div className="flex flex-col gap-[9px]">
              <label
                className="font-manrope font-bold text-[12px]"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="w-[309px] mobile:w-[280px] h-[56px] border border-[#CFCFCF] rounded-[8px] placeholder:font-manrope placeholder:font-bold placeholder:pl-[24px] hover:border-[#D87D4A]"
                type="text"
                name="city"
                id="city"
                placeholder="New York"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[9px]">
            <label
              className="font-manrope font-bold text-[12px]"
              htmlFor="country"
            >
              Country
            </label>
            <input
              className="w-[309px] mobile:w-[280px] h-[56px] border border-[#CFCFCF] rounded-[8px] placeholder:font-manrope placeholder:font-bold placeholder:pl-[24px] hover:border-[#D87D4A]"
              type="text"
              name="country"
              id="country"
              placeholder="United States"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[24px] mobile:w-[280px] mobile:h-[420px] tablet:mt-[20px] mobile:mt-[32px]">
          <span className="font-manrope font-bold text-[13px] text-[#D87D4A] tracking-[0.93px]">
            PAYMENT DETAILS
          </span>

          <div className="flex gap-[229px] mobile:gap-[16px] mobile:flex-col">
            <div>
              <label
                className="font-manrope font-bold text-[12px]"
                htmlFor="payment"
              >
                Payment Method
              </label>
            </div>
            <div className="w-[309px] mobile:w-[280px] h-[128px] flex flex-col gap-[16px]">
              <div className="w-[309px] mobile:w-[280px] h-[56px] border border-[#CFCFCF] rounded-[8px] p-4 flex items-center hover:border-[#D87D4A]">
                <input
                  className="w-[20px] h-[20px]"
                  type="radio"
                  name="payment"
                  id="emoney"
                  defaultChecked
                  onChange={() => setPaymentEmoney(true)}
                />
                <label
                  className="font-manrope font-bold text-[14px] ml-[16px]"
                  htmlFor="emoney"
                >
                  e-Money
                </label>
              </div>
              <div className="w-[309px] mobile:w-[280px] h-[56px] border border-[#CFCFCF] rounded-[8px] p-4 flex items-center hover:border-[#D87D4A]">
                <input
                  className="w-[20px] h-[20px]"
                  type="radio"
                  name="payment"
                  id="cash"
                  onChange={() => setPaymentEmoney(false)}
                />
                <label
                  className="font-manrope font-bold text-[14px] ml-[16px]"
                  htmlFor="cash"
                >
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-[16px] tablet:mb-[20px] mobile:flex-col">
            <div className="flex flex-col gap-[9px]">
              <div className="flex justify-between">
                <label
                  className="font-manrope font-bold text-[12px]"
                  htmlFor="emoneynumber"
                >
                  e-Money Number
                </label>
                {errorEmoneyNumber && (
                  <span className="text-red-500 font-manrope font-bold text-[12px]">
                    Enter e-Money Number
                  </span>
                )}
              </div>
              <input
                className={`w-[309px] mobile:w-[280px] h-[56px] border ${
                  errorEmoneyNumber ? "border-red-500" : "border-[#CFCFCF]"
                } rounded-[8px] placeholder:font-manrope placeholder:font-bold placeholder:pl-[24px] hover:border-[#D87D4A]`}
                type="number"
                name="emoneynumber"
                id="emoneynumber"
                placeholder="238521993"
                value={emoneyNumber}
                onChange={(e) => setEmoneyNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[9px]">
              <div className="flex justify-between">
                <label
                  className="font-manrope font-bold text-[12px]"
                  htmlFor="emoneypin"
                >
                  e-Money PIN
                </label>
                {errorEmoneyPin && (
                  <span className="text-red-500 font-manrope font-bold text-[12px]">
                    Enter e-Money PIN
                  </span>
                )}
              </div>
              <input
                className={`w-[309px] mobile:w-[280px] h-[56px] border ${
                  errorEmoneyPin ? "border-red-500" : "border-[#CFCFCF]"
                } rounded-[8px] placeholder:font-manrope placeholder:font-bold placeholder:pl-[24px] hover:border-[#D87D4A]`}
                type="number"
                name="emoneypin"
                id="emoneypin"
                placeholder="6891"
                value={emoneyPin}
                onChange={(e) => setEmoneyPin(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[350px] tablet:w-[689px] mobile:w-[327px] mobile:h-[612px] tablet:h-[100%] bg-white rounded-[8px] pl-[33px] overflow-auto mobile:mx-auto">
        <h2 className="font-manrope font-bold text-[18px] tracking-[1.29px] my-[32px]">
          SUMMARY
        </h2>

        {cart.map((item) => (
          <CheckoutCart key={item.name} item={item} />
        ))}

        <div>
          <div className="w-[284px] tablet:w-[623px] mobile:w-[279px] h-[25px] mb-[8px] flex justify-between">
            <span className="font-manrope text-[15px] text-gray-500">
              TOTAL
            </span>
            <span className="font-manrope text-[18px] font-bold">
              {totalSum} ₾
            </span>
          </div>
          <div className="w-[284px] tablet:w-[623px] mobile:w-[279px] h-[25px] mb-[8px] flex justify-between">
            <span className="font-manrope text-[15px] text-gray-500">
              SHIPPING
            </span>
            <span className="font-manrope text-[18px] font-bold">
              {SHIPPING_PRICE} ₾
            </span>
          </div>
          <div className="w-[284px] tablet:w-[623px] mobile:w-[279px] h-[25px] mb-[8px] flex justify-between">
            <span className="font-manrope text-[15px] text-gray-500">
              VAT (20%)
            </span>
            <span className="font-manrope text-[18px] font-bold">{vat} ₾</span>
          </div>

          <div className="w-[284px] tablet:w-[623px] mobile:w-[279px] h-[25px] mt-[16px] flex justify-between">
            <span className="font-manrope text-[15px] text-black">
              GRAND TOTAL
            </span>
            <span className="font-manrope text-[18px] font-bold text-[#D87D4A]">
              {grandTotal} ₾
            </span>
          </div>

          <button
            className="w-[284px] tablet:w-[623px] mobile:w-[279px] h-[48px] bg-[#D87D4A] font-manrope font-bold text-[13px] text-white rounded-[8px] my-[32px] hover:border-[#FBAF85]"
            onClick={handleSubmitPay}
          >
            CONTINUE & PAY
          </button>
        </div>
      </div>
    </div>
  );
}

function CheckoutCart({ item }) {
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
