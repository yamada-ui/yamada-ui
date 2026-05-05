import type { PropsWithChildren } from "react"
import { createRef } from "react"
import { vi } from "vitest"
import { a11y, act, fireEvent, render, renderHook, screen } from "#test"
import { NativeSelect, useNativeSelect } from "."
import { FieldContext } from "../field/field"
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

  test("sets `className` correctly", () => {
    const { container } = render(
      <NativeSelect.Root
        placeholder="キャラクターを選択"
        rootProps={{ "data-testid": "root" }}
      >
        <NativeSelect.Group label="地球人">
          <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
          <NativeSelect.Option value="孫悟飯">孫悟飯</NativeSelect.Option>
          <NativeSelect.Option value="クリリン">クリリン</NativeSelect.Option>
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
    expect(container.querySelector('optgroup[label="地球人"]')).toHaveClass(
      "ui-native-select__group",
    )
  })

  test("merges root props with user props in NativeSelect.Root", () => {
    const onClickFromRoot = vi.fn()
    const onClickFromUser = vi.fn()

    render(
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

    const root = screen.getByTestId("native-select-root")
    const field = screen.getByTestId("native-select-field")

    expect(root).toHaveClass("from-root", "from-user")
    expect(root).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(root).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    fireEvent.click(field)

    expect(onClickFromRoot).toHaveBeenCalledTimes(1)
    expect(onClickFromUser).toHaveBeenCalledTimes(1)
  })

  test("merges ref from input props context with user ref", () => {
    const contextRef = createRef<HTMLSelectElement>()
    const userRef = createRef<HTMLSelectElement>()

    render(
      <InputPropsContext
        // @ts-expect-error InputPropsContext expects HTMLInputElement ref
        value={{ ref: contextRef }}
      >
        <NativeSelect.Root ref={userRef} data-testid="native-select-field" />
      </InputPropsContext>,
    )

    const field = screen.getByTestId("native-select-field")

    expect(contextRef.current).toBe(field)
    expect(userRef.current).toBe(field)
  })

  test("merges callback refs from input props context and user props once", () => {
    const contextRef = vi.fn()
    const userRef = vi.fn()

    render(
      <InputPropsContext value={{ ref: contextRef }}>
        <NativeSelect.Root ref={userRef} data-testid="native-select-field" />
      </InputPropsContext>,
    )

    const field = screen.getByTestId("native-select-field")

    expect(contextRef).toHaveBeenCalledTimes(1)
    expect(userRef).toHaveBeenCalledTimes(1)
    expect(contextRef).toHaveBeenCalledWith(field)
    expect(userRef).toHaveBeenCalledWith(field)
  })

  test("merges focus handlers in field, root, and getter order", () => {
    const calls: string[] = []
    const fieldOnBlur = vi.fn(() => calls.push("field-onBlur"))
    const fieldOnFocus = vi.fn(() => calls.push("field-onFocus"))
    const rootOnBlur = vi.fn(() => calls.push("root-onBlur"))
    const rootOnFocus = vi.fn(() => calls.push("root-onFocus"))
    const getterOnBlur = vi.fn(() => calls.push("getter-onBlur"))
    const getterOnFocus = vi.fn(() => calls.push("getter-onFocus"))
    const wrapper = ({ children }: PropsWithChildren) => (
      <FieldContext
        value={{
          id: "field-id",
          disabled: false,
          errorMessageId: "field-error-message",
          focused: false,
          helperMessageId: "field-helper-message",
          invalid: false,
          labelId: "field-label",
          readOnly: false,
          replace: true,
          required: false,
          onBlur: fieldOnBlur,
          onFocus: fieldOnFocus,
        }}
      >
        {children}
      </FieldContext>
    )
    const { result } = renderHook(
      () => useNativeSelect({ onBlur: rootOnBlur, onFocus: rootOnFocus }),
      { withProvider: false, wrapper },
    )

    const fieldProps = result.current.getFieldProps({
      onBlur: getterOnBlur,
      onFocus: getterOnFocus,
    })

    const focusEvent = new FocusEvent("focus")
    const blurEvent = new FocusEvent("blur")

    act(() => {
      // @ts-expect-error native FocusEvent does not match React's SyntheticEvent
      fieldProps.onFocus?.(focusEvent)
      // @ts-expect-error native FocusEvent does not match React's SyntheticEvent
      fieldProps.onBlur?.(blurEvent)
    })

    expect(calls).toStrictEqual([
      "field-onFocus",
      "root-onFocus",
      "getter-onFocus",
      "field-onBlur",
      "root-onBlur",
      "getter-onBlur",
    ])
  })

  test("merges input props context with user props", () => {
    const onClickFromRoot = vi.fn()
    const onClickFromUser = vi.fn()

    render(
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

    const root = screen.getByTestId("native-select-root")
    const field = screen.getByTestId("native-select-field")

    expect(root).toHaveClass("from-root", "from-user")
    expect(field).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(field).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    fireEvent.click(field)

    expect(onClickFromRoot).toHaveBeenCalledTimes(1)
    expect(onClickFromUser).toHaveBeenCalledTimes(1)
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
