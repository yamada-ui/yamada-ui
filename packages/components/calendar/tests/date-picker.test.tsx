import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { DatePicker } from "../src"

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
      const selectBtn = container.querySelector(
        `button[data-value="${dateStr}"]`,
      )

      fireEvent.click(selectBtn!)

      expect(selectBtn).toHaveAttribute("data-selected")
    })

    test("whether Calendar is displayed when DatePicker is focused", async () => {
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
    })
  })
})
