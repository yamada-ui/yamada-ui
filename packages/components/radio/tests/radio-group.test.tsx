import { a11y, render, screen, fireEvent, renderHook } from "@yamada-ui/test"
import type { RadioItem } from "../src"
import { Radio, RadioGroup, useRadioGroup } from "../src"

describe("<RadioGroup/>", () => {
  test("should pass a11y test", async () => {
    await a11y(
      <RadioGroup>
        <Radio>Radio 1</Radio>
        <Radio>Radio 2</Radio>
        <Radio>Radio 3</Radio>
      </RadioGroup>,
    )
  })

  test("defaultValue should be checked correctly", async () => {
    render(
      <RadioGroup defaultValue="1">
        <Radio value="1" data-testid="radio-1">
          Radio 1
        </Radio>
        <Radio value="2" data-testid="radio-2">
          Radio 2
        </Radio>
        <Radio value="3" data-testid="radio-3">
          Radio 3
        </Radio>
      </RadioGroup>,
    )

    expect(screen.getByTestId("radio-1").querySelector("input")).toBeChecked()
    expect(
      screen.getByTestId("radio-2").querySelector("input"),
    ).not.toBeChecked()
    expect(
      screen.getByTestId("radio-3").querySelector("input"),
    ).not.toBeChecked()
  })

  test("should be change value when click other radio button", async () => {
    render(
      <RadioGroup defaultValue="1">
        <Radio value="1" data-testid="radio-1">
          Radio 1
        </Radio>
        <Radio value="2" data-testid="radio-2">
          Radio 2
        </Radio>
        <Radio value="3" data-testid="radio-3">
          Radio 3
        </Radio>
      </RadioGroup>,
    )

    fireEvent.click(screen.getByTestId("radio-2"))

    expect(
      screen.getByTestId("radio-1").querySelector("input"),
    ).not.toBeChecked()
    expect(screen.getByTestId("radio-2").querySelector("input")).toBeChecked()
    expect(
      screen.getByTestId("radio-3").querySelector("input"),
    ).not.toBeChecked()
  })

  test("should return checked attribute when isNative is true", () => {
    const { result } = renderHook(() =>
      useRadioGroup({ defaultValue: "1", isNative: true }),
    )
    const props = result.current.getRadioProps({ value: "1" })

    expect(props).toHaveProperty("checked")
  })

  test("should return checked attribute when isNative is false", () => {
    const { result } = renderHook(() =>
      useRadioGroup({ value: undefined, isNative: false }),
    )
    const props = result.current.getRadioProps()

    expect(props).toHaveProperty("isChecked")
  })

  test("renders Radio components from items when validChildren is empty and items is not empty", () => {
    const items: RadioItem[] = [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ]

    render(<RadioGroup items={items} />)

    items.forEach(({ label }) => {
      const radio = screen.getByLabelText(label as string)
      expect(radio).toBeInTheDocument()
      expect(radio.getAttribute("type")).toBe("radio")
    })
  })

  test("onChange with focus should move to the first Radio", async () => {
    const { result } = renderHook(() => useRadioGroup({ defaultValue: "1" }))

    render(
      <div
        {...result.current.getContainerProps()}
        onFocus={result.current.onFocus}
      >
        <input type="radio" data-testid="radio-1" />
        <input type="radio" data-testid="radio-2" />
      </div>,
    )

    const radioGroup = screen.getByRole("group")
    fireEvent.focus(radioGroup)

    const radioOne = screen.getByTestId("radio-1")
    const radioTwo = screen.getByTestId("radio-2")

    expect(radioOne).toHaveFocus()
    expect(radioTwo).not.toHaveFocus()
  })

  test("onChange with focus should move to the second Radio", async () => {
    const { result } = renderHook(() => useRadioGroup({ defaultValue: "2" }))

    render(
      <div
        {...result.current.getContainerProps()}
        onFocus={result.current.onFocus}
      >
        <input type="radio" data-testid="radio-1" disabled />
        <input type="radio" data-testid="radio-2" />
      </div>,
    )

    const radioGroup = screen.getByRole("group")
    fireEvent.focus(radioGroup)

    const radioOne = screen.getByTestId("radio-1")
    const radioTwo = screen.getByTestId("radio-2")

    expect(radioOne).not.toHaveFocus()
    expect(radioTwo).toHaveFocus()
  })

  test("should add value when radiobutton is checked", () => {
    const { result } = renderHook(() => useRadioGroup({ defaultValue: "1" }))

    expect(result.current.value).toBe("1")
  })

  test("RadioGroup should have gap property set to 2px", () => {
    render(<RadioGroup gap="2px" data-testid="radio-group" />)

    const radioGroup = screen.getByTestId("radio-group")
    expect(window.getComputedStyle(radioGroup).getPropertyValue("gap")).toBe(
      "2px",
    )
  })

  test("RadioGroup with direction row should have gap property set to 1rem", () => {
    render(<RadioGroup direction="row" data-testid="radio-group" />)

    const radioGroup = screen.getByTestId("radio-group")
    expect(window.getComputedStyle(radioGroup).getPropertyValue("gap")).toBe(
      "1rem",
    )
  })
})
