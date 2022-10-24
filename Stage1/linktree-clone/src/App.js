import React from "react";
import "./style.css";
import profileImage from "./profileImage.jpg";

console.log(profileImage);

const information = {
  TwitterName: "pauline_shiko",
  slackName: "Pauline Wanjiku",
  profileImages: profileImage,
};
function App() {
  return (
    <>
      <div className="container">
        <ProfileInfo />
        <Links />
      </div>
    </>
  );
}
const ProfileInfo = (props) => {
  const { profileImages, TwitterName, slackName } = props;
  return (
    <>
      <article>
        <img
          src={information.profileImages}
          alt={profileImage}
          id="profile_img"
        />
        <p id="twitter">{information.TwitterName}</p>
        <p hidden>{information.slackName}</p>
      </article>
    </>
  );
};
const Links = () => {
  return (
    <>
      <article>
        <div>
          <a href="" id="btn_zuri">
            Twitter Link
          </a>
        </div>
        <div>
          <a href="" id="btn_zuri">
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
      </article>
    </>
  );
};
export default App;
