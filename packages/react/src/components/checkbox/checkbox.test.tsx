import { a11y, fireEvent, render, screen } from "#test"
import { CheckboxGroup } from "."
import { Checkbox } from "./checkbox"

const items = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
]

describe("<Checkbox />", () => {
  test("renders component correctly", async () => {
    await a11y(<Checkbox defaultChecked>checkbox</Checkbox>)
  })

  test("sets `displayName` correctly", () => {
    expect(Checkbox.displayName).toBe("CheckboxRoot")
    expect(CheckboxGroup.Root.displayName).toBe("CheckboxGroup")
  })

  test("sets `className` correctly", () => {
    render(<CheckboxGroup.Root items={items} />)
    const checkbox = screen.getAllByRole("checkbox")[0]
    expect(screen.getByRole("group")).toHaveClass("ui-checkbox__group")
    expect(checkbox?.parentElement).toHaveClass("ui-checkbox__root")
    expect(checkbox?.parentElement?.children[1]).toHaveClass(
      "ui-checkbox__indicator",
    )
    expect(checkbox?.parentElement?.children[2]).toHaveClass(
      "ui-checkbox__label",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<CheckboxGroup.Root items={items} />)
    const checkbox = screen.getAllByRole("checkbox")[0]
    expect(screen.getByRole("group").tagName).toBe("DIV")
    expect(checkbox?.parentElement?.tagName).toBe("LABEL")
    expect(checkbox?.tagName).toBe("INPUT")
    expect(checkbox?.parentElement?.children[1]?.tagName).toBe("DIV")
    expect(checkbox?.parentElement?.children[2]?.tagName).toBe("SPAN")
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

  test("should render with required prop", () => {
    const { container } = render(<CheckboxGroup.Root items={items} required />)

    expect(container).toBeInTheDocument()
  })
})
