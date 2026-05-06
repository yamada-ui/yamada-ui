import { a11y, fireEvent, render, renderHook, screen } from "#test"
import { Toggle, ToggleGroup } from "."
import { noop } from "../../utils"
import { useToggle } from "./use-toggle"

describe("<Toggle />", () => {
  test("renders component correctly", async () => {
    await a11y(<Toggle>Toggle</Toggle>)
  })

  test("renders toggle group correctly", async () => {
    await a11y(
      <ToggleGroup.Root defaultValue={[]}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )
  })

  test("should handle checked prop", () => {
    const { rerender } = render(<Toggle checked>Toggle</Toggle>)

    expect(screen.getByRole("button")).toHaveAttribute("data-checked")

    rerender(<Toggle checked={false}>Toggle</Toggle>)

    expect(screen.getByRole("button")).not.toHaveAttribute("data-checked")
  })

  test("should handle disabled prop", () => {
    const onChange = vi.fn()
    render(
      <Toggle disabled onChange={onChange}>
        Toggle
      </Toggle>,
    )

    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(onChange).not.toHaveBeenCalled()
  })

  test("should handle readOnly prop", () => {
    render(<Toggle readOnly>Toggle</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-readonly")
    expect(button).toHaveAttribute("aria-disabled", "true")
  })

  test("should handle icon prop", () => {
    render(<Toggle icon={<div>Icon</div>} />)
    expect(screen.getByText("Icon")).toBeInTheDocument()
  })

  test("should handle onChange callback", () => {
    const onChange = vi.fn()
    render(<Toggle onChange={onChange}>Toggle</Toggle>)

    fireEvent.click(screen.getByRole("button"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(true)

    fireEvent.click(screen.getByRole("button"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith(false)
  })

  test("should handle hidden checkbox onChange event", () => {
    const onChange = vi.fn()
    render(<Toggle onChange={onChange}>Toggle</Toggle>)

    const button = screen.getByRole("button")
    const checkbox = screen.getByRole("checkbox", { hidden: true })
    expect(checkbox).toBeInTheDocument()

    fireEvent.click(button)
    expect(onChange).toHaveBeenLastCalledWith(true)
    expect(button).toHaveAttribute("data-checked")
    expect(checkbox).toBeChecked()

    fireEvent.click(button)
    expect(onChange).toHaveBeenLastCalledWith(false)
    expect(button).not.toHaveAttribute("data-checked")
    expect(checkbox).not.toBeChecked()
  })

  test("should handle hidden checkbox change event", () => {
    const onChange = vi.fn()
    render(<Toggle onChange={onChange}>Toggle</Toggle>)

    const button = screen.getByRole("button")
    const checkbox = screen.getByRole("checkbox", { hidden: true })
    fireEvent.click(button)
    expect(onChange).toHaveBeenLastCalledWith(true)
    expect(checkbox).toBeChecked()

    fireEvent.click(button)
    expect(onChange).toHaveBeenLastCalledWith(false)
    expect(checkbox).not.toBeChecked()
  })

  test("should handle hidden checkbox change event in toggle group", () => {
    const onChange = vi.fn()
    render(
      <ToggleGroup.Root defaultValue={[]} onChange={onChange}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    const checkboxes = screen.getAllByRole("checkbox", { hidden: true })
    fireEvent.click(screen.getByRole("button", { name: "a" }))
    expect(onChange).toHaveBeenCalledWith(["a"])
    expect(checkboxes[0]).toBeChecked()
  })

  test("should merge consumer props in getButtonProps", () => {
    const rootOnClick = vi.fn()
    const getButtonOnClick = vi.fn()
    const { result } = renderHook(() =>
      useToggle({
        className: "root-class",
        style: { color: "red" },
        readOnly: true,
        value: "toggle-value",
        onClick: rootOnClick,
      }),
    )

    const buttonProps = result.current.getButtonProps({
      className: "button-class",
      style: { backgroundColor: "blue" },
      onClick: getButtonOnClick,
    })

    render(<button {...buttonProps}>toggle-value</button>)
    fireEvent.click(screen.getByRole("button"))

    expect(rootOnClick).toHaveBeenCalledTimes(1)
    expect(getButtonOnClick).toHaveBeenCalledTimes(1)
    expect(buttonProps.className).toContain("root-class")
    expect(buttonProps.className).toContain("button-class")
    expect(buttonProps.style).toMatchObject({
      backgroundColor: "blue",
      color: "red",
    })
    expect(buttonProps["aria-label"]).toBe("toggle-value")
  })

  test("should warn when value is not provided in controlled mode", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <ToggleGroup.Root value={["toggle1"]}>
        <ToggleGroup.Item value="toggle1">Toggle1</ToggleGroup.Item>
        <ToggleGroup.Item value={undefined}>undefined</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    fireEvent.click(screen.getByRole("button", { name: /toggle1/i }))
    fireEvent.click(screen.getByRole("button", { name: /toggle1/i }))

    expect(consoleWarnSpy).toHaveBeenLastCalledWith(
      "Toggle: value is required. Please set the value.",
    )
    consoleWarnSpy.mockRestore()
  })
})
