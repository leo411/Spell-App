import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./List";

describe("List", () => {
  test("renders a list of damages", () => {
    const damageAtSlotLevel = {
      "2": "two",
      "3": "three",
      "4": "four",
      "5": "five",
      "6": "six",
      "7": "seven",
      "8": "eight",
      "9": "nine",
    };

    render(<List {...{ damageAtSlotLevel }} />);
    expect(screen.getByTestId("damage2")).toHaveTextContent("💥two 💥");
    expect(screen.getByTestId("damage3")).toHaveTextContent("three 💥");
    expect(screen.getByTestId("damage4")).toHaveTextContent("four 💥");
    expect(screen.getByTestId("damage5")).toHaveTextContent("five 💥");
    expect(screen.getByTestId("damage6")).toHaveTextContent("six 💥");
    expect(screen.getByTestId("damage7")).toHaveTextContent("seven 💥");
    expect(screen.getByTestId("damage8")).toHaveTextContent("eight 💥");
    expect(screen.getByTestId("damage9")).toHaveTextContent("nine");
  });
});
