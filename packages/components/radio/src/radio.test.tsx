import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Radio } from "./radio"

describe("<Radio/>", () => {
  it("should pass a11y test", async () => {
    await a11y(<Radio>Radio button</Radio>)
  })

  it("should render correctly", () => {
    render(<Radio>Radio button</Radio>)

    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByText("Radio button")).toBeInTheDocument()
  })

  it("should be defaultChecked", () => {
    render(<Radio defaultIsChecked>Radio defaultChecked</Radio>)

    expect(screen.getByRole("radio")).toBeChecked()
  })

  it("should be readonly", () => {
    render(<Radio isReadOnly>Radio readonly</Radio>)

    expect(screen.getByRole("radio")).toHaveAttribute("readonly")
  })

  it("should be contain invalid attribute", () => {
    render(<Radio isInvalid>Radio invalid</Radio>)

    expect(screen.getByRole("radio").getAttribute("aria-invalid")).toBe("true")
  })

  it("should be checked when click on element", () => {
    render(<Radio>Radio button</Radio>)

    fireEvent.click(screen.getByText("Radio button"))
    expect(screen.getByRole("radio")).toBeChecked()
  })
})
