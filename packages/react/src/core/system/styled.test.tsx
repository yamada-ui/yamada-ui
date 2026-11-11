import type { ComponentPropsWithoutRef } from "react"
import type { ButtonProps } from "../../components/button/button"
import type { StyledProps } from "../components"
import { expectTypeOf } from "vitest"
import { a11y, hasSuppressHydrationWarning, render, screen } from "#test"
import { Button } from "../../components/button/button"
import { ScanIcon } from "../../components/icon/icons/scan-icon"
import { UserIcon } from "../../components/icon/icons/user-icon"
import { createStyled } from "./styled"

describe("createStyled", () => {
  test("passes a11y", async () => {
    const Component = createStyled("div")
    await a11y(<Component>content</Component>)
  })

  test("creates a styled component with a simple HTML element", () => {
    const Component = createStyled("div")
    render(<Component data-testid="el">Hello</Component>)
    const el = screen.getByTestId("el")
    expect(el).toBeInTheDocument()
    expect(el.textContent).toBe("Hello")
  })

  test("creates a styled component with a name", () => {
    const Component = createStyled("div", {
      name: "TestComponent",
    })
    expect(Component.displayName).toBe("TestComponent")
  })

  test("creates a styled component with custom displayName", () => {
    const Component = createStyled("div", {
      displayName: "TestComponent",
    })
    expect(Component.displayName).toBe("TestComponent")
  })

  test("falls back to 'StyledComponent' when no displayName or name", () => {
    const Component = createStyled("div")
    expect(Component.displayName).toBe("StyledComponent")
  })

  test("applies `className` from css", () => {
    const Component = createStyled("div")
    render(
      <Component css={{ color: "red" }} data-testid="el">
        test
      </Component>,
    )
    expect(screen.getByTestId("el").className).toMatch(/css-.*/)
  })

  test("passes conflicting SVG attributes without converting them to styles", () => {
    const Component = createStyled("svg")
    render(
      <Component
        data-testid="el"
        attrs={{ height: 12, width: 12, x: 6, y: 6 }}
      />,
    )
    const el = screen.getByTestId("el")
    expect(el).toHaveAttribute("width", "12")
    expect(el).toHaveAttribute("height", "12")
    expect(el).toHaveAttribute("x", "6")
    expect(el).toHaveAttribute("y", "6")
    expect(el).not.toHaveAttribute("attrs")
    expect(el).not.toHaveAttribute("class")
  })

  test("prefers attributes over forwarded props and merges class names and styles", () => {
    const Component = createStyled("div")
    render(
      <Component
        id="forwarded"
        className="forwarded"
        style={{ backgroundColor: "red", color: "red" }}
        data-testid="el"
        attrs={{
          id: "attribute",
          className: "attribute",
          style: { color: "blue" },
          "aria-label": "attribute",
          "data-attribute": "value",
          title: "attribute",
        }}
        title="forwarded"
      />,
    )
    const el = screen.getByTestId("el")
    expect(el).toHaveAttribute("aria-label", "attribute")
    expect(el).toHaveAttribute("data-attribute", "value")
    expect(el).toHaveAttribute("id", "attribute")
    expect(el).toHaveAttribute("title", "attribute")
    expect(el).toHaveClass("forwarded", "attribute")
    expect(el.style.backgroundColor).toBe("red")
    expect(el.style.color).toBe("blue")
  })

  test("uses attributes for the element selected by `as`", () => {
    const Component = createStyled("div")
    render(
      <Component
        as="input"
        data-testid="el"
        attrs={{ type: "email", size: 4 }}
      />,
    )
    const el = screen.getByTestId("el")
    expect(el.tagName).toBe("INPUT")
    expect(el).toHaveAttribute("size", "4")
    expect(el).toHaveAttribute("type", "email")
    expect(el).not.toHaveAttribute("attrs")
  })

  test("does not require custom component props to be repeated in attributes", () => {
    const CustomLink = ({
      href,
      children,
      ...props
    }: ComponentPropsWithoutRef<"a"> & { href: string }) => (
      <a href={href} {...props}>
        {children}
      </a>
    )
    const props: Omit<ButtonProps, "as" | "ref"> = {
      attrs: { title: "Attribute title" },
    }

    expectTypeOf({}).toMatchTypeOf<
      NonNullable<StyledProps<typeof CustomLink>["attrs"]>
    >()

    render(
      <Button as={CustomLink} href="/docs" {...props}>
        Documentation
      </Button>,
    )
    const el = screen.getByRole("link", { name: "Documentation" })
    expect(el).toHaveAttribute("href", "/docs")
    expect(el).toHaveAttribute("title", "Attribute title")
  })

  test("passes attributes to the child with `asChild`", () => {
    const Component = createStyled("svg")
    render(
      <Component asChild attrs={{ width: 12, x: 6 }}>
        <svg data-testid="el" />
      </Component>,
    )
    const el = screen.getByTestId("el")
    expect(el).toHaveAttribute("width", "12")
    expect(el).toHaveAttribute("x", "6")
    expect(el).not.toHaveAttribute("attrs")
  })

  test("passes attributes through icon component wrappers", () => {
    render(
      <ScanIcon boxSize="48px">
        <UserIcon
          data-testid="el"
          attrs={{ height: 12, width: 12, x: 6, y: 6 }}
        />
      </ScanIcon>,
    )
    const el = screen.getByTestId("el")
    expect(el).toHaveAttribute("width", "12")
    expect(el).toHaveAttribute("height", "12")
    expect(el).toHaveAttribute("x", "6")
    expect(el).toHaveAttribute("y", "6")
    expect(el).not.toHaveAttribute("attrs")
  })

  test("inherits `suppressHydrationWarning` from a parent styled component and allows overriding it", () => {
    const Component1 = createStyled("div")
    const Component2 = createStyled("div")
    const Component3 = createStyled("div")
    render(
      <Component1 suppressHydrationWarning>
        <Component2 data-testid="el2">
          <Component3 data-testid="el3" suppressHydrationWarning={false}>
            test
          </Component3>
        </Component2>
      </Component1>,
    )
    expect(hasSuppressHydrationWarning(screen.getByTestId("el2"))).toBeTruthy()
    expect(hasSuppressHydrationWarning(screen.getByTestId("el3"))).toBeFalsy()
  })
})
