import { page, render } from "#test/browser"
import { ColorPicker } from "."

const getCombobox = () => page.getByRole("combobox")

const getInput = () => page.getByRole("textbox")

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

  test("opens picker when clicking combobox and focuses input", async () => {
    const { user } = await render(<ColorPicker placeholder="Choose a color" />)

    const combobox = getCombobox()

    await user.click(combobox)

    await expect.element(combobox).toHaveAttribute("aria-expanded", "true")
    await expect.element(getInput()).toHaveFocus()
  })

  test("opens picker on combobox focus when `allowInput` is disabled", async () => {
    const { user } = await render(
      <ColorPicker allowInput={false} placeholder="Choose a color" />,
    )

    await user.tab()

    await expect.element(getCombobox()).toHaveAttribute("aria-expanded", "true")
  })

  test("prevents default on input focus and opens when not focused by click", async () => {
    const { user } = await render(<ColorPicker placeholder="Choose a color" />)

    await user.tab()

    await expect.element(getCombobox()).toHaveAttribute("aria-expanded", "true")
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

    await getInput().fill("#123456")

    expect(onInputChange).toHaveBeenCalledTimes(1)
    expect(closeOnChange).toHaveBeenCalledTimes(1)
    expect(openOnChange).toHaveBeenCalledTimes(1)
    await expect.element(getInput()).toHaveValue("#123456")
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

    await getInput().fill("#654321")

    expect(closeOnChange).toHaveBeenCalledTimes(1)
    expect(openOnChange).not.toHaveBeenCalled()
    await expect.element(getInput()).toHaveValue("#654321")
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

    await getInput().fill("#ffffff")

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

    await getInput().fill("#a1b2c3")

    await expect.element(getInput()).toHaveValue("#a1b2c3")
  })

  test("keeps invalid value on blur when conversion fails", async () => {
    await render(<ColorPicker placeholder="Choose a color" />)

    await getInput().fill("invalid-color")
    getInput()
      .element()
      .dispatchEvent(
        new FocusEvent("blur", {
          bubbles: true,
          cancelable: true,
          relatedTarget: document.body,
        }),
      )

    await expect.element(getInput()).toHaveValue("invalid-color")
  })

  test("keeps value when blur moves focus inside picker field", async () => {
    await render(<ColorPicker placeholder="Choose a color" />)

    await getInput().fill("#123123")
    getInput()
      .element()
      .dispatchEvent(
        new FocusEvent("blur", {
          bubbles: true,
          cancelable: true,
          relatedTarget: getCombobox().element(),
        }),
      )

    await expect.element(getInput()).toHaveValue("#123123")
  })

  test("keeps empty value on blur when there is no previous value", async () => {
    await render(<ColorPicker placeholder="Choose a color" />)

    getInput()
      .element()
      .dispatchEvent(
        new FocusEvent("blur", {
          bubbles: true,
          cancelable: true,
          relatedTarget: document.body,
        }),
      )

    await expect.element(getInput()).toHaveValue("")
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

    getInput()
      .element()
      .dispatchEvent(
        new FocusEvent("blur", {
          bubbles: true,
          cancelable: true,
          relatedTarget: document.body,
        }),
      )

    await expect.element(getInput()).toHaveValue("#abcdef")
  })

  test("supports keyboard eye dropper action and writes picked color", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#00ff00" })

    const { user } = await render(
      <ColorPicker
        placeholder="Choose a color"
        eyeDropperProps={{ "data-testid": "eye-dropper-button" }}
      />,
    )

    const eyeDropper = page.getByTestId("eye-dropper-button")
    const eyeDropperElement = eyeDropper.element()

    if (!(eyeDropperElement instanceof HTMLElement))
      throw new Error("Expected an HTMLElement")

    eyeDropperElement.focus()
    await user.keyboard("{Enter}")

    await vi.waitFor(() => {
      expect(openEyeDropper).toHaveBeenCalledTimes(1)
      expect(getInput().element()).toHaveValue("#00ff00")
    })
  })

  test("does not react to click and eye dropper when interactive is disabled", async () => {
    openEyeDropper.mockResolvedValue({ sRGBHex: "#ffffff" })
    const { user } = await render(
      <ColorPicker
        disabled
        placeholder="Choose a color"
        eyeDropperProps={{ "data-testid": "eye-dropper-button" }}
      />,
    )

    const combobox = getCombobox()
    const eyeDropper = page.getByTestId("eye-dropper-button")

    await expect(user.click(combobox, { timeout: 200 })).rejects.toThrow(
      /Timeout/,
    )
    await expect(user.click(eyeDropper, { timeout: 200 })).rejects.toThrow(
      /Timeout/,
    )

    await expect.element(combobox).toHaveAttribute("aria-expanded", "false")
    expect(openEyeDropper).not.toHaveBeenCalled()
  })
})
