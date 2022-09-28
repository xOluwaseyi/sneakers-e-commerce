import React from "react";
import ReactDOM from "react-dom";

const BgOverlay = ({ showBg, style }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`${style} md:block fixed h-screen w-screen top-[0px] left-[0px] bg-black opacity-90 z-30`}
          onClick={showBg}
        ></div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default BgOverlay;
