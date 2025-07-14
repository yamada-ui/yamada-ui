import { DatePicker } from "."
import { a11y, fireEvent, render, screen } from "@/test"

describe("<DatePicker />", () => {
  test("DatePicker renders correctly", async () => {
    await a11y(<DatePicker placeholder="basic" />)
  })

  describe("DatePicker test", () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    test("should change selected date", () => {
      const { container } = render(
        <DatePicker
          defaultValue={new Date(new Date().setDate(1))}
          placeholder="basic"
          today
        />,
      )

      const selectDate = new Date(new Date().setDate(7))
      const value = new Date(selectDate.setHours(0, 0, 0, 0)).getDate()
      const selectBtn = container.querySelector(`button[data-value="${value}"]`)

      fireEvent.click(selectBtn!)

      expect(selectBtn).toHaveAttribute("data-selected")
    })

    test("whether Calendar is displayed when DatePicker is focused", () => {
      const { container } = render(
        <DatePicker
          defaultValue={new Date(new Date().setDate(1))}
          placeholder="basic"
          today
        />,
      )

      const popover = container.querySelector(".ui-popover")

      fireEvent.focus(screen.getByPlaceholderText("basic"))

      expect(popover).toHaveStyle({ visibility: "visible" })
    })
  })
})
