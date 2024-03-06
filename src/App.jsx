import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./Navbar";
import Search from "./Search";
import Movie from "./components/Movie";
import Shows from "./components/Shows";
import Show from "./components/show";
import Support from "./components/Support";
import Subscription from "./components/Subscription";

const API_KEY = "19f828966f3397ee924567d7e7ca4a06";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const App = () => {
  return (
    <div className=" bg-[#141414] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscription />} />
      </Routes>
    </div>
  );
};

export default App;
