import { a11y, act, fireEvent, render, renderHook, screen } from "#test"
import { vi } from "vitest"
import { RadioGroup } from "."
import { Radio } from "./radio"
import { useRadioGroup } from "./use-radio-group"

const items = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
]

describe("<Radio />", () => {
  test("renders component correctly", async () => {
    await a11y(<Radio defaultChecked>radio</Radio>)
  })

  test("sets `displayName` correctly", () => {
    expect(Radio.displayName).toBe("RadioRoot")
    expect(RadioGroup.Root.displayName).toBe("RadioGroup")
  })

  test("sets `className` correctly", () => {
    render(<RadioGroup.Root items={items} />)
    const radio = screen.getAllByRole("radio")[0]
    expect(screen.getByRole("radiogroup")).toHaveClass("ui-radio__group")
    expect(radio?.parentElement).toHaveClass("ui-radio__root")
    expect(radio?.parentElement?.children[1]).toHaveClass("ui-radio__indicator")
    expect(radio?.parentElement?.children[2]).toHaveClass("ui-radio__label")
  })

  test("renders HTML tag correctly", () => {
    render(<RadioGroup.Root items={items} />)
    const radio = screen.getAllByRole("radio")[0]
    expect(screen.getByRole("radiogroup").tagName).toBe("DIV")
    expect(radio?.parentElement?.tagName).toBe("LABEL")
    expect(radio?.tagName).toBe("INPUT")
    expect(radio?.parentElement?.children[1]?.tagName).toBe("DIV")
    expect(radio?.parentElement?.children[2]?.tagName).toBe("SPAN")
  })

  test("should check radio on click", () => {
    render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")

    fireEvent.click(radios[0]!)

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()

    fireEvent.click(radios[1]!)

    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  test("should not change value when group is disabled", () => {
    render(
      <RadioGroup.Root defaultValue="1" disabled>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")

    fireEvent.click(radios[1]!)

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when group is readOnly", () => {
    render(
      <RadioGroup.Root defaultValue="1" readOnly>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")

    fireEvent.click(radios[1]!)

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when individual radio is disabled", () => {
    render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio disabled value="2">
          Option 2
        </Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")

    fireEvent.click(radios[1]!)

    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when individual radio is readOnly", () => {
    render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio readOnly value="2">
          Option 2
        </Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")

    fireEvent.click(radios[1]!)

    expect(radios[1]).not.toBeChecked()
  })

  test("should handle defaultValue correctly", () => {
    render(
      <RadioGroup.Root defaultValue="2">
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")

    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  test("should call onChange callback when radio is selected", () => {
    const onChange = vi.fn()

    render(
      <RadioGroup.Root onChange={onChange}>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")

    fireEvent.click(radios[0]!)

    expect(onChange).toHaveBeenCalledWith("1")
  })

  test("should update value when onChange is called with a string value", () => {
    const onChangeMock = vi.fn()

    const { result } = renderHook(() =>
      useRadioGroup({ defaultValue: "1" as string, onChange: onChangeMock }),
    )

    act(() => {
      result.current.onChange("2")
    })

    expect(onChangeMock).toHaveBeenCalledWith("2")
    expect(result.current.value).toBe("2")
  })
})
