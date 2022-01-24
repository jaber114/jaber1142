import React from "react";
import "./Footer.css";
const Footer = () => {
  const d = new Date();
  return (
    <footer>
      <h1>Created and Developed by Jaber rammal {d.getFullYear()}</h1>
    </footer>
  );
};
export default Footer;
