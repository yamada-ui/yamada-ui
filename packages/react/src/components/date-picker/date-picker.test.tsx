import { a11y, render, screen } from "#test"
import { DatePicker } from "."

describe("<DatePicker />", () => {
  test("renders component correctly", async () => {
    await a11y(<DatePicker />)
  })

  test("sets `displayName` correctly", () => {
    expect(DatePicker.displayName).toBe("DatePickerRoot")
  })

  test("sets `className` correctly", () => {
    render(
      <DatePicker
        defaultOpen
        placeholder="Choice a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-date-picker__root")
    expect(screen.getByTestId("icon")).toHaveClass("ui-date-picker__icon")
    expect(screen.getAllByRole("combobox")[0]).toHaveClass(
      "ui-date-picker__field",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <DatePicker
        defaultOpen
        placeholder="Choice a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("icon").tagName).toBe("DIV")
    expect(screen.getAllByRole("combobox")[0]?.tagName).toBe("DIV")
  })
})
