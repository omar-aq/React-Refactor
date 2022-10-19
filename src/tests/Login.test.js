import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import Login from "../pages/Login";
import store from "../store";

test("Check login username input", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const username = await screen.findByTestId("username");
  // await userEvent.type((username, 'mohammad'));
  await fireEvent.change(username, { target: { value: "mohammad" } });
  expect(username.value).toBe("mohammad");
});
test("check login password input", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const password = await screen.findByTestId("password");
  // await userEvent.type((username, 'mohammad'));
  await fireEvent.change(password, { target: { value: "123" } });
  expect(password.value).toBe("123");
});

test("success true on submit ", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const submit = await screen.findByTestId("submitBtn");
  submit.click();
  expect(localStorage.getItem("success")).toBe("true");
});
