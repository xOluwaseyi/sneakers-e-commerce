import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import CartIcon from "../../assets/images/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";
import logo from "../../assets/images/logo.svg";
import Hamburger from "../../assets/images/icon-menu.svg";
import Close from "../../assets/images/icon-close.svg";
import Cart from "../Cart/Cart";
import BgOverlay from "../UI/BgOverlay";
import SneakersContext from "../../store/sneakers-context";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);
  const sneakersCtx = useContext(SneakersContext);

  const showNav = () => {
    setNav(!nav);
  };

  const showCart = () => {
    setCart(!cart);
  };

  return (
    <header className="">
      {nav && <BgOverlay style="lg:hidden" showBg={showNav} />}
      {/* dektop nav/ sneakers logo */}
      <div className="flex gap-x-5 md:gap-x-14 items-center">
        <img
          src={Hamburger}
          alt="hamburger"
          className="lg:hidden cursor-pointer"
          onClick={showNav}
        />
        <img src={logo} alt="logo" />

        {/* desktop nav / link lists */}
        <nav className="hidden lg:flex gap-x-8 items-center text-gray-500 text-lg font-medium ">
          {[
            { id: 1, text: "Collections" },
            { id: 2, text: "Men" },
            { id: 3, text: "Women" },
            { id: 4, text: "About" },
            { id: 5, text: "Contact" },
          ].map((linkText) => {
            return (
              <a href="#" className="afterLink" key={linkText.id}>
                {linkText.text}
              </a>
            );
          })}
        </nav>

        {/* mobile nav */}
        {ReactDOM.createPortal(
          <nav
            className={`mobileNav ${
              nav ? "left-[0px] w-[70%]" : "left-[-100vw] w-full"
            }`}
          >
            <img
              src={Close}
              alt="close"
              className="w-[15px] lg:hidden cursor-pointer"
              onClick={showNav}
            />
            {[
              { id: 1, text: "Collections" },
              { id: 2, text: "Men" },
              { id: 3, text: "Women" },
              { id: 4, text: "About" },
              { id: 5, text: "Contact" },
            ].map((linkText) => {
              return (
                <a
                  href="#"
                  className="hover:border-b-2 hover:pb-2 duration-100 hover:border-[#ff7d1a]"
                  key={linkText.id}
                >
                  {linkText.text}
                </a>
              );
            })}
          </nav>,
          document.getElementById("backdrop-root")
        )}
      </div>

      {/* right */}
      <div className="flex gap-x-5 md:gap-x-10 items-center relative">
        <img
          src={CartIcon}
          className="h-6 cursor-pointer"
          alt="carticon"
          onClick={showCart}
        />
        {sneakersCtx.cartValue > 0 && (
          <div className="bg-[#ff7d1a] px-2 text-white rounded-lg text-[12px] font-bold absolute top-[-1px] md:top-[7px] left-[13px]">
            {sneakersCtx.cartValue}
          </div>
        )}
        <img
          src={Avatar}
          className="h-10 md:h-14 cursor-pointer border-[#ff7d1a] hover:border-2 rounded-full"
          alt="avatar"
        />
      </div>
      {cart && <Cart showCart={showCart} />}
    </header>
  );
};

export default Header;
