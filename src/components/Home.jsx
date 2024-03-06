import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom"; 
import ReactStars from "react-stars";
const API_KEY = "19f828966f3397ee924567d7e7ca4a06";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const questions = [
  {
    id: 1,
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
   
  {
    id: 2,
    question: "How much does StreamVibe cost?",
    answer:
      "Watch StreamVibe on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime, on an unlimited number of devices.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer:
      "StreamVibe is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. ",
  },
  {
    id: 5,
    question: "What can I watch on StreamVibe?",
    answer:
      "StreamVibe has an extensive library of feature films, documentaries, TV shows, anime, award-winning StreamVibe originals, and more.",
  },
  {
    id: 6,
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
];

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question home-questions w-[728px] max-[1440px]:w-[620px] max-[1024px]:w-[358px] ">
      {" "}
      <div className="header ">
        {" "}
        <div className="flex justify-between">
          <h3 className="text-[22px] max-[1024px]:text-[18px] ">{question}</h3>
          <button
            className="icon-button"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? (
              <svg
                width="30.000000"
                height="30.000000"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id="clip90_820">
                    <rect
                      id="Icon"
                      width="30.000000"
                      height="30.000000"
                      fill="white"
                    fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Icon"
                  width="30.000000"
                  height="30.000000"
                  fill="#FFFFFF"
                fillOpacity="0"
                />
                <g clipPath="url(#clip90_820)">
                  <path
                    id="Vector"
                    d="M23.75 13.75L6.25 13.75C5.91846 13.75 5.60059 13.8817 5.36609 14.1161C5.13171 14.3505 5 14.6685 5 15C5 15.3315 5.13171 15.6495 5.36609 15.8839C5.60059 16.1183 5.91846 16.25 6.25 16.25L23.75 16.25C24.0815 16.25 24.3994 16.1183 24.6339 15.8839C24.8683 15.6495 25 15.3315 25 15C25 14.6685 24.8683 14.3505 24.6339 14.1161C24.3994 13.8817 24.0815 13.75 23.75 13.75Z"
                    fill="#FFFFFF"
                  fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="30.000000"
                height="30.000000"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id="clip90_829">
                    <rect
                      id="Icon"
                      width="30.000000"
                      height="30.000000"
                      fill="white"
                    fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Icon"
                  width="30.000000"
                  height="30.000000"
                  fill="#FFFFFF"
                fillOpacity="0"
                />
                <g clipPath="url(#clip90_829)">
                  <path
                    id="Vector"
                    d="M23.75 13.75L16.25 13.75L16.25 6.25C16.25 5.91846 16.1183 5.60059 15.8839 5.36609C15.6494 5.13171 15.3315 5 15 5C14.6685 5 14.3506 5.13171 14.1161 5.36609C13.8817 5.60059 13.75 5.91846 13.75 6.25L13.75 13.75L6.25 13.75C5.91846 13.75 5.60059 13.8817 5.36609 14.1161C5.13171 14.3506 5 14.6685 5 15C5 15.3315 5.13171 15.6494 5.36609 15.8839C5.60059 16.1183 5.91846 16.25 6.25 16.25L13.75 16.25L13.75 23.75C13.75 24.0815 13.8817 24.3994 14.1161 24.6339C14.3506 24.8683 14.6685 25 15 25C15.3315 25 15.6494 24.8683 15.8839 24.6339C16.1183 24.3994 16.25 24.0815 16.25 23.75L16.25 16.25L23.75 16.25C24.0815 16.25 24.3994 16.1183 24.6339 15.8839C24.8683 15.6494 25 15.3315 25 15C25 14.6685 24.8683 14.3506 24.6339 14.1161C24.3994 13.8817 24.0815 13.75 23.75 13.75Z"
                    fill="#FFFFFF"
                  fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>
      {showAnswer && (
        <p className="text-[18px] text-[#999999] mt-[20px] max-[1024px]:text-[14px]  ">
          {answer}
        </p>
      )}
      
    </div>
  );
};

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
    );

    setMovies(response.data.results);
  };
  const handleClick = (id) => {
    let navigate = useNavigate();
    navigate(`/movie/${id}`);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(movies);
  return (
    <div className="home ">
      <div className="hero">
        <div className="linear"></div>
        <div className="linear2"></div>
        <Carousel
          additionalTransfrom={0}
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className="w-full object-cover carousel top-0"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          arrows={false}
        >
          {movies.slice(0, 20).map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                src={`${IMAGE_URL}${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </Carousel>
        <div className=" flex flex-col justify-center items-center md:absolute bottom-0 h-[296px] w-full max-[500px]:relative z-[1] max-[500px]:mt-[-100px]">
          <h1 className=" lg:text-[58px] md:text-[48px] text-[28px] text-center ">
            The Best Streaming Experience
          </h1>
          <p className=" text-center max-[768px]:hidden md:blok  md:text-[14px] md:max-w-[1096px] text-[#999999] lg:text-[18px] ">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <p className=" text-center mt-[10px] md:hidden border-l-sky-100 md:text-[14px] md:max-w-[1096px] text-[#999999] lg:text-[18px] ">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </p>
          <NavLink to="/shows">
            <button className=" flex items-center justify-center gap-x-[8.91px] bg-[#E60000] rounded-lg h-[64px] text-[18px] w-[251px] mt-[50px]">
              <svg
                width="17.838989"
                height="19.191650"
                viewBox="0 0 17.839 19.1917"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Rectangle 511 (Stroke)"
                  d="M0 2.19067C0 0.526855 1.78381 -0.527954 3.2417 0.273926L16.7057 7.67908C18.2168 8.51013 18.2168 10.6814 16.7057 11.5126L3.2417 18.9177C1.78381 19.7196 0 18.6648 0 17.001L0 2.19067Z"
                  fill="#FFFFFF"
                  fillOpacity="1.000000"
                  fillRule="evenodd"
                />
              </svg>
              Start Watching Now
            </button>
          </NavLink>
        </div>
      </div>
      <div className="explore mt-[150px] max-[768px]:mt-[50px] ">
        <div className="flex flex-col items-center w-full">
          <h2 className=" text-[30px]  ">Explore movies</h2>
          <div className="movies w-full flex flex-wrap gap-x-[90px] max-[768px]:flex max-[768px]:flex-wrap justify-center max-[768px]:gap-x-[20px] ">
            {movies.map((movie) => (
              <div
                className="movie p-[23px] w-[256px] mt-[40px] rounded-md border-2 border-[#262626] bg-[#1A1A1A] max-[768px]:w-[156px] max-[640px]:w-[136px] max-[640px]:p-[10px] "
                key={movie.id}
              >
                <button onClick={() => handleClick(movie.id)}>
                  <NavLink to={`/movie/${movie.id}`}>
                    <img
                      src={`${IMAGE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className=" w-[200px] "
                    />
                    <h3>{movie.title}</h3>
                    <div className="flex items-center h-[10px] mt-[10px] space-x-1 ">
                      <ReactStars
                        className=" max-[768px]:hidden "
                        name="movie-rating"
                        count={5}
                        value={movie.vote_average / 2}
                        size={28}
                        color2={"#E60000"}
                      />
                      <ReactStars
                        className=" md:hidden "
                        name="movie-rating"
                        count={5}
                        value={movie.vote_average / 2}
                        size={13}
                        color2={"#E60000"}
                      />
                      <h1 className=" mt-[5px] md:text-[16px] text-[12px]  ">
                        {movie.vote_count / 10}K
                      </h1>
                    </div>
                  </NavLink>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="home-body lg:mt-[150px] container">
        <div className="p-4">
          <h2 className="lg:text-[38px] max-[1024px]:text-[20px] max-[1024px]:mt-[51px] ">
            We Provide you streaming experience across various devices.
          </h2>
          <p className="2xl:text-[18px] text-[#999999] max-w-[1257px] lg:mb-[80px]  lg:text-[16px] max-[1024px]:text-[14px] max-[1024px]:mt-[10px]">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>
        <div className="devices flex flex-wrap justify-center xl:gap-[27px] lg:gap-[18px]  max-[1024px]:mt-[40px]  max-[1024px]:gap-y-[20px]">
          <div className="device 2xl:w-[512.33px] 2xl:h-[283px] border-2 rounded-xl flex flex-col justify-between border-[#262626] 2xl:p-[50px] lg:w-[413px] lg:h-[230px] lg:p-[40px] w-[361px] h-[195px] p-[24px]  ">
            <div className=" flex items-center gap-x-[16px]">
              <svg
                width="72.000000"
                height="72.000000"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className=" lg:w-[54px] w-[44px] "
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <filter
                    id="filter_184_845_dd"
                    x="26.395020"
                    y="17.602783"
                    width="19.654907"
                    height="36.005615"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="4" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect_backgroundBlur_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect_backgroundBlur_1"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip184_844">
                    <rect
                      id="Frame"
                      width="19.641476"
                      height="36.000000"
                      transform="translate(26.400024 17.600098)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                  <clipPath id="clip184_843">
                    <rect
                      id="Icon"
                      width="40.000000"
                      height="40.000000"
                      transform="translate(16.000000 16.000000)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="#141414"
                  fillOpacity="1.000000"
                />
                <g clipPath="url(#clip184_843)">
                  <rect
                    id="Frame"
                    width="19.641476"
                    height="36.000000"
                    transform="translate(26.400024 17.600098)"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <g clipPath="url(#clip184_844)">
                    <g filter="url(#filter_184_845_dd)">
                      <path
                        id="Vector"
                        d="M26.4 35.6C26.4 30.9566 26.3888 26.302 26.4 21.6587C26.4 19.7474 27.3669 18.3532 29.0646 17.8023C29.4694 17.6674 29.9078 17.6112 30.3351 17.6112C34.2589 17.6 38.1826 17.6 42.0952 17.6112C44.3776 17.6225 46.0415 19.2752 46.0415 21.5463C46.0527 30.9229 46.0527 40.2883 46.0415 49.6649C46.0415 51.936 44.3776 53.6 42.1064 53.6C38.2277 53.6112 34.3488 53.6112 30.47 53.6C28.0415 53.6 26.4225 52.0035 26.4113 49.5525C26.3888 44.8979 26.4 40.2546 26.4 35.6ZM36.2263 20.8717C35.4619 20.8717 34.6974 20.8717 33.9215 20.8717C33.3145 20.8829 32.9772 21.164 32.9659 21.6587C32.9547 22.1646 33.2695 22.5132 33.8541 22.5132C35.4281 22.5356 36.9908 22.5356 38.5649 22.5132C39.1271 22.5019 39.5093 22.1196 39.4868 21.6587C39.4644 21.1865 39.0934 20.8717 38.5199 20.8717C37.7554 20.8717 36.9908 20.8717 36.2263 20.8717ZM36.2263 47.079C35.3044 47.079 34.5736 47.8098 34.585 48.7093C34.5962 49.6087 35.3494 50.3395 36.2489 50.3283C37.1259 50.317 37.8341 49.5975 37.8341 48.7093C37.8453 47.7761 37.1483 47.079 36.2263 47.079Z"
                        fill="#E60000"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </g>
                    <path
                      id="Vector"
                      d="M26.4 35.6C26.4 34.0526 26.3987 32.504 26.3975 30.955C26.395 27.8556 26.3925 24.7547 26.4 21.6587C26.4 19.7474 27.3669 18.3532 29.0646 17.8023C29.4694 17.6674 29.9078 17.6112 30.3351 17.6112C34.2589 17.6 38.1826 17.6 42.0952 17.6112C44.3776 17.6225 46.0415 19.2752 46.0415 21.5463C46.0527 30.9229 46.0527 40.2883 46.0415 49.6649C46.0415 51.936 44.3776 53.6 42.1064 53.6Q39.1974 53.6084 36.2882 53.6084Q33.3792 53.6084 30.47 53.6C28.0415 53.6 26.4225 52.0035 26.4113 49.5525C26.3944 46.0619 26.3965 42.5776 26.3986 39.0902C26.3993 37.9273 26.4 36.764 26.4 35.6ZM27.3958 28.6308L27.4 21.6593L27.4 21.6587Q27.4 20.5383 27.9181 19.7892Q28.0209 19.6405 28.1426 19.5093Q28.6156 18.9994 29.3732 18.7535Q29.8003 18.6112 30.3351 18.6112L42.0952 18.6112Q42.7432 18.6144 43.3013 18.8391Q43.6711 18.988 43.9734 19.2236Q44.1021 19.3239 44.2185 19.4398Q44.3552 19.5759 44.4698 19.7286Q44.6819 20.0108 44.8186 20.3494Q45.0415 20.9012 45.0415 21.5463L45.0499 35.6058L45.0415 49.6643Q45.0415 50.3105 44.8185 50.8643Q44.6782 51.2124 44.4594 51.501Q44.349 51.6466 44.2185 51.777Q44.088 51.9075 43.9424 52.0179Q43.6538 52.2367 43.3058 52.3769Q42.7521 52.6 42.1064 52.6L36.3683 52.6084L30.4714 52.6Q29.7523 52.6 29.1688 52.3777Q28.7096 52.2028 28.3616 51.9Q28.2985 51.8452 28.2391 51.7861Q28.1802 51.7276 28.1254 51.6654Q27.8193 51.3181 27.6413 50.858Q27.4146 50.2722 27.4113 49.5479L27.3972 42.5748L27.4 35.6004L27.3958 28.6308ZM36.2262 19.8717L33.9215 19.8717L33.9031 19.8718Q33.1848 19.8851 32.6964 20.2269Q32.6383 20.2676 32.5834 20.3129Q32.4324 20.4377 32.317 20.5896Q32.2008 20.7424 32.1207 20.9226Q32.1122 20.9417 32.1042 20.9611Q31.9744 21.2732 31.9662 21.636Q31.958 22.0045 32.0719 22.3304Q32.0739 22.3361 32.076 22.3419Q32.1556 22.565 32.2863 22.7525Q32.3719 22.8752 32.4794 22.9827Q32.5644 23.0677 32.6594 23.1394Q32.8681 23.297 33.1252 23.3905Q33.4623 23.5132 33.8541 23.5132Q36.2095 23.5469 38.5792 23.513Q38.9489 23.5057 39.2767 23.385Q39.2946 23.3784 39.3123 23.3715Q39.5573 23.2761 39.7609 23.125Q39.8511 23.0581 39.9332 22.9802Q40.0966 22.8253 40.2136 22.6411Q40.2965 22.5106 40.3562 22.3653Q40.4238 22.2009 40.4567 22.0297Q40.4961 21.8246 40.4856 21.61Q40.473 21.3455 40.391 21.1046Q40.3549 20.9986 40.3053 20.8972Q40.2295 20.7424 40.1272 20.6079Q40.0054 20.4476 39.8457 20.3162Q39.7959 20.2751 39.7434 20.2378Q39.5055 20.0685 39.2134 19.9754Q38.8877 19.8717 38.5199 19.8717L36.2263 19.8717L36.2262 19.8717ZM38.5199 20.8717L33.9215 20.8717C33.3145 20.8829 32.9772 21.164 32.9659 21.6587C32.9547 22.1646 33.2695 22.5132 33.8541 22.5132C35.4281 22.5356 36.9908 22.5356 38.5649 22.5132C39.1271 22.5019 39.5093 22.1196 39.4868 21.6587C39.4644 21.1865 39.0934 20.8717 38.5199 20.8717ZM33.64 48.152Q33.5813 48.4303 33.585 48.7218Q33.5883 48.9887 33.6438 49.2442Q33.6998 49.5019 33.8087 49.7481Q33.9041 49.9633 34.0334 50.1555Q34.1863 50.3824 34.3867 50.5773Q34.5839 50.7689 34.8108 50.9138Q35.0096 51.0406 35.2312 51.1316Q35.4802 51.2338 35.7393 51.2829Q35.9954 51.3315 36.2614 51.3282Q36.5392 51.3246 36.8041 51.2644Q37.0406 51.2107 37.267 51.1118Q37.4846 51.0167 37.6785 50.8862Q37.8965 50.7394 38.0842 50.5478Q38.2642 50.3644 38.4028 50.1539Q38.5374 49.9495 38.6331 49.7195Q38.7251 49.4981 38.775 49.2675Q38.8341 48.9948 38.8341 48.7093Q38.8378 48.4121 38.7783 48.1281Q38.7318 47.9057 38.6465 47.6913Q38.5403 47.4242 38.382 47.1928Q38.2535 47.0049 38.0907 46.8406Q37.9286 46.6768 37.7428 46.5469Q37.5133 46.3864 37.2477 46.2774Q37.0991 46.2164 36.9453 46.1742Q36.5989 46.079 36.2263 46.079Q35.9153 46.079 35.62 46.1473Q35.403 46.1974 35.1945 46.2843Q34.9464 46.3878 34.7285 46.5357Q34.5264 46.6728 34.3502 46.8481Q34.1542 47.0432 34.0062 47.2697Q33.8767 47.4679 33.7841 47.6901Q33.6897 47.9164 33.64 48.152ZM36.2263 47.079C35.3044 47.079 34.5736 47.8098 34.585 48.7093C34.5962 49.6087 35.3494 50.3395 36.2489 50.3283C37.1259 50.317 37.8341 49.5975 37.8341 48.7093C37.8453 47.7761 37.1483 47.079 36.2263 47.079Z"
                      fill="#E60000"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  stroke="#1F1F1F"
                  strokeOpacity="1.000000"
                  strokeWidth="1.000000"
                />
              </svg>
              <h3 className=" 2xl:text-[24px] lg:text-[20px] ">Smartphones</h3>
            </div>
            <p className="text-[#999999] 2xl:text-[18px] lg:text-[16px] text-[14px] ">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="device 2xl:w-[512.33px] 2xl:h-[283px] border-2 rounded-xl flex flex-col justify-between border-[#262626] 2xl:p-[50px] lg:w-[413px] lg:h-[230px] lg:p-[40px] w-[361px] h-[195px] p-[24px] ">
            <div className=" flex items-center gap-x-[16px]">
              <svg
                width="72.000000"
                height="72.000000"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className=" lg:w-[54px] w-[44px] "
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <filter
                    id="filter_184_890_dd"
                    x="22.400146"
                    y="17.600098"
                    width="27.452637"
                    height="36.000000"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="4" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect_backgroundBlur_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect_backgroundBlur_1"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip184_889">
                    <rect
                      id="Frame"
                      width="27.452671"
                      height="36.000000"
                      transform="translate(22.400146 17.600098)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                  <clipPath id="clip184_888">
                    <rect
                      id="Icon"
                      width="40.000000"
                      height="40.000000"
                      transform="translate(16.000000 16.000000)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="#141414"
                  fillOpacity="1.000000"
                />
                <g clipPath="url(#clip184_888)">
                  <rect
                    id="Frame"
                    width="27.452671"
                    height="36.000000"
                    transform="translate(22.400146 17.600098)"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <g clipPath="url(#clip184_889)">
                    <g filter="url(#filter_184_890_dd)">
                      <path
                        id="Vector"
                        d="M22.4001 35.5832C22.4001 30.7697 22.4001 25.945 22.4001 21.1315C22.4001 18.8934 23.6935 17.6001 25.9203 17.6001C32.7244 17.6001 39.5286 17.6001 46.3326 17.6001C48.5594 17.6001 49.8528 18.8934 49.8528 21.1315C49.8528 30.7922 49.8528 40.4417 49.8528 50.1024C49.8528 52.2955 48.5482 53.6001 46.3665 53.6001C39.5398 53.6001 32.7244 53.6001 25.8978 53.6001C23.7159 53.6001 22.4114 52.2843 22.4114 50.1024C22.4001 45.2664 22.4001 40.4192 22.4001 35.5832ZM33.0056 49.3377C35.0974 49.3377 37.1667 49.3377 39.2361 49.3377C39.2361 48.6404 39.2361 47.9993 39.2361 47.3358C37.1331 47.3358 35.075 47.3358 33.0056 47.3358C33.0056 48.0218 33.0056 48.6741 33.0056 49.3377Z"
                        fill="#E60000"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </g>
                    <path
                      id="Vector"
                      d="M22.4001 35.5832L22.4001 21.1315C22.4001 18.8934 23.6935 17.6001 25.9203 17.6001L46.3326 17.6001C48.5594 17.6001 49.8528 18.8934 49.8528 21.1315L49.8528 50.1024C49.8528 52.2955 48.5482 53.6001 46.3665 53.6001L25.8978 53.6001C23.7159 53.6001 22.4114 52.2843 22.4114 50.1024C22.4001 45.2664 22.4001 40.4192 22.4001 35.5832ZM23.4001 28.3567L23.4001 21.1315Q23.4001 19.8602 24.0358 19.2273Q24.6658 18.6001 25.9203 18.6001L46.3326 18.6001Q47.5872 18.6001 48.2172 19.2273Q48.8528 19.8602 48.8528 21.1315L48.8528 50.1024Q48.8528 51.3569 48.2256 51.9813Q47.604 52.6001 46.3665 52.6001L25.8978 52.6001Q24.6602 52.6001 24.0386 51.9813Q23.4114 51.3569 23.4114 50.1024L23.4016 42.8436L23.4001 35.583L23.4001 28.3567ZM40.2361 50.3377L40.2361 46.3358L32.0056 46.3358L32.0056 50.3377L40.2361 50.3377ZM38.2361 49.3377L33.0056 49.3377L33.0056 48.3377L33.0056 48.3358L33.0056 47.3358L39.2361 47.3358L39.2361 48.3358L39.2361 48.3377L39.2361 49.3377L38.2361 49.3377Z"
                      fill="#E60000"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  stroke="#1F1F1F"
                  strokeOpacity="1.000000"
                  strokeWidth="1.000000"
                />
              </svg>

              <h3 className=" 2xl:text-[24px] lg:text-[20px] ">Tablet</h3>
            </div>
            <p className="text-[#999999] 2xl:text-[18px]  lg:text-[16px] text-[14px] ">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="device 2xl:w-[512.33px] 2xl:h-[283px] border-2 rounded-xl flex flex-col justify-between border-[#262626] 2xl:p-[50px] lg:w-[413px] lg:h-[230px] lg:p-[40px] w-[361px] h-[195px] p-[24px] ">
            <div className=" flex items-center gap-x-[16px]">
              <svg
                width="72.000000"
                height="72.000000"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className=" lg:w-[54px] w-[44px] "
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <filter
                    id="filter_184_894_dd"
                    x="18.788818"
                    y="22.800049"
                    width="34.622314"
                    height="25.604050"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="4" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect_backgroundBlur_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect_backgroundBlur_1"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip184_892">
                    <rect
                      id="Frame"
                      width="34.599998"
                      height="25.600000"
                      transform="translate(18.800049 22.800049)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                  <clipPath id="clip184_891">
                    <rect
                      id="Icon"
                      width="40.000000"
                      height="40.000000"
                      transform="translate(16.000000 16.000000)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="#141414"
                  fillOpacity="1.000000"
                />
                <g clipPath="url(#clip184_891)">
                  <rect
                    id="Frame"
                    width="34.599998"
                    height="25.600000"
                    transform="translate(18.800049 22.800049)"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <g clipPath="url(#clip184_892)">
                    <g filter="url(#filter_184_894_dd)">
                      <mask id="mask_184_894" fill="white">
                        <path
                          id="Union"
                          d="M18.8 39.8258L18.8 24.3296C18.8 23.269 19.2578 22.8 20.3403 22.8L51.8711 22.8C52.9424 22.8 53.4111 23.269 53.4111 24.3184L53.4111 39.8146C41.8704 39.8258 30.3743 39.8258 18.8 39.8258ZM33.6445 35.1144C35.5754 33.998 37.406 32.9373 39.3257 31.8321C37.3948 30.7156 35.542 29.655 33.6445 28.5497L33.6445 35.1144ZM48.6899 47.6074C48.4109 46.7477 48.0425 45.9215 47.6743 44.9837L47.675 44.9837C49.1814 44.9837 50.5986 44.9837 51.9937 44.9726C52.7527 44.9614 53.333 44.5372 53.3665 43.8561C53.405 43.2079 53.3958 42.5544 53.3862 41.8955C53.3818 41.6011 53.3777 41.3057 53.3777 41.0092L18.7888 41.0092L18.7888 43.3761C18.7888 44.5037 19.2576 44.9726 20.3738 44.9726L24.5146 44.9726C24.1685 45.8434 23.845 46.6472 23.5212 47.4511C23.3872 47.8083 23.3315 48.1656 23.7778 48.3331C24.2131 48.5005 24.4253 48.2103 24.5703 47.853C24.9053 47.0268 25.2625 46.2118 25.5637 45.3745C25.6865 45.0507 25.854 44.9726 26.1775 44.9726Q31.1416 44.9809 36.1055 44.9809Q41.0696 44.9809 46.0334 44.9726C46.3796 44.9726 46.5247 45.0842 46.6362 45.3968C46.9265 46.1672 47.239 46.9152 47.5515 47.6744C47.6072 47.7972 47.6519 47.9088 47.7078 48.0316C47.8528 48.3554 48.1541 48.5117 48.4221 48.3219C48.6006 48.1991 48.7568 47.8083 48.6899 47.6074ZM40.3188 43.2086L36.0776 43.2086C35.6094 43.2086 35.1396 43.2074 34.6697 43.2061C33.7285 43.2036 32.7854 43.2011 31.8474 43.2086C31.468 43.2086 31.0996 43.1639 31.0886 42.6839C31.0774 42.1926 31.4458 42.0921 31.8586 42.0921L40.3301 42.0921C40.7319 42.0921 41.1113 42.1815 41.1113 42.6727C41.1113 43.1863 40.7095 43.2086 40.3188 43.2086Z"
                          cliprulefillrule="evenodd"
                          fill=""
                          fillOpacity="1.000000"
                          fillRule="evenodd"
                        />
                      </mask>
                      <path
                        id="Union"
                        d="M18.8 39.8258L18.8 24.3296C18.8 23.269 19.2578 22.8 20.3403 22.8L51.8711 22.8C52.9424 22.8 53.4111 23.269 53.4111 24.3184L53.4111 39.8146C41.8704 39.8258 30.3743 39.8258 18.8 39.8258ZM33.6445 35.1144C35.5754 33.998 37.406 32.9373 39.3257 31.8321C37.3948 30.7156 35.542 29.655 33.6445 28.5497L33.6445 35.1144ZM48.6899 47.6074C48.4109 46.7477 48.0425 45.9215 47.6743 44.9837L47.675 44.9837C49.1814 44.9837 50.5986 44.9837 51.9937 44.9726C52.7527 44.9614 53.333 44.5372 53.3665 43.8561C53.405 43.2079 53.3958 42.5544 53.3862 41.8955C53.3818 41.6011 53.3777 41.3057 53.3777 41.0092L18.7888 41.0092L18.7888 43.3761C18.7888 44.5037 19.2576 44.9726 20.3738 44.9726L24.5146 44.9726C24.1685 45.8434 23.845 46.6472 23.5212 47.4511C23.3872 47.8083 23.3315 48.1656 23.7778 48.3331C24.2131 48.5005 24.4253 48.2103 24.5703 47.853C24.9053 47.0268 25.2625 46.2118 25.5637 45.3745C25.6865 45.0507 25.854 44.9726 26.1775 44.9726Q31.1416 44.9809 36.1055 44.9809Q41.0696 44.9809 46.0334 44.9726C46.3796 44.9726 46.5247 45.0842 46.6362 45.3968C46.9265 46.1672 47.239 46.9152 47.5515 47.6744C47.6072 47.7972 47.6519 47.9088 47.7078 48.0316C47.8528 48.3554 48.1541 48.5117 48.4221 48.3219C48.6006 48.1991 48.7568 47.8083 48.6899 47.6074ZM40.3188 43.2086L36.0776 43.2086C35.6094 43.2086 35.1396 43.2074 34.6697 43.2061C33.7285 43.2036 32.7854 43.2011 31.8474 43.2086C31.468 43.2086 31.0996 43.1639 31.0886 42.6839C31.0774 42.1926 31.4458 42.0921 31.8586 42.0921L40.3301 42.0921C40.7319 42.0921 41.1113 42.1815 41.1113 42.6727C41.1113 43.1863 40.7095 43.2086 40.3188 43.2086Z"
                        cliprulefillrule="evenodd"
                        fill="#E60000"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                        mask="url(#mask_184_894)"
                      />
                    </g>
                    <path
                      id="Union"
                      d="M48.0771 45.9827C47.9458 45.66 47.81 45.3295 47.6743 44.9837L47.675 44.9837C48.0385 44.9837 48.3968 44.9837 48.7508 44.9836C49.864 44.9831 50.9352 44.981 51.9937 44.9726C52.7527 44.9614 53.333 44.5372 53.3665 43.8561C53.405 43.2079 53.3958 42.5544 53.3862 41.8955C53.3818 41.6011 53.3777 41.3057 53.3777 41.0092L18.7888 41.0092L18.7888 43.3761C18.7888 44.5037 19.2576 44.9726 20.3738 44.9726L24.5146 44.9726C24.3786 45.3149 24.246 45.6469 24.1155 45.9726C23.9141 46.4754 23.7177 46.9632 23.5212 47.4511C23.3872 47.8083 23.3315 48.1656 23.7778 48.3331C24.2131 48.5005 24.4253 48.2103 24.5703 47.853C24.9053 47.0268 25.2625 46.2118 25.5637 45.3745C25.6865 45.0507 25.854 44.9726 26.1775 44.9726Q31.1416 44.9809 36.1055 44.9809Q41.0696 44.9809 46.0334 44.9726C46.3796 44.9726 46.5247 45.0842 46.6362 45.3968C46.9265 46.1672 47.239 46.9152 47.5515 47.6744C47.6072 47.7972 47.6519 47.9088 47.7078 48.0316C47.8528 48.3554 48.1541 48.5117 48.4221 48.3219C48.6006 48.1991 48.7568 47.8083 48.6899 47.6074C48.5138 47.0646 48.302 46.5353 48.0771 45.9827ZM46.2592 43.9837L47.675 43.9837L51.991 43.9726Q52.3075 43.9679 52.3582 43.8494Q52.3666 43.8298 52.3677 43.807Q52.4031 43.2099 52.3876 42.0092L41.9885 42.0092Q42.1113 42.3006 42.1113 42.6727Q42.1113 43.2239 41.8501 43.5873Q41.6823 43.8206 41.4069 43.9765L46.0327 43.9726Q46.1499 43.9726 46.2592 43.9837ZM30.7538 43.9764Q30.5655 43.8717 30.4305 43.7196Q30.1039 43.3517 30.0889 42.7071Q30.08 42.3147 30.2084 42.0092L19.7888 42.0092L19.7888 43.3761Q19.7888 43.6801 19.9408 43.8292Q20.087 43.9726 20.3738 43.9726L25.9927 43.9726L25.9897 43.98Q26.081 43.9726 26.1775 43.9726L30.7538 43.9764ZM18.8 38.8258L18.8 39.8258L19.8 39.8258C31.0366 39.8258 42.2028 39.8255 53.4111 39.8146L53.4111 24.3184C53.4111 23.269 52.9424 22.8 51.8711 22.8L20.3403 22.8C19.2578 22.8 18.8 23.269 18.8 24.3296L18.8 38.8258ZM19.8 38.8256L40.8315 38.8229L52.4111 38.8153L52.4111 24.3184Q52.4111 24.0698 52.287 23.9405Q52.1522 23.8 51.8711 23.8L20.3403 23.8Q20.0648 23.8 19.9297 23.9378Q19.8 24.0701 19.8 24.3296L19.8 38.8256ZM32.6445 26.8145L32.6445 36.848L34.1453 35.98L37.1902 34.2189L41.3269 31.8318L36.3486 28.9608L32.6445 26.8145ZM34.6445 34.536C34.3136 34.7275 33.9806 34.9201 33.6445 35.1144L33.6445 28.5497C33.979 28.7446 34.3121 28.938 34.6445 29.1306C35.87 29.8408 37.0858 30.5396 38.3256 31.2546C38.657 31.4458 38.9902 31.6381 39.3257 31.8321C38.9896 32.0256 38.6562 32.2177 38.3245 32.409C37.0916 33.1203 35.8823 33.82 34.6445 34.536ZM36.0776 43.2086L40.3188 43.2086C40.7095 43.2086 41.1113 43.1863 41.1113 42.6727C41.1113 42.1815 40.7319 42.0921 40.3301 42.0921L31.8586 42.0921C31.4458 42.0921 31.0774 42.1926 31.0886 42.6839C31.0996 43.1639 31.468 43.2086 31.8474 43.2086C32.7854 43.2011 33.7285 43.2036 34.6697 43.2061C35.1396 43.2074 35.6094 43.2086 36.0776 43.2086Z"
                      cliprulefillrule="evenodd"
                      fill="#E60000"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  stroke="#1F1F1F"
                  strokeOpacity="1.000000"
                  strokeWidth="1.000000"
                />
              </svg>

              <h3 className=" 2xl:text-[24px] lg:text-[20px] ">Smart TV</h3>
            </div>
            <p className="text-[#999999] 2xl:text-[18px]  lg:text-[16px] text-[14px] ">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="device 2xl:w-[512.33px] 2xl:h-[283px] border-2 rounded-xl flex flex-col justify-between border-[#262626] 2xl:p-[50px] lg:w-[413px] lg:h-[230px] lg:p-[40px] w-[361px] h-[195px] p-[24px] ">
            <div className=" flex items-center gap-x-[16px]">
              <svg
                width="72.000000"
                height="72.000000"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className=" lg:w-[54px] w-[44px] "
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <filter
                    id="filter_184_899_dd"
                    x="17.804077"
                    y="22.199951"
                    width="36.607056"
                    height="26.799988"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="4" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect_backgroundBlur_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect_backgroundBlur_1"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip184_898">
                    <rect
                      id="Frame"
                      width="36.599998"
                      height="26.799999"
                      transform="translate(17.799988 22.199951)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                  <clipPath id="clip184_897">
                    <rect
                      id="Icon"
                      width="40.000000"
                      height="40.000000"
                      transform="translate(16.000000 16.000000)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="#141414"
                  fillOpacity="1.000000"
                />
                <g clipPath="url(#clip184_897)">
                  <rect
                    id="Frame"
                    width="36.599998"
                    height="26.799999"
                    transform="translate(17.799988 22.199951)"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <g clipPath="url(#clip184_898)">
                    <g filter="url(#filter_184_899_dd)">
                      <mask id="mask_184_899" fill="white">
                        <path
                          id="Union"
                          d="M49.1366 22.2L23.1368 22.2C21.8178 22.2 21.4515 22.5654 21.4515 23.8445L21.4515 37.61C21.4515 38.8769 21.83 39.2545 23.0757 39.2545L49.1366 39.2545C50.3822 39.2545 50.7607 38.8769 50.7607 37.61L50.7607 23.8445C50.7607 22.5776 50.3822 22.2 49.1366 22.2ZM19.3754 48.9999L52.8491 48.9999C53.1422 48.9999 53.4597 48.9878 53.7406 48.8903C54.3878 48.6711 54.5833 48.135 54.2534 47.5381C53.0933 45.4185 51.9209 43.311 50.7485 41.2036C50.4677 40.7163 50.0647 40.4727 49.5029 40.4727L22.6971 40.4727C22.1354 40.4727 21.7324 40.7163 21.4637 41.2036C20.2913 43.311 19.119 45.4185 17.9588 47.5381C17.629 48.135 17.8367 48.6711 18.4839 48.8903C18.7526 48.9878 19.0701 48.9999 19.3754 48.9999ZM36.8633 46.5663C36.6068 46.5649 36.3503 46.5636 36.0939 46.5636C35.8379 46.5636 35.5819 46.5649 35.3254 46.5663C34.8112 46.569 34.295 46.5717 33.7736 46.5636C32.992 46.5514 32.4547 46.0641 32.4424 45.3698C32.4302 44.651 32.9798 44.1394 33.798 44.1394C35.3368 44.1272 36.8877 44.1272 38.4264 44.1394C39.208 44.1516 39.7454 44.6389 39.7576 45.3332C39.7698 46.0398 39.2202 46.5514 38.402 46.5636C37.8892 46.5717 37.3762 46.569 36.8633 46.5663Z"
                          cliprulefillrule="evenodd"
                          fill=""
                          fillOpacity="1.000000"
                          fillRule="evenodd"
                        />
                      </mask>
                      <path
                        id="Union"
                        d="M49.1366 22.2L23.1368 22.2C21.8178 22.2 21.4515 22.5654 21.4515 23.8445L21.4515 37.61C21.4515 38.8769 21.83 39.2545 23.0757 39.2545L49.1366 39.2545C50.3822 39.2545 50.7607 38.8769 50.7607 37.61L50.7607 23.8445C50.7607 22.5776 50.3822 22.2 49.1366 22.2ZM19.3754 48.9999L52.8491 48.9999C53.1422 48.9999 53.4597 48.9878 53.7406 48.8903C54.3878 48.6711 54.5833 48.135 54.2534 47.5381C53.0933 45.4185 51.9209 43.311 50.7485 41.2036C50.4677 40.7163 50.0647 40.4727 49.5029 40.4727L22.6971 40.4727C22.1354 40.4727 21.7324 40.7163 21.4637 41.2036C20.2913 43.311 19.119 45.4185 17.9588 47.5381C17.629 48.135 17.8367 48.6711 18.4839 48.8903C18.7526 48.9878 19.0701 48.9999 19.3754 48.9999ZM36.8633 46.5663C36.6068 46.5649 36.3503 46.5636 36.0939 46.5636C35.8379 46.5636 35.5819 46.5649 35.3254 46.5663C34.8112 46.569 34.295 46.5717 33.7736 46.5636C32.992 46.5514 32.4547 46.0641 32.4424 45.3698C32.4302 44.651 32.9798 44.1394 33.798 44.1394C35.3368 44.1272 36.8877 44.1272 38.4264 44.1394C39.208 44.1516 39.7454 44.6389 39.7576 45.3332C39.7698 46.0398 39.2202 46.5514 38.402 46.5636C37.8892 46.5717 37.3762 46.569 36.8633 46.5663Z"
                        cliprulefillrule="evenodd"
                        fill="#E60000"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                        mask="url(#mask_184_899)"
                      />
                    </g>
                    <path
                      id="Union"
                      d="M23.1368 22.2L49.1366 22.2C50.3822 22.2 50.7607 22.5776 50.7607 23.8445L50.7607 37.61C50.7607 38.8769 50.3822 39.2545 49.1366 39.2545L23.0757 39.2545C21.83 39.2545 21.4515 38.8769 21.4515 37.61L21.4515 23.8445C21.4515 22.5654 21.8178 22.2 23.1368 22.2ZM23.1368 23.2L49.1366 23.2Q49.4386 23.2 49.5945 23.3509Q49.7607 23.5119 49.7607 23.8445L49.7607 37.61Q49.7607 37.9426 49.5945 38.1035Q49.4386 38.2545 49.1366 38.2545L23.0757 38.2545Q22.7736 38.2545 22.6177 38.1035Q22.4515 37.9425 22.4515 37.61L22.4515 23.8445Q22.4515 23.542 22.6025 23.3814Q22.7731 23.2 23.1368 23.2ZM52.8491 48.9999L19.3754 48.9999C19.0701 48.9999 18.7526 48.9878 18.4839 48.8903C17.8367 48.6711 17.629 48.135 17.9588 47.5381C19.119 45.4185 20.2913 43.311 21.4637 41.2036C21.7324 40.7163 22.1354 40.4727 22.6971 40.4727L49.5029 40.4727C50.0647 40.4727 50.4677 40.7163 50.7485 41.2036C51.9209 43.311 53.0933 45.4185 54.2534 47.5381C54.5833 48.135 54.3878 48.6711 53.7406 48.8903C53.4597 48.9878 53.1422 48.9999 52.8491 48.9999ZM52.8491 47.9999L19.3754 47.9999Q19.0341 47.9999 18.8675 47.9613L22.3394 41.6864Q22.4003 41.576 22.4937 41.5226Q22.5812 41.4727 22.6971 41.4727L49.5029 41.4727Q49.6243 41.4727 49.7161 41.5249Q49.8105 41.5786 49.8735 41.6877L53.3462 47.9638Q53.1807 47.9999 52.8491 47.9999ZM36.8569 47.5663L36.858 47.5663Q37.8943 47.5717 38.4169 47.5635Q39.1149 47.5531 39.6479 47.2513Q39.8715 47.1247 40.066 46.9468Q40.3947 46.6462 40.5672 46.2734Q40.7665 45.8428 40.7574 45.3156Q40.7399 44.3195 40.2348 43.7792Q39.6544 43.1584 38.4304 43.1394L36.1082 43.1303L33.798 43.1394Q33.1032 43.1394 32.5703 43.4331Q32.3366 43.5618 32.134 43.7471Q31.8153 44.0385 31.6434 44.3998Q31.4333 44.8414 31.4426 45.3874Q31.4602 46.389 31.9684 46.9298Q32.5461 47.5446 33.7581 47.5635Q34.2902 47.5717 35.329 47.5663L36.0905 47.5636L36.0908 47.5636L36.8569 47.5663ZM36.0939 46.5636C36.3503 46.5636 36.6068 46.5649 36.8633 46.5663C37.3762 46.569 37.8892 46.5717 38.402 46.5636C39.2202 46.5514 39.7698 46.0398 39.7576 45.3332C39.7454 44.6389 39.208 44.1516 38.4264 44.1394C36.8877 44.1272 35.3368 44.1272 33.798 44.1394C32.9798 44.1394 32.4302 44.651 32.4424 45.3698C32.4547 46.0641 32.992 46.5514 33.7736 46.5636C34.295 46.5717 34.8112 46.569 35.3254 46.5663C35.5819 46.5649 35.8379 46.5636 36.0939 46.5636Z"
                      cliprulefillrule="evenodd"
                      fill="#E60000"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  stroke="#1F1F1F"
                  strokeOpacity="1.000000"
                  strokeWidth="1.000000"
                />
              </svg>

              <h3 className=" 2xl:text-[24px] lg:text-[20px] ">Laptops</h3>
            </div>
            <p className="text-[#999999] 2xl:text-[18px] lg:text-[16px] text-[14px] ">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="device 2xl:w-[512.33px] 2xl:h-[283px] border-2 rounded-xl flex flex-col justify-between border-[#262626] 2xl:p-[50px] lg:w-[413px] lg:h-[230px] lg:p-[40px] w-[361px] h-[195px] p-[24px] ">
            <div className=" flex items-center gap-x-[16px]">
              <svg
                width="72.000000"
                height="72.000000"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className=" lg:w-[54px] w-[44px] "
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <filter
                    id="filter_184_904_dd"
                    x="18.194824"
                    y="22.398926"
                    width="36.000122"
                    height="26.390320"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="4" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect_backgroundBlur_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect_backgroundBlur_1"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip184_903">
                    <rect
                      id="Frame"
                      width="36.000000"
                      height="26.400000"
                      transform="translate(18.200073 22.399902)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                  <clipPath id="clip184_902">
                    <rect
                      id="Icon"
                      width="40.000000"
                      height="40.000000"
                      transform="translate(16.000000 16.000000)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="#141414"
                  fillOpacity="1.000000"
                />
                <g clipPath="url(#clip184_902)">
                  <rect
                    id="Frame"
                    width="36.000000"
                    height="26.400000"
                    transform="translate(18.200073 22.399902)"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <g clipPath="url(#clip184_903)">
                    <g filter="url(#filter_184_904_dd)">
                      <mask id="mask_184_904" fill="white">
                        <path
                          id="Union"
                          d="M35.0137 26.6881L37.3866 26.6881C37.3866 26.3158 37.3893 25.9516 37.392 25.5924C37.3973 24.8886 37.4025 24.2039 37.3866 23.5139C37.3625 22.891 36.8593 22.4359 36.26 22.3999C35.6609 22.3759 35.0616 22.7952 35.0258 23.3941C34.9922 24.1556 34.9996 24.9171 35.0072 25.6868C35.0105 26.0189 35.0137 26.3524 35.0137 26.6881ZM18.2002 42.1879C18.1514 40.8626 18.5231 39.6244 18.8956 38.3832C18.9811 38.0988 19.0664 37.8142 19.1469 37.5284C19.6382 35.7676 20.1655 34.0068 20.6808 32.246C22.047 27.4907 28.063 25.5382 31.7421 28.8681C31.8978 29.0119 32.1615 29.0957 32.3772 29.0957Q34.3279 29.105 36.2786 29.1047L36.3325 29.1047Q38.1299 29.1043 39.9271 29.0957C40.1189 29.0957 40.3706 29.0119 40.5144 28.8801C44.0977 25.5981 49.9818 27.4308 51.4438 32.0064C52.3785 34.9291 53.2174 37.8758 53.9965 40.8464C54.8953 44.2362 52.6422 47.8177 49.2268 48.6082C46.3866 49.2671 43.2947 47.674 42.0603 44.883C41.3174 43.218 40.1669 42.0083 38.3812 41.5651C36.7515 41.1698 35.0857 41.1578 33.4797 41.7328C31.8978 42.2957 30.8193 43.4337 30.1482 44.9789C29.4172 46.6797 28.1588 47.8656 26.3972 48.4525C22.4305 49.7701 18.4637 47.075 18.2002 42.9066C18.1921 42.7469 18.1948 42.5872 18.1975 42.4275C18.1989 42.3476 18.2002 42.2678 18.2002 42.1879ZM26.601 34.6536C26.4479 34.6536 26.3035 34.6522 26.1641 34.6508C25.8997 34.6482 25.6537 34.6458 25.4026 34.6536C24.6835 34.6896 24.1802 35.2166 24.2041 35.8754C24.2162 36.5103 24.7195 37.0013 25.4146 37.0373C25.6573 37.0451 25.9003 37.0427 26.1632 37.0401C26.3025 37.0387 26.4474 37.0373 26.601 37.0373L26.601 38.1034C26.6129 38.9179 27.1042 39.4449 27.8113 39.4329C28.5063 39.421 28.9738 38.9059 28.9857 38.1273C28.9937 37.899 28.9912 37.6708 28.9885 37.4289L28.9885 37.4289C28.9872 37.3027 28.9857 37.1728 28.9857 37.0373C29.146 37.0373 29.2928 37.0388 29.4315 37.0402L29.4316 37.0402C29.6873 37.0428 29.9152 37.045 30.1482 37.0373C30.8673 37.0133 31.3826 36.5103 31.3826 35.8395C31.3826 35.1807 30.8673 34.6776 30.1482 34.6536C29.9031 34.6457 29.658 34.6483 29.4025 34.6509C29.2708 34.6523 29.1364 34.6536 28.9978 34.6536C28.9978 34.5041 28.9991 34.3633 29.0006 34.2281C29.0032 33.9732 29.0056 33.7385 28.9978 33.5037C28.9738 32.773 28.4705 32.258 27.8113 32.258C27.1403 32.246 26.6368 32.7611 26.6129 33.4798C26.5952 33.7447 26.5972 34.003 26.5994 34.3077L26.5994 34.3077C26.6001 34.4163 26.601 34.5309 26.601 34.6536ZM43.5464 35.7796C43.1628 36.1629 42.8872 36.4144 42.6235 36.6899C42.0603 37.2769 42.0364 37.9955 42.5516 38.4986C43.0551 38.9897 43.7382 38.9538 44.3134 38.4028C44.601 38.1273 44.8527 37.8279 45.2361 37.4206C45.5597 37.8039 45.7993 38.1273 46.075 38.4148C46.6262 38.9658 47.3213 38.9897 47.8247 38.4986C48.316 38.0195 48.316 37.3008 47.7767 36.7379C47.4891 36.4384 47.1655 36.1868 46.7941 35.8395C47.2015 35.4801 47.5131 35.2286 47.7887 34.9411C48.316 34.3901 48.328 33.6714 47.8247 33.1803C47.3453 32.7132 46.6503 32.7251 46.111 33.2402C45.8113 33.5277 45.5477 33.8511 45.2241 34.2104C44.9005 33.8631 44.6609 33.5995 44.4092 33.348C43.798 32.7371 43.079 32.6772 42.5637 33.1923C42.0483 33.7073 42.0844 34.4261 42.6954 35.0369C42.9352 35.2765 43.2228 35.4921 43.5464 35.7796Z"
                          cliprulefillrule="evenodd"
                          fill=""
                          fillOpacity="1.000000"
                          fillRule="evenodd"
                        />
                      </mask>
                      <path
                        id="Union"
                        d="M35.0137 26.6881L37.3866 26.6881C37.3866 26.3158 37.3893 25.9516 37.392 25.5924C37.3973 24.8886 37.4025 24.2039 37.3866 23.5139C37.3625 22.891 36.8593 22.4359 36.26 22.3999C35.6609 22.3759 35.0616 22.7952 35.0258 23.3941C34.9922 24.1556 34.9996 24.9171 35.0072 25.6868C35.0105 26.0189 35.0137 26.3524 35.0137 26.6881ZM18.2002 42.1879C18.1514 40.8626 18.5231 39.6244 18.8956 38.3832C18.9811 38.0988 19.0664 37.8142 19.1469 37.5284C19.6382 35.7676 20.1655 34.0068 20.6808 32.246C22.047 27.4907 28.063 25.5382 31.7421 28.8681C31.8978 29.0119 32.1615 29.0957 32.3772 29.0957Q34.3279 29.105 36.2786 29.1047L36.3325 29.1047Q38.1299 29.1043 39.9271 29.0957C40.1189 29.0957 40.3706 29.0119 40.5144 28.8801C44.0977 25.5981 49.9818 27.4308 51.4438 32.0064C52.3785 34.9291 53.2174 37.8758 53.9965 40.8464C54.8953 44.2362 52.6422 47.8177 49.2268 48.6082C46.3866 49.2671 43.2947 47.674 42.0603 44.883C41.3174 43.218 40.1669 42.0083 38.3812 41.5651C36.7515 41.1698 35.0857 41.1578 33.4797 41.7328C31.8978 42.2957 30.8193 43.4337 30.1482 44.9789C29.4172 46.6797 28.1588 47.8656 26.3972 48.4525C22.4305 49.7701 18.4637 47.075 18.2002 42.9066C18.1921 42.7469 18.1948 42.5872 18.1975 42.4275C18.1989 42.3476 18.2002 42.2678 18.2002 42.1879ZM26.601 34.6536C26.4479 34.6536 26.3035 34.6522 26.1641 34.6508C25.8997 34.6482 25.6537 34.6458 25.4026 34.6536C24.6835 34.6896 24.1802 35.2166 24.2041 35.8754C24.2162 36.5103 24.7195 37.0013 25.4146 37.0373C25.6573 37.0451 25.9003 37.0427 26.1632 37.0401C26.3025 37.0387 26.4474 37.0373 26.601 37.0373L26.601 38.1034C26.6129 38.9179 27.1042 39.4449 27.8113 39.4329C28.5063 39.421 28.9738 38.9059 28.9857 38.1273C28.9937 37.899 28.9912 37.6708 28.9885 37.4289L28.9885 37.4289C28.9872 37.3027 28.9857 37.1728 28.9857 37.0373C29.146 37.0373 29.2928 37.0388 29.4315 37.0402L29.4316 37.0402C29.6873 37.0428 29.9152 37.045 30.1482 37.0373C30.8673 37.0133 31.3826 36.5103 31.3826 35.8395C31.3826 35.1807 30.8673 34.6776 30.1482 34.6536C29.9031 34.6457 29.658 34.6483 29.4025 34.6509C29.2708 34.6523 29.1364 34.6536 28.9978 34.6536C28.9978 34.5041 28.9991 34.3633 29.0006 34.2281C29.0032 33.9732 29.0056 33.7385 28.9978 33.5037C28.9738 32.773 28.4705 32.258 27.8113 32.258C27.1403 32.246 26.6368 32.7611 26.6129 33.4798C26.5952 33.7447 26.5972 34.003 26.5994 34.3077L26.5994 34.3077C26.6001 34.4163 26.601 34.5309 26.601 34.6536ZM43.5464 35.7796C43.1628 36.1629 42.8872 36.4144 42.6235 36.6899C42.0603 37.2769 42.0364 37.9955 42.5516 38.4986C43.0551 38.9897 43.7382 38.9538 44.3134 38.4028C44.601 38.1273 44.8527 37.8279 45.2361 37.4206C45.5597 37.8039 45.7993 38.1273 46.075 38.4148C46.6262 38.9658 47.3213 38.9897 47.8247 38.4986C48.316 38.0195 48.316 37.3008 47.7767 36.7379C47.4891 36.4384 47.1655 36.1868 46.7941 35.8395C47.2015 35.4801 47.5131 35.2286 47.7887 34.9411C48.316 34.3901 48.328 33.6714 47.8247 33.1803C47.3453 32.7132 46.6503 32.7251 46.111 33.2402C45.8113 33.5277 45.5477 33.8511 45.2241 34.2104C44.9005 33.8631 44.6609 33.5995 44.4092 33.348C43.798 32.7371 43.079 32.6772 42.5637 33.1923C42.0483 33.7073 42.0844 34.4261 42.6954 35.0369C42.9352 35.2765 43.2228 35.4921 43.5464 35.7796Z"
                        cliprulefillrule="evenodd"
                        fill="#E60000"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                        mask="url(#mask_184_904)"
                      />
                    </g>
                    <path
                      id="Union"
                      d="M37.3866 26.6881L35.0137 26.6881C35.0137 26.3524 35.0105 26.0189 35.0072 25.6868C34.9996 24.9171 34.9922 24.1556 35.0258 23.3941C35.0616 22.7952 35.6609 22.3759 36.26 22.3999C36.8593 22.4359 37.3625 22.891 37.3866 23.5139C37.4025 24.2039 37.3973 24.8886 37.392 25.5924C37.3893 25.9516 37.3866 26.3158 37.3866 26.6881ZM36.3915 25.6881L36.0073 25.6881L36.0072 25.677Q35.9924 24.1727 36.0239 23.454Q36.0243 23.4471 36.0269 23.4409Q36.0469 23.3922 36.2002 23.3981Q36.3249 23.4056 36.3663 23.4682Q36.3853 23.4968 36.3868 23.5369Q36.4023 24.2115 36.392 25.5847L36.392 25.5875L36.3915 25.6881ZM18.2002 42.1879C18.2002 42.2678 18.1989 42.3476 18.1975 42.4275C18.1948 42.5872 18.1921 42.7469 18.2002 42.9066C18.4637 47.075 22.4305 49.7701 26.3972 48.4525C28.1588 47.8656 29.4172 46.6797 30.1482 44.9789C30.8193 43.4337 31.8978 42.2957 33.4797 41.7328C35.0857 41.1578 36.7515 41.1698 38.3812 41.5651C40.1669 42.0083 41.3174 43.218 42.0603 44.883C43.2947 47.674 46.3866 49.2671 49.2268 48.6082C52.6422 47.8177 54.8953 44.2362 53.9965 40.8464C53.2174 37.8758 52.3785 34.9291 51.4438 32.0064C49.9818 27.4308 44.0977 25.5981 40.5144 28.8801C40.3706 29.0119 40.1189 29.0957 39.9271 29.0957Q38.1299 29.1043 36.3325 29.1047L36.2786 29.1047L36.1543 29.1047Q34.2658 29.1047 32.3772 29.0957C32.1615 29.0957 31.8978 29.0119 31.7421 28.8681C28.063 25.5382 22.047 27.4907 20.6808 32.246C20.1655 34.0068 19.6382 35.7676 19.1469 37.5284C19.0664 37.8142 18.9811 38.0988 18.8956 38.3832L18.8955 38.3838C18.523 39.6248 18.1514 40.8628 18.2002 42.1879ZM19.2002 42.1696L19.1995 42.1512Q19.1569 40.9914 19.8534 38.6707Q20.0267 38.0934 20.1095 37.7993Q20.4767 36.4834 21.2522 33.8489Q21.5115 32.9679 21.6406 32.5269Q22.0614 31.0624 22.9895 30.0746Q24.0094 28.9893 25.6421 28.4797Q27.3215 27.9555 28.7709 28.3275Q30.0043 28.644 31.071 29.6096Q31.2525 29.777 31.4639 29.8868Q31.8663 30.0957 32.3772 30.0957L36.2762 30.1047L36.3384 30.1047L39.9297 30.0957Q40.3575 30.0957 40.7128 29.9351Q40.9705 29.8185 41.1899 29.6174Q42.2193 28.6746 43.416 28.3512Q44.836 27.9675 46.4917 28.4558Q48.1138 28.9342 49.1408 29.991Q50.0485 30.9251 50.4912 32.3108Q51.7856 36.3579 53.0292 41.1Q53.2662 41.9939 53.1874 42.8592Q53.0795 44.0444 52.3792 45.1757Q51.7031 46.2677 50.7296 46.9065Q49.9587 47.4124 49.0012 47.634Q47.0206 48.0934 45.5679 47.4178Q43.94 46.6608 42.9749 44.4785Q42.0399 42.3834 40.4255 41.3577Q39.6104 40.8398 38.6222 40.5945Q36.1705 39.9999 33.9963 40.5342Q33.564 40.6404 33.1427 40.7913Q32.1499 41.1446 31.3559 41.756Q30.0063 42.7953 29.231 44.5805Q28.7305 45.745 27.87 46.4982Q27.1144 47.1596 26.0812 47.5038Q24.7114 47.9588 23.4608 47.7381Q22.425 47.5553 21.4709 46.909Q20.5229 46.2666 19.9678 45.3786Q19.2899 44.2942 19.1981 42.8435Q19.1926 42.7303 19.1974 42.4442Q19.2002 42.2761 19.2002 42.1879L19.2002 42.1696ZM26.6039 33.6536C26.5961 33.859 26.5976 34.0674 26.5993 34.3036L26.5994 34.3077C26.6001 34.4163 26.601 34.5309 26.601 34.6536C26.4479 34.6536 26.3035 34.6522 26.1641 34.6508L26.1619 34.6508C25.9681 34.6489 25.7842 34.6471 25.6009 34.6494C25.5349 34.6502 25.4689 34.6516 25.4026 34.6536C24.6835 34.6896 24.1802 35.2166 24.2041 35.8754C24.2162 36.5103 24.7195 37.0013 25.4146 37.0373C25.4766 37.0393 25.5386 37.0406 25.601 37.0415C25.7827 37.0439 25.9674 37.0421 26.1632 37.0401C26.3025 37.0387 26.4474 37.0373 26.601 37.0373L26.601 38.1034C26.6129 38.9179 27.1042 39.4449 27.8113 39.4329C28.5063 39.421 28.9738 38.9059 28.9857 38.1273C28.9868 38.0973 28.9876 38.0673 28.9883 38.0373C28.993 37.8388 28.9909 37.639 28.9885 37.4289L28.9885 37.4289C28.9872 37.3027 28.9857 37.1728 28.9857 37.0373C29.146 37.0373 29.2928 37.0388 29.4315 37.0402L29.4316 37.0402L29.4319 37.0402C29.6279 37.0422 29.8076 37.044 29.9858 37.0412C30.0399 37.0404 30.0939 37.0391 30.1482 37.0373C30.8673 37.0133 31.3826 36.5103 31.3826 35.8395C31.3826 35.1807 30.8673 34.6776 30.1482 34.6536C30.0981 34.652 30.048 34.6508 29.9978 34.65C29.8028 34.6468 29.6064 34.6488 29.4036 34.6509L29.4025 34.6509C29.2708 34.6523 29.1364 34.6536 28.9978 34.6536C28.9978 34.5041 28.9991 34.3633 29.0006 34.2281L29.0007 34.2221C29.0027 34.0237 29.0045 33.8373 29.0015 33.6536C29.0007 33.6035 28.9995 33.5536 28.9978 33.5037C28.9738 32.773 28.4705 32.258 27.8113 32.258C27.1403 32.246 26.6368 32.7611 26.6129 33.4798C26.609 33.5378 26.6061 33.5956 26.6039 33.6536ZM25.6043 33.6497Q25.4707 33.651 25.3713 33.6541Q24.1971 33.7127 23.6585 34.3278Q23.1676 34.8886 23.2048 35.9118Q23.2227 36.8625 23.7043 37.3889Q24.2432 37.9781 25.3629 38.0359Q25.4658 38.0393 25.601 38.0408L25.601 38.1034Q25.6121 38.8644 25.9554 39.4201Q26.0649 39.5974 26.2083 39.7538Q26.4891 40.0602 26.8368 40.2284Q27.2786 40.4421 27.8282 40.4328Q28.8241 40.4156 29.3604 39.9105Q29.9672 39.339 29.9856 38.1427Q29.9872 38.0968 29.9883 38.0408Q30.0983 38.0395 30.1815 38.0367Q31.3233 37.9987 31.8727 37.4089Q32.3826 36.8617 32.3826 35.8395Q32.3826 34.8292 31.8789 34.2854Q31.3297 33.6924 30.1815 33.6542Q30.1023 33.6516 30.0011 33.6503Q29.9998 33.5486 29.9972 33.4704Q29.9592 32.3113 29.361 31.7594Q28.8174 31.258 27.8113 31.258Q26.801 31.2399 26.2545 31.7344Q25.6575 32.2747 25.6142 33.427Q25.6081 33.5237 25.6043 33.6497ZM42.7866 35.1249C43.0069 35.3309 43.2628 35.5277 43.5464 35.7796C43.2608 36.0649 43.0351 36.2773 42.8296 36.4809C42.759 36.5507 42.6909 36.6196 42.6235 36.6899C42.0603 37.2769 42.0364 37.9955 42.5516 38.4986C43.0551 38.9897 43.7382 38.9538 44.3134 38.4028C44.3946 38.325 44.473 38.2453 44.5522 38.1617C44.7537 37.9496 44.961 37.7128 45.2361 37.4206C45.4809 37.7105 45.6776 37.9662 45.8782 38.198C45.9428 38.2726 46.0078 38.3448 46.075 38.4148C46.6262 38.9658 47.3213 38.9897 47.8247 38.4986C48.316 38.0195 48.316 37.3008 47.7767 36.7379C47.7019 36.6599 47.6246 36.5852 47.5446 36.5112C47.3174 36.3009 47.0688 36.0964 46.7941 35.8395C47.0883 35.58 47.3324 35.3768 47.5492 35.1756C47.6327 35.0982 47.7121 35.021 47.7887 34.9411C48.316 34.3901 48.328 33.6714 47.8247 33.1803C47.3453 32.7132 46.6503 32.7251 46.111 33.2402C46.0365 33.3116 45.9643 33.3853 45.8928 33.4611C45.6766 33.6906 45.4673 33.9404 45.2241 34.2104C44.9557 33.9223 44.7451 33.6919 44.5375 33.4782C44.4947 33.4342 44.4521 33.3909 44.4092 33.348C43.798 32.7371 43.079 32.6772 42.5637 33.1923C42.0483 33.7073 42.0844 34.4261 42.6954 35.0369C42.7251 35.0666 42.7555 35.0958 42.7866 35.1249ZM45.2071 32.7329Q45.1572 32.6818 45.1161 32.6407Q44.1809 31.7059 43.2924 31.7484Q42.5586 31.7835 41.8567 32.485Q41.4472 32.8943 41.2947 33.3837Q41.183 33.7424 41.2092 34.144Q41.2216 34.3328 41.2646 34.5144Q41.4219 35.1778 41.9885 35.7442Q42.0258 35.7814 42.0719 35.8248Q41.9702 35.9263 41.9011 35.9985Q41.0416 36.8942 41.0826 37.7466Q41.1187 38.4972 41.8531 39.2142Q42.5574 39.9014 43.2879 39.9305Q44.1291 39.964 45.0051 39.125Q45.0863 39.0472 45.1953 38.9344Q45.2835 39.0342 45.3531 39.1069Q46.2094 39.9629 47.046 39.9441Q47.7924 39.9273 48.5231 39.2144Q49.2623 38.4935 49.294 37.7427Q49.329 36.9127 48.4989 36.0461Q48.4151 35.9589 48.2947 35.8453Q48.4228 35.7247 48.5105 35.6332Q49.3314 34.7754 49.2996 33.9505Q49.2703 33.1937 48.5231 32.4646Q47.8043 31.7641 47.0661 31.743Q46.2549 31.7199 45.4203 32.517Q45.3273 32.6063 45.2071 32.7329Z"
                      cliprulefillrule="evenodd"
                      fill="#E60000"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  stroke="#1F1F1F"
                  strokeOpacity="1.000000"
                  strokeWidth="1.000000"
                />
              </svg>

              <h3 className=" 2xl:text-[24px] lg:text-[20px] ">
                Gaming Consoles
              </h3>
            </div>
            <p className="text-[#999999] 2xl:text-[18px] lg:text-[16px] text-[14px] ">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="device 2xl:w-[512.33px] 2xl:h-[283px] border-2 rounded-xl flex flex-col justify-between border-[#262626] 2xl:p-[50px] lg:w-[413px] lg:h-[230px] lg:p-[40px] w-[361px] h-[195px] p-[24px] ">
            <div className=" flex items-center gap-x-[16px]">
              <svg
                width="72.000000"
                height="72.000000"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className=" lg:w-[54px] w-[44px] "
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <filter
                    id="filter_184_909_dd"
                    x="19.403564"
                    y="23.000000"
                    width="33.606934"
                    height="25.197388"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="4" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect_backgroundBlur_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect_backgroundBlur_1"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip184_908">
                    <rect
                      id="Frame"
                      width="33.599998"
                      height="25.200001"
                      transform="translate(19.400146 23.000000)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                  <clipPath id="clip184_907">
                    <rect
                      id="Icon"
                      width="40.000000"
                      height="40.000000"
                      transform="translate(16.000000 16.000000)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="#141414"
                  fillOpacity="1.000000"
                />
                <g clipPath="url(#clip184_907)">
                  <rect
                    id="Frame"
                    width="33.599998"
                    height="25.200001"
                    transform="translate(19.400146 23.000000)"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <g clipPath="url(#clip184_908)">
                    <g filter="url(#filter_184_909_dd)">
                      <mask id="mask_184_909" fill="white">
                        <path
                          id="Union"
                          d="M35.3115 28.5942C35.603 28.593 35.8943 28.5918 36.1841 28.5918C36.4844 28.5918 36.7856 28.593 37.0876 28.5942C37.6941 28.5965 38.3037 28.5988 38.9133 28.5918C39.8582 28.5709 40.3933 28.0358 40.4038 27.0811Q40.4119 26.4509 40.4119 25.8206Q40.4116 25.1919 40.4038 24.5632C40.4038 23.5665 39.8477 23 38.8503 23L33.5496 23C32.5627 23.0105 32.0171 23.5665 32.0066 24.5737L32.0066 27.0391C32.0066 28.0463 32.5417 28.5814 33.5601 28.5918C34.1411 28.5988 34.7271 28.5965 35.3115 28.5942ZM25.3306 31.4035L47.1113 31.4035C49.0427 31.4035 50.1763 32.5261 50.1973 34.446C50.2078 35.4321 50.3757 35.5895 51.3625 35.6C52.4646 35.6 53.0105 36.135 53.0105 37.2261L53.0105 42.3669C53.0105 43.4579 52.4646 43.993 51.3625 43.993C50.3757 43.993 50.2078 44.1609 50.1973 45.147C50.1868 47.067 49.0427 48.2 47.1113 48.1895C45.5369 48.179 43.9624 48.179 42.3982 48.1056C41.4851 48.0636 40.6768 47.6649 39.9526 47.1299C39.2283 46.6053 38.5249 46.0598 37.8113 45.5352C36.709 44.7064 35.7434 44.7064 34.6411 45.5247C33.938 46.0493 33.2451 46.5739 32.5417 47.0984C31.5552 47.8223 30.4426 48.1895 29.2144 48.1895Q28.1909 48.1974 27.1675 48.1974L27.1475 48.1974Q26.134 48.1973 25.1206 48.1895C23.4202 48.179 22.2551 47.025 22.2236 45.3254L22.2236 44.8533C22.1921 44.2448 21.9507 44.014 21.3418 43.993L20.8171 43.993C19.9983 43.951 19.4209 43.4055 19.4209 42.5977C19.3999 40.7302 19.3999 38.8523 19.4104 36.9848C19.4209 36.198 19.9878 35.6525 20.7646 35.6C20.8481 35.593 20.927 35.5953 21.0076 35.5976C21.0483 35.5988 21.0896 35.6 21.1318 35.6C22.0032 35.6 22.2026 35.4007 22.2131 34.5194C22.2341 32.5051 23.3362 31.4035 25.3306 31.4035Z"
                          cliprulefillrule="evenodd"
                          fill=""
                          fillOpacity="1.000000"
                          fillRule="evenodd"
                        />
                      </mask>
                      <path
                        id="Union"
                        d="M35.3115 28.5942C35.603 28.593 35.8943 28.5918 36.1841 28.5918C36.4844 28.5918 36.7856 28.593 37.0876 28.5942C37.6941 28.5965 38.3037 28.5988 38.9133 28.5918C39.8582 28.5709 40.3933 28.0358 40.4038 27.0811Q40.4119 26.4509 40.4119 25.8206Q40.4116 25.1919 40.4038 24.5632C40.4038 23.5665 39.8477 23 38.8503 23L33.5496 23C32.5627 23.0105 32.0171 23.5665 32.0066 24.5737L32.0066 27.0391C32.0066 28.0463 32.5417 28.5814 33.5601 28.5918C34.1411 28.5988 34.7271 28.5965 35.3115 28.5942ZM25.3306 31.4035L47.1113 31.4035C49.0427 31.4035 50.1763 32.5261 50.1973 34.446C50.2078 35.4321 50.3757 35.5895 51.3625 35.6C52.4646 35.6 53.0105 36.135 53.0105 37.2261L53.0105 42.3669C53.0105 43.4579 52.4646 43.993 51.3625 43.993C50.3757 43.993 50.2078 44.1609 50.1973 45.147C50.1868 47.067 49.0427 48.2 47.1113 48.1895C45.5369 48.179 43.9624 48.179 42.3982 48.1056C41.4851 48.0636 40.6768 47.6649 39.9526 47.1299C39.2283 46.6053 38.5249 46.0598 37.8113 45.5352C36.709 44.7064 35.7434 44.7064 34.6411 45.5247C33.938 46.0493 33.2451 46.5739 32.5417 47.0984C31.5552 47.8223 30.4426 48.1895 29.2144 48.1895Q28.1909 48.1974 27.1675 48.1974L27.1475 48.1974Q26.134 48.1973 25.1206 48.1895C23.4202 48.179 22.2551 47.025 22.2236 45.3254L22.2236 44.8533C22.1921 44.2448 21.9507 44.014 21.3418 43.993L20.8171 43.993C19.9983 43.951 19.4209 43.4055 19.4209 42.5977C19.3999 40.7302 19.3999 38.8523 19.4104 36.9848C19.4209 36.198 19.9878 35.6525 20.7646 35.6C20.8481 35.593 20.927 35.5953 21.0076 35.5976C21.0483 35.5988 21.0896 35.6 21.1318 35.6C22.0032 35.6 22.2026 35.4007 22.2131 34.5194C22.2341 32.5051 23.3362 31.4035 25.3306 31.4035Z"
                        cliprulefillrule="evenodd"
                        fill="#E60000"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                        mask="url(#mask_184_909)"
                      />
                    </g>
                    <path
                      id="Union"
                      d="M36.1841 28.5918C35.8943 28.5918 35.603 28.593 35.3115 28.5942L35.3069 28.5942C34.724 28.5965 34.1396 28.5988 33.5601 28.5918C32.5417 28.5814 32.0066 28.0463 32.0066 27.0391L32.0066 24.5737C32.0171 23.5665 32.5627 23.0105 33.5496 23L38.8503 23C39.8477 23 40.4038 23.5665 40.4038 24.5632Q40.4116 25.1919 40.4119 25.8206Q40.4119 26.0074 40.4112 26.1941Q40.4095 26.6376 40.4038 27.0811C40.3933 28.0358 39.8582 28.5709 38.9133 28.5918C38.3049 28.5988 37.6965 28.5965 37.0912 28.5942L37.0876 28.5942C36.7856 28.593 36.4844 28.5918 36.1841 28.5918ZM36.1816 27.5919L35.3088 27.5942L35.3074 27.5942Q34.1453 27.5988 33.5703 27.5919Q33.2798 27.5889 33.139 27.4422Q33.0066 27.3043 33.0066 27.0391L33.0063 24.5841Q33.0096 24.2731 33.1664 24.1277Q33.3013 24.0027 33.5496 24L38.8503 24Q39.1162 24 39.2544 24.1328Q39.4039 24.2765 39.4041 24.5757Q39.4116 25.1982 39.4119 25.8206Q39.4119 26.4446 39.4041 27.0701Q39.401 27.3329 39.2681 27.4635Q39.1427 27.5865 38.9019 27.5919Q38.2998 27.5988 37.0903 27.5942L36.1816 27.5919ZM22.2236 44.8533L22.2236 45.3254C22.2551 47.025 23.4202 48.179 25.1206 48.1895Q26.134 48.1973 27.1475 48.1974L27.1675 48.1974Q28.1909 48.1974 29.2144 48.1895C30.4426 48.1895 31.5552 47.8223 32.5417 47.0984C33.2451 46.5739 33.938 46.0493 34.6411 45.5247C35.7434 44.7064 36.709 44.7064 37.8113 45.5352C38.5249 46.0598 39.2283 46.6053 39.9526 47.1299C40.6768 47.6649 41.4851 48.0636 42.3982 48.1056C43.9624 48.179 45.5369 48.179 47.1113 48.1895C49.0427 48.2 50.1868 47.067 50.1973 45.147C50.2078 44.1609 50.3757 43.993 51.3625 43.993C52.4646 43.993 53.0105 43.4579 53.0105 42.3669L53.0105 37.2261C53.0105 36.135 52.4646 35.6 51.3625 35.6C50.3757 35.5895 50.2078 35.4321 50.1973 34.446C50.1763 32.5261 49.0427 31.4035 47.1113 31.4035L25.3306 31.4035C23.3362 31.4035 22.2341 32.5051 22.2131 34.5194C22.2026 35.4007 22.0032 35.6 21.1318 35.6C21.0896 35.6 21.0483 35.5988 21.0076 35.5976L21.0071 35.5976C20.9267 35.5953 20.848 35.593 20.7646 35.6C19.9878 35.6525 19.4209 36.198 19.4104 36.9848C19.3999 38.8523 19.3999 40.7302 19.4209 42.5977C19.4209 43.4055 19.9983 43.951 20.8171 43.993L21.3418 43.993C21.9507 44.014 22.1921 44.2448 22.2236 44.8533ZM20.8468 42.993L21.3591 42.993L21.3762 42.9936Q22.2578 43.024 22.7194 43.4797Q23.1772 43.9316 23.2222 44.8016L23.2236 44.8274L23.2234 45.3069Q23.2408 46.245 23.7186 46.7156Q24.1938 47.1838 25.1245 47.1895L27.1475 47.1974L27.1636 47.1974L29.2144 47.1895Q29.987 47.1895 30.6818 46.9571Q31.3477 46.7344 31.9421 46.2983L32.9917 45.5114L34.0452 44.7218Q35.1446 43.9055 36.2396 43.9115Q37.3237 43.9174 38.4033 44.7294Q38.7219 44.9635 39.3511 45.437Q40.1409 46.0315 40.5466 46.3256Q41.5483 47.0655 42.4451 47.1067Q43.7932 47.17 46.5271 47.1859Q46.9209 47.1882 47.1167 47.1895Q48.1538 47.1952 48.6741 46.6794Q49.1918 46.1661 49.1975 45.1364Q49.2089 44.0641 49.7507 43.5283Q50.292 42.993 51.3625 42.993Q51.6976 42.993 51.8594 42.8256Q52.0105 42.6692 52.0105 42.3669L52.0105 37.2261Q52.0105 36.9289 51.8621 36.7728Q51.6978 36.6 51.3518 36.5999Q50.28 36.5885 49.7414 36.0469Q49.2087 35.5112 49.1975 34.4569Q49.1863 33.4353 48.67 32.922Q48.1484 32.4035 47.1113 32.4035L25.3306 32.4035Q24.2991 32.4035 23.77 32.9191Q23.2242 33.4509 23.2129 34.5313Q23.2006 35.5718 22.6742 36.089Q22.154 36.6 21.1318 36.6Q21.0752 36.6 20.9788 36.5972Q20.8752 36.5942 20.832 36.5977Q20.5911 36.614 20.4878 36.7416Q20.4125 36.8348 20.4104 36.9872L20.4038 39.7906L20.4209 42.5977Q20.4209 42.7493 20.4945 42.8432Q20.598 42.9751 20.8468 42.993Z"
                      cliprulefillrule="evenodd"
                      fill="#E60000"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
                <rect
                  id="Icon Container"
                  rx="6.000000"
                  width="71.000000"
                  height="71.000000"
                  transform="translate(0.500000 0.500000)"
                  stroke="#1F1F1F"
                  strokeOpacity="1.000000"
                  strokeWidth="1.000000"
                />
              </svg>

              <h3 className=" 2xl:text-[24px] lg:text-[20px] ">VR Headsets</h3>
            </div>
            <p className="text-[#999999] 2xl:text-[18px] lg:text-[16px] text-[14px] ">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
      </div>
      <div className="faq container p-6 ">
        {" "}
        <h2 className="text-[30px]  mt-[150px] max-[1024px]:mt-[80px] ">
          Frequently Asked Questions
        </h2>
        <p className=" text-[#999999] text-[18px] mb-[80px]">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about StreamVibe.
        </p>
        <div className="questions flex flex-wrap gap-x-[80px] max-[1024px]:gap-x-[40px] ">
          {" "}
          {questions.map((q) => (
            <Question key={q.id} {...q} />
          ))}
        </div>
      </div>
      <div className="footer container p-4 bottom-0 ">
        <div className="footer_top container flex xl:flex-row justify-between xl:items-center  2xl:mt-[150px] 2xl:w-[1596px] 2xl:h-[313px] rounded-xl 2xl:pl-[80px] 2xl:pt-[90px] 2xl:pb-[80px] 2xl:pr-[80px] xl:mt-[120px] xl:w-[1280px] xl:h-[236px] xl:pt-[80px] xl:pb-[80px] xl:pl-[60px] xl:pr-[60px] flex-col items-center w-full max-[1280px]:p-[50px] max-[1280px]:pl-[30px] max-[1280px]:pr-[30px] max-[124px]:w-[344px] ">
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
            <ul className=" flex flex-col gap-x-3 lg:w-[241px] w-[179px] ">
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
            <ul className=" flex flex-col gap-x-3 lg:w-[241px] w-[179px] ">
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
            <ul className=" flex flex-col gap-x-3 lg:w-[241px] w-[179px] ">
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
            <ul className=" flex flex-col gap-x-3 lg:w-[241px] w-[179px] ">
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
            <ul className=" flex flex-col gap-x-3 lg:w-[241px] w-[179px] ">
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
                      strokeOpacity="1.000000"
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
                      strokeOpacity="1.000000"
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
                      strokeOpacity="1.000000"
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
export default Home;
