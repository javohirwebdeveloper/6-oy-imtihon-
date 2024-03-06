import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import _ from "lodash"; 

const API_KEY = "19f828966f3397ee924567d7e7ca4a06";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const getQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get("query");
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      );
      setResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedFetchData = _.debounce(fetchData, 2000);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    const query = getQuery();
    if (query) {
      setSearch(query);
    }
    debouncedFetchData();
  }, [location, search]);

  console.log(results);

  return (
    <div>
      <div className="search mt-[150px]">
        <div className="container justify-center flex">
          <div className="input bg-[#0F0F0F] w-[370px] max-[620px]:w-[300px] h-[69px] max-[620px]:h-[59px] border-2 border-[#1A1A1A] pl-[20px] rounded-[50px] text-white">
            <input
              className="bg-[#0F0F0F]  w-[346px] max-[620px]:w-[276px] h-[65px] max-[620px]:h-[56px] rounded-[50px] outline-none"
              type="text"
              placeholder="Search movies.."
              value={search}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="results mt-14 left-0 flex flex-col gap-[30px]">
        {results.map((result) => (
          <div
            className="result flex gap-[20px] border-2 border-[#1A1A1A] text-white left-0"
            key={result.id}
          >
            <NavLink to={`/movie/${result.id}`}>
              <img
                className="w-[200px]"
                src={`${IMAGE_URL}${result.poster_path}`}
                alt={result.title}
              />
            </NavLink>
            <div className=" pt-[10px]">
              <h2 className="text-[38px] ">{result.title}</h2>
              <h5>{result.release_date}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
