import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { CloseButton } from "../src"

describe("<CloseButton />", () => {
  test("passes a11y test", async () => {
    await a11y(<CloseButton />)
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
