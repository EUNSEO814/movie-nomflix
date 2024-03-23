import { useLocation } from "react-router";

const Search = () => {
  const location = useLocation();
  console.log(`location:`, location);
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(`keyword:`, keyword);
  return null;
};

export default Search;
