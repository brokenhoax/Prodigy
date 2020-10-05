import React from "react";
import { render } from "@testing-library/react";
import Logo from "../components/logo/Logo.jsx";

test("renders learn react link", () => {
  const { getByText } = render(<Logo />);
  const logo = getByText(/V/);
  expect(logo).toBeInTheDocument();
});
