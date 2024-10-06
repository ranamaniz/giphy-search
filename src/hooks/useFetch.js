import { useEffect, useState } from "react";

const useFetch = (service, params) => {
  const [data, setData] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  const { search, page } = params;

  const fetchData = async () => {
    try {
      setData((prevData) => ({
        ...prevData,
        loading: true,
      }));

      const res = await service(search, page);

      setData({ loading: false, data: res, error: undefined });
    } catch (e) {
      setData({
        loading: false,
        data: undefined,
        error: e?.message || "Something went wrong",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, page]);

  return data;
};

export default useFetch;
