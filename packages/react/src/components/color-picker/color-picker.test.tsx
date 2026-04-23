import { vi } from "vitest"
import { a11y, page, render } from "#test/browser"
import { ColorPicker } from "."
import { InputPropsContext } from "../input"

const getCombobox = () => page.getByRole("combobox")

const getInput = () => page.getByRole("textbox")

const getInputElement = () => getInput().element() as HTMLInputElement

const setInputValue = (input: HTMLInputElement, value: string) => {
  Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set?.call(input, value)

  input.dispatchEvent(new Event("input", { bubbles: true }))
}

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

  test("sets `className` correctly", async () => {
    await render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        rootProps={{ "data-testid": "root" }}
      />,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-color-picker__root")
    await expect.element(getCombobox()).toHaveClass("ui-color-picker__field")
  })

  test("merges top-level className with `rootProps` className on the root element", async () => {
    const onRootClick = vi.fn()
    const { user } = await render(
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

    const root = page.getByTestId("root")

    await expect
      .element(root)
      .toHaveClass("ui-color-picker__root", "from-top", "from-root")

    await user.click(root)

    expect(onRootClick).toHaveBeenCalledTimes(1)
  })

  test("merges `InputPropsContext` className with user-provided className", async () => {
    await render(
      <InputPropsContext value={{ className: "from-context" }}>
        <ColorPicker
          className="from-user"
          placeholder="Choose a color"
          rootProps={{ "data-testid": "root" }}
        />
      </InputPropsContext>,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-color-picker__root", "from-context", "from-user")
  })

  test("merges `elementProps` with `startElementProps` on start element", async () => {
    const onClickElement = vi.fn()
    const onClickStart = vi.fn()
    await render(
      <ColorPicker
        placeholder="Choose a color"
        elementProps={{
          className: "from-element",
          onClick: onClickElement,
        }}
        startElementProps={{
          className: "from-start",
          "data-testid": "start-el",
          onClick: onClickStart,
        }}
      />,
    )

    const startEl = page.getByTestId("start-el")

    await expect.element(startEl).toHaveClass("from-element", "from-start")

    // The combobox overlays the start element, so locator clicks are intercepted
    // before reaching the merged handlers on `start-el`.
    startEl.element().dispatchEvent(new MouseEvent("click", { bubbles: true }))

    expect(onClickElement).toHaveBeenCalledTimes(1)
    expect(onClickStart).toHaveBeenCalledTimes(1)
  })

  test("merges `elementProps` with `endElementProps` on end element", async () => {
    const onClickElement = vi.fn()
    const onClickEnd = vi.fn()
    const { user } = await render(
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

    const endEl = page.getByTestId("end-el")

    await expect.element(endEl).toHaveClass("from-element", "from-end")

    await user.click(endEl)

    expect(onClickElement).toHaveBeenCalledTimes(1)
    expect(onClickEnd).toHaveBeenCalledTimes(1)
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(getCombobox().element().tagName).toBe("DIV")
  })

  test("passes `aria-label` to the input", async () => {
    await render(<ColorPicker aria-label="Choose a color" />)

    await expect
      .element(getInput())
      .toHaveAttribute("aria-label", "Choose a color")
  })

  test("passes `aria-labelledby` to the input", async () => {
    await render(<ColorPicker aria-labelledby="color-label" />)

    await expect
      .element(getInput())
      .toHaveAttribute("aria-labelledby", "color-label")
  })

  test("does not render color swatch when `withColorSwatch` is false", async () => {
    await render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        withColorSwatch={false}
        startElementProps={{ "data-testid": "swatch" }}
      />,
    )

    expect(page.getByTestId("swatch").query()).toBeNull()
  })

  test("does not render eye dropper when `withEyeDropper` is false", async () => {
    await render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        withEyeDropper={false}
        endElementProps={{ "data-testid": "eye-dropper" }}
      />,
    )

    expect(page.getByTestId("eye-dropper").query()).toBeNull()
  })

  test("renders custom eye dropper icon when `eyeDropperProps.icon` is provided", async () => {
    await render(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        endElementProps={{ "data-testid": "eye-dropper" }}
        eyeDropperProps={{ icon: <span data-testid="custom-icon">X</span> }}
      />,
    )

    await expect.element(page.getByTestId("custom-icon")).toBeInTheDocument()
    await expect.element(page.getByTestId("eye-dropper")).toBeInTheDocument()
  })

  test("renders default eye dropper icon when no children/icon provided", async () => {
    await render(
      <ColorPicker
        placeholder="Choose a color"
        endElementProps={{ "data-testid": "eye-dropper" }}
      />,
    )

    const eyeDropper = page.getByTestId("eye-dropper").element()

    expect(eyeDropper.childElementCount).toBeGreaterThan(0)
    expect(eyeDropper.querySelector("svg")).not.toBeNull()
  })

  test("renders color swatch by default and keeps it rendered when value changes", async () => {
    const { rerender } = await render(
      <ColorPicker
        defaultOpen
        defaultValue="#ff0000"
        placeholder="Choose a color"
        startElementProps={{ "data-testid": "swatch" }}
      />,
    )

    await expect.element(page.getByTestId("swatch")).toBeInTheDocument()

    rerender(
      <ColorPicker
        defaultOpen
        placeholder="Choose a color"
        value="#00ff00"
        startElementProps={{ "data-testid": "swatch" }}
      />,
    )

    await expect.element(page.getByTestId("swatch")).toBeInTheDocument()
  })

  test("prevents default on mouse down when `openOnFocus` is enabled", async () => {
    await render(<ColorPicker placeholder="Choose a color" />)

    const event = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
    })

    getCombobox().element().dispatchEvent(event)

    expect(event.defaultPrevented).toBeTruthy()
  })

  test("does not prevent default on mouse down when `openOnFocus` is disabled", async () => {
    await render(
      <ColorPicker openOnFocus={false} placeholder="Choose a color" />,
    )

    const event = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
    })

    getCombobox().element().dispatchEvent(event)

    expect(event.defaultPrevented).toBeFalsy()
  })

  test("updates input value through `onInputChange` and runs open branch callbacks", async () => {
    const closeOnChange = vi.fn(() => false)
    const openOnChange = vi.fn(() => true)
    const onInputChange = vi.fn()

    await render(
      <ColorPicker
        closeOnChange={closeOnChange}
        openOnChange={openOnChange}
        placeholder="Choose a color"
        onInputChange={onInputChange}
      />,
    )

    const input = getInputElement()

    setInputValue(input, "#123456")

    expect(onInputChange).toHaveBeenCalledTimes(1)
    expect(closeOnChange).toHaveBeenCalledTimes(1)
    expect(openOnChange).toHaveBeenCalledTimes(1)
    expect(input).toHaveValue("#123456")
  })

  test("runs close branch callback before open callback on input change", async () => {
    const closeOnChange = vi.fn(() => true)
    const openOnChange = vi.fn(() => true)

    await render(
      <ColorPicker
        closeOnChange={closeOnChange}
        openOnChange={openOnChange}
        placeholder="Choose a color"
      />,
    )

    const input = getInputElement()

    setInputValue(input, "#654321")

    expect(closeOnChange).toHaveBeenCalledTimes(1)
    expect(openOnChange).not.toHaveBeenCalled()
    expect(input).toHaveValue("#654321")
  })

  test("keeps invalid value on blur when conversion fails", async () => {
    await render(<ColorPicker placeholder="Choose a color" />)

    const input = getInputElement()

    setInputValue(input, "invalid-color")
    input.dispatchEvent(
      new FocusEvent("blur", {
        bubbles: true,
        cancelable: true,
        relatedTarget: document.body,
      }),
    )

    expect(input).toHaveValue("invalid-color")
  })

  test("supports keyboard eye dropper action and writes picked color", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    await render(
      <ColorPicker
        placeholder="Choose a color"
        eyeDropperProps={{ "data-testid": "eye-dropper-button" }}
      />,
    )

    page
      .getByTestId("eye-dropper-button")
      .element()
      .dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      )

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(getInputElement()).toHaveValue("#00ff00")
    })
  })

  test("opens picker when clicking combobox and focuses input", async () => {
    const { user } = await render(<ColorPicker placeholder="Choose a color" />)

    const combobox = getCombobox()
    const input = getInputElement()

    await user.click(combobox)

    await expect.element(combobox).toHaveAttribute("aria-expanded", "true")
    expect(document.activeElement).toBe(input)
  })

  test("opens picker on combobox focus when `allowInput` is disabled", async () => {
    await render(
      <ColorPicker allowInput={false} placeholder="Choose a color" />,
    )

    getCombobox().element().focus()

    await expect.element(getCombobox()).toHaveAttribute("aria-expanded", "true")
  })

  test("prevents default on input focus and opens when not focused by click", async () => {
    await render(<ColorPicker placeholder="Choose a color" />)

    const input = getInputElement()

    input.focus()

    await expect.element(getCombobox()).toHaveAttribute("aria-expanded", "true")
  })

  test("keeps value when blur moves focus inside picker field", async () => {
    await render(<ColorPicker placeholder="Choose a color" />)

    const input = getInputElement()

    setInputValue(input, "#123123")
    input.dispatchEvent(
      new FocusEvent("blur", {
        bubbles: true,
        cancelable: true,
        relatedTarget: getCombobox().element(),
      }),
    )

    expect(input).toHaveValue("#123123")
  })

  test("keeps empty value on blur when there is no previous value", async () => {
    await render(<ColorPicker placeholder="Choose a color" />)

    const input = getInputElement()

    input.dispatchEvent(
      new FocusEvent("blur", {
        bubbles: true,
        cancelable: true,
        relatedTarget: document.body,
      }),
    )

    expect(input).toHaveValue("")
  })

  test("formats and filters value on blur using `formatInput` and `pattern`", async () => {
    await render(
      <ColorPicker
        defaultValue="#abcdef"
        formatInput={(value) => `[${value}]`}
        pattern={/[\[\]]/g}
        placeholder="Choose a color"
      />,
    )

    const input = getInputElement()

    input.dispatchEvent(
      new FocusEvent("blur", {
        bubbles: true,
        cancelable: true,
        relatedTarget: document.body,
      }),
    )

    expect(input).toHaveValue("#abcdef")
  })

  test("ignores input change when `allowInput` is disabled", async () => {
    const onInputChange = vi.fn()

    await render(
      <ColorPicker
        allowInput={false}
        placeholder="Choose a color"
        onInputChange={onInputChange}
      />,
    )

    const input = getInputElement()

    setInputValue(input, "#ffffff")

    expect(onInputChange).not.toHaveBeenCalled()
  })

  test("formats and filters typed value using `formatInput` and `pattern`", async () => {
    await render(
      <ColorPicker
        formatInput={(value) => ` ${value} `}
        pattern={/\s/g}
        placeholder="Choose a color"
      />,
    )

    const input = getInputElement()

    setInputValue(input, "#a1b2c3")

    expect(input).toHaveValue("#a1b2c3")
  })

  test("does not react to click and eye dropper when interactive is disabled", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#ffffff" })
    await render(
      <ColorPicker
        disabled
        placeholder="Choose a color"
        eyeDropperProps={{ "data-testid": "eye-dropper-button" }}
      />,
    )

    const combobox = getCombobox()
    const eyeDropper = page.getByTestId("eye-dropper-button")

    combobox.element().dispatchEvent(new MouseEvent("click", { bubbles: true }))
    eyeDropper
      .element()
      .dispatchEvent(new MouseEvent("click", { bubbles: true }))

    await expect.element(combobox).toHaveAttribute("aria-expanded", "false")
    expect(openEyeDropper).not.toHaveBeenCalled()
  })
})
