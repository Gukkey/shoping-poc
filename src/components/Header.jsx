import React, { useLayoutEffect, useState } from "react";
import logo from "../assets/logo-transparent.png";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div id="header" className="w-full flex p-2 bg-[#fef5e4]">
      <img src={logo} alt="logo" className=" h-20 rounded-full pl-4" />
      {/* <div className="ml-auto flex flex-row-reverse">
        <ThemeToggle />
      </div> */}
      {isMobile ? (
        <> </>
      ) : (
        <div className="flex gap-20 ml-auto text-[#543f46] items-center pr-20 text-lg font-semibold ">
          <a href="/" className="text-[#f93a61]">Home</a>
          <a href="/">Cakes</a>
          <a href="/">Brownies</a>
          <a href="/">Contact us</a>
        </div>
      )}
    </div>
  );
}

export default Header;
