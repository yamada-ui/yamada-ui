import { a11y, render, screen } from "#test"
import { CheckboxGroup } from "."
import { Checkbox } from "./checkbox"

const items = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
]

describe("<Checkbox />", () => {
  test("renders component correctly", async () => {
    await a11y(<Checkbox defaultChecked>checkbox</Checkbox>)
  })

  test("sets `displayName` correctly", () => {
    expect(Checkbox.displayName).toBe("CheckboxRoot")
    expect(CheckboxGroup.Root.displayName).toBe("CheckboxGroup")
  })

  test("sets `className` correctly", () => {
    render(<CheckboxGroup.Root items={items} />)
    const checkbox = screen.getAllByRole("checkbox")[0]
    expect(screen.getByRole("group")).toHaveClass("ui-checkbox__group")
    expect(checkbox?.parentElement).toHaveClass("ui-checkbox__root")
    expect(checkbox?.parentElement?.children[1]).toHaveClass(
      "ui-checkbox__indicator",
    )
    expect(checkbox?.parentElement?.children[2]).toHaveClass(
      "ui-checkbox__label",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<CheckboxGroup.Root items={items} />)
    const checkbox = screen.getAllByRole("checkbox")[0]
    expect(screen.getByRole("group").tagName).toBe("DIV")
    expect(checkbox?.parentElement?.tagName).toBe("LABEL")
    expect(checkbox?.tagName).toBe("INPUT")
    expect(checkbox?.parentElement?.children[1]?.tagName).toBe("DIV")
    expect(checkbox?.parentElement?.children[2]?.tagName).toBe("SPAN")
  })
})
