import { a11y, render } from "#test"
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

    const input = document.querySelector("input[name='my-select']")

    expect(input).toBeInTheDocument()
    expect(input).toBeInstanceOf(HTMLInputElement)
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

    const input = document.querySelector("input[name='multi-select']")

    expect(input).toBeInTheDocument()
    expect(input).toBeInstanceOf(HTMLInputElement)
    expect(input).toHaveValue("one, two")
  })
})
