import { Pagination } from "antd";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { pageSize } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { getGiphy } from "../../services/giphyService";
import GiphyListError from "./GiphyListError";
import GiphyLisSkeleton from "./GiphyListSkeleton";

const GiphyList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchString = searchParams.get("search");
  const currentPage = searchParams.get("page");

  const {
    loading: isGiphyLoading,
    data: giphyList,
    error,
  } = useFetch(getGiphy, { search: searchString, page: currentPage });

  const handlePageChange = (page) => {
    if (currentPage !== page) {
      setSearchParams((searchParams) => {
        searchParams.set("page", page);
        return searchParams;
      });
    }
  };

  if (error) {
    return <GiphyListError error={error} />;
  }
  return (
    <section className="flex flex-col gap-4">
      <section className="grid grid-cols-5 gap-2 justify-items-center">
        {isGiphyLoading && <GiphyLisSkeleton />}

        {!isGiphyLoading &&
          giphyList?.data.map((giphy) => {
            const imgUrl = giphy?.images?.original?.url;
            return (
              <img
                key={giphy?.id}
                src={imgUrl}
                alt={giphy?.alt_text}
                className=" h-40 w-40 object-cover "
              />
            );
          })}
      </section>
      <Pagination
        defaultCurrent={currentPage || 1}
        total={giphyList?.pagination?.total_count}
        onChange={handlePageChange}
        className="self-center"
        showSizeChanger={false}
        pageSize={pageSize}
        hideOnSinglePage
      />
    </section>
  );
};

export default GiphyList;
