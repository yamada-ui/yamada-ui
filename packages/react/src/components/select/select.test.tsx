import { a11y, render, screen } from "#test"
import { Select } from "."

describe("<Select />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Select.Root placeholder="Choose a option">
        <Select.Option value="one">Option 1</Select.Option>
        <Select.Option value="two">Option 2</Select.Option>
        <Select.Option value="three">Option 3</Select.Option>
      </Select.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Select.Root.displayName).toBe("SelectRoot")
    expect(Select.Group.displayName).toBe("SelectGroup")
    expect(Select.Option.displayName).toBe("SelectOption")
    expect(Select.Label.displayName).toBe("SelectLabel")
    expect(Select.Separator.displayName).toBe("SelectSeparator")
  })

  test("sets `className` correctly", () => {
    render(
      <Select.Root
        defaultOpen
        defaultValue="one"
        placeholder="Choose a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      >
        <Select.Option value="one">Option 1</Select.Option>
        <Select.Option value="two">Option 2</Select.Option>
        <Select.Option value="three">Option 3</Select.Option>
        <Select.Separator />
        <Select.Group label="Group 1">
          <Select.Option value="one">Group Option 1</Select.Option>
          <Select.Option value="two">Group Option 2</Select.Option>
          <Select.Option value="three">Group Option 3</Select.Option>
        </Select.Group>
      </Select.Root>,
    )

    const field = screen.getByRole("combobox", { name: /Choose a option/i })
    const group = screen.getByRole("group", { name: "Group 1" })
    const option = screen.getByRole("option", { name: "Option 1" })

    expect(screen.getByTestId("root")).toHaveClass("ui-select__root")
    expect(screen.getByTestId("icon")).toHaveClass("ui-select__icon")
    expect(field).toHaveClass("ui-select__field")
    expect(field.firstChild).toHaveClass("ui-select__value-text")
    expect(option).toHaveClass("ui-select__option")
    expect(option.firstChild).toHaveClass("ui-select__indicator")
    expect(group).toHaveClass("ui-select__group")
    expect(group.firstChild).toHaveClass("ui-select__label")
    expect(screen.getByRole("separator")).toHaveClass("ui-select__separator")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Select.Root
        defaultOpen
        defaultValue="one"
        placeholder="Choose a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      >
        <Select.Option value="one">Option 1</Select.Option>
        <Select.Option value="two">Option 2</Select.Option>
        <Select.Option value="three">Option 3</Select.Option>
        <Select.Separator />
        <Select.Group label="Group 1">
          <Select.Option value="one">Group Option 1</Select.Option>
          <Select.Option value="two">Group Option 2</Select.Option>
          <Select.Option value="three">Group Option 3</Select.Option>
        </Select.Group>
      </Select.Root>,
    )

    const field = screen.getByRole("combobox", { name: /Choose a option/i })
    const group = screen.getByRole("group", { name: "Group 1" })
    const option = screen.getByRole("option", { name: "Option 1" })

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("icon").tagName).toBe("DIV")
    expect(field.tagName).toBe("DIV")
    expect(field.children[0]?.tagName).toBe("SPAN")
    expect(option.tagName).toBe("DIV")
    expect(option.children[0]?.tagName).toBe("DIV")
    expect(group.tagName).toBe("DIV")
    expect(group.children[0]?.tagName).toBe("SPAN")
    expect(screen.getByRole("separator").tagName).toBe("HR")
  })
})
