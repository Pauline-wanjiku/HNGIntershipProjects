import React from 'react'


import zuriInternship from "./images/ZuriInternship.jpg";
import footerText from "./images/footertext.jpg";
import ingressive from "./images/ingressive.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={zuriInternship} alt="" />
        <img src={footerText} />
        <img src={ingressive} alt="" />
      </div>
    </>
  );
};
export default Footer;