import React from "react";
import './style.css'
import profileImage from "./profileImage.jpg"; 

console.log(profileImage)

const information = {
  TwitterName: "pauline_shiko",
  slackName: "Pauline Wanjiku",
  profileImages: profileImage,
};
function App() {
    return (<>
    
        <div className="container">
            <ProfileInfo />
            <Links/>
    </div>
    </>
    );
}
const ProfileInfo = (props) => {
    const{profileImages,TwitterName,slackName} = props
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
     
        </article>
      </>
    );
}
export default App;
