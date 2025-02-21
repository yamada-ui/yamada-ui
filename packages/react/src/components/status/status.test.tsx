import { Status } from "."
import { a11y, render, screen } from "../../../test"

describe("<Status />", () => {
  test("Status renders correctly", async () => {
    await a11y(<Status />)
  })

  test("Status with Label renders correctly", () => {
    render(<Status>Info</Status>)
    expect(screen.getByText("Info")).toBeInTheDocument()
  })
})
