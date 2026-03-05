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

  test("does not render color swatch when `withColorSwatch` is false", () => {
    render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        withColorSwatch={false}
        startElementProps={{ "data-testid": "swatch" }}
      />,
    )

    expect(screen.queryByTestId("swatch")).toBeNull()
  })

  test("does not render eye dropper when `withEyeDropper` is false", () => {
    render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        withEyeDropper={false}
        endElementProps={{ "data-testid": "eye-dropper" }}
      />,
    )

    expect(screen.queryByTestId("eye-dropper")).toBeNull()
  })

  test("renders custom eye dropper icon when `eyeDropperProps.icon` is provided", () => {
    render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        endElementProps={{ "data-testid": "eye-dropper" }}
        eyeDropperProps={{ icon: <span data-testid="custom-icon">X</span> }}
      />,
    )

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument()
    expect(screen.getByTestId("eye-dropper")).toBeInTheDocument()
  })

  test("renders default eye dropper icon when no children/icon provided", () => {
    render(
      <ColorPicker
        placeholder="Choose a color"
        endElementProps={{ "data-testid": "eye-dropper" }}
      />,
    )

    const eyeDropper = screen.getByTestId("eye-dropper")

    expect(eyeDropper.childElementCount).toBeGreaterThan(0)
    expect(eyeDropper.querySelector("svg")).not.toBeNull()
  })

  test("renders color swatch by default and keeps it rendered when value changes", () => {
    const { rerender } = render(
      <ColorPicker
        defaultOpen
        defaultValue="#ff0000"
        placeholder="Choose a color"
        startElementProps={{ "data-testid": "swatch" }}
      />,
    )

    expect(screen.getByTestId("swatch")).toBeInTheDocument()

    rerender(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        value="#00ff00"
        startElementProps={{ "data-testid": "swatch" }}
      />,
    )

    expect(screen.getByTestId("swatch")).toBeInTheDocument()
  })
})
