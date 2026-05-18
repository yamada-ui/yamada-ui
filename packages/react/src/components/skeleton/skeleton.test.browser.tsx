import { page, render } from "#test/browser"
import { Skeleton } from "./"

describe("<Skeleton />", () => {
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
})
