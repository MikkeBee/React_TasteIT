import React from "react";
import pizza from "../assets/videos/pizza.mp4";
import MiddleBar from "./MiddleBar";

const Home = () => {
  return (
    <div>
      <div className="videoContainer">
        <video className="pizzaVideo" autoPlay loop muted>
          <source src={pizza} type="video/mp4" />
        </video>
        <div className="pizzaToppings">
          <h1 className="upperCrust">Welcome to TasteIT</h1>
          <div className="deepDish">
            Get inspired to make something delicious
          </div>
        </div>
      </div>
      <MiddleBar />
    </div>
  );
};

export default Home;
