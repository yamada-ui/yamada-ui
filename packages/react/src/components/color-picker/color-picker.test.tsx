import { vi } from "vitest"
import { a11y, fireEvent, render, screen } from "#test"
import { ColorPicker } from "."
import { InputPropsContext } from "../input"

const setInputValue = (input: HTMLInputElement, value: string) => {
  Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set?.call(input, value)

  input.dispatchEvent(new Event("input", { bubbles: true }))
}

describe("<ColorPicker />", () => {
  test("renders component correctly", async () => {
    await a11y(<ColorPicker placeholder="Choose a color" />)
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

  test("prevents default on mouse down when `openOnFocus` is enabled", () => {
    render(<ColorPicker placeholder="Choose a color" />)

    const event = fireEvent.mouseDown(screen.getByRole("combobox"))

    expect(event).toBeFalsy()
  })

  test("does not prevent default on mouse down when `openOnFocus` is disabled", () => {
    render(<ColorPicker openOnFocus={false} placeholder="Choose a color" />)

    const event = fireEvent.mouseDown(screen.getByRole("combobox"))

    expect(event).toBeTruthy()
  })

  test("updates input value through `onInputChange` and runs open branch callbacks", () => {
    const closeOnChange = vi.fn(() => false)
    const openOnChange = vi.fn(() => true)
    const onInputChange = vi.fn()

    render(
      <ColorPicker
        closeOnChange={closeOnChange}
        openOnChange={openOnChange}
        placeholder="Choose a color"
        onInputChange={onInputChange}
      />,
    )

    const input = screen.getByRole<HTMLInputElement>("textbox")

    setInputValue(input, "#123456")

    expect(onInputChange).toHaveBeenCalledTimes(1)
    expect(closeOnChange).toHaveBeenCalledTimes(1)
    expect(openOnChange).toHaveBeenCalledTimes(1)
    expect(input).toHaveValue("#123456")
  })

  test("runs close branch callback before open callback on input change", () => {
    const closeOnChange = vi.fn(() => true)
    const openOnChange = vi.fn(() => true)

    render(
      <ColorPicker
        closeOnChange={closeOnChange}
        openOnChange={openOnChange}
        placeholder="Choose a color"
      />,
    )

    const input = screen.getByRole<HTMLInputElement>("textbox")

    setInputValue(input, "#654321")

    expect(closeOnChange).toHaveBeenCalledTimes(1)
    expect(openOnChange).not.toHaveBeenCalled()
    expect(input).toHaveValue("#654321")
  })

  test("ignores input change when `allowInput` is disabled", () => {
    const onInputChange = vi.fn()

    render(
      <ColorPicker
        allowInput={false}
        placeholder="Choose a color"
        onInputChange={onInputChange}
      />,
    )

    const input = screen.getByRole<HTMLInputElement>("textbox")

    setInputValue(input, "#ffffff")

    expect(onInputChange).not.toHaveBeenCalled()
  })

  test("formats and filters typed value using `formatInput` and `pattern`", () => {
    render(
      <ColorPicker
        formatInput={(value) => ` ${value} `}
        pattern={/\s/g}
        placeholder="Choose a color"
      />,
    )

    const input = screen.getByRole<HTMLInputElement>("textbox")

    setInputValue(input, "#a1b2c3")

    expect(input).toHaveValue("#a1b2c3")
  })

  test("keeps invalid value on blur when conversion fails", () => {
    render(<ColorPicker placeholder="Choose a color" />)

    const input = screen.getByRole<HTMLInputElement>("textbox")

    setInputValue(input, "invalid-color")
    fireEvent.blur(input, { relatedTarget: document.body })

    expect(input).toHaveValue("invalid-color")
  })

  test("keeps value when blur moves focus inside picker field", () => {
    render(<ColorPicker placeholder="Choose a color" />)

    const input = screen.getByRole<HTMLInputElement>("textbox")
    const combobox = screen.getByRole("combobox")

    setInputValue(input, "#123123")
    fireEvent.blur(input, { relatedTarget: combobox })

    expect(input).toHaveValue("#123123")
  })

  test("keeps empty value on blur when there is no previous value", () => {
    render(<ColorPicker placeholder="Choose a color" />)

    const input = screen.getByRole<HTMLInputElement>("textbox")

    fireEvent.blur(input, { relatedTarget: document.body })

    expect(input).toHaveValue("")
  })

  test("formats and filters value on blur using `formatInput` and `pattern`", () => {
    render(
      <ColorPicker
        defaultValue="#abcdef"
        formatInput={(value) => `[${value}]`}
        pattern={/[\[\]]/g}
        placeholder="Choose a color"
      />,
    )

    const input = screen.getByRole<HTMLInputElement>("textbox")

    fireEvent.blur(input, { relatedTarget: document.body })

    expect(input).toHaveValue("#abcdef")
  })
})
