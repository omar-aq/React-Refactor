import { configureStore } from "@reduxjs/toolkit";
const counterReducer = (state = { counter: 0, success: false }, action) => {
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrease") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "success") {
    return {
      ...state,
      success: true,
    };
  }
  return state;
};

const store = configureStore({ reducer: counterReducer });

export default store;
