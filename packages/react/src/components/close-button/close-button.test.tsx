import { a11y, render, screen } from "#test"
import { CloseButton } from "./close-button"

describe("<CloseButton />", () => {
  test("renders component correctly", async () => {
    await a11y(<CloseButton />)
  })

  test("has the proper aria attributes", () => {
    render(<CloseButton />)

    expect(screen.getByLabelText("Close")).toBeInTheDocument()
  })

  test("should call onClick", async () => {
    const onClickMock = vi.fn()
    const { user } = render(<CloseButton onClick={onClickMock} />)

    await user.click(screen.getByRole("button"))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test("should not call onClick", async () => {
    const onClickMock = vi.fn()
    const { user } = render(<CloseButton disabled onClick={onClickMock} />)

    await user.click(screen.getByRole("button"))

    expect(onClickMock).toHaveBeenCalledTimes(0)
  })
})
