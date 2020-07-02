import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";

const Counter = ({ increment, decrement, counter, name }) => {
  //console.log(props);
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h1>{counter}</h1>
      <p>{name}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    name: state.user.name,
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
