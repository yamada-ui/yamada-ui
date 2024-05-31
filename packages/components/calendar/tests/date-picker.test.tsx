import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { DatePicker } from "../src"

describe("<DatePicker />", () => {
  test("DatePicker renders correctly", async () => {
    const { container } = render(<DatePicker placeholder="basic" />)
    await a11y(container)
  })

  test("should change selected date", async () => {
    vi.useFakeTimers()
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

    fireEvent.click(selectBtn!)

    expect(selectBtn).toHaveAttribute("data-selected")
    vi.useRealTimers()
  })

  test("whether Calendar is displayed when DatePicker is focused", async () => {
    vi.useFakeTimers()
    const { container } = render(
      <DatePicker
        placeholder="basic"
        today
        defaultValue={new Date(new Date().setDate(1))}
      />,
    )

    const popover = container.querySelector(".ui-popover")

    fireEvent.focus(screen.getByPlaceholderText("basic"))

    expect(popover).toHaveStyle({ visibility: "visible" })
    vi.useRealTimers()
  })
})
