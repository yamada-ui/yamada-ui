import { a11y, render, screen } from "#test"
import { Skeleton, SkeletonCircle, SkeletonText } from "./"

describe("<Skeleton />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <>
        <Skeleton />
        <SkeletonCircle />
        <SkeletonText />
      </>,
    )
  })

  test("sets displayName correctly", () => {
    expect(Skeleton.displayName).toBe("Skeleton")
    expect(SkeletonCircle.name).toBe("SkeletonCircle")
    expect(SkeletonText.name).toBe("SkeletonText")
  })

  test("renders static class contracts correctly", () => {
    render(
      <>
        <Skeleton data-testid="skeleton" />
        <SkeletonCircle data-testid="skeletonCircle" />
        <SkeletonText rootProps={{ "data-testid": "skeletonText" }} />
      </>,
    )
    expect(screen.getByTestId("skeleton")).toHaveClass("ui-skeleton")
    expect(screen.getByTestId("skeletonCircle")).toHaveClass("ui-skeleton")
    expect(screen.getByTestId("skeletonText").firstElementChild).toHaveClass(
      "ui-skeleton",
    )
  })

  test("renders HTML tag contracts correctly", () => {
    render(
      <>
        <Skeleton data-testid="skeleton" />
        <SkeletonCircle data-testid="skeletonCircle" />
        <SkeletonText rootProps={{ "data-testid": "skeletonText" }} />
      </>,
    )
    expect(screen.getByTestId("skeleton").tagName).toBe("DIV")
    expect(screen.getByTestId("skeletonCircle").tagName).toBe("DIV")
    expect(screen.getByTestId("skeletonText").tagName).toBe("DIV")
    expect(screen.getByTestId("skeletonText").firstElementChild?.tagName).toBe(
      "DIV",
    )
  })

  test("sets loading state attributes correctly", () => {
    const { rerender } = render(<Skeleton data-testid="skeleton" loading />)
    const el = screen.getByTestId("skeleton")
    expect(el).toHaveAttribute("aria-busy", "true")
    expect(el).toHaveAttribute("data-loading")

    rerender(<Skeleton data-testid="skeleton" loading={false} />)
    const el2 = screen.getByTestId("skeleton")
    expect(el2).toHaveAttribute("aria-busy", "false")
    expect(el2).toHaveAttribute("data-loaded")
  })

  test("renders with startColor and endColor", () => {
    render(
      <Skeleton
        data-testid="skeleton"
        endColor="blue.500"
        startColor="red.500"
      />,
    )
    expect(screen.getByTestId("skeleton")).toBeInTheDocument()
  })

  test("does not set fitContent when false and no children", () => {
    render(<Skeleton data-testid="skeleton" />)
    const styles = screen.getByTestId("skeleton").style
    expect(styles.getPropertyValue("--width")).toBe("")
    expect(styles.getPropertyValue("--height")).toBe("")
  })

  test("fitContent false overrides children default", () => {
    render(
      <Skeleton data-testid="skeleton" fitContent={false}>
        <span>Content</span>
      </Skeleton>,
    )
    const styles = screen.getByTestId("skeleton").style
    expect(styles.getPropertyValue("--width")).toBe("")
    expect(styles.getPropertyValue("--height")).toBe("")
  })

  test("renders SkeletonText with the configured number of lines", () => {
    render(<SkeletonText lineClamp={5} rootProps={{ "data-testid": "root" }} />)
    expect(screen.getByTestId("root").children).toHaveLength(5)
  })

  test("renders SkeletonText children when not loading", () => {
    render(
      <SkeletonText loading={false} rootProps={{ "data-testid": "root" }}>
        <span>Loaded</span>
      </SkeletonText>,
    )
    expect(screen.getByText("Loaded")).toBeInTheDocument()
    expect(screen.getByTestId("root").children).toHaveLength(1)
  })
})
