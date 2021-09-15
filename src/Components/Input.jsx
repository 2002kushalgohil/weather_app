import React from "react";

function Input({ submitHandler, setInputData, inputData }) {
  return (
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
  );
}

export default Input;
