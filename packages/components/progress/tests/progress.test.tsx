import { a11y, render, screen } from "@yamada-ui/test"
import { Progress } from "../src"

describe("<Progress />", () => {
  test("Progress renders correctly", async () => {
    const { container } = render(<Progress value={100} />)
    await a11y(container)
  })

  test("renders correctly with props", () => {
    render(
      <>
        <Progress
          data-testid="progress-a"
          filledTrackColor="green.500"
          value={50}
          size="md"
          borderRadius="md"
          isAnimation
        />
        <Progress
          data-testid="progress-b"
          colorScheme="purple"
          hasStripe
          isStripeAnimation
          value={100}
          rounded="md"
        />
      </>,
    )
    expect(screen.getByTestId("progress-a")).toBeInTheDocument()
    expect(screen.getByTestId("progress-b")).toBeInTheDocument()
  })
})
