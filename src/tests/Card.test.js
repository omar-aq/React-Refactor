import { screen, render } from "@testing-library/react";
import Cards from "../components/Cards";

test("Async api fetch", async () => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => [{ id: "p1", title: "First post" }],
  });
  render(<Cards />);

  const listItemElements = await screen.findAllByRole("listitem");
  expect(listItemElements).not.toHaveLength(0);
});
