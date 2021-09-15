import React from "react";
import Input from "./Input";
import Spinner from "./Spinner";
import { Card, CardEmpty } from "./Card";

function MainCard({ submitHandler, setInputData, inputData, loading ,weatherData}) {
  return (
    <div className="card">
      <Input
        submitHandler={submitHandler}
        setInputData={setInputData}
        inputData={inputData}
      />

      {loading ? <Spinner /> : ""}

      {typeof weatherData.main === "undefined" ? (
        <CardEmpty />
      ) : (
        <Card weatherData={weatherData} />
      )}
    </div>
  );
}

export default MainCard;
