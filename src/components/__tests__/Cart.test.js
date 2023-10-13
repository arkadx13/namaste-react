import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Header from "../Header";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaurant Menu", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Leon Gourmet Burgers (7)");
  fireEvent.click(accordionHeader);
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(7);
});

it("Should load cart(0) initally", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const cart = screen.getByText("🛒(0)");
  expect(cart).toBeInTheDocument();
});

it("Should load 🛒(1) after clicking add button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Leon Gourmet Burgers (7)");
  fireEvent.click(accordionHeader);

  const addButtons = screen.getAllByRole("button", { name: "add +" });
  fireEvent.click(addButtons[0]);
  const cartIs1 = screen.getByText("🛒(1)");
  expect(cartIs1).toBeInTheDocument();
});

it("Should load Items with Clear button on Cart link", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Leon Gourmet Burgers (7)");
  fireEvent.click(accordionHeader);

  const addButtons = screen.getAllByRole("button", { name: "add +" });
  fireEvent.click(addButtons[1]);
  fireEvent.click(addButtons[2]);
  fireEvent.click(addButtons[3]);

  const cart = screen.getByText(/🛒/i);
  fireEvent.click(cart);

  const clearButton = screen.getByTestId("clearCart");
  fireEvent.click(clearButton);
  const emptyCart = screen.getByTestId("cartEmpty");
  expect(emptyCart).toBeInTheDocument();
});
