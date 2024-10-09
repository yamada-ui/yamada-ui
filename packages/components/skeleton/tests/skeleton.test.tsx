import { a11y, render, screen } from "@yamada-ui/test"
import { Skeleton, SkeletonCircle, SkeletonText } from "../src"

describe("<Skeleton />", () => {
  test("Skeleton renders correctly", async () => {
    await a11y(
      <>
        <Skeleton />
        <SkeletonCircle />
        <SkeletonText />
      </>,
    )
  })

  test("should render with given props", () => {
    render(
      <>
        <Skeleton data-testid="Skeleton" h={8} speed={2} />
        <SkeletonCircle data-testid="SkeletonCircle" boxSize={8} speed={2} />
        <SkeletonText
          data-testid="SkeletonText"
          gap={4}
          lineClamp={2}
          speed={2}
          textHeight={4}
        />
      </>,
    )
    expect(screen.getByTestId("Skeleton")).toBeInTheDocument()
    expect(screen.getByTestId("SkeletonCircle")).toBeInTheDocument()
    expect(screen.getByTestId("SkeletonText")).toBeInTheDocument()
  })
  test("should render with isLoaded", () => {
    render(<Skeleton data-testid="Skeleton" isLoaded />)
    expect(screen.getByTestId("Skeleton")).toHaveClass("ui-skeleton--loaded")
  })
})
