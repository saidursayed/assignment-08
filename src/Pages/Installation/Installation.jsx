import React, { useState } from "react";
import { loadInstallApps, removeFromWishlist } from "../../utils/localStorage";
import Container from "../../Components/Container/Container";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";
import { GrInstall } from "react-icons/gr";

const Installation = () => {
  const [installed, setInstalled] = useState(() => loadInstallApps());

  const [sortOrder, setSortOrder] = useState("none");

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installed].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installed].sort((a, b) => b.size - a.size);
    } else {
      return installed;
    }
  })();

  const handleRemove = (id, title) => {
    removeFromWishlist(id);

    setInstalled((prev) => prev.filter((p) => p.id !== id));

    toast.warning(`🗑️ ${title} un-installed from your Device`, {
      position: "top-center",
    });
  };

  return (
    <div className="bg-[#d9d9d9] py-20 px-4 md:px-8 lg:px-12">
      <Container>
        <div>
          <div>
            <div className="text-center mb-10">
              <div className="font-bold text-4xl md:text-5xl flex flex-col md:flex-row justify-center items-center gap-2.5">
                <h2 className="text-[#001931]">Your Installed Apps</h2>
                <span className="text-[#632EE3] text-5xl md:text-6xl">
                  <GrInstall />
                </span>
              </div>
              <p className="text-base md:text-xl mt-4 text-[#627282]">
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
                <option disabled={true} value="none">
                  Sort By Size
                </option>
                <option value="size-asc">Low-High</option>
                <option value="size-desc">High-Low</option>
              </select>
            </label>
          </div>

          <div>
            {sortedItem.map((insApp) => (
              <div key={insApp.id}>
                <div className="bg-white mb-4 rounded-sm p-2 md:p-4 flex justify-between items-center">
                  <div className="flex items-center md:gap-4 gap-2">
                    <figure className="bg-[#d9d9d9] rounded-lg p-2 md:p-3.5 w-16 md:w-20">
                      <img src={insApp.image} className="" alt="Shoes" />
                    </figure>
                    <div>
                      <h2 className="text-[#001931] font-medium text-xl mb-2 md:mb-4">
                        {insApp.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 md:gap-4">
                        <div className="flex items-center font-medium text-[#00D390] gap-2 text-sm md:text-base rounded-sm">
                          <FiDownload />
                          <span>{insApp.downloads}M</span>
                        </div>
                        <div className="flex items-center font-medium text-[#FF8811] gap-2 text-sm md:text-base rounded-sm">
                          <FaStar />
                          <span>{insApp.ratingAvg}</span>
                        </div>
                        <div>
                          <p className="text-[#627382] text-sm md:text-base">
                            {insApp.size} MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleRemove(insApp.id, insApp.title)}
                      className="btn md:btn-lg text-white text-base font-semibold bg-[#00D390]"
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
