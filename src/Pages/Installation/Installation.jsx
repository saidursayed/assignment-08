import React, { useState } from "react";
import { loadInstallApps, removeFromWishlist } from "../../utils/localStorage";
import Container from "../../Components/Container/Container";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

const Installation = () => {
  const [installed, setInstalled] = useState(() => loadInstallApps());
  console.log(installed);

  const [sortOrder, setSortOrder] = useState("none");

  //   useEffect(() => {
  //     const saveList = JSON.parse(localStorage.getItem("wishlist"));
  //     if (saveList) setWishlist(saveList);
  //   }, []);

  if (!installed.length) return <p>No Data Available</p>;

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installed].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installed].sort((a, b) => b.size - a.size);
    } else {
      return installed;
    }
  })();

  const handleRemove = (id) => {
    removeFromWishlist(id);

    setInstalled((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-[#d9d9d9] py-20">
      <Container>
        <div>
          <div>
            <div className="text-center mb-10">
              <h2 className="font-bold text-5xl text-[#001931]">
                Your Installed Apps
              </h2>
              <p className="text-xl mt-4 text-[#627282]">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center py-5">
            <h1 className="text-2xl text-[#001931] font-semibold">
              {sortedItem.length} Apps Found
            </h1>

            <label className="form-control min-w-36 border rounded-sm">
              <select
                className="select select-ghost"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option disabled={true} value="none">Sort By Size</option>
                <option value="size-asc">Low-High</option>
                <option value="size-desc">High-Low</option>
              </select>
            </label>
          </div>

          <div>
            {sortedItem.map((insApp) => (
              <div key={insApp.id}>
                <div className="bg-white mb-4 rounded-sm p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <figure className="bg-[#d9d9d9] rounded-lg p-3.5 w-20">
                      <img src={insApp.image} className="" alt="Shoes" />
                    </figure>
                    <div>
                      <h2 className="text-[#001931] font-medium text-xl mb-4">
                        {insApp.title}
                      </h2>
                      <div className="flex gap-4">
                        <div className="flex items-center font-medium text-[#00D390] gap-2 text-base rounded-sm">
                          <FiDownload />
                          <span>{insApp.downloads}M</span>
                        </div>
                        <div className="flex items-center font-medium text-[#FF8811] gap-2 text-base rounded-sm">
                          <FaStar />
                          <span>{insApp.ratingAvg}</span>
                        </div>
                        <div>
                          <p className="text-[#627382] ">{insApp.size} MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleRemove(insApp.id)}
                      className="btn btn-lg text-white text-base font-semibold bg-[#00D390]"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Installation;
