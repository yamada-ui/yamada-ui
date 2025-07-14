import { a11y, render, screen } from "#test"
import { Skeleton, SkeletonCircle, SkeletonText } from "./"

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

  test("sets `displayName` correctly", () => {
    expect(Skeleton.displayName).toBe("Skeleton")
    expect(SkeletonCircle.name).toBe("SkeletonCircle")
    expect(SkeletonText.name).toBe("SkeletonText")
  })

  test("sets `className` correctly", () => {
    render(
      <>
        <Skeleton data-testid="skeleton" />
        <SkeletonCircle data-testid="skeletonCircle" />
        <SkeletonText rootProps={{ "data-testid": "skeletonText" }} />
      </>,
    )
    expect(screen.getByTestId("skeleton")).toHaveClass("ui-skeleton")
    expect(screen.getByTestId("skeletonCircle")).toHaveClass("ui-skeleton")
    expect(screen.getByTestId("skeletonText").children[0]).toHaveClass(
      "ui-skeleton",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <>
        <Skeleton data-testid="skeleton" />
        <SkeletonCircle data-testid="skeletonCircle" />
        <SkeletonText rootProps={{ "data-testid": "skeletonText" }} />
      </>,
    )
    expect(screen.getByTestId("skeleton").tagName).toBe("DIV")
    expect(screen.getByTestId("skeletonCircle").tagName).toBe("DIV")
    expect(screen.getByTestId("skeletonText").children[0]?.tagName).toBe("DIV")
  })
})
