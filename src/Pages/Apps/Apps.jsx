import React, { useEffect, useState } from "react";
import useApps from "../../Hooks/useApps";
import Container from "../../Components/Container/Container";
import AppCard from "../../Components/AppCard/AppCard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import useLoading from "../../Hooks/useLoading";

const Apps = () => {
  const { apps } = useApps();
  const { isLoading } = useLoading();
  const [search, setSearch] = useState("");

  const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  useEffect(() => {
    if (!term) return setSearchLoading(false);

    setSearchLoading(true);
    const timer = setTimeout(() => {
      setSearchLoading(false);
    }, 500); // 0.5s loader for search

    return () => clearTimeout(timer);
  }, [term]);

  if (isLoading || searchLoading) return <LoadingSpinner />;

  return (
    <div className="bg-[#f5f5f5] py-20 px-4 md:px-0">
      <div>
        <Container>
          <div>
            <div className="text-center mb-10">
              <h2 className="font-bold text-5xl text-[#001931]">
                Our All Applications
              </h2>
              <p className="text-xl mt-4 text-[#627282]">
                Explore All Apps on the Market developed by us. We code for
                Millions
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="flex justify-between items-center py-5 px-4 md:px-8 lg:px-12">
            <h1 className="text-3xl flex-1 md:flex-none font-semibold">
              <span className="text-2xl font-semibold text-[#001931]">
                ({searchApps.length}) Apps Found
              </span>
            </h1>
            <label className="input flex-1 md:flex-none bg-transparent">
              <svg
                className="h-[1.3em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                className="text-base"
                required
                placeholder="Search Apps"
              />
            </label>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          {searchApps.length === 0 ? (
            <div className="py-10">
              <div>
                <h1 className="text-7xl font-bold text-[#627282] text-center">
                  No App Found
                </h1>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 md:px-8 lg:px-12  ">
              {searchApps.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Apps;
