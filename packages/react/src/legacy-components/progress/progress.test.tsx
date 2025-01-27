import { a11y, render, screen } from "../../../test"
import { Progress } from "./"

describe("<Progress />", () => {
  test("Progress renders correctly", async () => {
    await a11y(<Progress aria-label="Storage space" value={100} />)
  })

  test("renders correctly with props", () => {
    render(
      <>
        <Progress
          size="md"
          data-testid="progress-a"
          borderRadius="md"
          filledTrackColor="green.500"
          value={50}
        />
        <Progress
          colorScheme="purple"
          data-testid="progress-b"
          hasStripe
          rounded="md"
          value={100}
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
})
