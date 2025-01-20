import { MultiDatePicker } from "."
import { a11y, fireEvent, render } from "../../../test"

describe("<MultiDatePicker />", () => {
  test("MultiDatePicker renders correctly", async () => {
    await a11y(<MultiDatePicker placeholder="basic" />)
  })

  describe("MultiDatePicker test", () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    test("should change selected dates", () => {
      const { container } = render(
        <MultiDatePicker
          defaultValue={[new Date(new Date().setDate(1))]}
          placeholder="basic"
          today
        />,
      )
      const selectDate = new Date(new Date().setDate(7))
      const value = new Date(selectDate.setHours(0, 0, 0, 0)).getDate()
      const selectBtn = container.querySelector(`button[data-value="${value}"]`)

      fireEvent.click(selectBtn!)

      expect(selectBtn).toHaveAttribute("data-selected")

      const selectDateSecond = new Date(new Date().setDate(14))
      const valueSecond = new Date(
        selectDateSecond.setHours(0, 0, 0, 0),
      ).getDate()
      const selectBtnSecond = container.querySelector(
        `button[data-value="${valueSecond}"]`,
      )

      fireEvent.click(selectBtnSecond!)

      expect(selectBtnSecond).toHaveAttribute("data-selected")
    })
  })
})
