import { RangeDatePicker } from "."
import { a11y, fireEvent, render } from "../../../test"

describe("<RangeDatePicker />", () => {
  test("RangeDatePicker renders correctly", async () => {
    await a11y(<RangeDatePicker placeholder="basic" />)
  })

  describe("RangeDatePicker test", () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })
    test("should render dates of range", () => {
      const { container } = render(
        <RangeDatePicker
          defaultValue={[new Date(new Date().setDate(1))]}
          placeholder="basic"
          today
        />,
      )
      const selectDateFrom = new Date(new Date().setDate(7))
      const valueFrom = new Date(selectDateFrom.setHours(0, 0, 0, 0)).getDate()
      const selectBtnFrom = container.querySelector(
        `button[data-value="${valueFrom}"]`,
      )

      fireEvent.click(selectBtnFrom!)

      expect(selectBtnFrom).toHaveAttribute("data-selected")

      const selectDateTo = new Date(new Date().setDate(14))
      const valueTo = new Date(selectDateTo.setHours(0, 0, 0, 0)).getDate()
      const selectBtnTo = container.querySelector(
        `button[data-value="${valueTo}"]`,
      )

      fireEvent.click(selectBtnTo!)

      expect(selectBtnTo).toHaveAttribute("data-selected")
    })
  })
})
