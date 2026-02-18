import { a11y, render, screen } from "#test"
import { ColorPicker } from "."

describe("<ColorPicker />", () => {
  test("renders component correctly", async () => {
    await a11y(<ColorPicker placeholder="Choose a color" />)
  })

  test("sets `displayName` correctly", () => {
    expect(ColorPicker.displayName).toBe("ColorPickerRoot")
  })

  test("sets `className` correctly", () => {
    render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-color-picker__root")
    expect(screen.getAllByRole("combobox")[0]).toHaveClass(
      "ui-color-picker__field",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getAllByRole("combobox")[0]?.tagName).toBe("DIV")
  })

  test("passes `aria-label` to the input", () => {
    const { container } = render(<ColorPicker aria-label="Choose a color" />)

    expect(container.querySelector("input")).toHaveAttribute(
      "aria-label",
      "Choose a color",
    )
  })

  test("passes `aria-labelledby` to the input", () => {
    const { container } = render(<ColorPicker aria-labelledby="color-label" />)

    expect(container.querySelector("input")).toHaveAttribute(
      "aria-labelledby",
      "color-label",
    )
  })
})
