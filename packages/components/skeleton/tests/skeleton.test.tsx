import { a11y, render, screen } from "@yamada-ui/test"
import { Skeleton, SkeletonCircle, SkeletonText } from "../src"

describe("<Skeleton />", () => {
  test("Skeleton renders correctly", async () => {
    const { container } = render(
      <>
        <Skeleton />
        <SkeletonCircle />
        <SkeletonText />
      </>,
    )
    await a11y(container)
  })

  test("should render with given props", () => {
    render(
      <>
        <Skeleton data-testid="Skeleton" h={8} speed={2} />
        <SkeletonCircle data-testid="SkeletonCircle" boxSize={8} speed={2} />
        <SkeletonText
          data-testid="SkeletonText"
          gap={4}
          textHeight={4}
          speed={2}
          noOfLines={2}
        />
      </>,
    )
    expect(screen.getByTestId("Skeleton")).toBeInTheDocument()
    expect(screen.getByTestId("SkeletonCircle")).toBeInTheDocument()
    expect(screen.getByTestId("SkeletonText")).toBeInTheDocument()
  })
})
