import { useState } from "react";
import FuzzySearch from "fuzzy-search";

const useSearch = (data, keys, caseSensitive) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searcher = new FuzzySearch(data, keys, {
    caseSensitive: caseSensitive,
  });

  const searchResults = searchTerm ? searcher.search(searchTerm) : data;

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
  };
};

export default useSearch;
