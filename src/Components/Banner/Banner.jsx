import React from "react";
import Container from "../../Components/Container/Container";
import HeroImage from "../../assets/hero.png";
import { IoIosDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5] pt-8 md:pt-20 px-4 md:px-0">
        <Container>
          <div className="text-center flex flex-col items-center">
            <h1 className="font-bold text-5xl md:text-7xl opacity-90">
              We Build <br />{" "}
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-black">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="mt-4 text-base md:text-xl text-[#627382]">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br />
              Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </p>
            <div className="my-10 flex flex-col md:flex-row gap-4">
              <a
                href="https://play.google.com/"
                target="_blank"
                rel=""
                className="btn btn-xl py-4 px-6 rounded-sm border-2 border-[#d2d2d2] flex items-center gap-2 font-semibold text-xl"
              >
                <img
                  className="w-10"
                  src={
                    "https://img.icons8.com/?size=96&id=rZwnRdJyYqRi&format=png"
                  }
                  alt=""
                />
                Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel=""
                className="btn btn-xl py-4 px-6 rounded-sm border-2 border-[#d2d2d2] flex items-center gap-2 font-semibold text-xl"
              >
                <img
                  className="w-10"
                  src={
                    "https://img.icons8.com/?size=160&id=FY7tVsFoeON4&format=png"
                  }
                  alt=""
                />
                App Store
              </a>
            </div>
            <div>
              <img src={HeroImage} alt="" />
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[linear-gradient(125deg,#632EE3,#9F62F2)] py-10 md:py-20">
        <Container>
          <div className="flex justify-center text-white ">
            <div>
              <h2 className="font-bold text-4xl mb-10 text-center">
                Trusted by Millions, Built for You
              </h2>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="space-y-4">
                    <p className="opacity-80">Total Downloads</p>
                    <h3 className="font-extrabold text-5xl">29.6M</h3>
                    <p className="opacity-80">21% more than last month</p>
                  </div>
                  <div>
                    <IoIosDownload className="text-6xl" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="space-y-4">
                    <p className="opacity-80">Total Reviews</p>
                    <h3 className="font-extrabold text-5xl">906K</h3>
                    <p className="opacity-80">46% more than last month</p>
                  </div>
                  <div>
                    <FaStar className="text-6xl" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="space-y-4">
                    <p className="opacity-80">Active Apps</p>
                    <h3 className="font-extrabold text-5xl">132+</h3>
                    <p className="opacity-80">31 more will Launch</p>
                  </div>
                  <div>
                    <IoLogoGooglePlaystore className="text-6xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
