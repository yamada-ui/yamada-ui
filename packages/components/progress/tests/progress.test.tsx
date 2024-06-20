import { a11y, render, screen } from "@yamada-ui/test"
import { Progress } from "../src"

describe("<Progress />", () => {
  test("Progress renders correctly", async () => {
    await a11y(<Progress value={100} />)
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

  test("Whether the value is render correctly", () => {
    render(<Progress data-testid="progress" value={50} />)

    const progressChild = screen.getByTestId("progress").children[0]
    expect(progressChild).toHaveStyle({
      width: "50%",
    })
  })

  test("Whether the colorScheme is render correctly", () => {
    render(<Progress data-testid="progress" colorScheme="red" value={50} />)
    const progressChild = screen.getByTestId("progress").children[0]
    expect(progressChild).toHaveStyle({
      backgroundColor: "rgb(234, 67, 52)",
    })
  })
})
