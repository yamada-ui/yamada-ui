import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { ColorPicker } from "."

describe("<ColorPicker />", () => {
  const defaultEyeDropper = (window as any).EyeDropper
  const openEyeDropper = vi.fn()
  class EyeDropperMock {
    open = openEyeDropper
  }

  beforeEach(() => {
    openEyeDropper.mockReset()
    vi.stubGlobal("EyeDropper", EyeDropperMock)
  })

  afterAll(() => {
    vi.stubGlobal("EyeDropper", defaultEyeDropper)
  })

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

  test("prevents default on mouse down when `openOnFocus` is enabled", () => {
    render(<ColorPicker placeholder="Choose a color" />)

    const combobox = screen.getAllByRole("combobox")[0]
    const event = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
    })

    combobox?.dispatchEvent(event)

    expect(event.defaultPrevented).toBeTruthy()
  })

  test("does not prevent default on mouse down when `openOnFocus` is disabled", () => {
    render(<ColorPicker openOnFocus={false} placeholder="Choose a color" />)

    const combobox = screen.getAllByRole("combobox")[0]
    const event = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
    })

    combobox?.dispatchEvent(event)

    expect(event.defaultPrevented).toBeFalsy()
  })

  test("updates input value through `onInputChange` and runs open branch callbacks", () => {
    const closeOnChange = vi.fn(() => false)
    const openOnChange = vi.fn(() => true)
    const onInputChange = vi.fn()
    const { container } = render(
      <ColorPicker
        closeOnChange={closeOnChange}
        openOnChange={openOnChange}
        placeholder="Choose a color"
        onInputChange={onInputChange}
      />,
    )

    const input = container.querySelector("input")

    fireEvent.change(input!, { target: { value: "#123456" } })

    expect(onInputChange).toHaveBeenCalledTimes(1)
    expect(closeOnChange).toHaveBeenCalledTimes(1)
    expect(openOnChange).toHaveBeenCalledTimes(1)
    expect(input).toHaveValue("#123456")
  })

  test("runs close branch callback before open callback on input change", () => {
    const closeOnChange = vi.fn(() => true)
    const openOnChange = vi.fn(() => true)
    const { container } = render(
      <ColorPicker
        closeOnChange={closeOnChange}
        openOnChange={openOnChange}
        placeholder="Choose a color"
      />,
    )

    const input = container.querySelector("input")

    fireEvent.change(input!, { target: { value: "#654321" } })

    expect(closeOnChange).toHaveBeenCalledTimes(1)
    expect(openOnChange).not.toHaveBeenCalled()
    expect(input).toHaveValue("#654321")
  })

  test("keeps invalid value on blur when conversion fails", () => {
    const { container } = render(<ColorPicker placeholder="Choose a color" />)

    const input = container.querySelector("input")

    fireEvent.change(input!, { target: { value: "invalid-color" } })
    fireEvent.blur(input!, { relatedTarget: document.body })

    expect(input).toHaveValue("invalid-color")
  })

  test("supports keyboard eye dropper action and writes picked color", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const { container } = render(
      <ColorPicker
        placeholder="Choose a color"
        eyeDropperProps={{ "data-testid": "eye-dropper-button" }}
      />,
    )

    fireEvent.keyDown(screen.getByTestId("eye-dropper-button"), {
      key: "Enter",
    })

    await waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(container.querySelector("input")).toHaveValue("#00ff00")
    })
  })

  test("opens picker when clicking combobox and focuses input", () => {
    const { container } = render(<ColorPicker placeholder="Choose a color" />)

    const combobox = screen.getAllByRole("combobox")[0]
    const input = container.querySelector("input")

    fireEvent.click(combobox!)

    expect(combobox).toHaveAttribute("aria-expanded", "true")
    expect(document.activeElement).toBe(input)
  })

  test("opens picker on combobox focus when `allowInput` is disabled", () => {
    render(<ColorPicker allowInput={false} placeholder="Choose a color" />)

    const combobox = screen.getAllByRole("combobox")[0]

    fireEvent.focus(combobox!)

    expect(combobox).toHaveAttribute("aria-expanded", "true")
  })

  test("prevents default on input focus and opens when not focused by click", () => {
    const { container } = render(<ColorPicker placeholder="Choose a color" />)

    const combobox = screen.getAllByRole("combobox")[0]
    const input = container.querySelector("input")
    fireEvent.focus(input!)

    expect(combobox).toHaveAttribute("aria-expanded", "true")
  })

  test("keeps value when blur moves focus inside picker field", () => {
    const { container } = render(<ColorPicker placeholder="Choose a color" />)

    const combobox = screen.getAllByRole("combobox")[0]
    const input = container.querySelector("input")
    const event = new FocusEvent("blur", {
      bubbles: true,
      cancelable: true,
      relatedTarget: combobox,
    })

    fireEvent.change(input!, { target: { value: "#123123" } })
    input?.dispatchEvent(event)

    expect(input).toHaveValue("#123123")
  })

  test("keeps empty value on blur when there is no previous value", () => {
    const { container } = render(<ColorPicker placeholder="Choose a color" />)

    const input = container.querySelector("input")

    fireEvent.blur(input!, { relatedTarget: document.body })

    expect(input).toHaveValue("")
  })

  test("formats and filters value on blur using `formatInput` and `pattern`", () => {
    const { container } = render(
      <ColorPicker
        defaultValue="#abcdef"
        formatInput={(value) => `[${value}]`}
        pattern={/[\[\]]/g}
        placeholder="Choose a color"
      />,
    )

    const input = container.querySelector("input")

    fireEvent.blur(input!, { relatedTarget: document.body })

    expect(input).toHaveValue("#abcdef")
  })

  test("ignores input change when `allowInput` is disabled", () => {
    const onInputChange = vi.fn()
    const { container } = render(
      <ColorPicker
        allowInput={false}
        placeholder="Choose a color"
        onInputChange={onInputChange}
      />,
    )

    const input = container.querySelector("input")

    fireEvent.change(input!, { target: { value: "#ffffff" } })

    expect(onInputChange).not.toHaveBeenCalled()
  })

  test("formats and filters typed value using `formatInput` and `pattern`", () => {
    const { container } = render(
      <ColorPicker
        formatInput={(value) => ` ${value} `}
        pattern={/\s/g}
        placeholder="Choose a color"
      />,
    )

    const input = container.querySelector("input")

    fireEvent.change(input!, { target: { value: "#a1b2c3" } })

    expect(input).toHaveValue("#a1b2c3")
  })

  test("does not react to click and eye dropper when interactive is disabled", () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#ffffff" })

    render(
      <ColorPicker
        disabled
        placeholder="Choose a color"
        eyeDropperProps={{ "data-testid": "eye-dropper-button" }}
      />,
    )

    const combobox = screen.getAllByRole("combobox")[0]
    const eyeDropper = screen.getByTestId("eye-dropper-button")

    fireEvent.click(combobox!)
    fireEvent.click(eyeDropper)

    expect(combobox).toHaveAttribute("aria-expanded", "false")
    expect(openEyeDropper).not.toHaveBeenCalled()
  })
})
