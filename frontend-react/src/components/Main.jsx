import React from "react";
import Button from "./Button";


const Main = () => {
  return (
    <>
      <div className="container px-0">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            This stock prediction application leverages machine learning
            techniques, specifically utilizing the Keras library and an LSTM
            model, and is integrated within the Django framework. It predicts
            future stock prices by analyzing the 100-day and 200-day moving
            averages, which are key indicators commonly used by stock analysts
            to guide trading and investment decisions.
          </p>
          <Button className={"btn btn-info"} text={"Login"} />
        </div>
      </div>
    </>
  );
};

export default Main;
