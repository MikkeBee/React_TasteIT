import React from "react";
import pizza from "../assets/videos/pizza.mp4";
import MiddleBar from "./MiddleBar";

const Home = () => {
  return (
    <div>
      <video className="pizzaVideo" autoPlay loop muted>
        <source src={pizza} type="video/mp4" />
      </video>
      <MiddleBar />
    </div>
  );
};

export default Home;
