import { describe, expect, test } from "bun:test";
import { screen } from "@testing-library/react";

import { metadata } from "@/app/layout";
import Home from "@/app/page";
import { appRender } from "../test-utils";

const HOME_HEADING = /welcome to next\.js!/i;

describe("home", () => {
  test("preserves the home page and mocked API flow", async () => {
    appRender(<Home />);

    expect(metadata.title).toBe("Create Next App");
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: HOME_HEADING,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Vercel Logo");
    expect(
      await screen.findByText("MOCK_NAME", { exact: false })
    ).toBeVisible();
  });
});
