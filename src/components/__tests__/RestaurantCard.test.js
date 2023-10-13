import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Andhra Gunpowder");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promo label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const promo = screen.getByText(/₹100 OFF ABOVE ₹299/);

  expect(promo).toBeInTheDocument();
});
