import { a11y, render, screen } from "#test"
import { Toggle, ToggleGroup } from "."

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
})
