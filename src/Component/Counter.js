import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/action";

export const Counter = () => {
  const [update, setUpdate] = useState(0);
  const [minute, setMinute] = useState(0);
  const temperature = useSelector((state) => state.counterReducer.temp);
  const dispatch = useDispatch();

  //   const handleIncrement = () => {
  //     dispatch(increment(0.02));
  //   };

  //   const handleDecrement = () => {
  //     dispatch(decrement(0.02));
  //   };
  function updateValue() {
    setInterval(() => {
      setUpdate((prev) => prev + 1);
    }, (60 - minute) * 60000);
  }
  useEffect(() => {
    const d = new Date();
    let hour = d.getHours() % 12 || 12;
    let min = d.getMinutes();
    setMinute(min);
    if (hour >= 55 && hour <= 59) {
      dispatch(increment(0.02));
      updateValue();
    } else {
      dispatch(decrement(0.02));
      updateValue();
    }
  }, [update]);

  return (
    <div>
      <h1>Temperature :- {temperature} </h1>
      {/* <button className="btnStyle" onClick={() => handleIncrement()}>
        +
      </button>
      <button className="btnStyle" onClick={() => handleDecrement()}>
        -
      </button> */}
    </div>
  );
};
