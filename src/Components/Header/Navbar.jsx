import React from "react";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import Container from "../Container/Container";
import { IoLogoGithub } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { FaAppStore } from "react-icons/fa";
import { MdOutlineInstallDesktop } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="shadow-2xl">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium text-base"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/apps">Apps</NavLink>
                </li>
                <li>
                  <NavLink>Installation</NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className="text-2xl font-bold">
              <div className="flex items-center gap-1">
                <img className="w-10" src={Logo} alt="" />
                <h2 className="font-bold ">HERO.IO</h2>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4 font-medium text-base text-[#000000e6]">
              <li>
                <NavLink to="/"><AiOutlineHome className="text-xl" /> Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps"><FaAppStore className="text-xl"/> Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installations"><MdOutlineInstallDesktop className="text-xl"/> Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              href="https://github.com/saidursayed"
              target="_blank"
              rel=""
              className="btn btn-lg text-lg bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white flex items-center gap-2"
            >
              <IoLogoGithub className="text-2xl" />
              Contribute
            </a>{" "}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
