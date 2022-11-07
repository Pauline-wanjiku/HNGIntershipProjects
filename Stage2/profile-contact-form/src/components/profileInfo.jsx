import React from "react";
import profileImage from "./images/profileImage.jpg";
import shareLink from "./images/share.jpg";
import shareLinkMobile from "./images/shareButtonMob.png";

const information = {
  TwitterName: "pauline_shiko",
  slackName: "Pauline Wanjiku",
  profileImages: profileImage,
};
const ProfileInfo = () => {
  return (
    <>
      <div className="content">
        <div className="profile">
          <img
            src={information.profileImages}
            alt={profileImage}
            id="profile__img"
          />
          <img src={shareLink} alt="Share Button" className="shareLink" />

          <img
            src={shareLinkMobile}
            alt="Share button"
            className="shareLinkMob"
          />
          <p id="twitter">{information.TwitterName}</p>
          <p id="slack" hidden>
            {information.slackName}
          </p>
        </div>
      </div>
    </>
  );
};
export default ProfileInfo;
