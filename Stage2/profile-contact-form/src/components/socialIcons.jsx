import React from "react";
import slack from "./images/slackIcon.jpg";
import github from "./images/githubIcon.jpg";


const SocialIcons = () => {
  return (
    <>
      <div className="socialIcon">
        <img src={slack} alt="" srcset="" />
        <img src={github} alt="" srcset="" />
      </div>
    </>
  );
};
export default SocialIcons;
