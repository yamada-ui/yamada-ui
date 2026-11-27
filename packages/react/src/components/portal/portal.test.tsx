import { useRef } from "react"
import { a11y, render, screen } from "#test"
import { FocusLock } from "../focus-lock"
import { Portal, PortalProvider } from "./"

describe("<Portal />", () => {
  test("renders component correctly", async () => {
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

    expect(screen.getByText("order2order3")).toBeInTheDocument()
  })

  test("Nested Portal with containerRef renders correctly", () => {
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

    render(<TestContainer />)

    expect(screen.getByText("order1order2")).toBeInTheDocument()
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

    expect(screen.getByText("order1")).not.toHaveTextContent("order1order2")
  })
})

describe("<PortalProvider />", () => {
  test("merges nested data attributes and preserves explicit child attributes", () => {
    render(
      <PortalProvider value={{ "data-outer": "outer", "data-scope": "outer" }}>
        <PortalProvider value={{ "data-scope": "inner" }}>
          <Portal>
            <div>Inherited</div>
            <div data-scope="explicit">Explicit</div>
          </Portal>
        </PortalProvider>
      </PortalProvider>,
    )

    expect(screen.getByText("Inherited")).toHaveAttribute("data-outer", "outer")
    expect(screen.getByText("Inherited")).toHaveAttribute("data-scope", "inner")
    expect(screen.getByText("Explicit")).toHaveAttribute(
      "data-scope",
      "explicit",
    )
  })

  test("does not apply data attributes to disabled portals", () => {
    render(
      <PortalProvider value={{ "data-scope": "provider" }}>
        <Portal disabled>
          <div>Inline</div>
        </Portal>
      </PortalProvider>,
    )

    expect(screen.getByText("Inline")).not.toHaveAttribute("data-scope")
  })

  test("applies data attributes to the focus lock shard", () => {
    render(
      <PortalProvider value={{ "data-scope": "provider" }}>
        <FocusLock disabled>
          <Portal>
            <button>Action</button>
          </Portal>
        </FocusLock>
      </PortalProvider>,
    )

    expect(
      screen.getByRole("button", { name: "Action" }).parentElement,
    ).toHaveAttribute("data-scope", "provider")
  })
})
