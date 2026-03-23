import type { FC, HTMLAttributes, ReactNode } from "react"
import { a11y, render, screen } from "#test"
import { Slot, Slottable } from "./slot"

describe("<Slot />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Slot>
        <button>Slot</button>
      </Slot>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Slot.name).toBe("Slot")
    expect(Slottable.name).toBe("Slottable")
  })

  test("merges props onto child element", () => {
    render(
      <Slot className="from-slot" data-testid="slot">
        <button className="from-child">Click me</button>
      </Slot>,
    )

    const button = screen.getByRole("button", { name: "Click me" })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute("data-testid", "slot")
  })

  test("renders null when Slot has multiple children without Slottable", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined)

    expect(() =>
      render(
        <Slot>
          <span>A</span>
          <span>B</span>
        </Slot>,
      ),
    ).toThrow(/React.Children.only/)

    spy.mockRestore()
  })

  test("renders null when Slot has no children", () => {
    const { container } = render(<Slot />)
    const visibleContent = container.querySelector(":not([hidden])")

    expect(visibleContent).toBeNull()
  })

  test("renders with Slottable - merges child element props", () => {
    const Button: FC<
      HTMLAttributes<HTMLButtonElement> & {
        asChild?: boolean
        endIcon?: ReactNode
        startIcon?: ReactNode
      }
    > = ({ asChild, children, endIcon, startIcon, ...props }) => {
      const Component = asChild ? Slot : "button"

      return (
        <Component {...props}>
          {startIcon}
          <Slottable>{children}</Slottable>
          {endIcon}
        </Component>
      )
    }

    render(
      <Button asChild endIcon={<span>End</span>} startIcon={<span>Start</span>}>
        <a href="/about" data-testid="link">
          About
        </a>
      </Button>,
    )

    const link = screen.getByTestId("link")
    expect(link.tagName).toBe("A")
    expect(link).toHaveAttribute("href", "/about")
    expect(link).toHaveTextContent("Start")
    expect(link).toHaveTextContent("About")
    expect(link).toHaveTextContent("End")
  })

  test("renders null when Slottable child is not a valid element", () => {
    const Button: FC<
      HTMLAttributes<HTMLButtonElement> & {
        asChild?: boolean
      }
    > = ({ asChild, children, ...props }) => {
      const Component = asChild ? Slot : "button"

      return (
        <Component {...props}>
          <Slottable>{children}</Slottable>
        </Component>
      )
    }

    const { container } = render(<Button asChild>plain text</Button>)

    const visibleContent = container.querySelector(":not([hidden])")
    expect(visibleContent).toBeNull()
  })

  test("throws when Slottable has multiple children elements", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined)

    const Button: FC<
      HTMLAttributes<HTMLButtonElement> & {
        asChild?: boolean
      }
    > = ({ asChild, children, ...props }) => {
      const Component = asChild ? Slot : "button"

      return (
        <Component {...props}>
          <Slottable>{children}</Slottable>
        </Component>
      )
    }

    expect(() =>
      render(
        <Button asChild>
          <span>A</span>
          <span>B</span>
        </Button>,
      ),
    ).toThrow(/React.Children.only/)

    spy.mockRestore()
  })
})

describe("<Slottable />", () => {
  test("renders its children", () => {
    render(
      <Slottable>
        <span data-testid="child">Hello</span>
      </Slottable>,
    )

    expect(screen.getByTestId("child")).toHaveTextContent("Hello")
  })
})
