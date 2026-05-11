import { a11y, render, screen } from "#test"
import { Breadcrumb } from "./"

describe("<Breadcrumb />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="/">1</Breadcrumb.Link>
        <Breadcrumb.Link href="/">2</Breadcrumb.Link>
        <Breadcrumb.Ellipsis />
        <Breadcrumb.Link href="/">4</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          5
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )
  })

  test("separator property is being passed accurately", () => {
    render(
      <Breadcrumb.Root separator="-">
        <Breadcrumb.Link href="/">1</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    expect(screen.getByText("-")).toBeInTheDocument()
  })

  test("currentPage property is being passed accurately", () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="/">1</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    const currentPage = screen.getByText("2")
    expect(currentPage.tagName).toBe("SPAN")
    expect(currentPage).toHaveAttribute("aria-current", "page")
    expect(currentPage).not.toHaveAttribute("href")
  })

  test("breadcrumb link has its href attribute correctly set", () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="#">Link 1</Breadcrumb.Link>
        <Breadcrumb.Link href="#" currentPage>
          Link 2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    expect(screen.getByRole("link", { name: /Link 1/i })).toHaveAttribute(
      "href",
      "#",
    )
  })

  test("renders breadcrumbEllipsis correctly", () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="#">Link 1</Breadcrumb.Link>
        <Breadcrumb.Ellipsis />
        <Breadcrumb.Link href="#" currentPage>
          Link 3
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    expect(screen.getByLabelText("Ellipsis")).toBeInTheDocument()
  })

  test("renders breadcrumb correctly with items", () => {
    const items: Breadcrumb.Item[] = [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ]

    render(<Breadcrumb.Root items={items} />)

    expect(screen.getAllByRole("listitem")).toHaveLength(7)
  })

  test("is correctly truncated", () => {
    const items: Breadcrumb.Item[] = [
      { href: "/1", label: "サイヤ人編" },
      { href: "/2", label: "ナメック星編" },
      { href: "/3", label: "人造人間編" },
      { href: "/4", currentPage: true, label: "魔人ブウ編" },
    ]

    render(
      <Breadcrumb.Root endBoundaries={1} items={items} startBoundaries={1} />,
    )

    expect(screen.getAllByRole("listitem")).toHaveLength(5)
    expect(screen.getByRole("link", { name: "サイヤ人編" })).toHaveAttribute(
      "href",
      "/1",
    )
    expect(screen.getByText("魔人ブウ編")).toHaveAttribute(
      "aria-current",
      "page",
    )
  })

  test("is truncated when only one boundary is 1 and renders all items when both boundaries are 0", () => {
    const items: Breadcrumb.Item[] = [
      { href: "/1", label: "サイヤ人編" },
      { href: "/2", label: "ナメック星編" },
      { href: "/3", label: "人造人間編" },
      { href: "/4", currentPage: true, label: "魔人ブウ編" },
    ]

    const { rerender } = render(
      <Breadcrumb.Root items={items} startBoundaries={1} />,
    )

    expect(screen.getAllByRole("listitem")).toHaveLength(3)

    rerender(<Breadcrumb.Root endBoundaries={1} items={items} />)

    expect(screen.getAllByRole("listitem")).toHaveLength(3)

    rerender(
      <Breadcrumb.Root endBoundaries={0} items={items} startBoundaries={0} />,
    )

    expect(screen.getAllByRole("listitem")).toHaveLength(7)
  })

  test("applies custom `aria-label` to the nav element", () => {
    render(
      <Breadcrumb.Root aria-label="Custom Breadcrumb" data-testid="root">
        <Breadcrumb.Link href="/">Link 1</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          Link 2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    expect(screen.getByTestId("root")).toHaveAttribute(
      "aria-label",
      "Custom Breadcrumb",
    )
  })

  test("ellipsis respects `aria-hidden` and `tabIndex` overrides", () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="/">Link 1</Breadcrumb.Link>
        <Breadcrumb.Ellipsis
          aria-hidden={false}
          data-testid="ellipsis"
          tabIndex={-1}
        />
        <Breadcrumb.Link href="/" currentPage>
          Link 2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    const ellipsis = screen.getByTestId("ellipsis")
    expect(ellipsis).toHaveAttribute("aria-hidden", "false")
    expect(ellipsis).toHaveAttribute("tabindex", "-1")
  })

  test("retrieve omitted items correctly", () => {
    const ellipsis = vi.fn()

    const items: Breadcrumb.Item[] = [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ]

    render(
      <Breadcrumb.Root
        ellipsis={ellipsis}
        endBoundaries={1}
        items={items}
        startBoundaries={1}
      />,
    )

    expect(ellipsis).toHaveBeenCalledExactlyOnceWith({
      items: [
        { href: "/", label: "ナメック星編" },
        { href: "/", label: "人造人間編" },
      ],
    })
  })
})
