import { a11y, act, fireEvent, render } from "@yamada-ui/test"
import { DatePicker } from "../src"

describe("<DatePicker />", () => {
  test("DatePicker renders correctly", async () => {
    const { container } = render(<DatePicker placeholder="basic" />)
    await a11y(container)
  })

  test("should change selected date", async () => {
    const { container } = render(
      <DatePicker
        placeholder="basic"
        today
        defaultValue={new Date(new Date().setDate(1))}
      />,
    )

    const selectDate = new Date(new Date().setDate(7))
    const dateStr = new Date(selectDate.setHours(0, 0, 0, 0)).toString()
    const selectBtn = container.querySelector(`button[data-value="${dateStr}"]`)

    act(() => {
      fireEvent.click(selectBtn!)
    })

    expect(selectBtn).toHaveAttribute("data-selected")
  })
})
