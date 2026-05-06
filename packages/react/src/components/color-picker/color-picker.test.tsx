import { vi } from "vitest"
import { a11y, render, screen } from "#test"
import { ColorPicker } from "."
import { InputPropsContext } from "../input"

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
    expect(screen.getByRole("combobox")).toHaveClass("ui-color-picker__field")
  })

  test("merges top-level className with `rootProps` className on the root element", async () => {
    const onRootClick = vi.fn()
    const { user } = render(
      <ColorPicker
        className="from-top"
        placeholder="Choose a color"
        rootProps={{
          className: "from-root",
          "data-testid": "root",
          onClick: onRootClick,
        }}
      />,
    )

    const root = screen.getByTestId("root")

    expect(root).toHaveClass("ui-color-picker__root", "from-top", "from-root")

    await user.click(root)

    expect(onRootClick).toHaveBeenCalledTimes(1)
  })

  test("merges `InputPropsContext` className with user-provided className", () => {
    render(
      <InputPropsContext value={{ className: "from-context" }}>
        <ColorPicker
          className="from-user"
          placeholder="Choose a color"
          rootProps={{ "data-testid": "root" }}
        />
      </InputPropsContext>,
    )

    expect(screen.getByTestId("root")).toHaveClass(
      "ui-color-picker__root",
      "from-context",
      "from-user",
    )
  })

  test("merges `elementProps` with `startElementProps` on start element", async () => {
    const onClickElement = vi.fn()
    const onClickStart = vi.fn()
    const { user } = render(
      <ColorPicker
        placeholder="Choose a color"
        elementProps={{
          className: "from-element",
          onClick: onClickElement,
        }}
        startElementProps={{
          className: "from-start",
          "data-testid": "start-el",
          clickable: true,
          onClick: onClickStart,
        }}
      />,
    )

    const startEl = screen.getByTestId("start-el")

    expect(startEl).toHaveClass("from-element", "from-start")

    await user.click(startEl)

    expect(onClickElement).toHaveBeenCalledTimes(1)
    expect(onClickStart).toHaveBeenCalledTimes(1)
  })

  test("merges `elementProps` with `endElementProps` on end element", async () => {
    const onClickElement = vi.fn()
    const onClickEnd = vi.fn()
    const { user } = render(
      <ColorPicker
        placeholder="Choose a color"
        elementProps={{
          className: "from-element",
          onClick: onClickElement,
        }}
        endElementProps={{
          className: "from-end",
          "data-testid": "end-el",
          onClick: onClickEnd,
        }}
      />,
    )

    const endEl = screen.getByTestId("end-el")

    expect(endEl).toHaveClass("from-element", "from-end")

    await user.click(endEl)

    expect(onClickElement).toHaveBeenCalledTimes(1)
    expect(onClickEnd).toHaveBeenCalledTimes(1)
  })

  test("passes `aria-label` to the input", () => {
    render(<ColorPicker aria-label="Choose a color" />)

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-label",
      "Choose a color",
    )
  })

  test("passes `aria-labelledby` to the input", () => {
    render(<ColorPicker aria-labelledby="color-label" />)

    expect(screen.getByRole("textbox")).toHaveAttribute(
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

    expect(screen.queryByTestId("swatch")).not.toBeInTheDocument()
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

    expect(screen.queryByTestId("eye-dropper")).not.toBeInTheDocument()
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

  test("keeps color swatch rendered when value changes", () => {
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
