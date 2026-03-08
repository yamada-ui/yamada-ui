import { a11y, fireEvent, render, screen, waitFor } from "#test"
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

  test("does not hide separator when blurring to content in multiple mode", () => {
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
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!
    const option = screen.getByRole("option", { name: "Option 3" })

    fireEvent.focus(input)

    // The separator should still be visible after blurring to an option in the content
    fireEvent.blur(input, { relatedTarget: option })

    const spans = [...field.querySelectorAll("span")]
    const lastSpan = spans.at(-1)

    expect(lastSpan?.textContent).toContain(",")
  })

  test("hides separator when blurring outside the component in multiple mode", () => {
    render(
      <>
        <button data-testid="outside">outside</button>
        <Autocomplete.Root
          defaultOpen
          defaultValue={["one", "two"]}
          items={[
            { label: "Option 1", value: "one" },
            { label: "Option 2", value: "two" },
            { label: "Option 3", value: "three" },
          ]}
          multiple
        />
      </>,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!
    const outside = screen.getByTestId("outside")

    fireEvent.focus(input)
    fireEvent.blur(input, { relatedTarget: outside })

    const spans = [...field.querySelectorAll("span")]
    const lastSpan = spans.at(-1)

    expect(lastSpan?.textContent).not.toContain(",")
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

    const option = screen.getByRole("option", { name: "Option 1" })

    expect(option).toBeInTheDocument()
  })

  test("renders empty message when no items match filter", () => {
    render(
      <Autocomplete.Root
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        placeholder="Choose"
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "xyz" } })

    expect(screen.getByText("No results found")).toBeInTheDocument()
  })

  test("renders custom empty message", () => {
    render(
      <Autocomplete.Root
        defaultOpen
        emptyMessage="Nothing here"
        items={[{ label: "Option 1", value: "one" }]}
        placeholder="Choose"
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "xyz" } })

    expect(screen.getByText("Nothing here")).toBeInTheDocument()
  })

  test("filters items using `query` property", async () => {
    render(
      <Autocomplete.Root
        defaultOpen
        items={[
          { label: "Option 1", query: "search-one", value: "one" },
          { label: "Option 2", query: "search-two", value: "two" },
        ]}
        placeholder="Choose"
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible()
    })

    fireEvent.change(input, { target: { value: "search-one" } })

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible()
      expect(
        screen.queryByRole("option", { name: "Option 2" }),
      ).not.toBeInTheDocument()
    })
  })

  test("filters grouped items using `query` property", async () => {
    render(
      <Autocomplete.Root
        defaultOpen
        items={[
          {
            items: [
              { label: "Apple", query: "fruit-apple", value: "apple" },
              { label: "Banana", query: "fruit-banana", value: "banana" },
            ],
            label: "Fruits",
          },
        ]}
        placeholder="Choose"
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Apple" })).toBeVisible()
    })

    fireEvent.change(input, { target: { value: "fruit-apple" } })

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Apple" })).toBeVisible()
      expect(
        screen.queryByRole("option", { name: "Banana" }),
      ).not.toBeInTheDocument()
    })
  })

  test("selects and deselects values in multiple mode", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
          { label: "Option 3", value: "three" },
        ]}
        multiple
        onChange={onChange}
      />,
    )

    const option1 = screen.getByRole("option", { name: "Option 1" })

    fireEvent.click(option1)

    expect(onChange).toHaveBeenCalledWith(["one"])

    fireEvent.click(option1)

    expect(onChange).toHaveBeenCalledWith([])
  })

  test("respects `max` limit in multiple mode", () => {
    const onChange = vi.fn()

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
        onChange={onChange}
      />,
    )

    const option2 = screen.getByRole("option", { name: "Option 2" })

    expect(option2).toHaveAttribute("aria-disabled", "true")
  })

  test("does not allow input change when `max` is reached in multiple mode", () => {
    render(
      <Autocomplete.Root
        defaultOpen
        defaultValue={["one"]}
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        max={1}
        multiple
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "test" } })

    expect(input).toHaveValue("")
  })

  test("clears value when clear icon is clicked", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultValue="one"
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )

    const icon = screen.getByTestId("icon")

    fireEvent.click(icon)

    expect(onChange).toHaveBeenCalledWith("")
  })

  test("clears value when clear icon receives Enter key", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultValue="one"
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )

    const icon = screen.getByTestId("icon")

    fireEvent.keyDown(icon, { key: "Enter" })

    expect(onChange).toHaveBeenCalledWith("")
  })

  test("clears value when clear icon receives Space key", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultValue="one"
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )

    const icon = screen.getByTestId("icon")

    fireEvent.keyDown(icon, { key: " ", code: "Space" })

    expect(onChange).toHaveBeenCalledWith("")
  })

  test("clears multiple values when clear icon is clicked", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultValue={["one", "two"]}
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        multiple
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )

    const icon = screen.getByTestId("icon")

    fireEvent.click(icon)

    expect(onChange).toHaveBeenCalledWith([])
  })

  test("removes last value with Backspace in multiple mode", () => {
    const onChange = vi.fn()

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
        onChange={onChange}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.focus(input)
    fireEvent.keyDown(input, { key: "Backspace" })

    expect(onChange).toHaveBeenCalledWith(["one"])
  })

  test("does not remove value with Backspace when input has value", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultOpen
        defaultValue={["one"]}
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        multiple
        onChange={onChange}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "test" } })
    onChange.mockClear()
    fireEvent.keyDown(input, { key: "Backspace" })

    expect(onChange).not.toHaveBeenCalledWith([])
  })

  test("selects first filtered item with Enter key", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        onChange={onChange}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "Option 1" } })
    fireEvent.keyDown(input, { key: "Enter" })

    expect(onChange).toHaveBeenCalledWith("one")
  })

  test("selects first item in group with Enter key", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultOpen
        items={[
          {
            items: [
              { label: "Apple", value: "apple" },
              { label: "Banana", value: "banana" },
            ],
            label: "Fruits",
          },
        ]}
        onChange={onChange}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "Apple" } })
    fireEvent.keyDown(input, { key: "Enter" })

    expect(onChange).toHaveBeenCalledWith("apple")
  })

  test("allows custom value with Enter key when `allowCustomValue` is true in multiple mode", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        allowCustomValue
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        multiple
        onChange={onChange}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "custom" } })
    fireEvent.keyDown(input, { key: "Enter" })

    expect(onChange).toHaveBeenCalledWith(["custom"])
  })

  test("closes dropdown when `closeOnChange` is true", async () => {
    render(
      <Autocomplete.Root
        closeOnChange
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
      />,
    )

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible()
    })

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "Option" } })

    await waitFor(() => {
      expect(
        screen.queryByRole("option", { name: "Option 1" }),
      ).not.toBeVisible()
    })
  })

  test("opens dropdown on input change when `openOnChange` is true", async () => {
    render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnChange
        openOnFocus={false}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "Option" } })

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible()
    })
  })

  test("clears value when input is emptied in single mode", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultOpen
        defaultValue="one"
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        onChange={onChange}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "" } })

    expect(onChange).toHaveBeenCalledWith("")
  })

  test("sets input value on blur with `allowCustomValue` in single mode", () => {
    const onChange = vi.fn()

    render(
      <>
        <button data-testid="outside">outside</button>
        <Autocomplete.Root
          allowCustomValue
          defaultOpen
          items={[
            { label: "Option 1", value: "one" },
            { label: "Option 2", value: "two" },
          ]}
          onChange={onChange}
        />
      </>,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!
    const outside = screen.getByTestId("outside")

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "custom value" } })
    fireEvent.blur(input, { relatedTarget: outside })

    expect(onChange).toHaveBeenCalledWith("custom value")
  })

  test("restores input value on blur without `allowCustomValue` in single mode", () => {
    render(
      <>
        <button data-testid="outside">outside</button>
        <Autocomplete.Root
          defaultOpen
          defaultValue="one"
          items={[
            { label: "Option 1", value: "one" },
            { label: "Option 2", value: "two" },
          ]}
        />
      </>,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!
    const outside = screen.getByTestId("outside")

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "random" } })
    fireEvent.blur(input, { relatedTarget: outside })

    expect(input).toHaveValue("Option 1")
  })

  test("clears input value on blur in multiple mode", () => {
    render(
      <>
        <button data-testid="outside">outside</button>
        <Autocomplete.Root
          defaultOpen
          defaultValue={["one"]}
          items={[
            { label: "Option 1", value: "one" },
            { label: "Option 2", value: "two" },
          ]}
          multiple
        />
      </>,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!
    const outside = screen.getByTestId("outside")

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "search" } })
    fireEvent.blur(input, { relatedTarget: outside })

    expect(input).toHaveValue("")
  })

  test("focuses input when clear icon is clicked with `focusOnClear`", () => {
    render(
      <Autocomplete.Root
        defaultValue="one"
        focusOnClear
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!
    const icon = screen.getByTestId("icon")

    fireEvent.click(icon)

    expect(input).toHaveFocus()
  })

  test("opens dropdown on focus when `openOnFocus` is true", async () => {
    render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnFocus
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible()
    })
  })

  test("prevents default on mousedown when `openOnFocus` is true", () => {
    render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnFocus
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    const mouseDownEvent = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
    })
    const preventDefaultSpy = vi.spyOn(mouseDownEvent, "preventDefault")

    input.dispatchEvent(mouseDownEvent)

    expect(preventDefaultSpy).toHaveBeenCalledWith()
  })

  test("opens dropdown on click when `openOnClick` is true", async () => {
    render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnClick
        openOnFocus={false}
      />,
    )

    const field = screen.getByRole("combobox")

    fireEvent.click(field)

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible()
    })
  })

  test("does not respond to interactions when disabled", () => {
    render(
      <Autocomplete.Root
        disabled
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.keyDown(input, { key: "Enter" })

    expect(
      screen.queryByRole("option", { name: "Option 1" }),
    ).not.toBeInTheDocument()
  })

  test("updates input when controlled `value` prop changes", async () => {
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

    await waitFor(() => {
      expect(input).toHaveValue("Option 2")
    })
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

  test("removes selected value via custom render's `onClear`", () => {
    const onChange = vi.fn()

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
        onChange={onChange}
      />,
    )

    const tags = screen.getAllByTestId("custom-tag")

    fireEvent.click(tags[0]!)

    expect(onChange).toHaveBeenCalledWith(["two"])
  })

  test("does not open on change when `openOnChange` is false", () => {
    render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnChange={false}
        openOnFocus={false}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "Option" } })

    expect(
      screen.queryByRole("option", { name: "Option 1" }),
    ).not.toBeInTheDocument()
  })

  test("uses items with `query` property matching in grouped filter", async () => {
    render(
      <Autocomplete.Root
        defaultOpen
        items={[
          {
            items: [
              { label: "Red", query: "color-red", value: "red" },
              { label: "Blue", value: "blue" },
            ],
            label: "Colors",
          },
        ]}
        placeholder="Choose"
      />,
    )

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Red" })).toBeVisible()
    })

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "color-red" } })

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Red" })).toBeVisible()
      expect(
        screen.queryByRole("option", { name: "Blue" }),
      ).not.toBeInTheDocument()
    })
  })

  test("does not allow custom value with Enter when not in multiple mode", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        allowCustomValue
        defaultOpen
        items={[{ label: "Option 1", value: "one" }]}
        onChange={onChange}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "nonexistent" } })
    onChange.mockClear()
    fireEvent.keyDown(input, { key: "Enter" })

    // In single mode with no matching filtered items and allowCustomValue,
    // Enter should not call onSelect because !isArray(value)
    expect(onChange).not.toHaveBeenCalledWith("nonexistent")
  })

  test("does not clear when disabled and clear icon is clicked", () => {
    const onChange = vi.fn()

    render(
      <Autocomplete.Root
        defaultValue="one"
        disabled
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )

    const icon = screen.getByTestId("icon")

    fireEvent.click(icon)

    expect(onChange).not.toHaveBeenCalledWith("")
  })

  test("sets `allowCustomValue` input value on blur when input is empty", () => {
    const onChange = vi.fn()

    render(
      <>
        <button data-testid="outside">outside</button>
        <Autocomplete.Root
          allowCustomValue
          defaultOpen
          defaultValue="one"
          items={[
            { label: "Option 1", value: "one" },
            { label: "Option 2", value: "two" },
          ]}
          onChange={onChange}
        />
      </>,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!
    const outside = screen.getByTestId("outside")

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "" } })
    fireEvent.blur(input, { relatedTarget: outside })

    // When allowCustomValue is true and inputValue is empty string (falsy),
    // the if (inputValue) branch is not taken
    expect(input).toHaveValue("")
  })

  test("handles `closeOnChange` as function", async () => {
    render(
      <Autocomplete.Root
        closeOnChange={() => true}
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
      />,
    )

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible()
    })

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "Option" } })

    await waitFor(() => {
      expect(
        screen.queryByRole("option", { name: "Option 1" }),
      ).not.toBeVisible()
    })
  })

  test("handles `openOnChange` as function", async () => {
    render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnChange={() => true}
        openOnFocus={false}
      />,
    )

    const field = screen.getByRole("combobox")
    const input = field.querySelector("input")!

    fireEvent.change(input, { target: { value: "Option" } })

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible()
    })
  })
})
