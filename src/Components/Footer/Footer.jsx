import React from "react";
import Container from "../Container/Container";
import logoImage from "../../assets/logo.png";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";



const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <Container>
        <footer className="text-white py-10  px-4 md:px-8 lg:px-12">
          <div className="footer sm:footer-horizontal">
            <aside>
              <div className="flex items-center gap-2">
                <img className="w-10" src={logoImage} alt="" />
                <h2 className="font-bold text-base md:text-2xl ">HERO.IO</h2>
              </div>
              <p>
                hero.io empowers users with fast, modern, <br /> and intelligent
                tools designed to simplify everyday
                <br /> workflows. From seamless productivity to intuitive <br />{" "}
                user experiences, we help you focus on what truly <br />{" "}
                matters. Build smarter, move faster, and stay <br />
                ahead — with hero.io.
              </p>
            </aside>
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">App Branding</a>
              <a className="link link-hover">App UI/UX Design</a>
              <a className="link link-hover">App Growth & ASO Marketing</a>
              <a className="link link-hover">App Promotion & Ads</a>
            </nav>

            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms & Conditions</a>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Cookie Policy</a>
              <a className="link link-hover">Join Us</a>
            </nav>

            <nav>
              <h6 className="footer-title">Social Links</h6>
              <ul className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaSquareXTwitter className="md:text-xl text-lg"></FaSquareXTwitter>
                  <li>
                    <a className="link link-hover">hero.io</a>
                  </li>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="md:text-xl text-lg"></FaLinkedin>
                  <li>
                    <a className="link link-hover">hero.io</a>
                  </li>
                </div>
                <div className="flex items-center gap-2">
                  <IoIosMail className="md:text-xl text-lg"></IoIosMail>
                  <li>
                    <a className="link link-hover">support@hero.io</a>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
          <hr className="bg-[#E5E7EB] my-8 opacity-20" />
          <div className="text-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved.</p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
