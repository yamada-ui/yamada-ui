import { a11y, page, render } from "#test/browser"
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

  test("sets `displayName` correctly", () => {
    expect(Breadcrumb.Root.displayName).toBe("BreadcrumbRoot")
    expect(Breadcrumb.Link.displayName).toBe("BreadcrumbLink")
    expect(Breadcrumb.Ellipsis.displayName).toBe("BreadcrumbEllipsis")
  })

  test("sets `className` correctly", async () => {
    await render(
      <Breadcrumb.Root data-testid="root">
        <Breadcrumb.Link href="/">Link 1</Breadcrumb.Link>
        <Breadcrumb.Ellipsis data-testid="ellipsis" />
      </Breadcrumb.Root>,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-breadcrumb__root")
    await expect
      .element(page.getByText("Link 1"))
      .toHaveClass("ui-breadcrumb__link")
    await expect
      .element(page.getByTestId("ellipsis"))
      .toHaveClass("ui-breadcrumb__ellipsis")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Breadcrumb.Root data-testid="root">
        <Breadcrumb.Link href="/">Link 1</Breadcrumb.Link>
        <Breadcrumb.Ellipsis data-testid="ellipsis" />
      </Breadcrumb.Root>,
    )

    expect(page.getByTestId("root").element().tagName).toBe("NAV")
    expect(page.getByText("Link 1").element().tagName).toBe("A")
    expect(page.getByTestId("ellipsis").element().tagName).toBe("svg")
  })

  test("separator property is being passed accurately", async () => {
    await render(
      <Breadcrumb.Root separator="-">
        <Breadcrumb.Link href="/">1</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    const separatorEle = page.getByText("-").element()
    expect(separatorEle).toBeInTheDocument()
  })

  test("currentPage property is being passed accurately", async () => {
    await render(
      <Breadcrumb.Root separator="-">
        <Breadcrumb.Link href="/">1</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )
    const spanElement = page.getByText("2").element()
    expect(spanElement).toBeInTheDocument()
    expect(spanElement.nodeName.toLowerCase()).toBe("span")
  })

  test("breadcrumb link has its href attribute correctly set", async () => {
    await render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="#">Link 1</Breadcrumb.Link>
        <Breadcrumb.Link href="#" currentPage>
          Link 2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )
    const breadcrumbLink = page.getByRole("link", { name: /Link 1/i }).element()
    expect(breadcrumbLink).toHaveAttribute("href", "#")
  })

  test("current page link doesn't have href attribute set", async () => {
    await render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="#">Link 1</Breadcrumb.Link>
        <Breadcrumb.Link href="#" currentPage>
          Link 2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )
    const currentPageLink = page.getByText("Link 2").element()
    expect(currentPageLink).not.toHaveAttribute("href")
  })

  test("renders breadcrumbEllipsis correctly", async () => {
    await render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="#">Link 1</Breadcrumb.Link>
        <Breadcrumb.Ellipsis />
        <Breadcrumb.Link href="#" currentPage>
          Link 3
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )
    await expect.element(page.getByLabelText("Ellipsis")).toBeInTheDocument()
  })

  test("renders breadcrumb correctly with items", async () => {
    const items: Breadcrumb.Item[] = [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ]

    const { container } = await render(<Breadcrumb.Root items={items} />)

    expect(container.querySelectorAll("li")).toHaveLength(7)
  })

  test("is correctly truncated", async () => {
    const items: Breadcrumb.Item[] = [
      { href: "/1", label: "サイヤ人編" },
      { href: "/2", label: "ナメック星編" },
      { href: "/3", label: "人造人間編" },
      { href: "/4", currentPage: true, label: "魔人ブウ編" },
    ]

    const { container } = await render(
      <Breadcrumb.Root endBoundaries={1} items={items} startBoundaries={1} />,
    )

    const listItems = container.querySelectorAll("li")

    expect(listItems).toHaveLength(5)
    expect(listItems[0]?.querySelector("a")).toHaveAttribute("href", "/1")
    expect(
      listItems[listItems.length - 1]?.querySelector("span"),
    ).toHaveAttribute("aria-current", "page")
  })

  test("if boundaries is 0 or undefined, 1 is correctly reflected.", async () => {
    const items: Breadcrumb.Item[] = [
      { href: "/1", label: "サイヤ人編" },
      { href: "/2", label: "ナメック星編" },
      { href: "/3", label: "人造人間編" },
      { href: "/4", currentPage: true, label: "魔人ブウ編" },
    ]

    const { container: container1 } = await render(
      <Breadcrumb.Root
        data-testid="breadCrumb1"
        items={items}
        startBoundaries={1}
      />,
    )

    const { container: container2 } = await render(
      <Breadcrumb.Root
        data-testid="breadCrumb2"
        endBoundaries={1}
        items={items}
      />,
    )

    const { container: container3 } = await render(
      <Breadcrumb.Root
        data-testid="breadCrumb3"
        endBoundaries={0}
        items={items}
        startBoundaries={0}
      />,
    )

    expect(
      container1
        .querySelector('[data-testid="breadCrumb1"]')
        ?.querySelectorAll("li"),
    ).toHaveLength(3)
    expect(
      container2
        .querySelector('[data-testid="breadCrumb2"]')
        ?.querySelectorAll("li"),
    ).toHaveLength(3)
    expect(
      container3
        .querySelector('[data-testid="breadCrumb3"]')
        ?.querySelectorAll("li"),
    ).toHaveLength(7)
  })

  test("applies custom `aria-label` to the nav element", async () => {
    await render(
      <Breadcrumb.Root aria-label="Custom Breadcrumb" data-testid="root">
        <Breadcrumb.Link href="/">Link 1</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          Link 2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveAttribute("aria-label", "Custom Breadcrumb")
  })

  test("ellipsis respects `aria-hidden` override", async () => {
    await render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="/">Link 1</Breadcrumb.Link>
        <Breadcrumb.Ellipsis aria-hidden={false} data-testid="ellipsis" />
        <Breadcrumb.Link href="/" currentPage>
          Link 2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    await expect
      .element(page.getByTestId("ellipsis"))
      .toHaveAttribute("aria-hidden", "false")
  })

  test("ellipsis respects `tabIndex` override", async () => {
    await render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="/">Link 1</Breadcrumb.Link>
        <Breadcrumb.Ellipsis data-testid="ellipsis" tabIndex={-1} />
        <Breadcrumb.Link href="/" currentPage>
          Link 2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )

    await expect
      .element(page.getByTestId("ellipsis"))
      .toHaveAttribute("tabindex", "-1")
  })

  test("retrieve omitted items correctly", async () => {
    const ellipsis = vi.fn()

    const items: Breadcrumb.Item[] = [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ]

    await render(
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
