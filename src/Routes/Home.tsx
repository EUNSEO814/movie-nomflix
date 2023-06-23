import { useQuery } from "react-query";
import { getMovies } from "../api";

const Home = () => {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  return (
    <div>
      <h1 style={{ backgroundColor: "whitesmoke", height: "300vh" }}>home</h1>
    </div>
  );
};

export default Home;
