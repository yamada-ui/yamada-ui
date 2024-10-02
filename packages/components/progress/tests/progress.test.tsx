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
          borderRadius="md"
          filledTrackColor="green.500"
          isAnimation
          size="md"
          value={50}
          data-testid="progress-a"
        />
        <Progress
          colorScheme="purple"
          hasStripe
          isStripeAnimation
          rounded="md"
          value={100}
          data-testid="progress-b"
        />
      </>,
    )
    expect(screen.getByTestId("progress-a")).toBeInTheDocument()
    expect(screen.getByTestId("progress-b")).toBeInTheDocument()
  })

  test("Whether the value is render correctly", () => {
    render(<Progress value={50} data-testid="progress" />)

    const progressChild = screen.getByTestId("progress").children[0]
    expect(progressChild).toHaveStyle({
      width: "50%",
    })
  })

  test("Whether the colorScheme is render correctly", () => {
    render(<Progress colorScheme="red" value={50} data-testid="progress" />)
    const progressChild = screen.getByTestId("progress").children[0]
    expect(progressChild).toHaveStyle({
      backgroundColor: "rgb(234, 67, 52)",
    })
  })
})
