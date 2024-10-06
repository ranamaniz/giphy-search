import { API_BASE_URL, GIPHY_API_KEY, pageSize } from "../constants";

export const getGiphy = async (searchString, page) => {
  try {
    const limit = pageSize;
    const offset = page ? (page - 1) * limit : 0;

    let url = `${API_BASE_URL}`;

    if (!searchString) {
      url += `/trending?api_key=${GIPHY_API_KEY}`;
    }

    if (!!searchString) {
      url += `/search?api_key=${GIPHY_API_KEY}&q=${searchString}`;
    }

    url += `&limit=${limit}&offset=${offset}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();

    return data;
  } catch (e) {
    throw e;
  }
};
