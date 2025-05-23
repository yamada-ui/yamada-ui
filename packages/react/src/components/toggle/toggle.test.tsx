import { Toggle, ToggleGroup } from "."
import { fireEvent, render, screen } from "../../../test"
import { noop } from "../../utils"

describe("<Toggle />", () => {
  test("should render correctly", () => {
    render(<Toggle>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toBeInTheDocument()
  })

  test("sets `displayName` correctly", () => {
    expect(Toggle.displayName).toBe("ToggleRoot")
  })

  test("sets `className` correctly", () => {
    render(<Toggle>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toHaveClass(
      "ui-toggle__root",
    )
  })

  test("should handle selected prop", () => {
    const { rerender } = render(<Toggle selected>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toHaveAttribute(
      "data-selected",
    )

    rerender(<Toggle selected={false}>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).not.toHaveAttribute(
      "data-selected",
    )
  })

  test("should handle disabled prop", () => {
    render(<Toggle disabled>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toBeDisabled()
  })

  test("should handle readOnly prop", () => {
    render(<Toggle readOnly>Toggle</Toggle>)

    expect(screen.getByRole("button", { name: /toggle/i })).toHaveAttribute(
      "data-readonly",
    )
  })

  test.skip("should handle fullRounded prop", () => {
    render(<Toggle fullRounded>Toggle</Toggle>)

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
})
