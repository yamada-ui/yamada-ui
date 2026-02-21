import { a11y, render, screen } from "#test"
import { Skeleton, SkeletonCircle, SkeletonText } from "./"

describe("<Skeleton />", () => {
  test("renders component correctly", async () => {
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

  test("sets duration as number (appends 's')", () => {
    render(<Skeleton data-testid="skeleton" duration={2} />)
    expect(screen.getByTestId("skeleton")).toHaveStyle({
      "--duration": "2s",
    })
  })

  test("sets duration as string (passes through)", () => {
    render(<Skeleton data-testid="skeleton" duration="0.5s" />)
    expect(screen.getByTestId("skeleton")).toHaveStyle({
      "--duration": "0.5s",
    })
  })

  test("sets fadeDuration as number (appends 's')", () => {
    render(<Skeleton data-testid="skeleton" fadeDuration={0.4} />)
    expect(screen.getByTestId("skeleton")).toHaveStyle({
      "--fade-duration": "0.4s",
    })
  })

  test("sets fadeDuration as string (passes through)", () => {
    render(<Skeleton data-testid="skeleton" fadeDuration="0.8s" />)
    expect(screen.getByTestId("skeleton")).toHaveStyle({
      "--fade-duration": "0.8s",
    })
  })

  test("sets startColor and endColor", () => {
    render(
      <Skeleton
        data-testid="skeleton"
        endColor="blue.500"
        startColor="red.500"
      />,
    )
    // Just ensure it renders without error with color props
    expect(screen.getByTestId("skeleton")).toBeInTheDocument()
  })

  test("sets fitContent when explicitly true (no children)", () => {
    render(<Skeleton data-testid="skeleton" fitContent />)
    expect(screen.getByTestId("skeleton")).toHaveStyle({
      "--height": "fit-content",
      "--width": "fit-content",
    })
  })

  test("sets fitContent automatically when children are present", () => {
    render(
      <Skeleton data-testid="skeleton">
        <span>Content</span>
      </Skeleton>,
    )
    expect(screen.getByTestId("skeleton")).toHaveStyle({
      "--height": "fit-content",
      "--width": "fit-content",
    })
  })

  test("does not set fitContent when false and no children", () => {
    render(<Skeleton data-testid="skeleton" />)
    const el = screen.getByTestId("skeleton")
    expect(el.style.getPropertyValue("--width")).toBe("")
    expect(el.style.getPropertyValue("--height")).toBe("")
  })

  test("fitContent false overrides children default", () => {
    render(
      <Skeleton data-testid="skeleton" fitContent={false}>
        <span>Content</span>
      </Skeleton>,
    )
    const el = screen.getByTestId("skeleton")
    expect(el.style.getPropertyValue("--width")).toBe("")
    expect(el.style.getPropertyValue("--height")).toBe("")
  })
})
