import React from "react";
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"

export default function Footer() {
  return <div className="footer">
      <img src={twitter} alt="" />
      <img src={facebook} alt="" />
      <img src={instagram} alt="" />
      <img src={github} alt="" />
  </div>
}