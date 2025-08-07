import { a11y, render, screen } from "#test"
import { Autocomplete } from "."

describe("<Autocomplete />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Autocomplete.Root placeholder="Choice a option">
        <Autocomplete.Option value="one">Option 1</Autocomplete.Option>
        <Autocomplete.Option value="two">Option 2</Autocomplete.Option>
        <Autocomplete.Option value="three">Option 3</Autocomplete.Option>
      </Autocomplete.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Autocomplete.Root.displayName).toBe("AutocompleteRoot")
    expect(Autocomplete.Group.displayName).toBe("AutocompleteGroup")
    expect(Autocomplete.Option.displayName).toBe("AutocompleteOption")
    expect(Autocomplete.Label.displayName).toBe("AutocompleteLabel")
  })

  test("sets `className` correctly", () => {
    render(
      <Autocomplete.Root
        defaultOpen
        defaultValue="one"
        placeholder="Choice a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      >
        <Autocomplete.Group label="Group 1">
          <Autocomplete.Option value="one">Option 1</Autocomplete.Option>
          <Autocomplete.Option value="two">Option 2</Autocomplete.Option>
          <Autocomplete.Option value="three">Option 3</Autocomplete.Option>
        </Autocomplete.Group>
      </Autocomplete.Root>,
    )

    const field = screen.getByRole("combobox")
    const group = screen.getByRole("group", { name: "Group 1" })
    const option = screen.getByRole("option", { name: "Option 1" })

    expect(screen.getByTestId("root")).toHaveClass("ui-autocomplete__root")
    expect(screen.getByTestId("icon")).toHaveClass("ui-autocomplete__icon")
    expect(field).toHaveClass("ui-autocomplete__field")
    expect(option).toHaveClass("ui-autocomplete__option")
    expect(option.firstChild).toHaveClass("ui-autocomplete__indicator")
    expect(group).toHaveClass("ui-autocomplete__group")
    expect(group.firstChild).toHaveClass("ui-autocomplete__label")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Autocomplete.Root
        defaultOpen
        defaultValue="one"
        placeholder="Choice a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      >
        <Autocomplete.Group label="Group 1">
          <Autocomplete.Option value="one">Option 1</Autocomplete.Option>
          <Autocomplete.Option value="two">Option 2</Autocomplete.Option>
          <Autocomplete.Option value="three">Option 3</Autocomplete.Option>
        </Autocomplete.Group>
      </Autocomplete.Root>,
    )

    const field = screen.getByRole("combobox")
    const group = screen.getByRole("group", { name: "Group 1" })
    const option = screen.getByRole("option", { name: "Option 1" })

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("icon").tagName).toBe("DIV")
    expect(field.tagName).toBe("INPUT")
    expect(option.tagName).toBe("DIV")
    expect(option.children[0]?.tagName).toBe("DIV")
    expect(group.tagName).toBe("DIV")
    expect(group.children[0]?.tagName).toBe("SPAN")
  })
})
