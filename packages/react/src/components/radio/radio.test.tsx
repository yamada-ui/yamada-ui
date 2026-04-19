import { a11y, page, render, renderHook } from "#test/browser"
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

  test("forwards `aria-controls` to the input element", async () => {
    await render(<Radio aria-controls="panel1">radio</Radio>)
    await expect
      .element(page.getByRole("radio"))
      .toHaveAttribute("aria-controls", "panel1")
  })

  test("forwards `aria-labelledby` to the input element", async () => {
    await render(<Radio aria-labelledby="label1">radio</Radio>)
    await expect
      .element(page.getByRole("radio"))
      .toHaveAttribute("aria-labelledby", "label1")
  })

  test("forwards `tabIndex` to the input element", async () => {
    await render(<Radio tabIndex={-1}>radio</Radio>)
    await expect
      .element(page.getByRole("radio"))
      .toHaveAttribute("tabindex", "-1")
  })

  test("sets `displayName` correctly", () => {
    expect(Radio.displayName).toBe("RadioRoot")
    expect(RadioGroup.Root.displayName).toBe("RadioGroup")
  })

  test("sets `className` correctly", async () => {
    await render(<RadioGroup.Root items={items} />)
    const radio = page.getByRole("radio").elements()[0]
    await expect
      .element(page.getByRole("radiogroup"))
      .toHaveClass("ui-radio__group")
    expect(radio?.parentElement).toHaveClass("ui-radio__root")
    expect(radio?.parentElement?.children[1]).toHaveClass("ui-radio__indicator")
    expect(radio?.parentElement?.children[2]).toHaveClass("ui-radio__label")
  })

  test("renders HTML tag correctly", async () => {
    await render(<RadioGroup.Root items={items} />)
    const radio = page.getByRole("radio").elements()[0]
    expect(page.getByRole("radiogroup").element().tagName).toBe("DIV")
    expect(radio?.parentElement?.tagName).toBe("LABEL")
    expect(radio?.tagName).toBe("INPUT")
    expect(radio?.parentElement?.children[1]?.tagName).toBe("DIV")
    expect(radio?.parentElement?.children[2]?.tagName).toBe("SPAN")
  })

  test("should check radio on click", async () => {
    await render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = page.getByRole("radio").elements() as HTMLInputElement[]
    radios[0]?.click()

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()

    radios[1]?.click()

    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  test("should not change value when group is disabled", async () => {
    await render(
      <RadioGroup.Root defaultValue="1" disabled>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = page.getByRole("radio").elements() as HTMLInputElement[]
    radios[1]?.click()

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when group is readOnly", async () => {
    await render(
      <RadioGroup.Root defaultValue="1" readOnly>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = page.getByRole("radio").elements() as HTMLInputElement[]
    radios[1]?.click()

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when individual radio is disabled", async () => {
    await render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio disabled value="2">
          Option 2
        </Radio>
      </RadioGroup.Root>,
    )

    const radios = page.getByRole("radio").elements() as HTMLInputElement[]
    radios[1]?.click()

    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when individual radio is readOnly", async () => {
    await render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio readOnly value="2">
          Option 2
        </Radio>
      </RadioGroup.Root>,
    )

    const radios = page.getByRole("radio").elements() as HTMLInputElement[]
    radios[1]?.click()

    expect(radios[1]).not.toBeChecked()
  })

  test("should handle defaultValue correctly", async () => {
    await render(
      <RadioGroup.Root defaultValue="2">
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = page.getByRole("radio").elements() as HTMLInputElement[]

    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  test("should call onChange callback when radio is selected", async () => {
    const onChange = vi.fn()

    await render(
      <RadioGroup.Root onChange={onChange}>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = page.getByRole("radio").elements() as HTMLInputElement[]
    radios[0]?.click()

    expect(onChange).toHaveBeenCalledWith("1")
  })

  test("should update value when onChange is called with a string value", async () => {
    const onChangeMock = vi.fn()

    const { result } = await renderHook(() =>
      useRadioGroup({ defaultValue: "1" as string, onChange: onChangeMock }),
    )

    result.current.onChange("2")

    expect(onChangeMock).toHaveBeenCalledWith("2")
    await expect.poll(() => result.current.value).toBe("2")
  })
})
