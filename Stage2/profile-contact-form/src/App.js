import React from "react";
import ProfileInfo from "./components/profileInfo";
import SocialIcons from "./components/socialIcons";
import ColoredLine from "./components/hr";
import Footer from "./components/footer";
import Links from "./pages/root";


function App() {
  return (
    <>
      <main className="container">
        <ProfileInfo />
        <Links />
        <SocialIcons />
        <ColoredLine />
        <Footer />
      </main>
    </>
  );
}

export default App;
