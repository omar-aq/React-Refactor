import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../store";
test("success to be false after logout", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const logout = await screen.findByTestId("logout");
  fireEvent.click(logout);
  expect(localStorage.getItem("success")).not.toBe("true");
});
