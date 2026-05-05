import { a11y, render, screen } from "#test"
import { Autocomplete } from "."

describe("<Autocomplete />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Autocomplete.Root placeholder="Choose a option">
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
        placeholder="Choose a option"
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
        placeholder="Choose a option"
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
    expect(field.tagName).toBe("DIV")
    expect(option.tagName).toBe("DIV")
    expect(option.children[0]?.tagName).toBe("DIV")
    expect(group.tagName).toBe("DIV")
    expect(group.children[0]?.tagName).toBe("SPAN")
  })

  test("renders group without label", () => {
    render(
      <Autocomplete.Root defaultOpen placeholder="Choose a option">
        <Autocomplete.Group>
          <Autocomplete.Option value="one">Option 1</Autocomplete.Option>
        </Autocomplete.Group>
      </Autocomplete.Root>,
    )

    expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument()
  })

  test("respects `max` limit in multiple mode", () => {
    render(
      <Autocomplete.Root
        defaultOpen
        defaultValue={["one"]}
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
          { label: "Option 3", value: "three" },
        ]}
        max={1}
        multiple
      />,
    )

    const option2 = screen.getByRole("option", { name: "Option 2" })

    expect(option2).toHaveAttribute("aria-disabled", "true")
  })

  test("updates input when controlled `value` prop changes", () => {
    const { rerender } = render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        value="one"
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    expect(input).toHaveValue("Option 1")

    rerender(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        value="two"
      />,
    )

    expect(input).toHaveValue("Option 2")
  })

  test("renders children for selected values in multiple mode with custom render", () => {
    render(
      <Autocomplete.Root
        defaultOpen
        defaultValue={["one", "two"]}
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
          { label: "Option 3", value: "three" },
        ]}
        multiple
        render={({ label, onClear }) => (
          <button data-testid="custom-tag" onClick={onClear}>
            {label}
          </button>
        )}
      />,
    )

    const tags = screen.getAllByTestId("custom-tag")

    expect(tags).toHaveLength(2)
    expect(tags[0]).toHaveTextContent("Option 1")
  })
})
