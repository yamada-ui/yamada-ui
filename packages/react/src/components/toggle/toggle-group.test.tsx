import { Toggle, ToggleGroup } from "."
import { a11y, fireEvent, render, screen } from "../../../test"

describe("<ToggleGroup />", () => {
  test("should render ToggleGroup and its children correctly", async () => {
    await a11y(
      <ToggleGroup>
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
  })

  test("sets `displayName` correctly", () => {
    expect(ToggleGroup.displayName).toBe("ToggleGroup")
  })

  test("sets `className` correctly", () => {
    render(
      <ToggleGroup>
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    expect(screen.getByRole("group")).toHaveClass("ui-toggle__group")
  })

  test("should update checked toggle when controlled value prop changes", () => {
    const { rerender } = render(
      <ToggleGroup value="opt1">
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    expect(screen.getByText("Option 1")).toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).not.toHaveAttribute("data-checked")

    rerender(
      <ToggleGroup value="opt2">
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-checked")

    rerender(
      <ToggleGroup value={undefined}>
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).not.toHaveAttribute("data-checked")
  })

  test("should update checked toggles when controlled array value prop changes", () => {
    const { rerender } = render(
      <ToggleGroup value={[]}>
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).not.toHaveAttribute("data-checked")

    rerender(
      <ToggleGroup value={["opt1", "opt2"]}>
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    expect(screen.getByText("Option 1")).toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-checked")
  })

  test("should call onChange callback with the correct value when a toggle is clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup onChange={onChange}>
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
        <Toggle value={undefined}>Option 3</Toggle>
      </ToggleGroup>,
    )

    fireEvent.click(screen.getByText("Option 1"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith("opt1")

    fireEvent.click(screen.getByText("Option 2"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith("opt2")

    fireEvent.click(screen.getByText("Option 3"))
    // onChange is not called if the value is undefined
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  test("should call onChange callback with undefined when a checked toggle is clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup value="opt1" onChange={onChange}>
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    fireEvent.click(screen.getByText("Option 1"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(undefined)

    fireEvent.click(screen.getByText("Option 2"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith("opt2")
  })

  test("should call onChange callback with updated array when toggles are clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup value={["opt1"]} onChange={onChange}>
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    fireEvent.click(screen.getByText("Option 1"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith([])

    fireEvent.click(screen.getByText("Option 2"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith(["opt1", "opt2"])
  })

  test("should set all toggles to readonly when readOnly prop is true", () => {
    render(
      <ToggleGroup readOnly>
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    expect(screen.getByText("Option 1")).toHaveAttribute("data-readonly")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-readonly")
  })

  test("should set the initial checked toggle based on the defaultValue prop", () => {
    render(
      <ToggleGroup defaultValue="opt2">
        <Toggle value="opt1">Option 1</Toggle>
        <Toggle value="opt2">Option 2</Toggle>
      </ToggleGroup>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-checked")
  })
})
