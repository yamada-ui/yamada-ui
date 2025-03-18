import type { NativeSelectItem } from "../src"
import { a11y, render, screen, TestIcon } from "@yamada-ui/test"
import { NativeOption, NativeSelect } from "../src"

describe("<NativeSelect />", () => {
  test("NativeSelect renders correctly", async () => {
    await a11y(
      <NativeSelect aria-label="Select value" placeholder="Options">
        <NativeOption value="one">Option 1</NativeOption>
        <NativeOption value="two">Option 2</NativeOption>
      </NativeSelect>,
    )
  })

  test("should render select with props", async () => {
    const { user } = render(
      <NativeSelect
        variant="outline"
        data-testid="select"
        focusBorderColor="green.500"
        placeholder="Options"
      >
        <NativeOption value="one">Option 1</NativeOption>
        <NativeOption value="two">Option 2</NativeOption>
      </NativeSelect>,
    )
    await user.selectOptions(screen.getByTestId("select"), ["one"])
    expect(
      (screen.getByRole("option", { name: "Option 1" }) as any).selected,
    ).toBeTruthy()
    expect(
      (screen.getByRole("option", { name: "Option 2" }) as any).selected,
    ).toBeFalsy()
  })

  test("should render select without placeholder in options", () => {
    render(
      <NativeSelect
        variant="outline"
        data-testid="select"
        focusBorderColor="green.500"
        placeholder="Options"
        placeholderInOptions={false}
      >
        <NativeOption data-testid="option" value="one">
          Option 1
        </NativeOption>
        <NativeOption data-testid="option" value="two">
          Option 2
        </NativeOption>
      </NativeSelect>,
    )
    expect(screen.queryAllByTestId("option")).toHaveLength(2)
  })

  test("should disable select", () => {
    render(<NativeSelect data-testid="select" disabled />)
    expect(screen.getByTestId("select")).toBeDisabled()
  })

  test("should be read only", () => {
    render(<NativeSelect data-testid="select" readOnly />)
    expect(screen.getByTestId("select")).not.toHaveAttribute(
      "aria-readonly",
      "true",
    )
    expect(screen.getByTestId("select")).not.toHaveAttribute("readonly", "true")
  })

  test("should be invalid", () => {
    render(<NativeSelect data-testid="select" invalid />)
    expect(screen.getByTestId("select")).toHaveAttribute("aria-invalid", "true")
  })

  test("should render select with custom icon", () => {
    render(
      <NativeSelect
        data-testid="select"
        iconProps={{
          children: <TestIcon data-testid="Icon" />,
        }}
      />,
    )
    expect(screen.getByTestId("Icon")).toBeInTheDocument()
  })

  test("should render items correctly", () => {
    const items: NativeSelectItem[] = [
      { label: "孫悟空", value: "孫悟空" },
      { label: "孫悟飯", value: "孫悟飯" },
      { label: "クリリン", value: "クリリン" },
    ]
    render(<NativeSelect data-testid="select" items={items} />)
    const children = screen.getByTestId("select").children
    expect(children).toHaveLength(3)
  })

  test("should render items with group correctly", () => {
    const items: NativeSelectItem[] = [
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
    render(<NativeSelect data-testid="select" items={items} />)
    const children = screen.getByTestId("select").children
    expect(children).toHaveLength(2)
    const optgroup = screen.getByRole("group", { name: "地球人" })
    expect(optgroup).toBeInTheDocument()
    expect(optgroup.children).toHaveLength(3)
  })
})
