import { a11y, render, screen } from "#test"
import { Slide, slideVariants } from "./slide"

describe("<Slide />", () => {
  test("renders component correctly", async () => {
    await a11y(<Slide />)
  })

  test("keeps static component contracts", () => {
    render(<Slide>Slide</Slide>)

    expect(Slide.displayName).toBe("Slide")
    expect(screen.getByText("Slide")).toHaveClass("ui-slide")
    expect(screen.getByText("Slide").tagName).toBe("DIV")
  })

  test.each([
    ["inline-end", "translateX(100%)"],
    ["inline-start", "translateX(-100%)"],
    ["block-start", "translateY(-100%)"],
    ["block-end", "translateY(100%)"],
  ] as const)(
    "applies styles correctly for %s placement",
    (placement, transform) => {
      render(<Slide placement={placement}>Slide</Slide>)
      expect(screen.getByText("Slide").style.transform).toBe(transform)
    },
  )

  test("renders content when open even without unmountOnExit", () => {
    render(<Slide open>Slide</Slide>)
    expect(screen.getByText("Slide")).toBeInTheDocument()
  })

  test("does not render content when unmountOnExit and not open", () => {
    const { container } = render(<Slide unmountOnExit>Slide</Slide>)
    expect(container.querySelector(".ui-slide")).toBeNull()
  })

  test("renders content when unmountOnExit and open", () => {
    render(
      <Slide open unmountOnExit>
        Slide
      </Slide>,
    )
    expect(screen.getByText("Slide")).toBeInTheDocument()
  })

  describe("slideVariants", () => {
    test("returns default animation props when placement is undefined", () => {
      const enterFn = slideVariants.enter
      const exitFn = slideVariants.exit

      if (typeof enterFn !== "function" || typeof exitFn !== "function") {
        throw new Error("slideVariants.enter/exit must be functions")
      }

      const enterResult = enterFn({ placement: undefined }, {}, {})
      const exitResult = exitFn({ placement: undefined }, {}, {})

      expect(enterResult).not.toHaveProperty("x")
      expect(enterResult).not.toHaveProperty("y")
      expect(exitResult).not.toHaveProperty("x")
      expect(exitResult).not.toHaveProperty("y")
    })
  })
})
