import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { Select } from "."

const items: Select.Item[] = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Option 3", value: "three" },
]

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

  test("selects and deselects values in multiple mode", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        defaultOpen
        items={items}
        multiple
        placeholder="Choose options"
        onChange={onChange}
      />,
    )

    const option1 = screen.getByRole("option", { name: "Option 1" })
    const option2 = screen.getByRole("option", { name: "Option 2" })

    // Select first option
    fireEvent.click(option1)
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["one"])
    })

    // Select second option
    fireEvent.click(option2)
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["one", "two"])
    })

    // Deselect first option
    fireEvent.click(option1)
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["two"])
    })
  })

  test("respects max selection limit in multiple mode", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        defaultOpen
        items={items}
        max={2}
        multiple
        placeholder="Choose options"
        onChange={onChange}
      />,
    )

    const option1 = screen.getByRole("option", { name: "Option 1" })
    const option2 = screen.getByRole("option", { name: "Option 2" })
    const option3 = screen.getByRole("option", { name: "Option 3" })

    // Select two options (reaching max)
    fireEvent.click(option1)
    fireEvent.click(option2)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["one", "two"])
    })

    // Attempt to select a third option - should be disabled
    fireEvent.click(option3)

    await waitFor(() => {
      expect(option3).toHaveAttribute("aria-disabled", "true")
    })
  })

  test("displays selected values in multiple mode", () => {
    render(
      <Select.Root
        defaultOpen
        defaultValue={["one", "two"]}
        items={items}
        multiple
        placeholder="Choose options"
      />,
    )

    const field = screen.getByRole("combobox", { name: /Choose options/i })

    expect(field).toHaveTextContent("Option 1")
    expect(field).toHaveTextContent("Option 2")
  })

  test("displays placeholder when no value is selected in multiple mode", () => {
    render(<Select.Root items={items} multiple placeholder="Choose options" />)

    const field = screen.getByRole("combobox", { name: /Choose options/i })

    expect(field).toHaveTextContent("Choose options")
  })

  test("renders clear icon and clears value when clicked", async () => {
    render(
      <Select.Root
        clearable
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    expect(clearButton).toBeInTheDocument()

    fireEvent.click(clearButton)

    await waitFor(() => {
      const field = screen.getByRole("combobox", { name: /Choose a option/i })

      expect(field).toHaveTextContent("Choose a option")
    })
  })

  test("clears value via keyboard on clear icon", async () => {
    render(
      <Select.Root
        clearable
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    fireEvent.keyDown(clearButton, { key: "Enter" })

    await waitFor(() => {
      const field = screen.getByRole("combobox", { name: /Choose a option/i })

      expect(field).toHaveTextContent("Choose a option")
    })
  })

  test("clears multiple values when clear icon is clicked", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        clearable
        defaultValue={["one", "two"]}
        items={items}
        multiple
        placeholder="Choose options"
        onChange={onChange}
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    fireEvent.click(clearButton)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith([])
    })
  })

  test("focuses field when input is focused", () => {
    render(
      <Select.Root
        name="test-select"
        items={items}
        placeholder="Choose a option"
      />,
    )

    const input = document.querySelector("input[name='test-select']")

    expect(input).toBeInTheDocument()

    fireEvent.focus(input!)

    expect(document.activeElement).toBe(
      screen.getByRole("combobox", { name: /Choose a option/i }),
    )
  })

  test("does not focus field when disabled", () => {
    render(<Select.Root disabled items={items} placeholder="Choose a option" />)

    const field = screen.getByRole("combobox", { name: /Choose a option/i })

    fireEvent.focus(field)

    expect(field).toHaveAttribute("aria-disabled", "true")
  })

  test("renders with items prop using grouped items", () => {
    const groupedItems: Select.Item[] = [
      {
        items: [
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ],
        label: "Group 1",
      },
    ]

    render(
      <Select.Root
        defaultOpen
        items={groupedItems}
        placeholder="Choose a option"
      />,
    )

    const group = screen.getByRole("group", { name: "Group 1" })

    expect(group).toBeInTheDocument()
  })

  test("does not show clear icon when clearable is false", () => {
    render(
      <Select.Root
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
      />,
    )

    expect(
      screen.queryByRole("button", { name: /Clear value/i }),
    ).not.toBeInTheDocument()
  })

  test("does not include placeholder in options when includePlaceholder is false", () => {
    render(
      <Select.Root
        defaultOpen
        includePlaceholder={false}
        items={items}
        placeholder="Choose a option"
      />,
    )

    const options = screen.getAllByRole("option")
    const placeholderOption = options.find(
      (opt) => opt.textContent === "Choose a option",
    )

    expect(placeholderOption).toBeUndefined()
  })

  test("uses custom separator in multiple mode", () => {
    render(
      <Select.Root
        defaultValue={["one", "two"]}
        items={items}
        multiple
        placeholder="Choose options"
        separator=" | "
      />,
    )

    const field = screen.getByRole("combobox", { name: /Choose options/i })

    expect(field).toHaveTextContent("Option 1 |")
  })

  test("focuses field on clear when focusOnClear is true", async () => {
    render(
      <Select.Root
        clearable
        defaultValue="one"
        focusOnClear
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    fireEvent.click(clearButton)

    await waitFor(() => {
      expect(document.activeElement).toBe(
        screen.getByRole("combobox", { name: /Choose a option/i }),
      )
    })
  })

  test("does not focus field on clear when focusOnClear is false", async () => {
    render(
      <Select.Root
        clearable
        defaultValue="one"
        focusOnClear={false}
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    fireEvent.click(clearButton)

    await waitFor(() => {
      const field = screen.getByRole("combobox", { name: /Choose a option/i })

      expect(field).toHaveTextContent("Choose a option")
      expect(document.activeElement).not.toBe(field)
    })
  })
})
