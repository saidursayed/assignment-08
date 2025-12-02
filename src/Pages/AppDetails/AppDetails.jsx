import React, { useEffect, useState } from "react";
import useApps from "../../Hooks/useApps";
import { useParams } from "react-router";
import useLoading from "../../Hooks/useLoading";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import Container from "../../Components/Container/Container";
import DownloadIcon from "../../assets/icon-downloads.png";
import RatingIcon from "../../assets/icon-ratings.png";
import ReviewIcon from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  loadInstallApps,
  updatedInstallAppList,
} from "../../utils/localStorage";
import ErrorApp from "../../Components/ErrorApp/ErrorApp";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { isLoading } = useLoading();
  const { apps } = useApps();
  const { id } = useParams();
  const app = apps.find((a) => a.id === Number(id));

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = loadInstallApps();
    const isAlreadyInstalled = installedApps.some(
      (item) => item.id === Number(id)
    );
    setInstalled(isAlreadyInstalled);
  }, [id]);

  const {
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = app || {};

  // Loading
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  // Error Page
  if (!app) return <ErrorApp></ErrorApp>;

  const handleClick = () => {
    updatedInstallAppList(app);

    setInstalled(true);

    toast.success(`Yahoo ⚡!! ${title} Installed Successfully`, {
      position: "top-center",
    });
  };

  return (
    <div className="bg-[#d9d9d9] py-10 md:py-20 px-4 md:px-8 lg:px-12">
      <Container>
        <div>
          <div className="flex flex-col md:flex-row gap-10 ">
            <figure className="bg-white p-6 md:p-8 rounded-lg w-[250px] md:w-[350px] shadow-xl">
              <img src={image} className="" alt="Shoes" />
            </figure>
            <div className="flex-1">
              <div>
                <h2 className="font-bold text-2xl md:text-[32px] text-[#001931] mb-2">
                  {title}
                </h2>
                <p className="text-base md:text-xl text-[#627382]">
                  Developed by{" "}
                  <span className="text-[#632EE3]">{companyName}</span>
                </p>
              </div>
              <div className="w-full">
                <div className="divider"></div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="space-y-1 md:space-y-2 text-[#001931]">
                  <img src={DownloadIcon} alt="" />
                  <p className="text-sm md:text-base">Downloads</p>
                  <span className="font-extrabold text-3xl md:text-[40px]">
                    {downloads}M
                  </span>
                </div>
                <div className="space-y-1 md:space-y-2 text-[#001931]">
                  <img src={RatingIcon} alt="" />
                  <p className="text-sm md:text-base">Average Ratings</p>
                  <span className="font-extrabold text-3xl md:text-[40px]">
                    {ratingAvg}
                  </span>
                </div>
                <div className="space-y-1 md:space-y-2 text-[#001931]">
                  <img src={ReviewIcon} alt="" />
                  <p className="text-sm md:text-base">Total Reviews</p>
                  <span className="font-extrabold text-3xl md:text-[40px]">{reviews}K</span>
                </div>
              </div>
              <div>
                <button
                  onClick={handleClick}
                  disabled={installed}
                  className={`btn btn-xl text-xl mt-4 font-semibold py-3.5 px-5 rounded-sm 
                  bg-[#00D390] text-white skeleton hover:shadow-2xs`}
                >
                  {installed ? "Installed" : `Install Now (${size} MB)`}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full my-10">
            <div className="divider"></div>
          </div>

          {/* Chart */}
          <div>
            <h2 className="text-2xl font-semibold text-[#001931] mb-6">Ratings</h2>
            <div>
              <BarChart
                data={[...(ratings || [])].reverse()}
                layout="vertical"
                barSize={32}
                barCategoryGap="0"
                style={{
                  width: "100%",
                  maxHeight: "70vh",
                  aspectRatio: 1.618,
                }}
                responsive
              >
                <CartesianGrid stroke="none" />
                <XAxis
                  tick={{ fontSize: 18, fill: "#627382" }}
                  type="number"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 18, fill: "#627382" }}
                  type="category"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#ff8811" />
              </BarChart>
            </div>
          </div>

          <div className="w-full my-10">
            <div className="divider"></div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#001931] mb-4 md:mb-6">
              Description
            </h2>
            <div>
              <p className="text-base md:text-xl text-[#627382]">{description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
