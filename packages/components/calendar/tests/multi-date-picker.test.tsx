import { a11y, act, fireEvent, render } from "@yamada-ui/test"
import { MultiDatePicker } from "../src"

describe("<MultiDatePicker />", () => {
  test("MultiDatePicker renders correctly", async () => {
    const { container } = render(<MultiDatePicker placeholder="basic" />)
    await a11y(container)
  })

  test("should change selected dates", async () => {
    const { container } = render(
      <MultiDatePicker
        placeholder="basic"
        today
        defaultValue={[new Date(new Date().setDate(1))]}
      />,
    )
    const selectDate = new Date(new Date().setDate(7))
    const dateStr = new Date(selectDate.setHours(0, 0, 0, 0)).toString()
    const selectBtn = container.querySelector(`button[data-value="${dateStr}"]`)

    act(() => {
      fireEvent.click(selectBtn!)
    })

    expect(selectBtn).toHaveAttribute("data-selected")

    const selectDateSecond = new Date(new Date().setDate(14))
    const dateStrSecond = new Date(
      selectDateSecond.setHours(0, 0, 0, 0),
    ).toString()
    const selectBtnSecond = container.querySelector(
      `button[data-value="${dateStrSecond}"]`,
    )

    act(() => {
      fireEvent.click(selectBtnSecond!)
    })

    expect(selectBtnSecond).toHaveAttribute("data-selected")
  })
})
