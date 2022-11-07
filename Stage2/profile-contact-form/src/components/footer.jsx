import React from "react";

import zuriInternship from "./images/ZuriInternship.jpg";
import footerText from "./images/footertext.jpg";
import ingressive from "./images/ingressive.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={zuriInternship || null} />
        <img src={footerText || null} />
        <img src={ingressive || null} />
      </div>
    </>
  );
};
export default Footer;
