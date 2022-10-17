import { configureStore } from "@reduxjs/toolkit";
const counterReducer = (state = { counter: 0, success: false }, action) => {
  switch (action.type) {
    case "increase": {
      return { ...state, counter: state.counter + 1 };
    }
    case "decrease": {
      return { ...state, counter: state.counter - 1 };
    }
    case "success": {
      return { ...state, success: true };
    }
    case "logout": {
      return { ...state, success: false };
    }
    default: {
      return state;
    }
    // if (action.type === "increase") {
    //   return {
    //     ...state,
    //     counter: state.counter + 1,
    //   };
    // }
    // if (action.type === "decrease") {
    //   return {
    //     ...state,
    //     counter: state.counter - 1,
    //   };
    // }
    // if (action.type === "success") {
    //   return {
    //     ...state,
    //     success: true,
    //   };
    // }
    // if (action.type === "logout") {
    //   return {
    //     ...state,
    //     success: false,
    //   };
    // }
    // return state;
  }
};

const store = configureStore({ reducer: counterReducer });

export default store;
