import { a11y, fireEvent, render } from "@yamada-ui/test"
import { MonthPicker } from "../src"

describe("<MonthPicker />", () => {
  test("MonthPicker renders correctly", async () => {
    const { container } = render(<MonthPicker placeholder="basic" />)
    await a11y(container)
  })

  test("should change selected Month", async () => {
    const { container } = render(
      <MonthPicker placeholder="basic" defaultValue={new Date(new Date())} />,
    )

    const selectBtn = container.querySelector(`button[data-value="1"]`)

    fireEvent.click(selectBtn!)

    expect(selectBtn).toHaveAttribute("data-selected")
  })
})
