import React from "react";
import linkdinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import FbIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";

const SocialMediaIcon = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a className="hover:opacity-50 transition duration-500"
      href="https://www.linkdin.com"
      target='_blank'
      rel="noreferrer"
      >
        <img src={linkdinIcon} alt="linkdin-link" />
      </a>

      <a className="hover:opacity-50 transition duration-500"
      href="https://www.instagram.com"
      target='_blank'
      rel="noreferrer"
      >
        <img src={instagramIcon} alt="instagram-link" />
      </a>

      <a className="hover:opacity-50 transition duration-500"
      href="https://www.facebook.com"
      target='_blank'
      rel="noreferrer"
      >
        <img src={FbIcon} alt="facebook-link" />
      </a>

      <a className="hover:opacity-50 transition duration-500"
      href="https://www.twitter.com"
      target='_blank'
      rel="noreferrer"
      >
        <img src={twitterIcon} alt="twitter-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcon;
