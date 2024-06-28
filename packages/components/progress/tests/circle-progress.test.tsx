import { a11y, render, screen } from "@yamada-ui/test"
import { CircleProgress, CircleProgressLabel } from "../src"

describe("<CircleProgress />", () => {
  test("CircleProgress renders correctly", async () => {
    await a11y(<CircleProgress />)
  })

  test("renders correctly without animation", () => {
    render(
      <>
        <CircleProgress
          data-testid="circle-progress-a"
          size="8rem"
          thickness="0.5rem"
          color="green.500"
          trackColor="gray.300"
          value={75}
          min={0}
          max={100}
          isRounded
        />
      </>,
    )
    expect(screen.getByTestId("circle-progress-a")).toBeInTheDocument()
  })

  test("render correctly with animation", () => {
    render(
      <>
        <CircleProgress
          data-testid="circle-progress-b"
          isAnimation
          speed={["1s", "3s"]}
        />
        <CircleProgress
          data-testid="circle-progress-c"
          isAnimation
          speed={[1, 3]}
        />
      </>,
    )
    expect(screen.getByTestId("circle-progress-b")).toBeInTheDocument()
    expect(screen.getByTestId("circle-progress-c")).toBeInTheDocument()
  })

  test("Whether the size is render correctly", () => {
    render(
      <CircleProgress data-testid="circle-progress" value={50} size="120px" />,
    )

    const circleProgressChild =
      screen.getByTestId("circle-progress").children[0]
    expect(circleProgressChild).toHaveStyle({
      width: "120px",
      height: "120px",
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
