import { fireEvent, render, screen } from "@/test"
import { Toggle, ToggleGroup } from "."
import { noop } from "../../utils"

describe("<Toggle />", () => {
  test("should render correctly", () => {
    render(<Toggle>Toggle</Toggle>)

    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("sets `displayName` correctly", () => {
    expect(Toggle.displayName).toBe("ToggleRoot")
  })

  test("sets `className` correctly", () => {
    render(<Toggle>Toggle</Toggle>)

    expect(screen.getByRole("button")).toHaveClass("ui-toggle__root")
  })

  test("should handle checked prop", () => {
    const { rerender } = render(<Toggle checked>Toggle</Toggle>)

    expect(screen.getByRole("button")).toHaveAttribute("data-checked")

    rerender(<Toggle checked={false}>Toggle</Toggle>)

    expect(screen.getByRole("button")).not.toHaveAttribute("data-checked")
  })

  test("should handle disabled prop", () => {
    render(<Toggle disabled>Toggle</Toggle>)

    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("should handle readOnly prop", () => {
    render(<Toggle readOnly>Toggle</Toggle>)

    expect(screen.getByRole("button")).toHaveAttribute("data-readonly")
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
    expect(onChange).toHaveBeenCalledWith(true)

    fireEvent.click(screen.getByRole("button"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith(false)
  })

  test("should warn when value is not provided in controlled mode", () => {
    vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <ToggleGroup value={["toggle1"]}>
        <Toggle value="toggle1">Toggle1</Toggle>
        <Toggle value={undefined}>undefined</Toggle>
      </ToggleGroup>,
    )

    fireEvent.click(screen.getByRole("button", { name: /toggle1/i }))
    fireEvent.click(screen.getByRole("button", { name: /toggle1/i }))

    expect(console.warn).toHaveBeenCalledWith(
      "Toggle: value is required. Please set the value.",
    )
    vi.restoreAllMocks()
  })
})
