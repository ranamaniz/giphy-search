import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [data, setData] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return data;
};

export default useDebounce;
