import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply, half, reset } from "./actions";
import "./App.css";

function App() {
  const myState = useSelector((state) => state.UpdateNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello This is React</h1>
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
    </div>
  );
}

export default App;
