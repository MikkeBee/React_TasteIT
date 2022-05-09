import React from "react";
import pizza from "../assets/videos/pizza.mp4";

const Home = () => {
  return (
    <div>
      <video className="pizzaVideo" autoPlay loop muted>
        <source src={pizza} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
