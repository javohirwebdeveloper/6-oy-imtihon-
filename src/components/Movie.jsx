import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import ReactStars from "react-stars";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const API_KEY = "19f828966f3397ee924567d7e7ca4a06";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const Movie = () => {
  const [movie, setMovie] = useState({});
  const [comments, setComments] = useState([]); 

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}` 
      );
      setComments(data.results.slice(0, 2)); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchComments(); 
  }, [id]);

  const [cast, setCast] = useState([]);

  const fetchCast = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
      );
      setCast(data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCast();
  }, [id]);

  return (
    <div className="movie-details">
      <div>
        <div className="linear"></div>
        <div className="linear2"></div>
        <img
          className="movie-bg w-full object-cover carousel top-0"
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="flex relative z-[1] space-x-4 items-end  mt-[-700px] ">
          <img
            className="lg:mt-0 md:mt-[200px] mt-[300px]  bottom-0 lg:w-[400px]  sm:w-[300px] sm:ml-[60px] ml-[20px] w-[200px]   "
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className=" lg:flex hidden max-w-[900px] flex-col gap-[20px]">
            <h1 className=" text-[56px] ">{movie.title}</h1>
            <p className=" text-[22px] lg:pr-6">{movie.overview}</p>
            <p className=" text-[18px] ">{movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <div className="flex items-center h-[10px] mt-[10px] space-x-1 ">
              <ReactStars
                name="movie-rating"
                count={5}
                value={movie.vote_average / 2}
                size={28}
                color2={"#E60000"}
              />
              <h1 className=" mt-[5px] ">{movie.vote_count / 10}K</h1>
            </div>
            <p className=" text-[32px] ">
              <span className=" text-[22px] ">Genres:</span>{" "}
              {movie.genres &&
                movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="movie-info"></div>
      <div className="comments container bg-[#1A1A1A] mt-[150px] p-3  ">
        <div className=" lg:hidden flex  max-w-[900px] flex-col gap-[20px] md:mt-[100px] sm:mt-0 mt-[100px]">
          <h1 className=" md:text-[56px] text-[36px] ">{movie.title}</h1>
          <p className=" md:text-[22px] text-[14px] lg:pr-6">
            {movie.overview}
          </p>
          <p className=" text-[18px] ">{movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <div className="flex items-center h-[10px] mt-[10px] space-x-1 ">
            <ReactStars
              name="movie-rating"
              count={5}
              value={movie.vote_average / 2}
              size={28}
              color2={"#E60000"}
            />
            <h1 className=" mt-[5px] ">{movie.vote_count / 10}K</h1>
          </div>
          <p className=" md:text-[32px] text-[22px] ">
            <span className=" md:text-[22px] text-[14px] ">Genres:</span>{" "}
            {movie.genres && movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
        <h2 className="text-[30px] mt-[130px] ">Comments</h2>
        <div className=" flex flex-wrap">
          {comments.map((comment) => (
            <Accordion
              className="comment sm:w-[408.5px] w-[300px] "
              key={comment.id}
            >
              <AccordionSummary id="panel-header" aria-controls="panel-content">
                <h3 className="text-[22px] text-white ">{comment.author}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-[18px] text-[#999999] ">{comment.content}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="cast-list creators mt-[40px] bg-[#141414] rounded-xl border-[1px] p-4 border-[#999999]">
          <h1>Cast</h1>
          <div className="flex gap-x-4 flex-wrap gap-y-4 ">
            {cast
              .filter((person) => person.profile_path !== null)
              .map((person) => (
                <div
                  className="creator flex flex-col items-center"
                  key={person.id}
                >
                  <img
                    className="w-[100px] h-[100px] rounded-xl object-cover"
                    src={`${IMAGE_URL}${person.profile_path}`}
                    alt={person.name}
                  />
                  <h3>{person.name}</h3>
                  <p>{person.character}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="footer container p-4 bottom-0 ">
        <div className="footer_top  flex xl:flex-row justify-between xl:items-center  2xl:mt-[150px] 2xl:w-[1596px] 2xl:h-[313px] rounded-xl 2xl:pl-[80px] 2xl:pt-[90px] 2xl:pb-[80px] 2xl:pr-[80px] xl:mt-[120px] xl:w-[1280px] xl:h-[236px] xl:pt-[80px] xl:pb-[80px] xl:pl-[60px] xl:pr-[60px] flex-col items-center w-full max-[1280px]:p-[50px] max-[1280px]:pl-[30px] max-[1280px]:pr-[30px] max-[124px]:w-[344px] ">
          <div>
            <h2 className=" text-[48px] max-[1280px]:text-[24px] max-[1280px]:text-center ">
              Start your free trial today!
            </h2>
            <p className=" text-[#999999] text-[18px] mt-[14px] max-[1280px]:text-[14px] max-[1280px]:text-center ">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <NavLink to="/support">
            <button className=" bg-[#E60000] rounded-xl p-5 text-[18px] max-[1280px]:mt-[50px] hover:bg-transparent hover:border-2 hover:border-[#E60000] transition-[0.5s] ">
              Start a Free Trail
            </button>
          </NavLink>
        </div>
        <footer className=" bottom-0 lg:mt-[150px] rounded-t-xl pl-[20px] pt-[50px] max-[1024px]:mt-[80px] bg-[#0F0F0F]">
          <div className="flex lg:gap-x-[30px] max-[1024px]:flex-wrap max-[1024px]:gap-y-[30px] ">
            <ul className=" lg:w-[241px] w-[179px] ">
              <h1 className=" text-[16px] xl:text-[20px] ">Home</h1>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Devices
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  FAQ
                </a>
              </li>
            </ul>
            <ul className=" lg:w-[241px] w-[179px] ">
              <h1 className=" text-[16px] xl:text-[20px] ">Movies</h1>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Genres
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Trending
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  New Release
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Popular
                </a>
              </li>
            </ul>
            <ul className=" lg:w-[241px] w-[179px] ">
              <h1 className=" text-[16px] xl:text-[20px] ">Shows</h1>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Genres
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Trending
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  New Release
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Popular
                </a>
              </li>
            </ul>
            <ul className=" lg:w-[241px] w-[179px] ">
              <h1 className=" text-[16px] xl:text-[20px] ">Support</h1>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Cantact Us
                </a>
              </li>
            </ul>
            <ul className=" lg:w-[241px] w-[179px] ">
              <h1 className=" text-[16px] xl:text-[20px] ">Subscription</h1>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Plans
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" text-[14px] xl:text-[18px] text-[#999999] "
                >
                  Features
                </a>
              </li>
            </ul>
            <div className=" lg:w-[241px] w-[179px] ">
              <h1 className=" text-[16px] xl:text-[20px] ">Connect With Us</h1>
              <div className="flex gap-x-[14px] mt-[16px] ">
                <a href="https://www.facebook.com">
                  <svg
                    width="56.000000"
                    height="56.000000"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs>
                      <clipPath id="clip282_3273">
                        <rect
                          id="Icon"
                          width="24.000000"
                          height="24.000000"
                          transform="translate(16.000000 16.000000)"
                          fill="white"
                          fillOpacity="0"
                        />
                      </clipPath>
                    </defs>
                    <rect
                      id="Button"
                      rx="4.000000"
                      width="55.000000"
                      height="55.000000"
                      transform="translate(0.500000 0.500000)"
                      fill="#1A1A1A"
                      fillOpacity="1.000000"
                    />
                    <rect
                      id="Icon"
                      width="24.000000"
                      height="24.000000"
                      transform="translate(16.000000 16.000000)"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <g clipPath="url(#clip282_3273)">
                      <path
                        id="Vector"
                        d="M40 28C40 21.3726 34.6289 16 28 16C21.3711 16 16 21.3726 16 28C16 33.9894 20.3867 38.954 26.125 39.8542L26.125 31.4688L23.0781 31.4688L23.0781 28L26.125 28L26.125 25.3563C26.125 22.3488 27.918 20.6875 30.6562 20.6875C31.9688 20.6875 33.3438 20.9219 33.3438 20.9219L33.3438 23.875L31.832 23.875C30.3398 23.875 29.875 24.8 29.875 25.75L29.875 28L33.2031 28L32.6719 31.4688L29.875 31.4688L29.875 39.8542C35.6133 38.954 40 33.9894 40 28Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </g>
                    <rect
                      id="Button"
                      rx="4.000000"
                      width="55.000000"
                      height="55.000000"
                      transform="translate(0.500000 0.500000)"
                      stroke="#262626"
                      strokeOpafillOpacity="1.000000"
                      strokeWidth="1.000000"
                    />
                  </svg>
                </a>

                <a href="https://twitter.com">
                  <svg
                    width="56.000000"
                    height="56.000000"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs>
                      <clipPath id="clip282_3276">
                        <rect
                          id="Icon"
                          width="24.000000"
                          height="24.000000"
                          transform="translate(16.000000 16.000000)"
                          fill="white"
                          fillOpacity="0"
                        />
                      </clipPath>
                    </defs>
                    <rect
                      id="Button"
                      rx="4.000000"
                      width="55.000000"
                      height="55.000000"
                      transform="translate(0.500000 0.500000)"
                      fill="#1A1A1A"
                      fillOpacity="1.000000"
                    />
                    <rect
                      id="Icon"
                      width="24.000000"
                      height="24.000000"
                      transform="translate(16.000000 16.000000)"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <g clipPath="url(#clip282_3276)">
                      <path
                        id="Vector"
                        d="M23.5508 37.75C32.6055 37.75 37.5586 30.2467 37.5586 23.7419C37.5586 23.5309 37.5547 23.3153 37.543 23.1044C38.5078 22.4075 39.3398 21.5443 40 20.5553C39.1016 20.9546 38.1484 21.2154 37.1758 21.3287C38.2031 20.7129 38.9688 19.7455 39.3398 18.6058C38.3711 19.1785 37.3164 19.5826 36.2148 19.8006C35.4727 19.0115 34.4883 18.4891 33.418 18.314C32.3516 18.139 31.2539 18.321 30.2969 18.8321C29.3438 19.3431 28.582 20.1547 28.1328 21.1413C27.6875 22.1279 27.5742 23.2346 27.8203 24.2903C25.8633 24.1921 23.9492 23.6837 22.1992 22.7981C20.4531 21.9125 18.9102 20.6694 17.6719 19.1495C17.043 20.2332 16.8516 21.5156 17.1367 22.7361C17.418 23.9565 18.1562 25.0234 19.1953 25.72C18.4141 25.6952 17.6484 25.4847 16.9648 25.1059L16.9648 25.1669C16.9648 26.3041 17.3594 27.4066 18.0781 28.2867C18.7969 29.1669 19.8008 29.7706 20.918 29.995C20.1914 30.1931 19.4336 30.222 18.6953 30.0793C19.0078 31.0574 19.6211 31.9129 20.4453 32.5263C21.2695 33.1398 22.2656 33.4806 23.293 33.5012C21.5469 34.8711 19.3945 35.6141 17.1758 35.6106C16.7852 35.61 16.3906 35.5859 16 35.5385C18.2539 36.9838 20.875 37.7514 23.5508 37.75Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </g>
                    <rect
                      id="Button"
                      rx="4.000000"
                      width="55.000000"
                      height="55.000000"
                      transform="translate(0.500000 0.500000)"
                      stroke="#262626"
                      strokeOpafillOpacity="1.000000"
                      strokeWidth="1.000000"
                    />
                  </svg>
                </a>
                <a href="https://ru.linkedin.com/">
                  <svg
                    width="56.000000"
                    height="56.000000"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs>
                      <clipPath id="clip282_3279">
                        <rect
                          id="Icon"
                          width="24.000000"
                          height="24.000000"
                          transform="translate(16.000000 16.000000)"
                          fill="white"
                          fillOpacity="0"
                        />
                      </clipPath>
                    </defs>
                    <rect
                      id="Button"
                      rx="4.000000"
                      width="55.000000"
                      height="55.000000"
                      transform="translate(0.500000 0.500000)"
                      fill="#1A1A1A"
                      fillOpacity="1.000000"
                    />
                    <rect
                      id="Icon"
                      width="24.000000"
                      height="24.000000"
                      transform="translate(16.000000 16.000000)"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <g clipPath="url(#clip282_3279)">
                      <path
                        id="Vector"
                        d="M38.2227 16L17.7734 16C16.793 16 16 16.7734 16 17.7297L16 38.2656C16 39.2219 16.793 40 17.7734 40L38.2227 40C39.2031 40 40 39.2219 40 38.2703L40 17.7297C40 16.7734 39.2031 16 38.2227 16ZM23.1211 36.4515L19.5586 36.4515L19.5586 24.9953L23.1211 24.9953L23.1211 36.4515ZM21.3398 23.4344C20.1953 23.4344 19.2734 22.5109 19.2734 21.3719C19.2734 20.2328 20.1953 19.3094 21.3398 19.3094C22.4766 19.3094 23.4023 20.2328 23.4023 21.3719C23.4023 22.5062 22.4766 23.4344 21.3398 23.4344ZM36.4531 36.4515L32.8945 36.4515L32.8945 30.8828C32.8945 29.5563 32.8711 27.8453 31.043 27.8453C29.1914 27.8453 28.9102 29.2938 28.9102 30.7891L28.9102 36.4515L25.3555 36.4515L25.3555 24.9953L28.7695 24.9953L28.7695 26.5609L28.8164 26.5609C29.2891 25.6609 30.4531 24.7094 32.1797 24.7094C35.7852 24.7094 36.4531 27.0812 36.4531 30.1656L36.4531 36.4515Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </g>
                    <rect
                      id="Button"
                      rx="4.000000"
                      width="55.000000"
                      height="55.000000"
                      transform="translate(0.500000 0.500000)"
                      stroke="#262626"
                      strokeOpafillOpacity="1.000000"
                      strokeWidth="1.000000"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className=" mt-[100px] flex flex-wrap justify-between text-[#999999] border-t-[1px] border-[#999999] lg:pt-[24px] pt-[20px] ">
            <p>
              <a href="">@2023 streamvib, All Rights Reserved</a>
            </p>
            <div className=" flex  max-[660px]:pt-[20px] ">
              <p className="lg:w-[130px] lg:pr-[20.5px] pr-[15.5px] lg:h-[27px] border-r-[1px] border-r-[#999999] ">
                <a href="" className=" lg:text-[18px] text-[16px]">
                  Terms of Use
                </a>
              </p>
              <p className="lg:w-[150px] lg:pl-[20.5px] lg:pr-[20.5px] pr-[15.5px] pl-[15.5px] lg:h-[27px] ">
                <a href="" className=" lg:text-[18px] text-[16px]">
                  Privacy Policy
                </a>
              </p>
              <p className="lg:w-[130px] lg:pl-[20.5px] pl-[15.5px] lg:h-[27px] border-l-[1px] border-l-[#999999] ">
                <a href="" className=" lg:text-[18px] text-[16px]">
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Movie;
