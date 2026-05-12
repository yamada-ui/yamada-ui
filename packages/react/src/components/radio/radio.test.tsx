import { createRef } from "react"
import { vi } from "vitest"
import { a11y, render, renderHook, screen } from "#test"
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

  test("forwards `aria-controls` to the input element", () => {
    render(<Radio aria-controls="panel1">radio</Radio>)
    expect(screen.getByRole("radio")).toHaveAttribute("aria-controls", "panel1")
  })

  test("forwards `aria-labelledby` to the input element", () => {
    render(<Radio aria-labelledby="label1">radio</Radio>)
    expect(screen.getByRole("radio")).toHaveAttribute(
      "aria-labelledby",
      "label1",
    )
  })

  test("forwards `tabIndex` to the input element", () => {
    render(<Radio tabIndex={-1}>radio</Radio>)
    expect(screen.getByRole("radio")).toHaveAttribute("tabindex", "-1")
  })

  test("sets HTML tags correctly", () => {
    render(<RadioGroup.Root items={items} />)
    const group = screen.getByRole("radiogroup")
    const radio = screen.getAllByRole("radio")[0]
    expect(group).toHaveProperty("tagName", "DIV")
    expect(radio?.parentElement).toHaveProperty("tagName", "LABEL")
    expect(radio).toHaveProperty("tagName", "INPUT")
    expect(radio?.parentElement?.children[1]).toHaveProperty("tagName", "DIV")
    expect(radio?.parentElement?.children[2]).toHaveProperty("tagName", "SPAN")
  })

  test("should check radio on click", async () => {
    const { user } = render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")
    await user.click(radios[0]!)

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()

    await user.click(radios[1]!)

    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  test("should call group onChange with selected value", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <RadioGroup.Root onChange={onChange}>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    await user.click(screen.getByRole("radio", { name: "Option 1" }))

    expect(onChange).toHaveBeenCalledWith("1")
  })

  test("should not change value when group is disabled", async () => {
    const { user } = render(
      <RadioGroup.Root defaultValue="1" disabled>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")
    await user.click(radios[1]!)

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when group is readOnly", async () => {
    const { user } = render(
      <RadioGroup.Root defaultValue="1" readOnly>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")
    await user.click(radios[1]!)

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when individual radio is disabled", async () => {
    const { user } = render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio disabled value="2">
          Option 2
        </Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")
    await user.click(radios[1]!)

    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when individual radio is readOnly", async () => {
    const { user } = render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio readOnly value="2">
          Option 2
        </Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")
    await user.click(radios[1]!)

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

  test("should set refs on RadioGroup.Root and Radio input", () => {
    const groupRef = createRef<HTMLDivElement>()
    const radioRef = createRef<HTMLInputElement>()

    render(
      <RadioGroup.Root ref={groupRef}>
        <Radio ref={radioRef} value="1">
          Option 1
        </Radio>
      </RadioGroup.Root>,
    )

    expect(groupRef.current).toBe(screen.getByRole("radiogroup"))
    expect(radioRef.current).toBe(
      screen.getByRole("radio", { name: "Option 1" }),
    )
  })

  test("should update value when onChange is called with a string value", async () => {
    const onChangeMock = vi.fn()

    const { result } = renderHook(() =>
      useRadioGroup<string>({ defaultValue: "1", onChange: onChangeMock }),
    )

    result.current.onChange("2")

    expect(onChangeMock).toHaveBeenCalledWith("2")
    await vi.waitFor(() => expect(result.current.value).toBe("2"))
  })
})
