import { render, screen } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("render a spell", () => {
  render(
    <BrowserRouter>
      <Card {...{ name: "cha", index: "cha_acid" }} />
    </BrowserRouter>
  );
  expect(screen.getByText("cha")).toBeTruthy();
});
