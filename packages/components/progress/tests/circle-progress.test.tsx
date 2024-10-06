import { a11y, render, screen } from "@yamada-ui/test"
import { CircleProgress, CircleProgressLabel } from "../src"

describe("<CircleProgress />", () => {
  test("CircleProgress renders correctly", async () => {
    await a11y(<CircleProgress />)
  })

  test("renders correctly without animation", () => {
    render(
      <CircleProgress
        boxSize="8rem"
        color="green.500"
        isRounded
        max={100}
        min={0}
        thickness="0.5rem"
        trackColor="gray.300"
        value={75}
        data-testid="circle-progress-a"
      />,
    )
    expect(screen.getByTestId("circle-progress-a")).toBeInTheDocument()
  })

  test("render correctly with animation", () => {
    render(
      <>
        <CircleProgress
          isAnimation
          speed={["1s", "3s"]}
          data-testid="circle-progress-b"
        />
        <CircleProgress
          isAnimation
          speed={[1, 3]}
          data-testid="circle-progress-c"
        />
      </>,
    )
    expect(screen.getByTestId("circle-progress-b")).toBeInTheDocument()
    expect(screen.getByTestId("circle-progress-c")).toBeInTheDocument()
  })

  test("Whether the boxSize is render correctly", () => {
    render(
      <CircleProgress
        boxSize="120px"
        value={50}
        data-testid="circle-progress"
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
