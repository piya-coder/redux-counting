import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Decrement, Increment, Reset } from "./Features/Redux/Action/Action";

export const App = () => {
  const dispatch = useDispatch();
  const value = useSelector ((state )=> state.value ) 
  const HandleIncrement = ()=>{
    dispatch(Increment());
  }
  const HandleDecrement = ()=>{
    dispatch(Decrement());
  }
  const HandleReset = ()=>{
    dispatch(Reset());
  }
  return (
    <div>
      <div className="maindiv">
        <div>
          <h1> Count : {value} </h1>
        </div>
        <div>
          <button onClick={HandleIncrement} >Increment</button>
          <button onClick={HandleDecrement} >Decrement</button>
          <button onClick={HandleReset} >Reset</button>
        </div>
      </div>
    </div>
  );
};
