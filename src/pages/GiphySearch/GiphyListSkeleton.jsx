import React from "react";
import { pageSize } from "../../constants";
import { Skeleton } from "antd";

const GiphyListSkeleton = () => {
  return (
    <>
      {Array.from(Array(pageSize).keys()).map((item) => (
        <Skeleton.Image key={item} active className="w-40 h-40" />
      ))}
    </>
  );
};

export default GiphyListSkeleton;
