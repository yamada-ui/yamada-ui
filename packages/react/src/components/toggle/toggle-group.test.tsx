import { a11y, fireEvent, render, renderHook, screen } from "#test"
import { ToggleGroup } from "."
import { useToggleGroup } from "./use-toggle-group"

describe("<ToggleGroup />", () => {
  test("sets `displayName` correctly", () => {
    expect(ToggleGroup.Root.displayName).toBe("ToggleGroup")
  })

  test("sets `className` correctly", () => {
    render(
      <ToggleGroup.Root>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByRole("group")).toHaveClass("ui-toggle__group")
  })

  test("renders component correctly", async () => {
    await a11y(
      <ToggleGroup.Root>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
  })

  test("should update checked toggle when controlled value prop changes", () => {
    const { rerender } = render(
      <ToggleGroup.Root value="opt1">
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).not.toHaveAttribute("data-checked")

    rerender(
      <ToggleGroup.Root value="opt2">
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-checked")

    rerender(
      <ToggleGroup.Root value={undefined}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).not.toHaveAttribute("data-checked")
  })

  test("should update checked toggles when controlled array value prop changes", () => {
    const { rerender } = render(
      <ToggleGroup.Root value={[]}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).not.toHaveAttribute("data-checked")

    rerender(
      <ToggleGroup.Root value={["opt1", "opt2"]}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-checked")
  })

  test("should call onChange callback with the correct value when a toggle is clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup.Root onChange={onChange}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
        <ToggleGroup.Item value={undefined}>Option 3</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    fireEvent.click(screen.getByText("Option 1"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith("opt1")

    fireEvent.click(screen.getByText("Option 2"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith("opt2")

    fireEvent.click(screen.getByText("Option 3"))
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  test("should call onChange callback with undefined when a checked toggle is clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup.Root value="opt1" onChange={onChange}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    fireEvent.click(screen.getByText("Option 1"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(undefined)

    fireEvent.click(screen.getByText("Option 2"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith("opt2")
  })

  test("should call onChange callback with updated array when toggles are clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup.Root value={["opt1"]} onChange={onChange}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    fireEvent.click(screen.getByText("Option 1"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith([])

    fireEvent.click(screen.getByText("Option 2"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith(["opt1", "opt2"])
  })

  test("should call onChange callback when hidden checkbox is clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup.Root defaultValue={[]} onChange={onChange}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    const checkbox = screen.getByRole("checkbox", { hidden: true })
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenLastCalledWith(["opt1"])

    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenLastCalledWith([])
  })

  test("should set all toggles to readonly when readOnly prop is true", () => {
    render(
      <ToggleGroup.Root readOnly>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).toHaveAttribute("data-readonly")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-readonly")
  })

  test("should set the initial checked toggle based on the defaultValue prop", () => {
    render(
      <ToggleGroup.Root defaultValue="opt2">
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-checked")
  })

  test("should merge consumer props in getGroupProps", () => {
    const rootOnClick = vi.fn()
    const getGroupOnClick = vi.fn()
    const { result } = renderHook(() =>
      useToggleGroup({
        className: "root-class",
        style: { color: "red" },
        onClick: rootOnClick,
      }),
    )

    const groupProps = result.current.getGroupProps({
      className: "group-class",
      style: { backgroundColor: "blue" },
      onClick: getGroupOnClick,
    })

    render(<div {...groupProps} />)
    fireEvent.click(screen.getByRole("group"))

    expect(rootOnClick).toHaveBeenCalledTimes(1)
    expect(getGroupOnClick).toHaveBeenCalledTimes(1)
    expect(groupProps.className).toContain("root-class")
    expect(groupProps.className).toContain("group-class")
    expect(groupProps.style).toMatchObject({
      backgroundColor: "blue",
      color: "red",
    })
  })
})
