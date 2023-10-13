import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each ");
  // });

  it("Should load contact us component", () => {
    render(<Contact />);

    //Query
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);

    //Query
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load Submit inside contact component", () => {
    render(<Contact />);

    //Query
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    //Query
    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 inputs boxes on the Contact component", () => {
    render(<Contact />);

    //Query
    const textboxes = screen.getAllByRole("textbox");

    //Assertion
    expect(textboxes.length).toBe(2);
  });

  it("Should not load 3 inputs boxes on the Contact component", () => {
    render(<Contact />);

    //Query
    const textboxes = screen.getAllByRole("textbox");

    //Assertion
    expect(textboxes.length).not.toBe(3);
  });
});
