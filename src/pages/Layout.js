import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MiddleBar from "../components/MiddleBar";

const Layout = () => {
  return (
    <div className="layoutDiv">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
