import { a11y, page, render } from "#test/browser"
import { useRef } from "react"
import { Portal } from "./portal"

describe("<Portal />", () => {
  test("renders component correctly", async () => {
    await a11y(<Portal>Hello</Portal>)
  })

  test("sets `displayName` correctly", () => {
    expect(Portal.name).toBe("Portal")
  })

  test("Portal with containerRef renders correctly", async () => {
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

    await render(<TestContainer />)

    await expect.element(page.getByText("order2order3")).toBeInTheDocument()
  })

  test("Nested Portal with containerRef renders correctly", async () => {
    const TestContainer = () => {
      const ref = useRef<HTMLDivElement>(null)

      return (
        <>
          <Portal containerRef={ref}>
            order2
            <Portal>order3</Portal>
          </Portal>
          <div ref={ref}>order1</div>
        </>
      )
    }

    await render(<TestContainer />)

    await expect.element(page.getByText("order1order2")).toBeInTheDocument()
    await expect.element(page.getByText("order3")).toBeInTheDocument()
  })

  test("Portal with disabled renders correctly", async () => {
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

    await render(<TestContainer />)

    await expect
      .element(page.getByText("order1"))
      .not.toHaveTextContent("order1order2")
  })
})
