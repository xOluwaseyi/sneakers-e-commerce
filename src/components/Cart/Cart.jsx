import React, { useContext } from "react";
import shoe1 from "../../assets/images/shoe1.jpg";
import DeleteIcon from "../../assets/images/icon-delete.svg";
import SneakersContext from "../../store/sneakers-context";

const Cart = ({ showCart }) => {
  const sneakersCtx = useContext(SneakersContext);

  return (
    <div className="cartDiv">
      <h1 className="h-full py-2 pl-5 font-bold border-b-2 border-gray-300">
        Cart
      </h1>

      <div className="py-5 grid place-items-center gap-5">
        {/* cart is empty and close button */}
        {sneakersCtx.cartValue <= 0 && !sneakersCtx.checkoutState && (
          <>
            <p className="font-bold text-xl">Your cart is empty.</p>
            <button
              className="bg-[#ff7d1a] px-4 py-2 text-white font-bold  "
              onClick={() => {
                showCart();
              }}
            >
              Close
            </button>
          </>
        )}

        {/* checkout confirmation gif  */}
        {sneakersCtx.checkoutState && (
          <div className="flex flex-col gap-4 items-center ">
            <img
              src="https://c.tenor.com/qM6fp_G04OwAAAAj/tick-tick-verified.gif"
              alt="check"
              className="h-[100px]"
            />
            <p className="font-bold text-xl ">Your order is on the way</p>
          </div>
        )}

        {/* checkout details */}
        {sneakersCtx.cartValue > 0 && !sneakersCtx.checkoutState && (
          <div className="flex items-center gap-x-3 justify-between w-[90%] ">
            <img src={shoe1} alt="shoe1" className="h-[60px] rounded-lg" />
            <div className="font-medium text-gray-400 ">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {sneakersCtx.sneakersValue}:{"  "}
                <span className="font-bold text-black">
                  ${sneakersCtx.sneakersPrice}
                </span>{" "}
              </p>
            </div>
            <img
              src={DeleteIcon}
              alt="delete"
              className="h-[20px] cursor-pointer"
              onClick={() => {
                sneakersCtx.deleteCart();
              }}
            />
          </div>
        )}

        {/* cart checkout button */}
        {sneakersCtx.cartValue > 0 && !sneakersCtx.checkoutState && (
          <button
            className="checkoutBtn"
            onClick={() => {
              sneakersCtx.checkoutCart();
            }}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
