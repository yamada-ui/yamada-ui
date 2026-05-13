import type { FC, MouseEvent as ReactMouseEvent, ReactNode } from "react"
import { useState } from "react"
import { act, page, render, renderHook, waitFor } from "#test/browser"
import { Select, useSelect } from "."

const items: Select.Item[] = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Option 3", value: "three" },
]

describe("<Select />", () => {
  test("selects and deselects values in multiple mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        defaultOpen
        items={items}
        multiple
        placeholder="Choose options"
        onChange={onChange}
      />,
    )

    const option1 = page.getByRole("option", { name: "Option 1" })
    const option2 = page.getByRole("option", { name: "Option 2" })

    await expect.element(option1).toBeVisible()
    await user.click(option1, { force: true })
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["one"])
    })
    await expect.element(option1).toHaveAttribute("aria-selected", "true")

    await expect.element(option2).toBeVisible()
    await user.click(option2, { force: true })
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["one", "two"])
    })
    await expect.element(option2).toHaveAttribute("aria-selected", "true")

    await expect.element(option1).toBeVisible()
    await user.click(option1, { force: true })
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["two"])
    })
    await expect.element(option1).toHaveAttribute("aria-selected", "false")
  }, 30000)

  test("respects max selection limit in multiple mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        defaultOpen
        items={items}
        max={2}
        multiple
        placeholder="Choose options"
        onChange={onChange}
      />,
    )

    const option1 = page.getByRole("option", { name: "Option 1" })
    const option2 = page.getByRole("option", { name: "Option 2" })
    const option3 = page.getByRole("option", { name: "Option 3" })

    await expect.element(option1).toBeVisible()
    await user.click(option1, { force: true })
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["one"])
    })
    await expect.element(option1).toHaveAttribute("aria-selected", "true")

    await expect.element(option2).toBeVisible()
    await user.click(option2, { force: true })
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["one", "two"])
    })
    await expect.element(option2).toHaveAttribute("aria-selected", "true")

    await expect.element(option3).toBeVisible()
    await expect.element(option3).toHaveAttribute("aria-disabled", "true")
    await expect.element(option3).toHaveAttribute("aria-selected", "false")

    const callsAfterMaxReached = onChange.mock.calls.length
    await expect(user.click(option3, { timeout: 200 })).rejects.toThrow(
      /Timeout/,
    )
    expect(onChange).toHaveBeenCalledTimes(callsAfterMaxReached)
    expect(onChange).toHaveBeenLastCalledWith(["one", "two"])
  }, 30000)

  test("displays selected values in multiple mode", async () => {
    await render(
      <Select.Root
        defaultOpen
        defaultValue={["one", "two"]}
        items={items}
        multiple
        placeholder="Choose options"
      />,
    )

    const field = page.getByRole("combobox", { name: /Choose options/i })

    await expect.element(field).toHaveTextContent("Option 1")
    await expect.element(field).toHaveTextContent("Option 2")
  })

  test("displays placeholder when no value is selected in multiple mode", async () => {
    await render(
      <Select.Root items={items} multiple placeholder="Choose options" />,
    )

    const field = page.getByRole("combobox", { name: /Choose options/i })

    await expect.element(field).toHaveTextContent("Choose options")
  })

  test("renders clear icon and clears value when clicked", async () => {
    const { user } = await render(
      <Select.Root
        clearable
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = page.getByRole("button", { name: /Clear value/i })

    await expect.element(clearButton).toBeInTheDocument()

    await user.click(clearButton)

    const field = page.getByRole("combobox", { name: /Choose a option/i })

    await expect.element(field).toHaveTextContent("Choose a option")
  })

  test("clears value via keyboard on clear icon", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        clearable
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )
    page
      .getByRole("button", { name: /Clear value/i })
      .element()
      .focus()
    await user.keyboard("{Enter}")
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("")
    })

    onChange.mockClear()

    const { user: user2 } = await render(
      <Select.Root
        clearable
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )
    page
      .getByRole("button", { name: /Clear value/i })
      .element()
      .focus()
    await user2.keyboard(" ")
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("")
    })
  })

  test("clears multiple values when clear icon is clicked", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        clearable
        defaultValue={["one", "two"]}
        items={items}
        multiple
        placeholder="Choose options"
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("button", { name: /Clear value/i }), {
      force: true,
    })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith([])
    })
  })

  test("focuses field when input is focused", async () => {
    await render(
      <Select.Root
        name="test-select"
        items={items}
        placeholder="Choose a option"
      />,
    )

    const input = document.querySelector(
      "input[name='test-select']",
    ) as HTMLInputElement
    expect(input).toBeInTheDocument()
    input.focus()
    expect(document.activeElement).toBe(
      page.getByRole("combobox", { name: /Choose a option/i }).element(),
    )
  })

  test("does not focus field when hidden input is focused and disabled", async () => {
    await render(
      <Select.Root
        name="disabled-select"
        disabled
        items={items}
        placeholder="Choose a option"
      />,
    )

    const input = document.querySelector(
      "input[name='disabled-select']",
    ) as HTMLInputElement

    expect(input).toBeInTheDocument()

    input.dispatchEvent(new FocusEvent("focus", { bubbles: true }))

    const field = page.getByRole("combobox", { name: /Choose a option/i })

    expect(document.activeElement).not.toBe(field.element())
  })

  test("does not focus field when disabled", async () => {
    await render(
      <Select.Root disabled items={items} placeholder="Choose a option" />,
    )

    const field = page.getByRole("combobox", { name: /Choose a option/i })

    field.element().focus()

    await expect.element(field).toHaveAttribute("aria-disabled", "true")
  })

  test("renders with items prop using grouped items", async () => {
    const groupedItems: Select.Item[] = [
      {
        items: [
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ],
        label: "Group 1",
      },
    ]

    await render(
      <Select.Root
        defaultOpen
        items={groupedItems}
        placeholder="Choose a option"
      />,
    )

    const group = page.getByRole("group", { name: "Group 1" })

    await expect.element(group).toBeInTheDocument()
  })

  test("does not show clear icon when clearable is false", async () => {
    await render(
      <Select.Root
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
      />,
    )

    await expect
      .element(page.getByRole("button", { name: /Clear value/i }).query())
      .not.toBeInTheDocument()
  })

  test("does not include placeholder in options when includePlaceholder is false", async () => {
    await render(
      <Select.Root
        defaultOpen
        includePlaceholder={false}
        items={items}
        placeholder="Choose a option"
      />,
    )

    const options = page.getByRole("option").elements()
    const placeholderOption = options.find(
      (opt) => opt.textContent === "Choose a option",
    )

    expect(placeholderOption).toBeUndefined()
  })

  test("uses custom separator in multiple mode", async () => {
    await render(
      <Select.Root
        defaultValue={["one", "two"]}
        items={items}
        multiple
        placeholder="Choose options"
        separator=" | "
      />,
    )

    const field = page.getByRole("combobox", { name: /Choose options/i })

    await expect.element(field).toHaveTextContent("Option 1 |")
  })

  test("focuses field on clear when focusOnClear is true", async () => {
    const { user } = await render(
      <Select.Root
        clearable
        defaultValue="one"
        focusOnClear
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = page.getByRole("button", { name: /Clear value/i })

    await user.click(clearButton)

    await waitFor(() => {
      expect(document.activeElement).toBe(
        page.getByRole("combobox", { name: /Choose a option/i }).element(),
      )
    })
  })

  test("does not focus field on clear when focusOnClear is false", async () => {
    const { user } = await render(
      <Select.Root
        clearable
        defaultValue="one"
        focusOnClear={false}
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = page.getByRole("button", { name: /Clear value/i })

    await user.click(clearButton)

    const field = page.getByRole("combobox", { name: /Choose a option/i })

    await expect.element(field).toHaveTextContent("Choose a option")
    expect(document.activeElement).not.toBe(field.element())
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

    const { user } = await render(<ControlledSelect />)

    const field = page.getByRole("combobox", { name: /Choose a option/i })

    await expect.element(field).toHaveTextContent("Option 1")

    await user.click(page.getByTestId("change-value"), { force: true })

    await expect.element(field).toHaveTextContent("Option 2")
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

    const { user } = await render(<ControlledMultiSelect />)

    const field = page.getByRole("combobox", { name: /Choose options/i })

    await expect.element(field).toHaveTextContent("Option 1")

    await user.click(page.getByTestId("change-value"), { force: true })

    await expect.element(field).toHaveTextContent("Option 2")
    await expect.element(field).toHaveTextContent("Option 3")
  })

  test("renders with custom render function returning non-element", async () => {
    await render(
      <Select.Root
        defaultValue={["one"]}
        items={items}
        multiple
        placeholder="Choose options"
        render={({ label }) => label}
      />,
    )

    const field = page.getByRole("combobox", { name: /Choose options/i })

    await expect.element(field).toHaveTextContent("Option 1")
  })

  test("renders with custom render function returning ReactElement", async () => {
    await render(
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

    const tags = page.getByTestId("custom-tag").elements()

    expect(tags).toHaveLength(2)
    await expect
      .element(page.getByTestId("custom-tag").first())
      .toHaveTextContent("Option 1")
    await expect
      .element(page.getByTestId("custom-tag").nth(1))
      .toHaveTextContent("Option 2")
  })

  test("removes selected value via custom render's onClear", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const tags = page.getByTestId("custom-tag").elements()

    await user.click(tags[0]!, { force: true })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["two"])
    })
  })

  test("onClear does not call onChange when item value is empty", async () => {
    const onChange = vi.fn()
    await render(
      <Select.Root
        items={items}
        multiple
        placeholder="Choose options"
        render={({ value, onClear }) => (
          <button data-testid={`tag-${value}`} onClick={() => onClear()}>
            {value}
          </button>
        )}
        onChange={onChange}
      />,
    )
    const el = page.getByTestId("tag-").element() as HTMLButtonElement
    el.click()
    expect(onChange).not.toHaveBeenCalled()
  })

  test("renders with readOnly", async () => {
    await render(
      <Select.Root items={items} placeholder="Choose a option" readOnly />,
    )

    const field = page.getByRole("combobox", { name: /Choose a option/i })

    await expect.element(field).toHaveAttribute("aria-readonly", "true")
  })

  test("renders hidden input with correct attributes", async () => {
    await render(
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

  test("renders hidden input with joined values in multiple mode", async () => {
    await render(
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

  test("renders without placeholder", async () => {
    await render(<Select.Root defaultOpen items={items} />)

    const options = page.getByRole("option").elements()

    expect(options).toHaveLength(3)
  })

  test("renders with no items", async () => {
    await render(
      <Select.Root defaultOpen items={[]} placeholder="Choose a option" />,
    )

    const field = page.getByRole("combobox", { name: /Choose a option/i })

    await expect.element(field).toBeInTheDocument()
  })

  test("selects a value in single mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        defaultOpen
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("option", { name: "Option 1" }), {
      force: true,
    })

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

    const { user } = await render(
      <Select.Root
        defaultOpen
        items={groupedItems}
        placeholder="Choose a item"
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("option", { name: "Apple" }), {
      force: true,
    })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("apple")
    })
  })

  test("displays grouped item value correctly when selected", async () => {
    const groupedItems: Select.Item[] = [
      {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
        ],
        label: "Fruits",
      },
    ]

    await render(
      <Select.Root
        defaultValue="apple"
        items={groupedItems}
        placeholder="Choose a item"
      />,
    )

    const field = page.getByRole("combobox", { name: /Choose a item/i })

    await expect.element(field).toHaveTextContent("Apple")
  })

  test("does not clear when disabled and clear icon is clicked", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        clearable
        defaultValue="one"
        disabled
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )

    const clearButton = page.getByRole("button", { name: /Clear value/i })

    await expect.element(clearButton).toHaveAttribute("aria-disabled", "true")

    await user.click(clearButton, { force: true })

    await waitFor(() => {
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  test("does not clear when disabled and Space key is pressed on clear icon", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        clearable
        defaultValue="one"
        disabled
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )

    page
      .getByRole("button", { name: /Clear value/i })
      .element()
      .focus()
    await user.keyboard(" ")

    await waitFor(() => {
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  test("renders with custom icon", async () => {
    await render(
      <Select.Root
        icon={<span data-testid="custom-icon">V</span>}
        items={items}
        placeholder="Choose a option"
      />,
    )

    await expect.element(page.getByTestId("custom-icon")).toBeInTheDocument()
  })

  test("renders with custom clear icon", async () => {
    await render(
      <Select.Root
        clearable
        clearIcon={<span data-testid="custom-clear">X</span>}
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
      />,
    )

    await expect.element(page.getByTestId("custom-clear")).toBeInTheDocument()
  })

  test("renders group without label", async () => {
    await render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Group>
          <Select.Option value="one">Option 1</Select.Option>
        </Select.Group>
      </Select.Root>,
    )

    const option = page.getByRole("option", { name: "Option 1" })

    await expect.element(option).toBeInTheDocument()
  })

  test("renders option with custom icon", async () => {
    await render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Option icon={<span data-testid="opt-icon">*</span>} value="one">
          Option 1
        </Select.Option>
      </Select.Root>,
    )

    await expect.element(page.getByTestId("opt-icon")).toBeInTheDocument()
  })

  test("renders with contentProps", async () => {
    await render(
      <Select.Root
        defaultOpen
        items={items}
        placeholder="Choose a option"
        contentProps={{ "data-testid": "content" } as any}
      />,
    )

    await expect.element(page.getByTestId("content")).toBeInTheDocument()
  })

  test("renders with elementProps", async () => {
    await render(
      <Select.Root
        items={items}
        placeholder="Choose a option"
        elementProps={{ "data-testid": "element" }}
      />,
    )

    await expect.element(page.getByTestId("element")).toBeInTheDocument()
  })

  test("displays no placeholder with empty multiple value and no placeholder set", async () => {
    await render(<Select.Root items={items} multiple />)

    const field = page.getByRole("combobox")

    await expect.element(field).toBeInTheDocument()
  })

  test("selects value when option uses children as value", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        defaultOpen
        placeholder="Choose a option"
        onChange={onChange}
      >
        <Select.Option value="opt1">Option 1</Select.Option>
        <Select.Option value="opt2">Option 2</Select.Option>
      </Select.Root>,
    )

    const option = page.getByRole("option", { name: "Option 1" })

    await user.click(option, { force: true })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("opt1")
    })
  })

  test("renders with optionProps on the root", async () => {
    await render(
      <Select.Root
        defaultOpen
        items={items}
        placeholder="Choose a option"
        optionProps={{ "data-custom": "true" } as any}
      />,
    )

    const options = page.getByRole("option").elements()

    for (const option of options) {
      expect(option).toHaveAttribute("data-custom", "true")
    }
  })

  test("renders with groupProps on the root", async () => {
    const groupedItems: Select.Item[] = [
      {
        items: [
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ],
        label: "Group 1",
      },
    ]

    await render(
      <Select.Root
        defaultOpen
        items={groupedItems}
        placeholder="Choose a option"
        groupProps={{ "data-custom": "group" } as any}
      />,
    )

    const group = page.getByRole("group", { name: "Group 1" })

    await expect.element(group).toBeInTheDocument()
  })

  test("handles value that does not match any item in single mode", async () => {
    await render(
      <Select.Root
        defaultValue="nonexistent"
        items={items}
        placeholder="Choose a option"
      />,
    )

    const field = page.getByRole("combobox", { name: /Choose a option/i })

    await expect.element(field).toBeInTheDocument()
  })

  test("renders with children and items creates items from children", async () => {
    await render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Option value="one">Option 1</Select.Option>
        <Select.Option value="two">Option 2</Select.Option>
      </Select.Root>,
    )

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeInTheDocument()
    await expect
      .element(page.getByRole("option", { name: "Option 2" }))
      .toBeInTheDocument()
  })

  test("renders with placeholder option when using children", async () => {
    await render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Option value="one">Option 1</Select.Option>
      </Select.Root>,
    )

    const options = page.getByRole("option").elements()
    const placeholderOption = options.find(
      (opt) => opt.textContent === "Choose a option",
    )

    expect(placeholderOption).toBeInTheDocument()
  })

  test("renders items with label used as value when value is not specified", async () => {
    const labelOnlyItems: Select.Item[] = [
      { label: "Apple" },
      { label: "Banana" },
    ]

    await render(
      <Select.Root
        defaultOpen
        items={labelOnlyItems}
        placeholder="Choose a fruit"
      />,
    )

    const option = page.getByRole("option", { name: "Apple" })

    await expect.element(option).toBeInTheDocument()
  })

  test("handles items with non-string label so value stays undefined", async () => {
    const itemsWithNonStringLabel: Select.Item[] = [
      { label: (<span key="x">Custom</span>) as ReactNode },
    ]

    await render(
      <Select.Root
        defaultOpen
        items={itemsWithNonStringLabel}
        placeholder="Choose"
      />,
    )

    await expect.element(page.getByRole("combobox")).toBeInTheDocument()
  })

  test("renders non-ReactElement from custom render", async () => {
    await render(
      <Select.Root
        defaultValue={["one"]}
        items={items}
        multiple
        placeholder="Choose"
        render={({ label, value }) => (value ? label : null)}
      />,
    )

    await expect
      .element(page.getByRole("combobox"))
      .toHaveTextContent("Option 1")
  })

  test("handles grouped items with non-string label so value stays undefined", async () => {
    const groupedItems: Select.Item[] = [
      {
        items: [{ label: (<span key="y">Group Item</span>) as ReactNode }],
        label: "Group",
      },
    ]

    await render(
      <Select.Root defaultOpen items={groupedItems} placeholder="Choose" />,
    )

    await expect
      .element(page.getByRole("group", { name: "Group" }))
      .toBeInTheDocument()
  })

  test("selects item where label is used as value", async () => {
    const onChange = vi.fn()
    const labelOnlyItems: Select.Item[] = [
      { label: "Apple" },
      { label: "Banana" },
    ]

    const { user } = await render(
      <Select.Root
        defaultOpen
        items={labelOnlyItems}
        placeholder="Choose a fruit"
        onChange={onChange}
      />,
    )

    const option = page.getByRole("option", { name: "Apple" })

    await user.click(option, { force: true })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("Apple")
    })
  })

  test("renders grouped items with label used as value when value is not specified", async () => {
    const groupedItems: Select.Item[] = [
      {
        items: [{ label: "Apple" }, { label: "Banana" }],
        label: "Fruits",
      },
    ]

    await render(
      <Select.Root
        defaultOpen
        items={groupedItems}
        placeholder="Choose a item"
      />,
    )

    const option = page.getByRole("option", { name: "Apple" })

    await expect.element(option).toBeInTheDocument()
  })

  test("renders with placeholderProps", async () => {
    await render(
      <Select.Root
        defaultOpen
        placeholder="Choose a option"
        placeholderProps={{ "data-testid": "placeholder-opt" } as any}
      >
        <Select.Option value="one">Option 1</Select.Option>
      </Select.Root>,
    )

    await expect
      .element(page.getByTestId("placeholder-opt"))
      .toBeInTheDocument()
  })

  test("does not render placeholder option when includePlaceholder is false with children", async () => {
    await render(
      <Select.Root
        defaultOpen
        includePlaceholder={false}
        placeholder="Choose a option"
      >
        <Select.Option value="one">Option 1</Select.Option>
      </Select.Root>,
    )

    const options = page.getByRole("option").elements()

    expect(options).toHaveLength(1)
    expect(options[0]).toHaveTextContent("Option 1")
  })

  test("renders with animationScheme and duration", async () => {
    await render(
      <Select.Root
        animationScheme="scale"
        defaultOpen
        duration={0.2}
        items={items}
        placeholder="Choose a option"
      />,
    )

    await expect.element(page.getByRole("combobox")).toBeInTheDocument()
  })

  test("clear icon has correct tabIndex when interactive", async () => {
    await render(
      <Select.Root
        clearable
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = page.getByRole("button", { name: /Clear value/i })

    await expect.element(clearButton).toHaveAttribute("tabindex", "0")
  })

  test("clear icon has tabIndex -1 when disabled", async () => {
    await render(
      <Select.Root
        clearable
        defaultValue="one"
        disabled
        items={items}
        placeholder="Choose a option"
      />,
    )

    const clearButton = page.getByRole("button", { name: /Clear value/i })

    await expect.element(clearButton).toHaveAttribute("tabindex", "-1")
  })

  test("does not close on select in multiple mode by default", async () => {
    const { user } = await render(
      <Select.Root
        defaultOpen
        items={items}
        multiple
        placeholder="Choose options"
      />,
    )

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeInTheDocument()

    await user.click(page.getByRole("option", { name: "Option 1" }), {
      force: true,
    })

    await expect
      .element(page.getByRole("option", { name: "Option 2" }))
      .toBeInTheDocument()
  })

  test("renders SelectLabel within a group using the group context", async () => {
    await render(
      <Select.Root defaultOpen placeholder="Choose a option">
        <Select.Group>
          <Select.Label>Custom Label</Select.Label>
          <Select.Option value="one">Option 1</Select.Option>
        </Select.Group>
      </Select.Root>,
    )

    await expect.element(page.getByText("Custom Label")).toBeInTheDocument()
  })

  test("renders placeholder option as hidden when placeholder is provided and includePlaceholder is false", async () => {
    await render(
      <Select.Root
        defaultOpen
        includePlaceholder={false}
        items={items}
        placeholder="Choose a option"
      />,
    )

    const options = page.getByRole("option").elements()

    expect(options).toHaveLength(3)
  })

  test("handles selecting placeholder option (empty value)", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        defaultOpen
        defaultValue="one"
        items={items}
        placeholder="Choose a option"
        onChange={onChange}
      />,
    )

    const options = page.getByRole("option").elements()
    const placeholderOption = options.find(
      (opt) => opt.textContent === "Choose a option",
    )

    expect(placeholderOption).toBeDefined()

    await user.click(placeholderOption!, { force: true })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("")
    })
  })

  test("renders children without placeholder", async () => {
    await render(
      <Select.Root defaultOpen>
        <Select.Option value="one">Option 1</Select.Option>
        <Select.Option value="two">Option 2</Select.Option>
      </Select.Root>,
    )

    const options = page.getByRole("option").elements()

    expect(options).toHaveLength(2)
    expect(options[0]).toHaveTextContent("Option 1")
  })

  test("does not add value beyond max in multiple mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Select.Root
        defaultOpen
        items={items}
        max={1}
        multiple
        placeholder="Choose options"
        onChange={onChange}
      />,
    )

    const option1 = page.getByRole("option", { name: "Option 1" })
    const option2 = page.getByRole("option", { name: "Option 2" })

    await user.click(option1, { force: true })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["one"])
    })

    await expect.element(option2).toHaveAttribute("aria-disabled", "true")
  })

  test("useSelect returns prev when onChange is called with new value at max", async () => {
    const { result } = await renderHook(() =>
      useSelect({
        defaultValue: ["one"],
        items,
        max: 1,
        multiple: true,
      }),
    )

    expect(result.current.value).toStrictEqual(["one"])

    act(() => {
      result.current.onChange("two")
    })

    expect(result.current.value).toStrictEqual(["one"])
  })

  test("onClear does not focus field when fieldRef is null", async () => {
    const { result } = await renderHook(() =>
      useSelect({
        defaultValue: "one",
        items,
        placeholder: "Choose",
      }),
    )

    const clearProps = result.current.getClearIconProps()
    const mockEv = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })

    act(() => {
      clearProps.onClick?.(mockEv as unknown as ReactMouseEvent<HTMLDivElement>)
    })

    expect(result.current.value).toBe("")
  })

  test("renders with rootProps", async () => {
    await render(
      <Select.Root
        items={items}
        placeholder="Choose a option"
        rootProps={{ "data-testid": "root-wrapper" }}
      />,
    )

    await expect.element(page.getByTestId("root-wrapper")).toBeInTheDocument()
  })
})
