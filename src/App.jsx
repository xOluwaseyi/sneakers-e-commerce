import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";

const App = () => {
  return (
    <div className="relative lg:w-11/12 xl:w-10/12 mx-auto">
      <Header />
      <Hero />

      {/* footer */}
      <footer className="text-center text-lg font-bold py-5">
        <p>
          👨🏾‍💻 Coded by{" "}
          <a
            href="http://linkedin.com/in/xoluwaseyi"
            className="underline text-[#ff7d1a] "
          >
            Oluwaseyi.{" "}
          </a>{" "}
          <br />
          🎨 Challenge/design by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
            className="underline text-[#ff7d1a] "
          >
            Frontend Mentor.
          </a>
          {"  "}
        </p>
      </footer>
    </div>
  );
};

export default App;
