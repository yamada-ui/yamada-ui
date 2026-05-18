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
