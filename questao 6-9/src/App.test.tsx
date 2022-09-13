import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

test("test", () => {
  render(<App />)
  expect(screen.getByRole("heading")).toHaveTextContent(/Hello React/i)
})
