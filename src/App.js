import React from "react";
import { BsMouse } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply, half, reset, log, sqrt } from "./actions";
import "./App.css";

function App() {
  const myState = useSelector((state) => state.UpdateNumber);
  const myData = useSelector((state) => state.mathOperations)
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h1>Hello This is React Redux</h1>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{myState}</span>
          <button onClick={() => dispatch(increment())}>+</button>
          {myState}
          <button onClick={() => dispatch(multiply())}>
            x<sup>2</sup>
          </button>
          <span>{myState}</span>
          <button onClick={() => dispatch(half())}>/2</button>
          <span>{myState}</span>
          <button onClick={() => dispatch(reset())}>CE</button>
        </div>
      <h1 className="mouse">
        <BsMouse />
      </h1>
      </div>
      <div className="App">
        <h1>Hello This is React redux with multiple reducers</h1>
        <div>
          <button onClick={() => dispatch(log())}>log10</button>
          <span>{myData}</span>
          <button onClick={() => dispatch(sqrt())}>√</button>
        </div>
      </div>
    </>
  );
}

export default App;
