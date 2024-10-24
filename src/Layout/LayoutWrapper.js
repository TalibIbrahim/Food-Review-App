import React from "react";
import NavBar from "../UI/NavBar";
import Footer from "../UI/Footer";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="bg-neutral-700">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
