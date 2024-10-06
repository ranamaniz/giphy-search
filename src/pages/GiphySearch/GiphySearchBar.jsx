import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const GiphySearchBar = ({ onSearch }) => {
  const [searchString, setSearchString] = useState();

  const debouncedSearchString = useDebounce(searchString);

  useEffect(() => {
    if (!!searchString) {
      onSearch(debouncedSearchString);
    }
  }, [debouncedSearchString]);

  const handleSearch = (e) => {
    const inputString = e.target.value;
    setSearchString(inputString);
  };

  return (
    <Input
      className="max-w-[840px] sticky top-0 bg-white"
      size="large"
      placeholder="Type something to search..."
      suffix={<SearchOutlined />}
      onChange={handleSearch}
      value={searchString}
    />
  );
};

export default GiphySearchBar;
