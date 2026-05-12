import { a11y, render, screen } from "#test"
import { RadioCard } from "."

describe("<RadioCard />", () => {
  test("renders component correctly", async () => {
    await a11y(<RadioCard.Root defaultChecked>radio card</RadioCard.Root>)
  })

  test("renders label, description, and addon via props", () => {
    render(
      <RadioCard.Root
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
      <RadioCard.Root
        label="No Indicator"
        value="test"
        withIndicator={false}
      />,
    )

    expect(screen.getByText("No Indicator")).toBeInTheDocument()
    const radio = screen.getByRole("radio")
    const indicator = radio.parentElement?.querySelector("[data-indicator]")
    expect(indicator).toBeNull()
  })
})
