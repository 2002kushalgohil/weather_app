import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [inputData, setInputData] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const apiKey = `d5bbf8c46db7f8f692314b8e6700b9af`;
  const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&APPID=${apiKey}`;

  let date = String(new window.Date());
  date = date.slice(3, 15);

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

  return (
    <div>
      <div id="HomeDiv">
        <div id="card">
          <div id="cardInput">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="City Name.."
                onChange={(e) => {
                  setInputData(e.target.value);
                }}
                value={inputData}
              />
              <button onClick={submitHandler}>Go</button>
            </form>
          </div>
          {typeof weatherData.main === "undefined" ? (
            <div id="cardData">
              {loading ? <p>Loading</p> : ""}
              <p>Search A City</p>
            </div>
          ) : (
            <div id="cardData">
              <p>City- {weatherData.name}</p>
              <p>Date- {date}</p>
              <p>Temprature- {weatherData.main.temp}</p>
              <p>Weather- {weatherData.weather[0].main}</p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
