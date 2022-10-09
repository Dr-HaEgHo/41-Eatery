import React from "react";
import dish from "../../assets/dish.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container hero">
      <div className="content">
        <p className="rest">— Restaurants</p>
        <h1 className="hero-">Enjoy Delicious Food at Popular Prices</h1>
        <p className="cont">
          get a variety of foods full of tempting flavours and cheap prices for
          various groups
        </p>
        <Link to="/products">
          <button className="btn-dark shadow-orange">Explore Now</button>
        </Link>
      </div>
      <div className="image">
        <img src={dish} alt="dish"></img>
      </div>
    </div>
  );
};

export default Hero;
