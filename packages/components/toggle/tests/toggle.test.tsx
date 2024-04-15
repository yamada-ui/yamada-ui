import { cleanup, render, screen, fireEvent } from "@testing-library/react"
import { Toggle, ToggleGroup } from "../src"

describe("<Toggle />", () => {
  afterEach(() => {
    cleanup()
  })

  test("should render correctly", () => {
    render(<Toggle>Toggle</Toggle>)
    expect(screen.getByText("Toggle")).toBeInTheDocument()
  })

  test("should handle isSelected prop", () => {
    const { rerender } = render(<Toggle isSelected>Toggle</Toggle>)
    expect(screen.getByText("Toggle")).toHaveAttribute("data-selected")

    rerender(<Toggle isSelected={false}>Toggle</Toggle>)
    expect(screen.getByText("Toggle")).not.toHaveAttribute("data-selected")
  })

  test("should handle isDisabled prop", () => {
    render(<Toggle isDisabled>Toggle</Toggle>)
    expect(screen.getByText("Toggle")).toBeDisabled()
  })

  test("should handle isReadOnly prop", () => {
    render(<Toggle isReadOnly>Toggle</Toggle>)
    expect(screen.getByText("Toggle")).toHaveAttribute("data-readonly")
  })

  test("should handle isRounded prop", () => {
    const { container } = render(<Toggle isRounded>Toggle</Toggle>)
    expect(container.querySelector(".ui-toggle")).toHaveStyle({
      borderRadius: "9999px",
    })
  })

  test("should handle icon prop", () => {
    render(<Toggle icon={<div>Icon</div>} />)
    expect(screen.getByText("Icon")).toBeInTheDocument()
  })

  test("should handle onChange callback", () => {
    const onChange = vi.fn()
    render(<Toggle onChange={onChange}>Toggle</Toggle>)

    fireEvent.click(screen.getByText("Toggle"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(true)

    fireEvent.click(screen.getByText("Toggle"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith(false)
  })

  test("should warn when value is not provided in controlled mode", () => {
    vi.spyOn(console, "warn").mockImplementation(() => {})
    render(
      <ToggleGroup value={["toggle1"]}>
        <Toggle value="toggle1">Toggle1</Toggle>
        <Toggle value={undefined}>undefined</Toggle>
      </ToggleGroup>,
    )

    fireEvent.click(screen.getByText("Toggle1"))
    fireEvent.click(screen.getByText("Toggle1"))

    expect(console.warn).toHaveBeenCalledWith(
      "Toggle: value is required. Please set the value.",
    )
    vi.restoreAllMocks()
  })
})
