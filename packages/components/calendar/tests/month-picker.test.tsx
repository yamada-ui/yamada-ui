import { a11y, fireEvent, render } from "@yamada-ui/test"
import { MonthPicker } from "../src"

describe("<MonthPicker />", () => {
  test("MonthPicker renders correctly", async () => {
    await a11y(<MonthPicker placeholder="basic" />)
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
