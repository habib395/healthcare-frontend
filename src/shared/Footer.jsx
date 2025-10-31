import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-600 text-white py-16">
        <footer className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16 p-6 md:p-10 w-11/12 lg:w-5/6 mx-auto">
          <div className="col-span-2 md:col-span-2 flex flex-col space-y-5">
            <div className="flex items-center space-x-3">
              <FaStethoscope className="text-4xl text-white" />
              <div className="flex flex-col">
                <p className="text-4xl font-extrabold tracking-wider">
                  Doc Time
                </p>
                <p className="text-sm font-light -mt-1">
                  Healthcare Anytime Anywhere
                </p>
              </div>
            </div>

            <p className="text-gray-200 text-sm max-w-sm leading-relaxed">
              DocTime is the number 1 healthcare service provider in Bangladesh,
              based on one million downloads and ratings on the Play Store.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-300 transition duration-200"
              >
                <FaInstagram className="w-6 h-6 fill-current" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-300 transition duration-200"
              >
                <FaLinkedin className="w-6 h-6 fill-current" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-300 transition duration-200"
              >
                <FaFacebook className="w-6 h-6 fill-current" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-blue-300 transition duration-200"
              >
                <FaYoutube className="w-6 h-6 fill-current" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-300 transition duration-200"
              >
                <FaTwitter className="w-6 h-6 fill-current" />
              </a>
            </div>
          </div>

          <nav className="flex flex-col space-y-2">
            <h6 className="font-bold text-lg mb-2 text-white">Services</h6>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Branding
            </a>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Design
            </a>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Marketing
            </a>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Advertisement
            </a>
          </nav>

          <nav className="flex flex-col space-y-2">
            <h6 className="font-bold text-lg mb-2 text-white">Company</h6>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              About us
            </a>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Contact
            </a>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Jobs
            </a>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Press kit
            </a>
          </nav>

          <nav className="flex flex-col space-y-2">
            <h6 className="font-bold text-lg mb-2 text-white">Legal</h6>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Terms of use
            </a>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Privacy policy
            </a>
            <a className="link link-hover text-gray-200 hover:text-white transition">
              Cookie policy
            </a>
          </nav>
        </footer>
      </div>
      <h2 className="py-2 text-center">
        Copyright © 2025 DocTime.All rights reserved.
      </h2>
    </div>
  );
};

export default Footer;
