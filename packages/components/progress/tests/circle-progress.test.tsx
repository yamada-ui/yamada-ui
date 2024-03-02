import { a11y, render, screen } from "@yamada-ui/test"
import { CircleProgress } from "../src"

describe("<CircleProgress />", () => {
  test("CircleProgress renders correctly", async () => {
    const { container } = render(<CircleProgress />)
    await a11y(container)
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
})
