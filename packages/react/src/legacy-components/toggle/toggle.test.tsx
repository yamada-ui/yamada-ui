import { fireEvent, render, screen } from "../../../test"
import { noop } from "../../utils"
import { Toggle, ToggleGroup } from "./"

describe("<Toggle />", () => {
  test("should render correctly", () => {
    render(<Toggle>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toBeInTheDocument()
  })

  test("should handle isSelected prop", () => {
    const { rerender } = render(<Toggle isSelected>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toHaveAttribute(
      "data-selected",
    )

    rerender(<Toggle isSelected={false}>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).not.toHaveAttribute(
      "data-selected",
    )
  })

  test("should handle isDisabled prop", () => {
    render(<Toggle isDisabled>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toBeDisabled()
  })

  test("should handle isReadOnly prop", () => {
    render(<Toggle isReadOnly>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toHaveAttribute(
      "data-readonly",
    )
  })

  test("should handle isRounded prop", () => {
    render(<Toggle isRounded>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toHaveStyle({
      borderRadius: "var(--ui-radii-full)",
    })
  })

  test("should handle icon prop", () => {
    render(<Toggle icon={<div>Icon</div>} />)
    expect(screen.getByRole("button", { name: /icon/i })).toBeInTheDocument()
  })

  test("should handle onChange callback", () => {
    const onChange = vi.fn()
    render(<Toggle onChange={onChange}>Toggle</Toggle>)

    fireEvent.click(screen.getByRole("button", { name: /toggle/i }))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(true)

    fireEvent.click(screen.getByRole("button", { name: /toggle/i }))
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

  test("should have correct displayName and __ui__", () => {
    expect(Toggle.__ui__).toBe("Toggle")
  })
})
