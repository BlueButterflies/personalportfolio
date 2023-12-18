import React from "react";
import "./Home.css"


const  Home = () => {
  return (
    <div className="container-fluid home tc">
      <div className="navy tc">
        <p className="title tc animate__animated animate__zoomInDown">
          <span>Hi, my name is <span className="name">Your name</span>{/**Change with your name */}</span>
        </p>
        <p className="subTitle animate__animated animate__zoomInDown">
          <span>I'm the <span className="profession">Unknown Developer</span>{/**Write what type of developer you are */}</span>
        </p>
      </div>
    </div>
  );
}

export default Home