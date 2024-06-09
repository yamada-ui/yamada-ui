import { screen, render, a11y } from "@yamada-ui/test"
import { useRef } from "react"
import { Portal } from "../src"

describe("<Portal />", () => {
  test("Portal renders correctly", async () => {
    await a11y(<Portal>Hello</Portal>)
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
    // order3 element is portaling at the end of document.body
    expect(screen.getByText("order3")).toBeInTheDocument()
  })

  test("Portal with isDisabled renders correctly", () => {
    const TestContainer = () => {
      const ref = useRef<HTMLDivElement>(null)

      return (
        <>
          <Portal isDisabled containerRef={ref}>
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
