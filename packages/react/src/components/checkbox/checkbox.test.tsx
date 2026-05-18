import { a11y, act, fireEvent, render, renderHook, screen } from "#test"
import { CheckboxGroup } from "."
import { Checkbox } from "./checkbox"
import { useCheckboxGroup } from "./use-checkbox-group"

const items = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
]

describe("<Checkbox />", () => {
  test("renders component correctly", async () => {
    await a11y(<Checkbox defaultChecked>checkbox</Checkbox>)
  })

  test("sets `aria-checked` to mixed and native `indeterminate` when indeterminate", () => {
    render(<Checkbox indeterminate>checkbox</Checkbox>)

    const input = screen.getByRole("checkbox") as HTMLInputElement

    expect(input).toHaveAttribute("aria-checked", "mixed")
    expect(input).toBeInstanceOf(HTMLInputElement)
    expect(input.indeterminate).toBeTruthy()
  })

  test("forwards `aria-controls` to the input element", () => {
    render(<Checkbox aria-controls="panel1">checkbox</Checkbox>)

    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-controls",
      "panel1",
    )
  })

  test("forwards `aria-labelledby` to the input element", () => {
    render(<Checkbox aria-labelledby="label1">checkbox</Checkbox>)

    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-labelledby",
      "label1",
    )
  })

  test("forwards `tabIndex` to the input element", () => {
    render(<Checkbox tabIndex={-1}>checkbox</Checkbox>)

    expect(screen.getByRole("checkbox")).toHaveAttribute("tabindex", "-1")
  })
})

describe("<CheckboxGroup />", () => {
  test("should handle onChange callback when checking checkboxes", () => {
    const onChange = vi.fn()
    render(<CheckboxGroup.Root items={items} onChange={onChange} />)

    const checkboxes = screen.getAllByRole("checkbox")

    fireEvent.click(checkboxes[0]!)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(["1"])

    fireEvent.click(checkboxes[1]!)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith(["1", "2"])
  })

  test("should remove value when unchecking checkbox", () => {
    const onChange = vi.fn()
    render(
      <CheckboxGroup.Root
        defaultValue={["1", "2"]}
        items={items}
        onChange={onChange}
      />,
    )

    const checkboxes = screen.getAllByRole("checkbox")

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).toBeChecked()

    fireEvent.click(checkboxes[0]!)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(["2"])

    fireEvent.click(checkboxes[1]!)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith([])
  })

  test("should respect max limit when checking checkboxes", () => {
    const onChange = vi.fn()
    render(<CheckboxGroup.Root items={items} max={2} onChange={onChange} />)

    const checkboxes = screen.getAllByRole("checkbox")

    fireEvent.click(checkboxes[0]!)
    expect(onChange).toHaveBeenLastCalledWith(["1"])

    fireEvent.click(checkboxes[1]!)
    expect(onChange).toHaveBeenLastCalledWith(["1", "2"])

    fireEvent.click(checkboxes[2]!)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).not.toHaveBeenLastCalledWith(["1", "2", "3"])
  })

  test("should disable unchecked checkboxes when max limit is reached", () => {
    render(
      <CheckboxGroup.Root defaultValue={["1", "2"]} items={items} max={2} />,
    )

    const checkboxes = screen.getAllByRole("checkbox")

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).toBeChecked()
    expect(checkboxes[2]).not.toBeChecked()
    expect(checkboxes[2]).toBeDisabled()
    expect(checkboxes[2]).toHaveAttribute("aria-disabled", "true")
  })

  test("should enable disabled checkbox when value is removed", () => {
    const { rerender } = render(
      <CheckboxGroup.Root items={items} max={2} value={["1", "2"]} />,
    )

    const checkboxes = screen.getAllByRole("checkbox")

    expect(checkboxes[2]).toHaveAttribute("aria-disabled", "true")

    rerender(<CheckboxGroup.Root items={items} max={2} value={["1"]} />)

    expect(checkboxes[2]).not.toHaveAttribute("aria-disabled", "true")
  })

  test("should prevent clicks when disabled checkboxes due to max limit", () => {
    const onChange = vi.fn()
    render(
      <CheckboxGroup.Root
        defaultValue={["1", "2"]}
        items={items}
        max={2}
        onChange={onChange}
      />,
    )

    const checkboxes = screen.getAllByRole("checkbox")

    expect(checkboxes[2]).toBeDisabled()
    expect(checkboxes[2]).toHaveAttribute("aria-disabled", "true")
    fireEvent.click(checkboxes[2]!)
    expect(onChange).not.toHaveBeenCalled()
  })

  test("should not change value when readOnly", () => {
    const onChange = vi.fn()
    render(<CheckboxGroup.Root items={items} readOnly onChange={onChange} />)

    const checkboxes = screen.getAllByRole("checkbox")

    fireEvent.click(checkboxes[0]!)
    expect(onChange).not.toHaveBeenCalled()
  })

  test("should handle defaultValue correctly", () => {
    render(<CheckboxGroup.Root defaultValue={["1", "3"]} items={items} />)

    const checkboxes = screen.getAllByRole("checkbox")

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()
    expect(checkboxes[2]).toBeChecked()
  })

  test("should handle controlled value correctly", () => {
    const { rerender } = render(
      <CheckboxGroup.Root items={items} value={["1"]} />,
    )

    const checkboxes = screen.getAllByRole("checkbox")

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()

    rerender(<CheckboxGroup.Root items={items} value={["1", "2"]} />)

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).toBeChecked()
  })

  test("should accept required prop", () => {
    render(<CheckboxGroup.Root items={items} required />)

    const checkboxes = screen.getAllByRole("checkbox")

    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(checkboxes).toHaveLength(items.length)
  })

  test("should not add value when max is reached via onChange", () => {
    const { result } = renderHook(() => useCheckboxGroup({ max: 1 }))

    act(() => {
      result.current.onChange("1")
    })
    expect(result.current.value).toStrictEqual(["1"])

    act(() => {
      result.current.onChange("2")
    })
    expect(result.current.value).toStrictEqual(["1"])
  })
})
