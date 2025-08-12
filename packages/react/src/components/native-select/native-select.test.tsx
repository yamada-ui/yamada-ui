import { a11y, render, screen } from "#test"
import { NativeSelect } from "."
import { BoxIcon } from "../icon"

describe("<NativeSelect />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <NativeSelect.Root placeholder="Choice a option">
        <NativeSelect.Option value="one">Option 1</NativeSelect.Option>
        <NativeSelect.Option value="two">Option 2</NativeSelect.Option>
      </NativeSelect.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(NativeSelect.Root.displayName).toBe("NativeSelectRoot")
    expect(NativeSelect.Option.displayName).toBe("NativeSelectOption")
    expect(NativeSelect.Group.displayName).toBe("NativeSelectGroup")
  })

  test("sets `className` correctly", () => {
    render(
      <NativeSelect.Root
        placeholder="キャラクターを選択"
        rootProps={{ "data-testid": "root" }}
      >
        <NativeSelect.Group label="地球人">
          <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
          <NativeSelect.Option value="孫悟飯">孫悟飯</NativeSelect.Option>
          <NativeSelect.Option value="クリリン">クリリン</NativeSelect.Option>
        </NativeSelect.Group>

        <NativeSelect.Group label="フリーザ軍">
          <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
          <NativeSelect.Option value="ギニュー">ギニュー</NativeSelect.Option>
          <NativeSelect.Option value="リクーム">リクーム</NativeSelect.Option>
          <NativeSelect.Option value="バータ">バータ</NativeSelect.Option>
          <NativeSelect.Option value="ジース">ジース</NativeSelect.Option>
          <NativeSelect.Option value="グルド">グルド</NativeSelect.Option>
        </NativeSelect.Group>
      </NativeSelect.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-native-select__root")
    expect(
      screen.getByRole("combobox", { name: /キャラクターを選択/i }),
    ).toHaveClass("ui-native-select__field")
    expect(screen.getByRole("option", { name: "孫悟空" })).toHaveClass(
      "ui-native-select__option",
    )
    expect(screen.getByRole("group", { name: "地球人" })).toHaveClass(
      "ui-native-select__group",
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

    expect(
      (screen.getByRole("option", { name: "Option 1" }) as any).selected,
    ).toBeTruthy()
    expect(
      (screen.getByRole("option", { name: "Option 2" }) as any).selected,
    ).toBeFalsy()
  })

  test("should render select without placeholder in options", () => {
    render(
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
    expect(screen.queryAllByTestId("option")).toHaveLength(2)
  })

  test("should disable select", () => {
    render(<NativeSelect.Root data-testid="select" disabled />)
    expect(screen.getByTestId("select")).toBeDisabled()
    expect(screen.getByTestId("select")).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })

  test("should be read only", () => {
    render(<NativeSelect.Root data-testid="select" readOnly />)
    expect(screen.getByTestId("select")).toHaveAttribute(
      "aria-readonly",
      "true",
    )
    expect(screen.getByTestId("select")).toHaveAttribute(
      "aria-disabled",
      "true",
    )
    expect(screen.getByTestId("select")).toHaveAttribute("readonly")
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
    const children = screen.getByTestId("select").children
    expect(children).toHaveLength(3)
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
    const children = screen.getByTestId("select").children
    expect(children).toHaveLength(2)
    const optgroup = screen.getByRole("group", { name: "地球人" })
    expect(optgroup).toBeInTheDocument()
    expect(optgroup.children).toHaveLength(3)
  })
})
