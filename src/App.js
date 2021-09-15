import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cold from "./assets/cloud.gif";
import warm from "./assets/sun.gif";
import ImageComponent from "./Components/ImageComponent";
import MainCard from "./Components/MainCard";

function App() {
  const [inputData, setInputData] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const apiKey = `d5bbf8c46db7f8f692314b8e6700b9af`;
  const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&APPID=${apiKey}`;

  const fetchData = async () => {
    setLoading(true);

    const response = await fetch(apiLink);
    const data = await response.json();

    setLoading(false);
    setWeatherData(data);

    if (data.cod === "404") {
      toast.error("No Such City Found", {
        position: "top-center",
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setInputData("");

    if (inputData === "") {
      toast.error("Enter City Name", {
        position: "top-center",
      });
    }

    fetchData();
  };

  function weatherBackground() {
    if (typeof weatherData.main === "undefined") {
      return "";
    }
    if (weatherData.main.temp < 20) {
      return "cold";
    } else {
      return "warm";
    }
  }
  const dynamicClassname = weatherBackground();

  function weatherImage() {
    if (typeof weatherData.main === "undefined") {
      return "";
    }
    if (dynamicClassname === "cold") {
      return cold;
    } else {
      return warm;
    }
  }
  const dynamicImageName = weatherImage();

  return (
    <>
      <div className={`HomeDiv ${dynamicClassname}`}>
        <ImageComponent
          dynamicClassname={dynamicClassname}
          dynamicImageName={dynamicImageName}
        />

        <MainCard
          submitHandler={submitHandler}
          setInputData={setInputData}
          inputData={inputData}
          loading={loading}
          weatherData={weatherData}
        />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
