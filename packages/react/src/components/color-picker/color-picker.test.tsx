import { a11y, render, screen } from "#test"
import { ColorPicker } from "."

describe("<ColorPicker />", () => {
  test("renders component correctly", async () => {
    await a11y(<ColorPicker placeholder="Choice a color" />)
  })

  test("sets `displayName` correctly", () => {
    expect(ColorPicker.displayName).toBe("ColorPickerRoot")
  })

  test("sets `className` correctly", () => {
    render(
      <ColorPicker
        defaultOpen
        placeholder="Choice a color"
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
        placeholder="Choice a color"
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getAllByRole("combobox")[0]?.tagName).toBe("DIV")
  })
})
