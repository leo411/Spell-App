import { render, screen } from "@testing-library/react";
import MiniCard from "./MiniCard";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("MiniCard", () => {
  test("render a name", () => {
    const name = "this is a name";
    const text = "bla bla";
    const url = "www.dev.co";
    render(
      <BrowserRouter>
        <MiniCard {...{ name, url, text }} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("miniCardName")).toHaveTextContent(
      "this is a name"
    );
  });

  test("render a `MoreInformationButton` with the correct text", () => {
    const name = "this is a name";
    const text = "bla bla";
    const url = "www.dev.co";
    render(
      <BrowserRouter>
        <MiniCard {...{ name, url, text }} />
      </BrowserRouter>
    );
    expect(screen.getByRole("link")).toHaveTextContent("bla bla");
  });
});
