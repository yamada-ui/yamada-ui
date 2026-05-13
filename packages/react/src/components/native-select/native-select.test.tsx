import { a11y, render, screen } from "#test"
import { NativeSelect } from "."
import { BoxIcon } from "../icon"

describe("<NativeSelect />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <NativeSelect.Root placeholder="Choose a option">
        <NativeSelect.Option value="one">Option 1</NativeSelect.Option>
        <NativeSelect.Option value="two">Option 2</NativeSelect.Option>
      </NativeSelect.Root>,
    )
  })

  test("should render select with props", async () => {
    const { user } = render(
      <NativeSelect.Root
        variant="outline"
        data-testid="select"
        focusBorderColor="green.500"
        placeholder="Options"
      >
        <NativeSelect.Option value="one">Option 1</NativeSelect.Option>
        <NativeSelect.Option value="two">Option 2</NativeSelect.Option>
      </NativeSelect.Root>,
    )

    await user.selectOptions(screen.getByTestId("select"), ["one"])

    const option1 = screen.getByRole("option", { name: "Option 1" })
    const option2 = screen.getByRole("option", { name: "Option 2" })

    expect(option1).toBeInstanceOf(HTMLOptionElement)
    expect(option2).toBeInstanceOf(HTMLOptionElement)
    if (!(option1 instanceof HTMLOptionElement)) return
    if (!(option2 instanceof HTMLOptionElement)) return
    expect(option1.selected).toBeTruthy()
    expect(option2.selected).toBeFalsy()
  })

  test("should render select without placeholder in options", () => {
    const { container } = render(
      <NativeSelect.Root
        variant="outline"
        data-testid="select"
        focusBorderColor="green.500"
        includePlaceholder={false}
        placeholder="Options"
      >
        <NativeSelect.Option data-testid="option" value="one">
          Option 1
        </NativeSelect.Option>
        <NativeSelect.Option data-testid="option" value="two">
          Option 2
        </NativeSelect.Option>
      </NativeSelect.Root>,
    )

    expect(container.querySelectorAll('[data-testid="option"]')).toHaveLength(2)
  })

  test("should disable select", () => {
    render(<NativeSelect.Root data-testid="select" disabled />)

    const select = screen.getByTestId("select")
    expect(select).toBeDisabled()
    expect(select).toHaveAttribute("aria-disabled", "true")
  })

  test("should be read only", () => {
    render(<NativeSelect.Root data-testid="select" readOnly />)

    const select = screen.getByTestId("select")
    expect(select).toHaveAttribute("aria-readonly", "true")
    expect(select).toHaveAttribute("aria-disabled", "true")
    expect(select).toHaveAttribute("readonly")
  })

  test("should be invalid", () => {
    render(<NativeSelect.Root data-testid="select" invalid />)

    expect(screen.getByTestId("select")).toHaveAttribute("aria-invalid", "true")
  })

  test("should render select with custom icon", () => {
    render(
      <NativeSelect.Root
        data-testid="select"
        iconProps={{
          children: <BoxIcon data-testid="Icon" />,
        }}
      />,
    )

    expect(screen.getByTestId("Icon")).toBeInTheDocument()
  })

  test("should render items correctly", () => {
    const items: NativeSelect.Item[] = [
      { label: "孫悟空", value: "孫悟空" },
      { label: "孫悟飯", value: "孫悟飯" },
      { label: "クリリン", value: "クリリン" },
    ]
    render(<NativeSelect.Root data-testid="select" items={items} />)

    expect(screen.getByTestId("select").children).toHaveLength(3)
  })

  test("should render items with group correctly", () => {
    const items: NativeSelect.Item[] = [
      { label: "ベジータ", value: "ベジータ" },
      {
        items: [
          { label: "孫悟空", value: "孫悟空" },
          { label: "孫悟飯", value: "孫悟飯" },
          { label: "クリリン", value: "クリリン" },
        ],
        label: "地球人",
      },
    ]
    render(<NativeSelect.Root data-testid="select" items={items} />)

    const select = screen.getByTestId("select")
    expect(select.children).toHaveLength(2)

    const optgroup = select.querySelector('optgroup[label="地球人"]')
    expect(optgroup).not.toBeNull()
    expect(optgroup?.children).toHaveLength(3)
  })
})
