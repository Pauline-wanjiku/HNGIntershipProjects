import React from "react";
import "./style.css";
import profileImage from "./profileImage.jpg";
import zuriInternship from "./images/ZuriInternship.jpg";
import footerText from "./images/footertext.jpg";
import ingressive from "./images/ingressive.jpg";
import shareLink from "./images/share.jpg";
import slack from "./images/slackIcon.jpg";
import github from "./images/githubIcon.jpg";

const information = {
  TwitterName: "pauline_shiko",
  slackName: "Pauline Wanjiku",
  profileImages: profileImage,
  footer: footerText,
  iconSlack: slack,
  iconGithub: github,
};
const handleMouseOver = () => {
  console.log("hello");
};
function App() {
  return (
    <>
      <main className="container">
        <ProfileInfo />
        <Links />
        <SocialIcons />
        <Footer />
      </main>
    </>
  );
}
const ProfileInfo = () => {
  return (
    <>
      <div className="content">
        <div className="profile">
          <img src={shareLink} alt="" className="shareLink" />
          <img
            src={information.profileImages}
            alt={profileImage}
            id="profile__img"
          />
          <p id="twitter">{information.TwitterName}</p>
          <p hidden>{information.slackName}</p>
        </div>
      </div>
    </>
  );
};
const Links = () => {
  return (
    <>
      <div className="links">
        <div>
          <a href="" id="twitter_link">
            Twitter Link
          </a>
        </div>
        <div>
          <a href="" id="btn__zuri">
            Zuri Team
          </a>
        </div>
        <div>
          <a href="http://books.zuri.team" id="books">
            Zuri Books
          </a>
        </div>
        <div>
          <a href="https://books.zuri.team" id="book__python">
            Python Books
          </a>
        </div>
        <div>
          <a href="https://background.zuri.team" id="pitch">
            Background Check for coder
          </a>
        </div>
        <div>
          <a href="https://books.zuri.team/design-rules" id="book__design">
            Design Books
          </a>
        </div>
      </div>
    </>
  );
};
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
export default App;
