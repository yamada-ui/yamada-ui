import { a11y, render, screen } from "#test"
import { ColorPicker } from "."

describe("<ColorPicker />", () => {
  test("renders component correctly", async () => {
    await a11y(<ColorPicker placeholder="Choose a color" />)
  })

  test("passes a11y test with aria-label", async () => {
    await a11y(<ColorPicker aria-label="Choose a color" />)
  })

  test("applies aria-label to input element", () => {
    render(<ColorPicker aria-label="Choose a color" />)

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-label",
      "Choose a color",
    )
  })

  test("applies aria-labelledby to input element", () => {
    render(
      <>
        <span id="color-label">Choose a color</span>
        <ColorPicker aria-labelledby="color-label" />
      </>,
    )

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-labelledby",
      "color-label",
    )
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
})
