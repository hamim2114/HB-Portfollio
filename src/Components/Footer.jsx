import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
  return (
    <footer className="h-64 pt-10">
      <div className="w-5/6 mx-auto">
      <SocialMediaIcon/>
        <div className="flex justify-center md:justify-between text-center">
          <p className="text-2xl text-yellow font-semibold">MISS BRISHTY</p>
          <p className="text-md text-yellow">©2022 HB BRISHTY. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
