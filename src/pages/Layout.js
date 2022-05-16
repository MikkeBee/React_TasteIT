import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Layout = () => {
  return (
    <main className="layoutDiv">
      <Header />
      <Main />
      <Footer />
    </main>
  );
};

export default Layout;
