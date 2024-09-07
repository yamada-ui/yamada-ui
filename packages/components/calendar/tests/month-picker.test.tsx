import { a11y, fireEvent, render } from "@yamada-ui/test"
import { MonthPicker } from "../src"

describe("<MonthPicker />", () => {
  test("MonthPicker renders correctly", async () => {
    await a11y(<MonthPicker placeholder="basic" />)
  })

  describe("MonthPicker test", () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })
    test("should change selected Month", async () => {
      const { container } = render(
        <MonthPicker placeholder="basic" defaultValue={new Date(new Date())} />,
      )

      const selectBtn = container.querySelector(`button[data-value="1"]`)

      fireEvent.click(selectBtn!)

      expect(selectBtn).toHaveAttribute("data-selected")
    })
    test("should not selected any month when no value is selected", async () => {
      const { container } = render(<MonthPicker placeholder="basic" />)

      const monthListButtons = container.querySelectorAll(
        `button.ui-calendar__month-list__button`,
      )

      monthListButtons.forEach((button) => {
        expect(button).not.toHaveAttribute("data-selected")
      })
    })
    test("should selected current year when opening year calendar", async () => {
      const { container } = render(<MonthPicker placeholder="basic" />)

      const headerLabelBtn = container.querySelector(
        `button.ui-calendar__header-label`,
      )
      fireEvent.click(headerLabelBtn!)

      const currentYear = new Date().getFullYear().toString()
      const currentYearBtn = container.querySelector(
        `button[data-value="${currentYear}"]`,
      )

      expect(currentYearBtn).toHaveAttribute("data-selected")
    })
  })
})
