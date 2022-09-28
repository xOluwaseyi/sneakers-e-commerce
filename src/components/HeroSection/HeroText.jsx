import React, { useContext } from "react";
import { ReactComponent as CartIcon } from "../../assets/images/icon-cart-white.svg";
import { ReactComponent as Minus } from "../../assets/images/icon-minus.svg";
import { ReactComponent as Plus } from "../../assets/images/icon-plus.svg";
import SneakersContext from "../../store/sneakers-context";

const HeroText = () => {
  const sneakersCtx = useContext(SneakersContext);

  return (
    <>
      {/* text */}
      <div className="w-[90%] md:w-[50%] flex flex-col my-5 mx-auto gap-y-4 ">
        <p className="text-[#ff7d1a] font-bold">SNEAKER COMPANY</p>
        <p className="text-4xl lg:text-5xl font-bold ">
          Fall Limited Edition Sneakers
        </p>
        <p className="text-gray-500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        {/* price */}
        <div className="flex flex-row items-center md:items-start justify-between md:flex-col">
          <p className="text-2xl font-bold md:mb-3 ">
            $125.00{" "}
            <span className="bg-[#ffede0] text-[#ff7d1a] ml-2 text-sm p-1 rounded-lg">
              50%
            </span>{" "}
          </p>
          <del className="text-gray-400 font-bold">$250.00</del>
        </div>

        {/* buttons */}
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="heroTextBtn">
            <Minus
              className=" hover:opacity-50 cursor-pointer "
              onClick={() => {
                sneakersCtx.minusCart();
              }}
            />
            <p>{sneakersCtx.sneakersValue}</p>
            <Plus
              className=" hover:opacity-50 cursor-pointer "
              onClick={() => {
                sneakersCtx.plusCart();
              }}
            />
          </div>
          <button
            className="addCart"
            onClick={() => {
              sneakersCtx.addCartHandler();
            }}
          >
            <CartIcon />
            <p className="text-white font-bold">Add to cart</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroText;
