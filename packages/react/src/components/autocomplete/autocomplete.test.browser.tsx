import { fireEvent, page, render } from "#test/browser"
import { Autocomplete } from "."

describe("<Autocomplete />", () => {
  type User = Awaited<ReturnType<typeof render>>["user"]

  const setInputValue = async (
    user: User,
    input: HTMLInputElement,
    value: string,
  ) => {
    await user.clear(input)

    if (value) await user.type(input, value)
  }

  const blurWithRelatedTarget = (
    input: HTMLInputElement,
    relatedTarget: EventTarget | null,
  ) => {
    fireEvent.blur(input, { relatedTarget })
  }

  test("does not hide separator when blurring to content in multiple mode", async () => {
    await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!
    const option = page.getByRole("option", { name: "Option 3" }).element()

    fireEvent.focus(input)

    blurWithRelatedTarget(input, option)

    const spans = [...field.querySelectorAll("span")]
    const lastSpan = spans.at(-1)

    expect(lastSpan?.textContent).toContain(",")
  })

  test("hides separator when blurring outside the component in multiple mode", async () => {
    await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!
    const outside = page.getByTestId("outside").element()

    input.focus()
    blurWithRelatedTarget(input, outside)

    const spans = [...field.querySelectorAll("span")]
    const lastSpan = spans.at(-1)

    expect(lastSpan?.textContent).not.toContain(",")
  })

  test("renders empty message when no items match filter", async () => {
    const { user } = await render(
      <Autocomplete.Root
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        placeholder="Choose"
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "xyz")

    await expect.element(page.getByText("No results found")).toBeInTheDocument()
  })

  test("renders custom empty message", async () => {
    const { user } = await render(
      <Autocomplete.Root
        defaultOpen
        emptyMessage="Nothing here"
        items={[{ label: "Option 1", value: "one" }]}
        placeholder="Choose"
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "xyz")

    await expect.element(page.getByText("Nothing here")).toBeInTheDocument()
  })

  test("filters items using `query` property", async () => {
    const { user } = await render(
      <Autocomplete.Root
        defaultOpen
        items={[
          { label: "Option 1", query: "search-one", value: "one" },
          { label: "Option 2", query: "search-two", value: "two" },
        ]}
        placeholder="Choose"
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeVisible()

    await setInputValue(user, input, "search-one")

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeVisible()
    await expect
      .poll(() => page.getByRole("option", { name: "Option 2" }).query())
      .toBeNull()
  })

  test("filters grouped items using `query` property", async () => {
    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await expect
      .element(page.getByRole("option", { name: "Apple" }))
      .toBeVisible()

    await setInputValue(user, input, "fruit-apple")

    await expect
      .element(page.getByRole("option", { name: "Apple" }))
      .toBeVisible()
    await expect
      .poll(() => page.getByRole("option", { name: "Banana" }).query())
      .toBeNull()
  })

  test("selects and deselects values in multiple mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const option1 = page.getByRole("option", { name: "Option 1" }).element()

    await user.click(option1)

    expect(onChange).toHaveBeenCalledWith(["one"])

    await user.click(option1)

    expect(onChange).toHaveBeenCalledWith([])
  })

  test("does not allow input change when `max` is reached in multiple mode", async () => {
    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    input.focus()
    await setInputValue(user, input, "test")

    expect(input).toHaveValue("")
  })

  test("clears value when clear icon is clicked", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const icon = page.getByTestId("icon").element()

    await user.click(icon)

    expect(onChange).toHaveBeenCalledWith("")
  })

  test("clears value when clear icon receives Enter key", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const icon = page.getByTestId("icon").element()

    icon.focus()
    await user.keyboard("{Enter}")

    expect(onChange).toHaveBeenCalledWith("")
  })

  test("clears value when clear icon receives Space key", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const icon = page.getByTestId("icon").element()

    icon.focus()
    await user.keyboard("{Space}")

    expect(onChange).toHaveBeenCalledWith("")
  })

  test("clears multiple values when clear icon is clicked", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const icon = page.getByTestId("icon").element()

    await user.click(icon)

    expect(onChange).toHaveBeenCalledWith([])
  })

  test("removes last value with Backspace in multiple mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    input.focus()
    await user.keyboard("{Backspace}")

    expect(onChange).toHaveBeenCalledWith(["one"])
  })

  test("does not remove value with Backspace when input has value", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "test")
    onChange.mockClear()
    input.focus()
    await user.keyboard("{Backspace}")

    expect(onChange).not.toHaveBeenCalledWith([])
  })

  test("selects first filtered item with Enter key", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Autocomplete.Root
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        onChange={onChange}
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "Option 1")
    input.focus()
    await user.keyboard("{Enter}")

    expect(onChange).toHaveBeenCalledWith("one")
  })

  test("selects first item in group with Enter key", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "Apple")
    input.focus()
    await user.keyboard("{Enter}")

    expect(onChange).toHaveBeenCalledWith("apple")
  })

  test("allows custom value with Enter key when `allowCustomValue` is true in multiple mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "custom")
    input.focus()
    await user.keyboard("{Enter}")

    expect(onChange).toHaveBeenCalledWith(["custom"])
  })

  test("closes dropdown when `closeOnChange` is true", async () => {
    const { user } = await render(
      <Autocomplete.Root
        closeOnChange
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
      />,
    )

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeVisible()

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "Option")

    await expect
      .poll(() => page.getByRole("option", { name: "Option 1" }).query())
      .toBeNull()
  })

  test("opens dropdown on input change when `openOnChange` is true", async () => {
    const { user } = await render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnChange
        openOnFocus={false}
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "Option")

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeVisible()
  })

  test("clears value when input is emptied in single mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "")

    expect(onChange).toHaveBeenCalledWith("")
  })

  test("sets input value on blur with `allowCustomValue` in single mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!
    const outside = page.getByTestId("outside").element()

    input.focus()
    await setInputValue(user, input, "custom value")
    blurWithRelatedTarget(input, outside)

    expect(onChange).toHaveBeenCalledWith("custom value")
  })

  test("restores input value on blur without `allowCustomValue` in single mode", async () => {
    await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!
    const outside = page.getByTestId("outside").element()

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "random" } })
    blurWithRelatedTarget(input, outside)

    expect(input).toHaveValue("Option 1")
  })

  test("clears input value on blur in multiple mode", async () => {
    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!
    const outside = page.getByTestId("outside").element()

    input.focus()
    await setInputValue(user, input, "search")
    blurWithRelatedTarget(input, outside)

    expect(input).toHaveValue("")
  })

  test("focuses input when clear icon is clicked with `focusOnClear`", async () => {
    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!
    const icon = page.getByTestId("icon").element()
    await user.click(icon)

    expect(input).toHaveFocus()
  })

  test("opens dropdown on focus when `openOnFocus` is true", async () => {
    await render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnFocus
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    input.focus()

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeVisible()
  })

  test("prevents default on mousedown when `openOnFocus` is true", async () => {
    await render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnFocus
      />,
    )

    const field = page.getByRole("combobox").element()
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
    const { user } = await render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnClick
        openOnFocus={false}
      />,
    )

    const field = page.getByRole("combobox").element()

    await user.click(field)

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeVisible()
  })

  test("does not respond to interactions when disabled", async () => {
    const { user } = await render(
      <Autocomplete.Root
        disabled
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    input.focus()
    await user.keyboard("{Enter}")

    await expect
      .poll(() => page.getByRole("option", { name: "Option 1" }).query())
      .toBeNull()
  })

  test("removes selected value via custom render's `onClear`", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const tags = page.getByTestId("custom-tag").elements()

    await user.click(tags[0]!)

    expect(onChange).toHaveBeenCalledWith(["two"])
  })

  test("does not open on change when `openOnChange` is false", async () => {
    const { user } = await render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnChange={false}
        openOnFocus={false}
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "Option")

    await expect
      .poll(() => page.getByRole("option", { name: "Option 1" }).query())
      .toBeNull()
  })

  test("uses items with `query` property matching in grouped filter", async () => {
    const { user } = await render(
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

    await expect
      .element(page.getByRole("option", { name: "Red" }))
      .toBeVisible()

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "color-red")

    await expect
      .element(page.getByRole("option", { name: "Red" }))
      .toBeVisible()
    await expect
      .poll(() => page.getByRole("option", { name: "Blue" }).query())
      .toBeNull()
  })

  test("does not allow custom value with Enter when not in multiple mode", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Autocomplete.Root
        allowCustomValue
        defaultOpen
        items={[{ label: "Option 1", value: "one" }]}
        onChange={onChange}
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "nonexistent")
    onChange.mockClear()
    input.focus()
    await user.keyboard("{Enter}")

    expect(onChange).not.toHaveBeenCalledWith("nonexistent")
  })

  test("does not clear when disabled and clear icon is clicked", async () => {
    const onChange = vi.fn()

    await render(
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

    const icon = page.getByTestId("icon").element()

    fireEvent.click(icon)

    expect(onChange).not.toHaveBeenCalledWith("")
  })

  test("sets `allowCustomValue` input value on blur when input is empty", async () => {
    const onChange = vi.fn()

    const { user } = await render(
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

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!
    const outside = page.getByTestId("outside").element()

    input.focus()
    await setInputValue(user, input, "")
    blurWithRelatedTarget(input, outside)

    expect(input).toHaveValue("")
  })

  test("handles `closeOnChange` as function", async () => {
    const { user } = await render(
      <Autocomplete.Root
        closeOnChange={() => true}
        defaultOpen
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
      />,
    )

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeVisible()

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "Option")

    await expect
      .poll(() => page.getByRole("option", { name: "Option 1" }).query())
      .toBeNull()
  })

  test("handles `openOnChange` as function", async () => {
    const { user } = await render(
      <Autocomplete.Root
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnChange={() => true}
        openOnFocus={false}
      />,
    )

    const field = page.getByRole("combobox").element()
    const input = field.querySelector("input")!

    await setInputValue(user, input, "Option")

    await expect
      .element(page.getByRole("option", { name: "Option 1" }))
      .toBeVisible()
  })

  test("merges user-provided `rootProps` with context props without overwriting `className`, `style`, and event handlers", async () => {
    const onClick = vi.fn()

    const { user } = await render(
      <Autocomplete.Root
        className="from-root"
        rootProps={{
          className: "from-user",
          style: { backgroundColor: "blue", color: "red" },
          "data-testid": "root",
          onClick,
        }}
      >
        <Autocomplete.Option value="one">Option 1</Autocomplete.Option>
      </Autocomplete.Root>,
    )

    const root = page.getByTestId("root").element()

    expect(root).toHaveClass("from-root", "from-user")
    expect(root).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(root).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    await user.click(root)

    expect(onClick).toHaveBeenCalledWith(expect.anything())
  })

  test("merges user-provided `elementProps` with internal props without overwriting `className`, `style`, and event handlers", async () => {
    const onClick = vi.fn()

    await render(
      <Autocomplete.Root
        elementProps={{
          className: "from-user",
          style: { backgroundColor: "blue", color: "red" },
          "data-testid": "element",
          onClick,
        }}
      >
        <Autocomplete.Option value="one">Option 1</Autocomplete.Option>
      </Autocomplete.Root>,
    )

    const element = page.getByTestId("element").element()
    expect(element).toHaveClass("from-user")
    expect(element).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(element).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    fireEvent.click(element)

    expect(onClick).toHaveBeenCalledWith(expect.anything())
  })

  test("merges user-provided `groupProps` with component props without overwriting event handlers", async () => {
    const onClick = vi.fn()

    const { user } = await render(
      <Autocomplete.Root
        defaultOpen
        items={[
          {
            items: [{ label: "Option 1", value: "one" }],
            label: "Group",
          },
        ]}
        groupProps={{
          "data-testid": "group",
          onClick,
        }}
      />,
    )

    const group = page.getByTestId("group").element()

    await user.click(group)

    expect(onClick).toHaveBeenCalledWith(expect.anything())
  })

  test("merges user-provided `optionProps` with component props without overwriting event handlers", async () => {
    const onClick = vi.fn()

    const { user } = await render(
      <Autocomplete.Root
        defaultOpen
        optionProps={{
          "data-custom": "from-context",
          onClick,
        }}
      >
        <Autocomplete.Option value="one">Option 1</Autocomplete.Option>
      </Autocomplete.Root>,
    )

    const option = page.getByRole("option", { name: "Option 1" }).element()

    expect(option).toHaveAttribute("data-custom", "from-context")

    await user.click(option)

    expect(onClick).toHaveBeenCalledWith(expect.anything())
  })

  test("merges user-provided `emptyProps` with internal props without overwriting `className`, `style`, and event handlers", async () => {
    const onClick = vi.fn()

    const { user } = await render(
      <Autocomplete.Root
        defaultOpen
        items={[]}
        emptyProps={{
          className: "from-user",
          style: { backgroundColor: "blue", color: "red" },
          onClick,
        }}
      />,
    )

    const empty = document.querySelector(".ui-autocomplete__empty")

    expect(empty).toHaveClass("ui-autocomplete__empty", "from-user")
    expect(empty).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(empty).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    await user.click(empty!)

    expect(onClick).toHaveBeenCalledWith(expect.anything())
  })
})
