import React from 'react';
import AnimateVisibleEmo from './AnimateVisibleEmo';

function Footer() {
  return (
    <div className="text-center overflow-hidden mt-6 py-6 mr-0 xl:mr-56">
      <AnimateVisibleEmo classN="text-[1.5rem] font-bold text-[#b96a59] dark:text-[#c58d69] ">
        (⁀ᗢ⁀)
      </AnimateVisibleEmo>
      <p className="text-sm">
        Made by xMau <br /> {new Date().getFullYear()} © All rights reserve
      </p>
    </div>
  );
}

export default Footer;
