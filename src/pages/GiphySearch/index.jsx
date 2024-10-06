import React from "react";
import GiphyList from "./GiphyList";
import GiphySearchBar from "./GiphySearchBar";
import { useSearchParams } from "react-router-dom";

const GiphySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnSearch = (value) => {
    const search = searchParams.get("search");
    if (search !== value) {
      setSearchParams((searchParams) => {
        searchParams.set("search", value);
        return searchParams;
      });
    }
  };

  return (
    <section className="flex flex-col  items-center gap-4 relative">
      <GiphySearchBar onSearch={handleOnSearch} />
      <GiphyList />
    </section>
  );
};

export default GiphySearch;
