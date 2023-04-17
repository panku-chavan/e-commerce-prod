import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h3 className="text-center">All Right Reserved &copy; Pankaj Chavan</h3>
        <p className="text-center mt-3">
          <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
      <div className="text-center">
        <a href="https://github.com/panku-chavan" target="blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/pankaj-chavan-9ba6681ba/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/panku_chavan/">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/panku_chavan">
          <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  );
};

export default Footer;
