import { useRef } from "react"
import { a11y, render, screen } from "../../../test"
import { Portal } from "./portal"

describe("<Portal />", () => {
  test("Portal renders correctly", async () => {
    await a11y(<Portal>Hello</Portal>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Portal.displayName).toBe("Portal")
    expect(Portal.__ui__).toBe("Portal")
  })

  test("sets `className` correctly", () => {
    render(<Portal>Hello</Portal>)
    expect(screen.getByText("Hello")).toHaveClass("ui-portal")
  })

  test("renders HTML tag correctly", () => {
    render(<Portal>Hello</Portal>)
    expect(screen.getByText("Hello").tagName).toBe("DIV")
  })

  test("Portal with containerRef renders correctly", () => {
    const TestContainer = () => {
      const ref = useRef<HTMLDivElement>(null)

      return (
        <div>
          order1
          <Portal containerRef={ref}>order3</Portal>
          <div ref={ref}>order2</div>
        </div>
      )
    }

    render(<TestContainer />)

    const order1 = screen.getByText("order1")
    const order2 = screen.getByText("order2")

    expect(order1).toHaveTextContent("order2")
    expect(order2).toHaveTextContent("order3")
  })

  test("Nested Portal with containerRef renders correctly", () => {
    const TestContainer = () => {
      const ref = useRef<HTMLDivElement>(null)

      return (
        <>
          <Portal containerRef={ref}>
            <div>
              order2
              <Portal>order3</Portal>
            </div>
          </Portal>
          <div ref={ref}>order1</div>
        </>
      )
    }

    render(<TestContainer />)

    const order1 = screen.getByText("order1")

    expect(order1).toHaveTextContent("order2")
    expect(order1).toHaveTextContent("order3")
  })

  test("Nested Portal with setting appendToParentPortal to false renders correctly", () => {
    const TestContainer = () => {
      const ref = useRef<HTMLDivElement>(null)

      return (
        <>
          <Portal containerRef={ref}>
            <div>
              order2
              <Portal appendToParentPortal={false}>order3</Portal>
            </div>
          </Portal>
          <div ref={ref}>order1</div>
        </>
      )
    }

    render(<TestContainer />)

    const order1 = screen.getByText("order1")

    expect(order1).toHaveTextContent("order2")
    expect(order1).not.toHaveTextContent("order3")
    expect(screen.getByText("order3")).toBeInTheDocument()
  })

  test("Portal with disabled renders correctly", () => {
    const TestContainer = () => {
      const ref = useRef<HTMLDivElement>(null)

      return (
        <>
          <Portal containerRef={ref} disabled>
            order2
          </Portal>
          <div ref={ref}>order1</div>
        </>
      )
    }

    render(<TestContainer />)

    const order2 = screen.getByText("order2")

    expect(order2).toHaveTextContent("order1")
  })
})
