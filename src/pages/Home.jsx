import React from "react";
import MainImage from "../assets/images/main-image.png";

function Home() {
  return (
    <div>
      <div className="main-section-container">
        <div className="text-main-container">
          <h1 className="main-title">Belajar Teknik Barber bersama kami ! </h1>
          <p className="main-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eu
          </p>
        </div>
        <div className="image-main-container">
          <img src={MainImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
