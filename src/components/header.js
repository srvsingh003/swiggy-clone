import React, { useState } from "react";
import logo from "../../public/Images/logo.avif";
import searchicon from "../../public/Images/search.svg";
import cart from "../../public/Images/cart.svg";
import signin from "../../public/Images/trainer-icon.svg";
import offer from "../../public/Images/offer-icon.svg";
import corporate from "../../public/Images/corporate.svg";
import help from "../../public/Images/help.svg";
import arrow from "../../public/Images/arrow-down.svg";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import foodCategory from "../../public/json/foodCategory";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(foodCategory);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          axios
            .get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            )
            .then((res) => {
              setUserLocation(res.data.address);
              setLoading(false);
              localStorage.setItem("location", JSON.stringify(userLocation));
            })
            .catch((error) => console.log(error));
        },
        (error) => console.log(error)
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  };

  const storedLocation = JSON.parse(localStorage.getItem("location"));

  const clearLocation = function () {
    localStorage.clear();
  };

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40" />
      )}
      <div className="px-[150px] py-4 flex justify-between items-center bg-white  shadow-lg">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 hover:scale-110 cursor-pointer"
          />
          <div
            className="ml-10 relative flex items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <div>
              {storedLocation
                ? `${storedLocation?.suburb},${storedLocation?.county}`
                : "Select the location"}
            </div>

            <img
              src={arrow}
              alt="arrow"
              className={`absolute right-[-25px] top-1 transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
        <ul className="flex justify-between items-center w-1/2">
          <li className="hover:text-orange-500 font-semibold cursor-pointer flex items-center">
            <img src={corporate} alt="" className="mr-2 w-4 h-4" /> Swiggy
            Corporate
          </li>
          <li className="hover:text-orange-500 font-semibold cursor-pointer flex items-center">
            <img src={searchicon} alt="" className="mr-2 w-4 h-4" /> Search
          </li>
          <li className="hover:text-orange-500 font-semibold cursor-pointer flex items-center">
            <img src={offer} alt="" className="mr-2 w-4 h-4" /> Offers
          </li>
          <li className="hover:text-orange-500 font-semibold cursor-pointer flex items-center">
            <img src={help} alt="" className="mr-2 w-4 h-4" /> Help
          </li>
          <li className="hover:text-orange-500 font-semibold cursor-pointer flex items-center">
            <img src={signin} alt="" className="mr-2 w-4 h-4" /> Sign In
          </li>
          <li className="hover:text-orange-500 font-semibold cursor-pointer flex items-center">
            <img src={cart} alt="" className="mr-2 w-4 h-4" /> Cart
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div
          className={`w-[500px] fixed inset-y-0 left-0  bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            transition: ".5s",
          }}
        >
          <div
            className="flex justify-end m-6 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>

          <div className="px-10 py-4 flex justify-center flex-col items-center">
            <input
              type="text"
              className="shadow-lg border border-gray-200 outline-none w-[400px] py-3 placeholder:text-gray-400 placeholder:font-semibold placeholder:opacity-50 px-4"
              placeholder="Search for area, street name"
            />
            {loading ? (
              <div className=" mt-6">
                <ClipLoader />
              </div>
            ) : (
              <div
                className="border border-gray-200 h-[70px] w-[400px] mt-6 flex items-center px-6 cursor-pointer"
                onClick={getLocation}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-crosshair"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  </svg>
                </span>
                <span className="ml-4 ">
                  Get current location <br />
                  <span className="opacity-50 text-[12px]">Using GPS</span>
                </span>
              </div>
            )}
          </div>
          <div
            style={{ textAlign: "end" }}
            className="mr-10 text-sm hover:text-red-600 text-gray-500"
          >
            <span onClick={clearLocation}>Clear Location</span>
          </div>
          {userLocation && (
            <div className="p-6">
              <p>Subarea: {userLocation?.suburb}</p>
              <p>City: {userLocation?.county}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
