import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactCountryFlag from "react-country-flag";

import supportbg from "/supportbg.svg"
import { useNavigate, NavLink } from "react-router-dom";

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
    answer: "Watch anywhere, anytime, on an unlimited number of devices.",
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
const Support = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [notification, setNotification] = useState("");
  const selectedCountryCode = watch("countryCode");

  const onSubmit = (data) => {
    console.log(data);
    setNotification("Your message has been sent!✅");
    setTimeout(() => setNotification(""), 4000);
    reset();
  };

  const countries = [
    { name: "O'zbekiston", dial_code: "+998", code: "UZ" },
    { name: "Rossiya", dial_code: "+7", code: "RU" },
    { name: "Qozog'iston", dial_code: "+7", code: "KZ" },
    { dial_code: "+82", code: "KR" },
  ];

  return (
    <div className="container">
      <div className=" md:mt-[198px] flex 2xl:gap-x-[80px] xl:gap-x-[50px] xl:flex-row flex-col items-center p-4 mt-[142px] ">
        <div>
          <h1 className="2xl:text-[48px] xl:text-[38px] text-[28px]">
            Welcome to our support page!
          </h1>
          <p className=" 2xl:text-[18px] xl:text-[16px] text-[#999999] mt-[14px] xl:mb-[50px] mb-[30px] text-[14px] ">
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <img className="2xl:w-[533px] xl:w-[429px]" src={supportbg} alt="" />
        </div>

        <div>
          {notification && (
            <div className="notification fixed top-[100px] font-black  rounded-lg p-3 pl-5 pr-5 bg-slate-200 text-green-500">
              {notification}
            </div>
          )}
          <div className=" 2xl:h-[739px] 2xl:w-[976px] xl:w-[800px] xl:h-[592px] bg-[#0F0F0F] 2xl:p-[50px] xl:p-[40px] border-2 border-[#262626] rounded-xl sm:w-[600px] w-[357px]  p-[24px] xl:mt-0 mt-[50px] ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex 2xl:w-[876px] 2xl:gap-x-[50px] items-center xl:flex-row flex-col w-[357px] md:gap-x-[20px] sm:flex-row sm:gap-x-[20px] ">
                <label htmlFor="first">
                  First Name
                  <input
                    id="first"
                    className=" 2xl:mt-[16px] xl:mt-[12px] 2xl:w-[413px] 2xl:h-[67px] 2xl:p-[20px] xl:w-[350px] xl:h-[53px] xl:p-[16px]  outline-none bg-[#141414] border-2 border-[#262626] rounded-lg sm:w-[266px] w-[309px] h-[53px] p-[16px] mt-[12px]  "
                    {...register("firstName")}
                    placeholder="Enter First Name"
                    required
                  />
                </label>
                <label htmlFor="last">
                  Last Name
                  <input
                    id="last"
                    className=" 2xl:mt-[16px] xl:mt-[12px] 2xl:w-[413px] 2xl:h-[67px] 2xl:p-[20px] xl:w-[350px] xl:h-[53px] xl:p-[16px]  outline-none bg-[#141414] border-2 border-[#262626] rounded-lg sm:w-[266px] w-[309px] h-[53px] p-[16px] mt-[12px] "
                    {...register("lastName")}
                    placeholder="Enter Last Name"
                    required
                  />
                </label>
              </div>
              <div className="flex 2xl:gap-x-[50px] xl:gap-x-[20px] items-center 2xl:mt-[50px] xl:mt-[40px]  xl:flex-row flex-col w-full sm:flex-row sm:gap-x-[20px] ">
                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    className="  2xl:mt-[16px] xl:mt-[12px] 2xl:w-[413px] 2xl:h-[67px] 2xl:p-[20px] xl:w-[350px] xl:h-[53px] xl:p-[16px] outline-none bg-[#141414] border-2 border-[#262626] rounded-lg  sm:w-[266px] w-[309px] h-[53px] p-[16px] mt-[12px]  "
                    {...register("email")}
                    placeholder="Enter your Email"
                    type="email"
                    required
                  />{" "}
                </label>

                <div className="xl:w-[413px] items-center flex 2xl:gap-x-[16px] gap-x-[12px] w-[309px] mt-[20px]">
                  <div>
                    <label htmlFor="number">Phone Number</label>
                    {selectedCountryCode && (
                      <ReactCountryFlag
                        className=" mt-[16px]"
                        countryCode={selectedCountryCode}
                        svg
                      />
                    )}
                    <select
                      className=" 2xl:mt-[16px] xl:mt-[12px] p-0 2xl:w-[94px] 2xl:h-[67px] xl:w-[78px] xl:h-[53px] outline-none bg-[#141414] border-2 border-[#262626] rounded-lg w-[60px] h-[44px] "
                      {...register("countryCode")}
                      required
                    >
                      {countries.map((country) => (
                        <option
                          className=" p-0 outline-none bg-[#141414] border-2 border-[#262626] rounded-lg "
                          key={country.code}
                          value={country.code}
                        >
                          ({country.dial_code})
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    id="number"
                    className=" 2xl:mt-[16px] xl:mt-[12px] 2xl:w-[240px] 2xl:h-[67px] 2xl:p-[20px] xl:w-[260px] xl:h-[53px] xl:p-[16px] outline-none bg-[#141414] border-2 border-[#262626] rounded-lg sm:w-[194px] w-[221px] h-[53px] "
                    {...register("phoneNumber")}
                    placeholder="Enter Phone Number"
                    type="tel"
                    required
                  />
                </div>
              </div>
              <div className=" 2xl:mt-[50px] xl:mt-[40px]">
                <label htmlFor="textarea">
                  Message
                  <textarea
                    id="textarea"
                    className=" 2xl:mt-[16px] xl:mt-[12px] p-[20px] 2xl:w-[876px] 2xl:h-[163px] xl:w-[720px] xl:h-[129px] bg-[#141414] outline-none border-2 border-[#262626] rounded-lg  sm:w-full w-[309px] h-[109px] mt-[12px] "
                    {...register("message")}
                    placeholder="Enter your Message"
                    required
                  />
                </label>
              </div>
              <div className="flex items-center 2xl:mt-[38px] xl:mt-[24px] justify-between  xl:flex-row flex-col">
                <label>
                  <input
                    className=" p-[20px] outline-none bg-[#141414] border-2 border-[#262626] rounded-lg "
                    type="checkbox"
                    {...register("terms")}
                    required
                  />
                  I agree with Terms of Use and Privacy Policy
                </label>
                <button
                  className="bg-[#E60000] w-[173px] h-[63px] text-[18px] rounded-lg "
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
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

export default Support;
