import type { FC, HTMLAttributes, ReactNode } from "react"
import { a11y, page, render } from "#test/browser"
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

  test("merges props onto child element", async () => {
    await render(
      <Slot className="from-slot" data-testid="slot">
        <button className="from-child">Click me</button>
      </Slot>,
    )

    const button = page.getByRole("button", { name: "Click me" })
    await expect.element(button).toBeInTheDocument()
    await expect.element(button).toHaveAttribute("data-testid", "slot")
  })

  test("renders null when Slot has multiple children without Slottable", async () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined)

    await expect(
      (async () =>
        render(
          <Slot>
            <span>A</span>
            <span>B</span>
          </Slot>,
        ))(),
    ).rejects.toThrow(/React.Children.only/)

    spy.mockRestore()
  })

  test("renders null when Slot has no children", async () => {
    const { container } = await render(<Slot />)
    const visibleContent = container.querySelector(":not([hidden])")

    expect(visibleContent).toBeNull()
  })

  test("renders with Slottable - merges child element props", async () => {
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

    await render(
      <Button asChild endIcon={<span>End</span>} startIcon={<span>Start</span>}>
        <a href="/about" data-testid="link">
          About
        </a>
      </Button>,
    )

    const link = page.getByTestId("link")
    expect(link.element().tagName).toBe("A")
    await expect.element(link).toHaveAttribute("href", "/about")
    await expect.element(link).toHaveTextContent("Start")
    await expect.element(link).toHaveTextContent("About")
    await expect.element(link).toHaveTextContent("End")
  })

  test("renders null when Slottable child is not a valid element", async () => {
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

    const { container } = await render(<Button asChild>plain text</Button>)

    const visibleContent = container.querySelector(":not([hidden])")
    expect(visibleContent).toBeNull()
  })

  test("throws when Slottable has multiple children elements", async () => {
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

    await expect(
      (async () =>
        render(
          <Button asChild>
            <span>A</span>
            <span>B</span>
          </Button>,
        ))(),
    ).rejects.toThrow(/React.Children.only/)

    spy.mockRestore()
  })
})

describe("<Slottable />", () => {
  test("renders its children", async () => {
    await render(
      <Slottable>
        <span data-testid="child">Hello</span>
      </Slottable>,
    )

    await expect.element(page.getByTestId("child")).toHaveTextContent("Hello")
  })
})
