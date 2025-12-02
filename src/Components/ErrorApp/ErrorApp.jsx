import React from "react";
import Container from "../Container/Container";
import AppErrorImg from "../../assets/App-Error.png";
import { Link } from "react-router";

const ErrorApp = () => {
  return (
    <div className="bg-[#d9d9d9] py-10 md:py-20  px-4 md:px-8 lg:px-12  ">
      <Container>
        <div>
          <div className="flex justify-center items-center">
            <figure>
              <img src={AppErrorImg} alt="" />
            </figure>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl text-[#001931] font-semibold mt-[60px] mb-2">
              OPPS!! APP IS NOT FOUND
            </h2>
            <p className="text-base md:text-xl text-[#627382]">
              The App you are requesting is not found on our system. please try
              another apps
            </p>

            <Link
              className="btn md:btn-lg mt-4 text-white px-10 py-3.5 bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] font-semibold"
              to="/"
            >
              Go Back!
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ErrorApp;
