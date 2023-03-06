import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MoreInformationButton from "./MoreInformation";
import userEvent from "@testing-library/user-event";

describe("MoreInformation", () => {
  describe("onClick", () => {
    test("takes the user to the correct url", async () => {
      const text = "bla bla";
      const url = "/bla";
      render(
        <BrowserRouter>
          <MoreInformationButton {...{ url, text }} />
        </BrowserRouter>
      );
      await userEvent.click(screen.getByRole("link"));
      expect(window.location.pathname).toEqual("/bla");
    });
  });
});
