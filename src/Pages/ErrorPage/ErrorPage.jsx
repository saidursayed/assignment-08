import React from "react";
import Container from "../../Components/Container/Container";
import PageErrorImg from "../../assets/error-404.png";
import { Link } from "react-router";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-[#d9d9d9] py-20">
        <Container>
          <div className="flex  flex-col items-center justify-center h-screen">
            <figure>
              <img src={PageErrorImg} alt="" />
            </figure>
            <h2 className="text-5xl text-[#001931] font-semibold mt-[60px] mb-2">
              Oops, page not found!
            </h2>
            <p className="text-xl text-[#627382]">
              The page you are looking for is not available.
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

      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
