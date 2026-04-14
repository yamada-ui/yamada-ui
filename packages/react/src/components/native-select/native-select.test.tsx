import { a11y, page, render } from "#test/browser"
import { createRef } from "react"
import { vi } from "vitest"
import { NativeSelect } from "."
import { BoxIcon } from "../icon"
import { InputPropsContext } from "../input"

describe("<NativeSelect />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <NativeSelect.Root placeholder="Choose a option">
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

  test("sets `className` correctly", async () => {
    const { container } = await render(
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

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-native-select__root")
    await expect
      .element(page.getByRole("combobox", { name: /キャラクターを選択/i }))
      .toHaveClass("ui-native-select__field")
    await expect
      .element(page.getByRole("option", { name: "孫悟空" }))
      .toHaveClass("ui-native-select__option")
    expect(container.querySelector('optgroup[label="地球人"]')).toHaveClass(
      "ui-native-select__group",
    )
  })

  test("merges root props with user props in NativeSelect.Root", async () => {
    const onClickFromRoot = vi.fn()
    const onClickFromUser = vi.fn()

    await render(
      <NativeSelect.Root
        className="from-user"
        css={{ color: "rgb(255, 0, 0)" }}
        data-testid="native-select-field"
        rootProps={{
          className: "from-root",
          css: { backgroundColor: "rgb(0, 0, 255)" },
          "data-testid": "native-select-root",
          onClick: onClickFromRoot,
        }}
        onClick={onClickFromUser}
      />,
    )

    const root = page.getByTestId("native-select-root").element()
    const field = page.getByTestId("native-select-field").element()

    expect(root).toHaveClass("from-root", "from-user")
    expect(root).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(root).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    field.click()

    expect(onClickFromRoot).toHaveBeenCalledTimes(1)
    expect(onClickFromUser).toHaveBeenCalledTimes(1)
  })

  test("merges ref from input props context with user ref", async () => {
    const contextRef = createRef<HTMLSelectElement>()
    const userRef = createRef<HTMLSelectElement>()

    await render(
      <InputPropsContext value={{ ref: contextRef as any }}>
        <NativeSelect.Root ref={userRef} data-testid="native-select-field" />
      </InputPropsContext>,
    )

    const field = page.getByTestId("native-select-field").element()

    expect(contextRef.current).toBe(field)
    expect(userRef.current).toBe(field)
  })

  test("merges input props context with user props", async () => {
    const onClickFromRoot = vi.fn()
    const onClickFromUser = vi.fn()

    await render(
      <InputPropsContext
        value={{
          className: "from-root",
          style: { color: "rgb(255, 0, 0)" },
          onClick: onClickFromRoot,
        }}
      >
        <NativeSelect.Root
          className="from-user"
          style={{ backgroundColor: "rgb(0, 0, 255)" }}
          data-testid="native-select-field"
          rootProps={{ "data-testid": "native-select-root" }}
          onClick={onClickFromUser}
        />
      </InputPropsContext>,
    )

    const root = page.getByTestId("native-select-root").element()
    const field = page.getByTestId("native-select-field").element()

    expect(root).toHaveClass("from-root", "from-user")
    expect(field).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(field).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    field.click()

    expect(onClickFromRoot).toHaveBeenCalledTimes(1)
    expect(onClickFromUser).toHaveBeenCalledTimes(1)
  })

  test("should render select with props", async () => {
    const { user } = await render(
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
    await user.selectOptions(page.getByTestId("select"), ["one"])
    const option1 = page.getByRole("option", { name: "Option 1" }).element()
    const option2 = page.getByRole("option", { name: "Option 2" }).element()

    expect((option1 as HTMLOptionElement).selected).toBeTruthy()
    expect((option2 as HTMLOptionElement).selected).toBeFalsy()
  })

  test("should render select without placeholder in options", async () => {
    const { container } = await render(
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

  test("should disable select", async () => {
    await render(<NativeSelect.Root data-testid="select" disabled />)
    expect(page.getByTestId("select").element()).toBeDisabled()
    expect(page.getByTestId("select").element()).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })

  test("should be read only", async () => {
    await render(<NativeSelect.Root data-testid="select" readOnly />)
    expect(page.getByTestId("select").element()).toHaveAttribute(
      "aria-readonly",
      "true",
    )
    expect(page.getByTestId("select").element()).toHaveAttribute(
      "aria-disabled",
      "true",
    )
    expect(page.getByTestId("select").element()).toHaveAttribute("readonly")
  })

  test("should be invalid", async () => {
    await render(<NativeSelect.Root data-testid="select" invalid />)
    expect(page.getByTestId("select").element()).toHaveAttribute(
      "aria-invalid",
      "true",
    )
  })

  test("should render select with custom icon", async () => {
    await render(
      <NativeSelect.Root
        data-testid="select"
        iconProps={{
          children: <BoxIcon data-testid="Icon" />,
        }}
      />,
    )
    await expect.element(page.getByTestId("Icon")).toBeInTheDocument()
  })

  test("should render items correctly", async () => {
    const items: NativeSelect.Item[] = [
      { label: "孫悟空", value: "孫悟空" },
      { label: "孫悟飯", value: "孫悟飯" },
      { label: "クリリン", value: "クリリン" },
    ]
    await render(<NativeSelect.Root data-testid="select" items={items} />)
    const children = page.getByTestId("select").element().children
    expect(children).toHaveLength(3)
  })

  test("should render items with group correctly", async () => {
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
    await render(<NativeSelect.Root data-testid="select" items={items} />)
    const children = page.getByTestId("select").element().children
    expect(children).toHaveLength(2)
    const optgroup = page
      .getByTestId("select")
      .element()
      .querySelector('optgroup[label="地球人"]')
    expect(optgroup).toBeInTheDocument()
    expect(optgroup.children).toHaveLength(3)
  })
})
