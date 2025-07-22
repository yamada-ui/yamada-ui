import { a11y, fireEvent, render, screen } from "#test"
import { CloseButton } from "./close-button"

describe("<CloseButton />", () => {
  test("renders component correctly", async () => {
    await a11y(<CloseButton />)
  })

  test("sets `displayName` correctly", () => {
    expect(CloseButton.displayName).toBe("CloseButton")
  })

  test("sets `className` correctly", () => {
    render(<CloseButton />)
    expect(screen.getByRole("button")).toHaveClass("ui-close-button")
  })

  test("renders HTML tag correctly", () => {
    render(<CloseButton />)
    expect(screen.getByRole("button").tagName).toBe("BUTTON")
  })

  test("has the proper aria attributes", () => {
    render(<CloseButton />)
    expect(screen.getByLabelText("Close")).toBeInTheDocument()
  })

  test("should call onClick", () => {
    const onClickMock = vi.fn()
    render(<CloseButton onClick={onClickMock} />)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test("should not call onClick", () => {
    const onClickMock = vi.fn()
    render(<CloseButton disabled onClick={onClickMock} />)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(0)
  })
})
