import type { FC } from "react"
import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { useState } from "react"
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

  test("works with controlled value", async () => {
    const ControlledSelect: FC = () => {
      const [value, setValue] = useState("one")

      return (
        <>
          <button data-testid="change-value" onClick={() => setValue("two")}>
            Change
          </button>
          <Select.Root
            items={items}
            placeholder="Choose a option"
            value={value}
            onChange={setValue}
          />
        </>
      )
    }

    render(<ControlledSelect />)

    const field = screen.getByRole("combobox", { name: /Choose a option/i })

    expect(field).toHaveTextContent("Option 1")

    fireEvent.click(screen.getByTestId("change-value"))

    await waitFor(() => {
      expect(field).toHaveTextContent("Option 2")
    })
  })

  test("works with controlled value in multiple mode", async () => {
    const ControlledMultiSelect: FC = () => {
      const [value, setValue] = useState<string[]>(["one"])

      return (
        <>
          <button
            data-testid="change-value"
            onClick={() => setValue(["two", "three"])}
          >
            Change
          </button>
          <Select.Root
            items={items}
            multiple
            placeholder="Choose options"
            value={value}
            onChange={setValue}
          />
        </>
      )
    }

    render(<ControlledMultiSelect />)

    const field = screen.getByRole("combobox", { name: /Choose options/i })

    expect(field).toHaveTextContent("Option 1")

    fireEvent.click(screen.getByTestId("change-value"))

    await waitFor(() => {
      expect(field).toHaveTextContent("Option 2")
    })
    expect(field).toHaveTextContent("Option 3")
  })

  test("clears value via Space key on clear icon", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        clearable
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    fireEvent.keyDown(clearButton, { key: " ", code: "Space" })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("")
    })
  })

  test("renders with custom render function returning non-element", () => {
    render(
      <Select.Root
        defaultValue={["one"]}
        items={items}
        multiple
        placeholder="Choose options"
        render={({ label }) => label}
      />,
    )

    const field = screen.getByRole("combobox", { name: /Choose options/i })

    expect(field).toHaveTextContent("Option 1")
  })

  test("renders with custom render function returning ReactElement", () => {
    render(
      <Select.Root
        defaultValue={["one", "two"]}
        items={items}
        multiple
        placeholder="Choose options"
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
    expect(tags[1]).toHaveTextContent("Option 2")
  })

  test("removes selected value via custom render's onClear", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        defaultValue={["one", "two"]}
        items={items}
        multiple
        placeholder="Choose options"
        render={({ label, onClear }) => (
          <button data-testid="custom-tag" onClick={onClear}>
            {label}
          </button>
        )}
        onChange={onChange}
      />,
    )

    const tags = screen.getAllByTestId("custom-tag")

    fireEvent.click(tags[0]!)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["two"])
    })
  })

  test("renders with readOnly", () => {
    render(<Select.Root items={items} placeholder="Choose a option" readOnly />)

    const field = screen.getByRole("combobox", { name: /Choose a option/i })

    expect(field).toHaveAttribute("aria-readonly", "true")
  })

  test("renders hidden input with correct attributes", () => {
    render(
      <Select.Root
        id="my-select"
        name="my-select"
        defaultValue="one"
        disabled
        items={items}
        placeholder="Choose a option"
        readOnly
        required
      />,
    )

    const input = document.querySelector(
      "input[name='my-select']",
    ) as HTMLInputElement

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute("id", "my-select")
    expect(input).toHaveAttribute("name", "my-select")
    expect(input).toBeDisabled()
    expect(input).toBeRequired()
    expect(input).toHaveAttribute("readonly")
    expect(input).toHaveValue("one")
  })

  test("renders hidden input with joined values in multiple mode", () => {
    render(
      <Select.Root
        name="multi-select"
        defaultValue={["one", "two"]}
        items={items}
        multiple
        placeholder="Choose options"
      />,
    )

    const input = document.querySelector(
      "input[name='multi-select']",
    ) as HTMLInputElement

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("one, two")
  })

  test("renders without placeholder", () => {
    render(<Select.Root defaultOpen items={items} />)

    const options = screen.getAllByRole("option")

    expect(options).toHaveLength(3)
  })

  test("renders with no items", () => {
    render(<Select.Root defaultOpen items={[]} placeholder="Choose a option" />)

    const field = screen.getByRole("combobox", { name: /Choose a option/i })

    expect(field).toBeInTheDocument()
  })

  test("selects a value in single mode", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        defaultOpen
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )

    const option = screen.getByRole("option", { name: "Option 1" })

    fireEvent.click(option)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })
  })

  test("renders with grouped items and selects grouped value", async () => {
    const groupedItems: Select.Item[] = [
      {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
        ],
        label: "Fruits",
      },
      {
        items: [
          { label: "Carrot", value: "carrot" },
          { label: "Broccoli", value: "broccoli" },
        ],
        label: "Vegetables",
      },
    ]

    const onChange = vi.fn()

    render(
      <Select.Root
        defaultOpen
        items={groupedItems}
        placeholder="Choose a item"
        onChange={onChange}
      />,
    )

    const option = screen.getByRole("option", { name: "Apple" })

    fireEvent.click(option)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("apple")
    })
  })

  test("displays grouped item value correctly when selected", () => {
    const groupedItems: Select.Item[] = [
      {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
        ],
        label: "Fruits",
      },
    ]

    render(
      <Select.Root
        defaultValue="apple"
        items={groupedItems}
        placeholder="Choose a item"
      />,
    )

    const field = screen.getByRole("combobox", { name: /Choose a item/i })

    expect(field).toHaveTextContent("Apple")
  })

  test("does not clear when disabled and clear icon is clicked", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        clearable
        defaultValue="one"
        disabled
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    expect(clearButton).toHaveAttribute("aria-disabled", "true")

    fireEvent.click(clearButton)

    await waitFor(() => {
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  test("does not clear when disabled and Space key is pressed on clear icon", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        clearable
        defaultValue="one"
        disabled
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    fireEvent.keyDown(clearButton, { key: " " })

    await waitFor(() => {
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  test("renders with custom icon", () => {
    render(
      <Select.Root
        icon={<span data-testid="custom-icon">V</span>}
        items={items}
        placeholder="Choose a option"
      />,
    )

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument()
  })

  test("renders with custom clear icon", () => {
    render(
      <Select.Root
        clearable
        clearIcon={<span data-testid="custom-clear">X</span>}
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
      />,
    )

    expect(screen.getByTestId("custom-clear")).toBeInTheDocument()
  })

  test("renders group without label", () => {
    render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Group>
          <Select.Option value="one">Option 1</Select.Option>
        </Select.Group>
      </Select.Root>,
    )

    const option = screen.getByRole("option", { name: "Option 1" })

    expect(option).toBeInTheDocument()
  })

  test("renders option with custom icon", () => {
    render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Option icon={<span data-testid="opt-icon">*</span>} value="one">
          Option 1
        </Select.Option>
      </Select.Root>,
    )

    expect(screen.getByTestId("opt-icon")).toBeInTheDocument()
  })

  test("renders with contentProps", () => {
    render(
      <Select.Root
        defaultOpen
        items={items}
        placeholder="Choose a option"
        contentProps={{ "data-testid": "content" } as any}
      />,
    )

    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  test("renders with elementProps", () => {
    render(
      <Select.Root
        items={items}
        placeholder="Choose a option"
        elementProps={{ "data-testid": "element" }}
      />,
    )

    expect(screen.getByTestId("element")).toBeInTheDocument()
  })

  test("displays no placeholder with empty multiple value and no placeholder set", () => {
    render(<Select.Root items={items} multiple />)

    const field = screen.getByRole("combobox")

    expect(field).toBeInTheDocument()
  })

  test("selects value when option uses children as value", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        defaultOpen
        placeholder="Choose a option"
        onChange={onChange}
      >
        <Select.Option value="opt1">Option 1</Select.Option>
        <Select.Option value="opt2">Option 2</Select.Option>
      </Select.Root>,
    )

    const option = screen.getByRole("option", { name: "Option 1" })

    fireEvent.click(option)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("opt1")
    })
  })

  test("renders with optionProps on the root", () => {
    render(
      <Select.Root
        defaultOpen
        items={items}
        placeholder="Choose a option"
        optionProps={{ "data-custom": "true" } as any}
      />,
    )

    const options = screen.getAllByRole("option")

    options.forEach((option) => {
      expect(option).toHaveAttribute("data-custom", "true")
    })
  })

  test("renders with groupProps on the root", () => {
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
        groupProps={{ "data-custom": "group" } as any}
      />,
    )

    const group = screen.getByRole("group", { name: "Group 1" })

    expect(group).toBeInTheDocument()
  })

  test("handles value that does not match any item in single mode", () => {
    render(
      <Select.Root
        defaultValue="nonexistent"
        items={items}
        placeholder="Choose a option"
      />,
    )

    const field = screen.getByRole("combobox", { name: /Choose a option/i })

    // When value doesn't match any item, selectedItems should be empty
    expect(field).toBeInTheDocument()
  })

  test("renders with children and items creates items from children", () => {
    render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Option value="one">Option 1</Select.Option>
        <Select.Option value="two">Option 2</Select.Option>
      </Select.Root>,
    )

    expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Option 2" })).toBeInTheDocument()
  })

  test("renders with placeholder option when using children", () => {
    render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Option value="one">Option 1</Select.Option>
      </Select.Root>,
    )

    const options = screen.getAllByRole("option")
    const placeholderOption = options.find(
      (opt) => opt.textContent === "Choose a option",
    )

    expect(placeholderOption).toBeInTheDocument()
  })

  test("renders items with label used as value when value is not specified", () => {
    const labelOnlyItems: Select.Item[] = [
      { label: "Apple" },
      { label: "Banana" },
    ]

    render(
      <Select.Root
        defaultOpen
        items={labelOnlyItems}
        placeholder="Choose a fruit"
      />,
    )

    const option = screen.getByRole("option", { name: "Apple" })

    expect(option).toBeInTheDocument()
  })

  test("selects item where label is used as value", async () => {
    const onChange = vi.fn()
    const labelOnlyItems: Select.Item[] = [
      { label: "Apple" },
      { label: "Banana" },
    ]

    render(
      <Select.Root
        defaultOpen
        items={labelOnlyItems}
        placeholder="Choose a fruit"
        onChange={onChange}
      />,
    )

    const option = screen.getByRole("option", { name: "Apple" })

    fireEvent.click(option)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("Apple")
    })
  })

  test("renders grouped items with label used as value when value is not specified", () => {
    const groupedItems: Select.Item[] = [
      {
        items: [{ label: "Apple" }, { label: "Banana" }],
        label: "Fruits",
      },
    ]

    render(
      <Select.Root
        defaultOpen
        items={groupedItems}
        placeholder="Choose a item"
      />,
    )

    const option = screen.getByRole("option", { name: "Apple" })

    expect(option).toBeInTheDocument()
  })

  test("renders with placeholderProps", () => {
    render(
      <Select.Root
        defaultOpen
        placeholder="Choose a option"
        placeholderProps={{ "data-testid": "placeholder-opt" } as any}
      >
        <Select.Option value="one">Option 1</Select.Option>
      </Select.Root>,
    )

    expect(screen.getByTestId("placeholder-opt")).toBeInTheDocument()
  })

  test("does not render placeholder option when includePlaceholder is false with children", () => {
    render(
      <Select.Root
        defaultOpen
        includePlaceholder={false}
        placeholder="Choose a option"
      >
        <Select.Option value="one">Option 1</Select.Option>
      </Select.Root>,
    )

    const options = screen.getAllByRole("option")

    expect(options).toHaveLength(1)
    expect(options[0]).toHaveTextContent("Option 1")
  })

  test("renders with animationScheme and duration", () => {
    render(
      <Select.Root
        animationScheme="scale"
        defaultOpen
        duration={0.2}
        items={items}
        placeholder="Choose a option"
      />,
    )

    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })

  test("clear icon has correct tabIndex when interactive", () => {
    render(
      <Select.Root
        clearable
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    expect(clearButton).toHaveAttribute("tabindex", "0")
  })

  test("clear icon has tabIndex -1 when disabled", () => {
    render(
      <Select.Root
        clearable
        defaultValue="one"
        disabled
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = screen.getByRole("button", { name: /Clear value/i })

    expect(clearButton).toHaveAttribute("tabindex", "-1")
  })

  test("does not close on select in multiple mode by default", async () => {
    const { user } = render(
      <Select.Root
        defaultOpen
        items={items}
        multiple
        placeholder="Choose options"
      />,
    )

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible()
    })

    await user.click(screen.getByRole("option", { name: "Option 1" }))

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 2" })).toBeVisible()
    })
  })

  test("renders SelectLabel within a group using the group context", () => {
    render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Group>
          <Select.Label>Custom Label</Select.Label>
          <Select.Option value="one">Option 1</Select.Option>
        </Select.Group>
      </Select.Root>,
    )

    expect(screen.getByText("Custom Label")).toBeInTheDocument()
  })

  test("renders placeholder option as hidden when placeholder is provided and includePlaceholder is false", () => {
    render(
      <Select.Root
        defaultOpen
        includePlaceholder={false}
        items={items}
        placeholder="Choose a option"
      />,
    )

    const options = screen.getAllByRole("option")

    // Only the 3 items should be visible, placeholder should not be rendered as option
    expect(options).toHaveLength(3)
  })

  test("handles selecting placeholder option (empty value)", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        defaultOpen
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )

    const options = screen.getAllByRole("option")
    const placeholderOption = options.find(
      (opt) => opt.textContent === "Choose a option",
    )

    expect(placeholderOption).toBeDefined()

    fireEvent.click(placeholderOption!)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("")
    })
  })

  test("renders children without placeholder", () => {
    render(
      <Select.Root defaultOpen>
        <Select.Option value="one">Option 1</Select.Option>
        <Select.Option value="two">Option 2</Select.Option>
      </Select.Root>,
    )

    const options = screen.getAllByRole("option")

    // Only the actual options, no placeholder option
    expect(options).toHaveLength(2)
    expect(options[0]).toHaveTextContent("Option 1")
  })

  test("does not add value beyond max in multiple mode", async () => {
    const onChange = vi.fn()

    render(
      <Select.Root
        defaultOpen
        items={items}
        max={1}
        multiple
        placeholder="Choose options"
        onChange={onChange}
      />,
    )

    const option1 = screen.getByRole("option", { name: "Option 1" })
    const option2 = screen.getByRole("option", { name: "Option 2" })

    // Select first option (reaching max of 1)
    fireEvent.click(option1)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["one"])
    })

    // Attempt to select second option while at max - option should be disabled
    await waitFor(() => {
      expect(option2).toHaveAttribute("aria-disabled", "true")
    })
  })

  test("renders with rootProps", () => {
    render(
      <Select.Root
        items={items}
        placeholder="Choose a option"
        rootProps={{ "data-testid": "root-wrapper" }}
      />,
    )

    expect(screen.getByTestId("root-wrapper")).toBeInTheDocument()
  })
})
