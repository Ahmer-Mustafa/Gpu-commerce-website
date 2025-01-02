import React from "react";

// Footer component
const Footer = () => {
  return (
    <div>
      {/* Footer container */}
      <footer className="w-full h-auto bg-green-700 text-white font-light py-4">
        {/* Top section of the footer */}
        <div className="flex flex-col justify-center items-center gap-2 md:flex-row md:justify-around">
          <div>
            {/* Title section */}
            <h1 className="text-[24px] font-semibold text-[#000000] text-center">
              DATA FETCHING
            </h1>
            {/* Creator information */}
            <p className="text-[20px] font-medium text-[#000000] border-b-2 border-[#000000] text-center">
              Created by: <span className="text-[#2b9fbd]">Khubaib Mustafa</span>
            </p>
          </div>
        </div>

        {/* Bottom section of the footer */}
        <div className="flex justify-center items-center mt-4">
          {/* Copyright notice */}
          <p className="text-[15px] text-[#000000] font-light text-center sm:text-[18px]">
            © 2025 Khubaib Mustafa. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
