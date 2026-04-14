import { a11y, page, render } from "#test/browser"
import { CloseButton } from "./close-button"

describe("<CloseButton />", () => {
  test("renders component correctly", async () => {
    await a11y(<CloseButton />)
  })

  test("sets `displayName` correctly", () => {
    expect(CloseButton.displayName).toBe("CloseButton")
  })

  test("sets `className` correctly", async () => {
    await render(<CloseButton />)

    await expect
      .element(page.getByRole("button"))
      .toHaveClass("ui-close-button")
  })

  test("renders HTML tag correctly", async () => {
    await render(<CloseButton />)

    expect(page.getByRole("button").element().tagName).toBe("BUTTON")
  })

  test("has the proper aria attributes", async () => {
    await render(<CloseButton />)

    await expect.element(page.getByLabelText("Close")).toBeInTheDocument()
  })

  test("should call onClick", async () => {
    const onClickMock = vi.fn()
    const { user } = await render(<CloseButton onClick={onClickMock} />)

    await user.click(page.getByRole("button"))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test("should not call onClick", async () => {
    const onClickMock = vi.fn()
    await render(<CloseButton disabled onClick={onClickMock} />)
    ;(page.getByRole("button").element() as HTMLElement).click()

    expect(onClickMock).toHaveBeenCalledTimes(0)
  })
})
