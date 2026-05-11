import { page, render } from "#test/browser"
import { Autocomplete } from "."

describe("<Autocomplete />", () => {
  type User = Awaited<ReturnType<typeof render>>["user"]

  const setInputValue = async (
    user: User,
    input: HTMLInputElement,
    value: string,
  ) => {
    await user.fill(input, value)
  }

  test("does not hide separator when blurring to content in multiple mode", async () => {
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
      />,
    )

    const field = page.getByRole("combobox").element()

    await user.click(page.getByRole("option", { name: "Option 3" }))

    const spans = [...field.querySelectorAll("span")]
    const lastSpan = spans.at(-1)

    expect(lastSpan?.textContent).toContain(",")
  })

  test("hides separator when blurring outside the component in multiple mode", async () => {
    const { user } = await render(
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

    await user.click(page.getByRole("combobox"))
    await user.click(page.getByTestId("outside"))

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

  test("clears value when clear icon receives keyboard", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Autocomplete.Root
        defaultValue="one"
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnFocus={false}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )
    await user.tab()
    await user.tab()
    await user.keyboard("{Enter}")
    expect(onChange).toHaveBeenCalledWith("")

    onChange.mockClear()

    await render(
      <Autocomplete.Root
        defaultValue="one"
        items={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
        openOnFocus={false}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )
    await user.tab()
    await user.tab()
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

    await user.click(page.getByRole("combobox"))
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
    await user.click(input)
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

    await setInputValue(user, input, "custom value")
    await user.click(page.getByTestId("outside"))

    expect(onChange).toHaveBeenCalledWith("custom value")
  })

  test("restores input value on blur without `allowCustomValue` in single mode", async () => {
    const { user } = await render(
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

    await user.click(page.getByRole("combobox"))
    await user.keyboard("{End}random")
    await user.click(page.getByTestId("outside"))

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

    await setInputValue(user, input, "search")
    await user.click(page.getByTestId("outside"))

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
    const { user } = await render(
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

    await user.click(input)

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
    const el = page.getByTestId("icon").element() as HTMLElement
    el.click()
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

    await setInputValue(user, input, "")
    await user.click(page.getByTestId("outside"))

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
})
