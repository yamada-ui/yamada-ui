import { MonthPicker } from "."
import { a11y, render, screen, waitFor } from "#test"

describe("<MonthPicker />", () => {
  test("MonthPicker renders correctly", async () => {
    await a11y(<MonthPicker />)
  })

  test("should change selected month", async () => {
    const { user } = render(
      <MonthPicker defaultValue={new Date("2024/09/10 13:25:40")} />,
    )

    const input = await screen.findByRole("textbox")
    await user.click(input)

    const jun = await screen.findByRole("button", { name: /jun/i })
    await user.click(jun)

    await waitFor(() => expect(input).toHaveValue("2024/06"))
  })

  test("should change selected year", async () => {
    const { user } = render(
      <MonthPicker defaultValue={new Date("2024/09/10 13:25:40")} />,
    )

    const input = await screen.findByRole("textbox")
    await user.click(input)

    const headerButton = await screen.findByRole("button", { name: /2024/i })
    await user.click(headerButton)

    const yearButton = await screen.findByRole("button", { name: /2025/i })
    await user.click(yearButton)

    const dec = await screen.findByRole("button", { name: /dec/i })
    await user.click(dec)

    await waitFor(() => expect(input).toHaveValue("2025/12"))
  })
})
