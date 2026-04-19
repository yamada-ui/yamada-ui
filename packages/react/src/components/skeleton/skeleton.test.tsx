import { a11y, page, render } from "#test/browser"
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

  test("sets `className` correctly", async () => {
    await render(
      <>
        <Skeleton data-testid="skeleton" />
        <SkeletonCircle data-testid="skeletonCircle" />
        <SkeletonText rootProps={{ "data-testid": "skeletonText" }} />
      </>,
    )
    await expect
      .element(page.getByTestId("skeleton"))
      .toHaveClass("ui-skeleton")
    await expect
      .element(page.getByTestId("skeletonCircle"))
      .toHaveClass("ui-skeleton")
    expect(page.getByTestId("skeletonText").element().children[0]).toHaveClass(
      "ui-skeleton",
    )
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <>
        <Skeleton data-testid="skeleton" />
        <SkeletonCircle data-testid="skeletonCircle" />
        <SkeletonText rootProps={{ "data-testid": "skeletonText" }} />
      </>,
    )
    expect(page.getByTestId("skeleton").element().tagName).toBe("DIV")
    expect(page.getByTestId("skeletonCircle").element().tagName).toBe("DIV")
    expect(
      page.getByTestId("skeletonText").element().children[0]?.tagName,
    ).toBe("DIV")
  })

  test("sets loading state attributes correctly", async () => {
    const { rerender } = await render(
      <Skeleton data-testid="skeleton" loading />,
    )
    const el = page.getByTestId("skeleton")
    await expect.element(el).toHaveAttribute("aria-busy", "true")
    await expect.element(el).toHaveAttribute("data-loading")

    await rerender(<Skeleton data-testid="skeleton" loading={false} />)
    const el2 = page.getByTestId("skeleton")
    await expect.element(el2).toHaveAttribute("aria-busy", "false")
    await expect.element(el2).toHaveAttribute("data-loaded")
  })

  test("sets duration as number (appends 's')", async () => {
    await render(<Skeleton data-testid="skeleton" duration={2} />)
    const styles = getComputedStyle(page.getByTestId("skeleton").element())
    expect(styles.getPropertyValue("--duration").trim()).toBe("2s")
  })

  test("sets duration as string (passes through)", async () => {
    await render(<Skeleton data-testid="skeleton" duration="0.5s" />)
    const styles = getComputedStyle(page.getByTestId("skeleton").element())
    expect(styles.getPropertyValue("--duration").trim()).toBe("0.5s")
  })

  test("sets fadeDuration as number (appends 's')", async () => {
    await render(<Skeleton data-testid="skeleton" fadeDuration={0.4} />)
    const styles = getComputedStyle(page.getByTestId("skeleton").element())
    expect(styles.getPropertyValue("--fade-duration").trim()).toBe("0.4s")
  })

  test("sets fadeDuration as string (passes through)", async () => {
    await render(<Skeleton data-testid="skeleton" fadeDuration="0.8s" />)
    const styles = getComputedStyle(page.getByTestId("skeleton").element())
    expect(styles.getPropertyValue("--fade-duration").trim()).toBe("0.8s")
  })

  test("sets startColor and endColor", async () => {
    await render(
      <Skeleton
        data-testid="skeleton"
        endColor="blue.500"
        startColor="red.500"
      />,
    )
    // Just ensure it renders without error with color props
    await expect.element(page.getByTestId("skeleton")).toBeInTheDocument()
  })

  test("sets fitContent when explicitly true (no children)", async () => {
    await render(<Skeleton data-testid="skeleton" fitContent />)
    const styles = getComputedStyle(page.getByTestId("skeleton").element())
    expect(styles.getPropertyValue("--height").trim()).toBe("fit-content")
    expect(styles.getPropertyValue("--width").trim()).toBe("fit-content")
  })

  test("sets fitContent automatically when children are present", async () => {
    await render(
      <Skeleton data-testid="skeleton">
        <span>Content</span>
      </Skeleton>,
    )
    const styles = getComputedStyle(page.getByTestId("skeleton").element())
    expect(styles.getPropertyValue("--height").trim()).toBe("fit-content")
    expect(styles.getPropertyValue("--width").trim()).toBe("fit-content")
  })

  test("does not set fitContent when false and no children", async () => {
    await render(<Skeleton data-testid="skeleton" />)
    const styles = getComputedStyle(page.getByTestId("skeleton").element())
    expect(styles.getPropertyValue("--width").trim()).not.toBe("fit-content")
    expect(styles.getPropertyValue("--height").trim()).not.toBe("fit-content")
  })

  test("fitContent false overrides children default", async () => {
    await render(
      <Skeleton data-testid="skeleton" fitContent={false}>
        <span>Content</span>
      </Skeleton>,
    )
    const styles = getComputedStyle(page.getByTestId("skeleton").element())
    expect(styles.getPropertyValue("--width").trim()).not.toBe("fit-content")
    expect(styles.getPropertyValue("--height").trim()).not.toBe("fit-content")
  })
})
