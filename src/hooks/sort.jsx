import { useState } from "react";

export const useSortData = (data) => {
  const [sortData, setSortData] = useState();

  function sort(option) {
    if (option === "ASC") {
      data.sort((a, b) => {
        return a.price - b.price;
      });
      setSortData([...data]);
    } else if (option === "DESC") {
      data.sort((a, b) => {
        return b.price - a.price;
      });
      setSortData([...data, data]);
    } else {
      return 0;
    }
  }
  return {
    sortData,
    sort,
  };
};
