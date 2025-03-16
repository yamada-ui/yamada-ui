import { a11y, render, screen } from "@yamada-ui/test"
import { CircleProgress, CircleProgressLabel } from "../src"

describe("<CircleProgress />", () => {
  test("CircleProgress renders correctly", async () => {
    await a11y(<CircleProgress aria-label="Storage space" />)
  })

  test("renders correctly without animation", () => {
    render(
      <CircleProgress
        data-testid="circle-progress-a"
        boxSize="8rem"
        color="green.500"
        fullRounded
        max={100}
        min={0}
        thickness="0.5rem"
        trackColor="gray.300"
        value={75}
      />,
    )
    expect(screen.getByTestId("circle-progress-a")).toBeInTheDocument()
  })

  test("render correctly with animation", () => {
    render(
      <>
        <CircleProgress
          data-testid="circle-progress-b"
          // eslint-disable-next-line @typescript-eslint/no-deprecated
          isAnimation
          speed={["1s", "3s"]}
        />
        <CircleProgress
          data-testid="circle-progress-c"
          // eslint-disable-next-line @typescript-eslint/no-deprecated
          isAnimation
          speed={[1, 3]}
        />
      </>,
    )
    expect(screen.getByTestId("circle-progress-b")).toBeInTheDocument()
    expect(screen.getByTestId("circle-progress-c")).toBeInTheDocument()
  })

  test("Whether the boxSize is render correctly", () => {
    render(
      <CircleProgress
        data-testid="circle-progress"
        boxSize="120px"
        value={50}
      />,
    )

    const circleProgressChild =
      screen.getByTestId("circle-progress").children[0]
    expect(circleProgressChild).toHaveStyle({
      height: "120px",
      width: "120px",
    })
  })

  test("Whether CircleProgressLabel is render correctly", () => {
    render(
      <CircleProgress value={50}>
        <CircleProgressLabel>50%</CircleProgressLabel>
      </CircleProgress>,
    )

    expect(screen.getByText("50%")).toBeInTheDocument()
  })
})
