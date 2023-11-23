import { a11y, render, screen } from "@yamada-ui/test"
import { CloseButton } from "../src"

describe("<CloseButton />", () => {
  test("passes a11y test", async () => {
    await a11y(<CloseButton />)
  })

  test("has the proper aria attributes", () => {
    render(<CloseButton />)
    expect(screen.getByLabelText("Close")).toBeInTheDocument()
  })
})
