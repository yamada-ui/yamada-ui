import { vi } from "vitest"
import { page, render } from "#test/browser"
import { ColorPicker } from "."

const getCombobox = () => page.getByRole("combobox")

const getInput = () => page.getByRole("textbox")

const getInputElement = () => {
  const element = getInput().element()

  if (!(element instanceof HTMLInputElement))
    throw new Error("Expected an HTMLInputElement")

  return element
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

    getInputElement().focus()

    await expect.element(getCombobox()).toHaveAttribute("aria-expanded", "true")
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
      expect(getInputElement()).toHaveValue("#00ff00")
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
