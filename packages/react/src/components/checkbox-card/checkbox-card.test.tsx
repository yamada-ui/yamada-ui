import { a11y, render, screen } from "#test"
import { CheckboxCard } from "."

describe("<CheckboxCard />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <CheckboxCard.Root defaultChecked>checkbox card</CheckboxCard.Root>,
    )
  })

  test("renders label, description, and addon via props", () => {
    render(
      <CheckboxCard.Root
        addon="Test Addon"
        description="Test Description"
        label="Test Label"
        value="test"
      />,
    )

    expect(screen.getByText("Test Label")).toBeInTheDocument()
    expect(screen.getByText("Test Description")).toBeInTheDocument()
    expect(screen.getByText("Test Addon")).toBeInTheDocument()
  })

  test("renders without indicator when withIndicator is false", () => {
    render(
      <CheckboxCard.Root
        label="No Indicator"
        value="test"
        withIndicator={false}
      />,
    )

    expect(screen.getByText("No Indicator")).toBeInTheDocument()
    const checkbox = screen.getByRole("checkbox")
    const indicator =
      checkbox.parentElement?.querySelector("[data-indicator]") ?? null
    expect(indicator).toBeNull()
  })
})
