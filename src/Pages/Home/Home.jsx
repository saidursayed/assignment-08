import React from "react";
import Container from "../../Components/Container/Container";
import Banner from "../../Components/Banner/Banner";
import useApps from "../../Hooks/useApps";
import AppCard from "../../Components/AppCard/AppCard";
import { Link } from "react-router";
import useLoading from "../../Hooks/useLoading";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { FaArrowTrendUp } from "react-icons/fa6";




const Home = () => {
  const { apps } = useApps();
  const { isLoading } = useLoading();
  const featuredApps = apps.slice(0, 8);


  if (isLoading) return <LoadingSpinner />;



  return (
    <div>
      {/* Banner */}
      <Banner></Banner>


      <div className="bg-[#f5f5f5] py-10 md:py-20 px-4 md:px-8 lg:px-12">
        <Container>
          <div>
            <div className="text-center mb-10">
              <div className="font-bold text-4xl md:text-5xl flex flex-col md:flex-row justify-center items-center gap-2.5">
                <h2 className="text-[#001931]">Trending Apps</h2>
                <span className="text-[#632EE3] text-5xl md:text-6xl">
                  <FaArrowTrendUp />
                </span>
              </div>
              <p className="text-base md:text-xl mt-4 text-[#627282]">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredApps.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                className="btn md:btn-lg hover:shadow-2xl text-white px-10 py-3.5 bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] font-semibold"
                to="/apps"
              >
                Show All
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
