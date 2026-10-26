import { a11y, render, screen } from "#test"
import { Marquee } from "./"

describe("<Marquee />", () => {
  test("passes a11y checks with explicit content", async () => {
    await a11y(
      <Marquee.Root aria-label="Brands">
        <Marquee.Content>
          <Marquee.Item>First</Marquee.Item>
          <Marquee.Item>Second</Marquee.Item>
        </Marquee.Content>
      </Marquee.Root>,
    )
  })

  test("passes a11y checks with implicit content and decorative edges", async () => {
    await a11y(
      <Marquee.Root aria-label="Brands">
        <Marquee.Edge />
        <Marquee.Item>Yamada UI</Marquee.Item>
        <Marquee.Edge direction="end" />
      </Marquee.Root>,
    )
  })

  test("renders the component slots", () => {
    render(
      <Marquee.Root aria-label="Brands">
        <Marquee.Content data-testid="content">
          <Marquee.Item>Yamada UI</Marquee.Item>
        </Marquee.Content>
      </Marquee.Root>,
    )

    const root = screen.getByRole("region", { name: "Brands" })

    expect(root).toHaveClass("ui-marquee__root")
    expect(root).toHaveAttribute("aria-live", "off")
    expect(root).toHaveAttribute("aria-roledescription", "marquee")
    expect(screen.getByTestId("content")).toHaveClass("ui-marquee__content")
    expect(screen.getAllByText("Yamada UI")[0]).toHaveClass("ui-marquee__item")
  })

  test("wraps direct items in content and leaves other siblings outside", () => {
    render(
      <Marquee.Root aria-label="Brands">
        <Marquee.Edge data-testid="edge" />
        <Marquee.Item>First</Marquee.Item>
        <Marquee.Item>Second</Marquee.Item>
        <button>Pause</button>
      </Marquee.Root>,
    )

    const root = screen.getByRole("region", { name: "Brands" })
    const first = screen.getAllByText("First")[0]!
    const second = screen.getAllByText("Second")[0]!
    const content = first.parentElement?.parentElement

    expect(content).toHaveClass("ui-marquee__content")
    expect(content?.parentElement).toBe(root)
    expect(second.parentElement).toBe(first.parentElement)
    expect(screen.getByTestId("edge").parentElement).toBe(root)
    expect(screen.getByRole("button", { name: "Pause" }).parentElement).toBe(
      root,
    )
  })

  test("uses explicit content without wrapping it again", () => {
    render(
      <Marquee.Root aria-label="Brands">
        <Marquee.Content data-testid="content">
          <Marquee.Item>Yamada UI</Marquee.Item>
        </Marquee.Content>
      </Marquee.Root>,
    )

    const root = screen.getByRole("region", { name: "Brands" })

    expect(screen.getByTestId("content").parentElement).toBe(root)
    expect(root.querySelectorAll(".ui-marquee__content")).toHaveLength(1)
  })

  test("hides edges from assistive technology", () => {
    render(
      <Marquee.Root>
        <Marquee.Edge data-testid="edge" />
        <Marquee.Item>Yamada UI</Marquee.Item>
      </Marquee.Root>,
    )

    expect(screen.getByTestId("edge")).toHaveAttribute("aria-hidden", "true")
    expect(screen.getByTestId("edge")).toHaveAttribute("inert")
  })

  test("accepts an accessible label", () => {
    render(
      <Marquee.Root aria-label="Brands">
        <Marquee.Item>Yamada UI</Marquee.Item>
      </Marquee.Root>,
    )

    expect(screen.getByRole("region", { name: "Brands" })).toHaveAttribute(
      "aria-label",
      "Brands",
    )
  })

  test("accepts aria-labelledby", () => {
    render(
      <>
        <h2 id="brands">Brands</h2>
        <Marquee.Root aria-labelledby="brands">
          <Marquee.Item>Yamada UI</Marquee.Item>
        </Marquee.Root>
      </>,
    )

    const root = screen.getByRole("region", { name: "Brands" })

    expect(root).toHaveAttribute("aria-labelledby", "brands")
  })

  test("hides copies from assistive technology and keyboard navigation", () => {
    render(
      <Marquee.Root>
        <Marquee.Content>
          <a href="https://yamada-ui.com">Yamada UI</a>
        </Marquee.Content>
      </Marquee.Root>,
    )

    const [original, ...copies] = screen
      .getAllByRole("link", { hidden: true })
      .map((link) => link.parentElement)

    expect(copies).toHaveLength(1)
    expect(original).not.toHaveAttribute("aria-hidden")
    expect(original).not.toHaveAttribute("inert")

    copies.forEach((copy) => {
      expect(copy).toHaveAttribute("aria-hidden", "true")
      expect(copy).toHaveAttribute("inert")
    })
  })
})
