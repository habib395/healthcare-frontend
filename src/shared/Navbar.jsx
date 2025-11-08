import React from 'react';
import { CiStethoscope } from "react-icons/ci";

const Navbar = () => {
    return (
      <div className='w-11/12 mx-auto sm:py-4'>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
        <li><a>Consultant</a></li>
        <li><a>Order Medicine</a></li>
        <li><a>Home Diagnostic</a></li>
        <li><a>Health Plan</a></li>
        <li>
          <a>Blogs</a>
          <ul className="p-2 z-[50]">
            <li><a>English</a></li>
            <li><a>Bangla</a></li>
          </ul>
        </li>
        <li>
          <a>More</a>
          <ul className="p-2 z-[50]">
          <li><a>For Doctors</a></li>
            <li><a>CareGlobal</a></li>
            <li><a>Employers</a></li>
            <li><a>Data</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <CiStethoscope className='text-xl sm:text-4xl'/>
        <span className='text-blue-500'>Doc</span>Time</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base flex  justify-center items-center gap-16">
      <li>Consultant</li>
      <li>Order Medicine</li>
      <li>Home Diagnostic</li>
      <li>Health Plan</li>
      <li>
  <details>
    <summary>Blogs</summary> 
    <ul className="p-2 z-[50]"> 
      <li><a>English</a></li>
      <li><a>Bangla</a></li>
    </ul>
  </details>
</li>
      <li>
        <details>
          <summary>More</summary>
          <ul className="p-4 z-[50]">
            <li><a>For Doctors</a></li>
            <li><a>CareGlobal</a></li>
            <li><a>Employers</a></li>
            <li><a>Data</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </details>
      </li>
      <li className='text-gray-400 text-base font-thin'>|</li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-sm bg-blue-500 text-xs sm:text-xl text-white">Log in</a>
  </div>
</div>
      </div>
    );
};

export default Navbar;