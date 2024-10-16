import React from "react";
// import axios from "axios";
import axios from "axios";

import foodCategory from "../../public/json/foodCategory";

function Homepage() {
  const handleScrollLeft = function () {
    const element = document.querySelector(".no-scrollbar");
    element.scrollBy(-360, 0);
  };

  const handleScrollRight = function () {
    const element = document.querySelector(".no-scrollbar");
    element.scrollBy(360, 0);
  };

  // const data = axios
  //   .get("https://developers.zomato.com/api/v2.1/categories")
  //   .then((res) => console.log(res));

  // console.log(data);

  return (
    <div className="px-[180px] py-6">
      <section className=" mb-14">
        <span className=" flex justify-between">
          <h1 className=" font-bold text-2xl leading-6">
            What's on your mind?
          </h1>
          <span className=" flex ">
            <button onClick={() => handleScrollLeft()} className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>
            </button>

            <button onClick={() => handleScrollRight()} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </button>
          </span>
        </span>
        <div className="px-6 mt-8 flex overflow-x-scroll no-scrollbar">
          {foodCategory.map((e) => (
            <img
              src={e.image}
              alt="pizza image"
              className="w-[180px] h-[180px]"
            />
          ))}
        </div>
      </section>
      <hr />
      <section className="mt-6 mb-14">
        <span className=" flex justify-between">
          <h1 className=" font-bold text-2xl leading-6">
            Top restaurant chains in Bangalore
          </h1>
          <span className=" flex ">
            <button onClick={() => handleScrollLeft()} className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>
            </button>

            <button onClick={() => handleScrollRight()} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </button>
          </span>
        </span>
        <div className="px-6 mt-8 flex overflow-x-scroll no-scrollbar">
          {foodCategory.map((e) => (
            <img
              src={e.image}
              alt="pizza image"
              className="w-[180px] h-[180px]"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
import foodCategory from "../../public/json/foodCategory";

export default Homepage;
