import React from "react";
import { FaStethoscope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-blue-600 text-white py-10">
    <footer className="flex items-center justify-between footer bg-transparent p-10 w-5/6 mx-auto">
      <aside className="flex">
        <FaStethoscope className="text-4xl"/>
        <div className="flex-col">
        <p className="text-4xl font-bold">
          Doc Time
          <hr />
        </p>
        <p>Healthcare Anytime Anywhere</p>
        </div>
        <h2>
            DocTime is the number 1 healthcare service provider in <br />
            Bangladesh, based on one million downloads and ratings <br />
            on the play Store.
        </h2>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    </div>
  );
};

export default Footer;
