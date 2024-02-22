import React, { useEffect } from "react";

const useScrollTop = (dependancies) => {
  if (!Array.isArray(dependancies)) {
    throw new Error("DEPENDANCIES MUST BE AN ARRAY");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, dependancies);

  return null;
};

export default useScrollTop;
