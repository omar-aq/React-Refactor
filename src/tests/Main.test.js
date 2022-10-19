import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Main from "../components/Main";
import store from "../store";

test("Check for welcoming text", () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  const welcomeText = screen.getByText(/welcome/i);
  expect(welcomeText).toBeInTheDocument();
});
