import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
//Action Creator
// export const INCREASE = "increase";
// export const DECREASE = "decrease";
// export const SUCCESS = "success";
// export const LOGOUT = "logout";
const initialState = {
  counter: 0,
  success: false,
};
const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increase: (state) => {
    //   state.counter += 1;
    // },
    // decrease: (state) => {
    //   state.counter -= 1;
    // },
    success: (state) => {
      state.success = true;
    },
    logout: (state) => {
      state.success = false;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increase": {
//       return { ...state, counter: state.counter + 1 };
//     }
//     case "decrease": {
//       return { ...state, counter: state.counter - 1 };
//     }
//     case "success": {
//       return { ...state, success: true };
//     }
//     case "logout": {
//       return { ...state, success: false };
//     }
//     default: {
//       return state;
//     }
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
//   }
// };

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;

export default store;
