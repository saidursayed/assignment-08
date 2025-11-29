import React from "react";
import Container from "../Container/Container";
import AppErrorImg from "../../assets/App-Error.png";
import { Link } from "react-router";

const ErrorApp = () => {
  return (
    <div className="bg-[#d9d9d9] py-20">
      <Container>
        <div className="flex  flex-col items-center justify-center h-screen">
          <figure>
            <img src={AppErrorImg} alt="" />
          </figure>
          <h2 className="text-5xl text-[#001931] font-semibold mt-[60px] mb-2">
            OPPS!! APP IS NOT FOUND
          </h2>
          <p className="text-xl text-[#627382]">
            The App you are requesting is not found on our system. please try
            another apps
          </p>

          <Link
            className="btn btn-lg mt-4 text-white px-10 py-3.5 bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] font-semibold"
            to="/"
          >
            Go Back!
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ErrorApp;
