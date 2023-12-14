import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";
import Movie from "./Routes/Movie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tv" element={<Tv />} />
        <Route path="movie" element={<Movie />} />
        <Route path="search" element={<Search />} />
        <Route path="/movies/:movieId" element={<Home />} />
        <Route path="/tv/:tvId" element={<Tv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
