import React, { useState, useEffect } from "react"; 
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "./icons/Logo.svg";
import Search from "./Search";
import { Collapse } from "@material-tailwind/react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState("ml-[-400px]");

const toggleNavbar = () => {
  if (isOpen === "ml-[0px]") {
    setIsOpen("ml-[-400px]");
  } else {
    setIsOpen("ml-[0px]");
  }
};

  return (
    <div className="navbar absolute top-0 w-full h-40 z-[5] p-[23px] text-white">
      <div className="container nav w-full hidden lg:flex justify-between ">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="StreamVibe logo" />
          </NavLink>
        </div>
        <div className="pages flex bg-[#0F0F0F] text-lg rounded-xl w-[585px] h-[75px] border-2 border-[#1A1A1A] p-[10px]">
          <NavLink
            to="/"
            className="text-lg rounded-lg pt-[12px] pl-[24px] pr-[24px] "
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/shows"
            className="text-lg rounded-lg pt-[12px] pl-[24px] pr-[24px]"
            activeClassName="active"
          >
            Movies & Shows
          </NavLink>
          <NavLink
            to="/support"
            className="text-lg rounded-lg pt-[12px] pl-[24px] pr-[24px]"
            activeClassName="active"
          >
            Support
          </NavLink>
          <NavLink
            to="/subscriptions"
            className="text-lg rounded-lg pt-[12px] pl-[24px] pr-[24px]"
            activeClassName="active"
          >
            Subscriptions
          </NavLink>
        </div>
        <div className="flex items-center gap-x-10">
          <NavLink to="/search">
            <svg
              width="27.503906"
              height="27.503906"
              viewBox="0 0 27.5039 27.5039"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M1 11.625C1 5.75708 5.75708 1 11.625 1C17.4929 1 22.25 5.75708 22.25 11.625C22.25 14.5591 21.0608 17.2153 19.1379 19.1379C17.2153 21.0608 14.5591 22.25 11.625 22.25C5.75708 22.25 1 17.4929 1 11.625ZM26.5 26.5L19.1379 19.1379"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
          <div className="notifications">
            <svg
              width="25.548584"
              height="27.500000"
              viewBox="0 0 25.5486 27.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M16.8218 20.949C16.9536 21.3591 17.0247 21.7961 17.0247 22.25C17.0247 24.5972 15.1218 26.5 12.7747 26.5C10.4275 26.5 8.52466 24.5972 8.52466 22.25C8.52466 21.7964 8.5957 21.3591 8.72754 20.9492M21.2744 9.56958L21.2744 10.5625C21.2744 13.843 22.5132 16.834 24.5488 19.0935C22.094 19.9998 19.5059 20.6306 16.8218 20.949C15.4946 21.1064 14.144 21.1875 12.7744 21.1875C11.405 21.1875 10.0544 21.1064 8.72754 20.9492C6.04321 20.6309 3.45508 19.9998 1 19.0935C3.0354 16.834 4.27441 13.843 4.27441 10.5625L4.27466 9.5C4.27466 4.80566 8.08032 1 12.7747 1C17.469 1 21.2747 4.80566 21.2747 9.5C21.2747 9.52319 21.2747 9.54639 21.2744 9.56958Z"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center">
        <NavLink to="/" className="lg:hidden blok bg-transparent">
          <img src={Logo} alt="" />
        </NavLink>
        <button
          className="open-nav flex lg:hidden blok items-center justify-center w-10 h-10 rounded-full bg-[#0F0F0F] border-2 border-[#1A1A1A]"
          onClick={toggleNavbar} 
        >
          {isOpen == "ml-[0px]" ? (
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`left-0 top-0 ${isOpen} lg:hidden fixed transition-[0.5s]`}
      >
        <Collapse className="nav2" open={isOpen}>
          <div className="nav2 h-[500px] flex flex-col justify-between pb-[30px] gap-4 p-4 bg-[#0F0F0F] text-lg w-[300px] border-2 border-[#1A1A1A]">
            <NavLink to="/" className="lg:hidden blok bg-transparent">
              <img src={Logo} alt="" />
            </NavLink>
            <NavLink
              to="/"
              className="text-lg rounded-lg pt-[12px] pl-[24px] pr-[24px] pb-[12px] "
              activeClassName="active"
              onClick={toggleNavbar}
            >
              Home
            </NavLink>
            <NavLink
              to="/shows"
              className="text-lg rounded-lg pt-[12px] pl-[24px] pr-[24px] pb-[12px]"
              activeClassName="active"
              onClick={toggleNavbar}
            >
              Movies & Shows
            </NavLink>
            <NavLink
              to="/support"
              className="text-lg rounded-lg pt-[12px] pl-[24px] pr-[24px] pb-[12px]"
              activeClassName="active"
              onClick={toggleNavbar}
            >
              Support
            </NavLink>
            <NavLink
              to="/subscriptions"
              className="text-lg rounded-lg pt-[12px] pl-[24px] pr-[24px] pb-[12px]"
              activeClassName="active"
              onClick={toggleNavbar}
            >
              Subscriptions
            </NavLink>
            <div className="flex items-center gap-x-10">
              <NavLink to="/search" onClick={toggleNavbar}>
                <svg
                  width="27.503906"
                  height="27.503906"
                  viewBox="0 0 27.5039 27.5039"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M1 11.625C1 5.75708 5.75708 1 11.625 1C17.4929 1 22.25 5.75708 22.25 11.625C22.25 14.5591 21.0608 17.2153 19.1379 19.1379C17.2153 21.0608 14.5591 22.25 11.625 22.25C5.75708 22.25 1 17.4929 1 11.625ZM26.5 26.5L19.1379 19.1379"
                    stroke="#FFFFFF"
                    strokeOpacity="1.000000"
                    strokeWidth="2.000000"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
              <div className="notifications" onClick={toggleNavbar}>
                <svg
                  width="25.548584"
                  height="27.500000"
                  viewBox="0 0 25.5486 27.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M16.8218 20.949C16.9536 21.3591 17.0247 21.7961 17.0247 22.25C17.0247 24.5972 15.1218 26.5 12.7747 26.5C10.4275 26.5 8.52466 24.5972 8.52466 22.25C8.52466 21.7964 8.5957 21.3591 8.72754 20.9492M21.2744 9.56958L21.2744 10.5625C21.2744 13.843 22.5132 16.834 24.5488 19.0935C22.094 19.9998 19.5059 20.6306 16.8218 20.949C15.4946 21.1064 14.144 21.1875 12.7744 21.1875C11.405 21.1875 10.0544 21.1064 8.72754 20.9492C6.04321 20.6309 3.45508 19.9998 1 19.0935C3.0354 16.834 4.27441 13.843 4.27441 10.5625L4.27466 9.5C4.27466 4.80566 8.08032 1 12.7747 1C17.469 1 21.2747 4.80566 21.2747 9.5C21.2747 9.52319 21.2747 9.54639 21.2744 9.56958Z"
                    stroke="#FFFFFF"
                    strokeOpacity="1.000000"
                    strokeWidth="2.000000"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Navbar;
