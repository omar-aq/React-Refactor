import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
// import userEvent from "@testing-library/user-event";
import ButtonsHandler from "../components/ButtonsHandler";
import SingleCard from "../components/SingleCard";
import store from "../store";

test("Check increase counter value", async () => {
  render(
    <Provider store={store}>
      <SingleCard />
    </Provider>
  );
  // const submit = await screen.findAllByRole("button");
  // fireEvent.click(submit);
  // submit[0].click();
  // localStorage.setItem("success", "true");
  const incCounter = await screen.findAllByRole("button");
  // counter.click();
  fireEvent.click(incCounter[0]);
  expect(incCounter[0].textContent).toBe("add(1)");
});
test("Check decrease counter value", async () => {
  render(
    <Provider store={store}>
      <SingleCard />
    </Provider>
  );
  const decCounter = await screen.findAllByRole("button");
  fireEvent.click(decCounter[1]);
  expect(decCounter[1].textContent).toBe("remove(0)");
});

// test("text add", () => {
//   render(<ButtonsHandler />);
//   const someText = screen.getByText(/add/i);
//   expect(someText).toBeInTheDocument();
// });

// test("on button click increase by one", () => {
//   render(<ButtonsHandler />);
//   const buttonElement = screen.getByRole("button");
//   userEvent.click(buttonElement);
//   expect(buttonElement).toHaveTextContent("add(1)");
// });
