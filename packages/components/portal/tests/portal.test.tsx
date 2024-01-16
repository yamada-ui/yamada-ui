import { within } from "@testing-library/react"
import { render, a11y } from "@yamada-ui/test"
import { useRef } from "react"
import { Portal } from "../src"

describe("<Portal />", () => {
  test("Portal renders correctly", async () => {
    const { container } = render(<Portal>Hello</Portal>)
    await a11y(container)
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

    const { getByText } = render(<TestContainer />)
    const order1 = getByText("order1")
    const order2 = getByText("order2")
    expect(within(order1).getByText("order2")).toBeInTheDocument()
    expect(within(order2).getByText("order3")).toBeInTheDocument()
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

    const { getByText } = render(<TestContainer />)
    const order1 = getByText("order1")
    expect(within(order1).getByText("order2")).toBeInTheDocument()
    expect(within(order1).getByText("order3")).toBeInTheDocument()
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

    const { getByText } = render(<TestContainer />)
    const order1 = getByText("order1")
    expect(within(order1).getByText("order2")).toBeInTheDocument()
    expect(within(order1).queryByText("order3")).not.toBeInTheDocument()
    // order3 element is portaling at the end of document.body
    expect(getByText("order3")).toBeInTheDocument()
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

    const { getByText } = render(<TestContainer />)
    const order2 = getByText("order2")
    expect(within(order2).getByText("order1")).toBeInTheDocument()
  })
})
