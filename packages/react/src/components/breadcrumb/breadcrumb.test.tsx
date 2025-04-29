import { a11y, render, screen } from "../../../test"
import { Breadcrumb } from "./"

describe("<Breadcrumb />", () => {
  test("renders breadcrumb correctly", async () => {
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

  test("sets `className` correctly", () => {
    render(
      <Breadcrumb.Root data-testid="root">
        <Breadcrumb.Link href="/">Link 1</Breadcrumb.Link>
        <Breadcrumb.Ellipsis data-testid="ellipsis" />
      </Breadcrumb.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-breadcrumb__root")
    expect(screen.getByText("Link 1")).toHaveClass("ui-breadcrumb__link")
    expect(screen.getByTestId("ellipsis")).toHaveClass(
      "ui-breadcrumb__ellipsis",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <Breadcrumb.Root data-testid="root">
        <Breadcrumb.Link href="/">Link 1</Breadcrumb.Link>
        <Breadcrumb.Ellipsis data-testid="ellipsis" />
      </Breadcrumb.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("NAV")
    expect(screen.getByText("Link 1").tagName).toBe("A")
    expect(screen.getByTestId("ellipsis").tagName).toBe("svg")
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

    const separatorEle = screen.getByText("-")
    expect(separatorEle).toBeInTheDocument()
  })

  test("currentPage property is being passed accurately", () => {
    render(
      <Breadcrumb.Root separator="-">
        <Breadcrumb.Link href="/">1</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )
    const spanElement = screen.getByText("2")
    expect(spanElement).toBeInTheDocument()
    expect(spanElement.nodeName.toLowerCase()).toBe("span")
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
    const breadcrumbLink = screen.getByRole("link", { name: /Link 1/i })
    expect(breadcrumbLink).toHaveAttribute("href", "#")
  })

  test("current page link doesn't have href attribute set", () => {
    render(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="#">Link 1</Breadcrumb.Link>
        <Breadcrumb.Link href="#" currentPage>
          Link 2
        </Breadcrumb.Link>
      </Breadcrumb.Root>,
    )
    const currentPageLink = screen.getByText("Link 2")
    expect(currentPageLink).not.toHaveAttribute("href")
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
    const items: Breadcrumb.RootProps["items"] = [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ]

    render(<Breadcrumb.Root items={items} />)

    expect(screen.getAllByRole("listitem")).toHaveLength(7)
  })

  test("is correctly truncated", () => {
    const items: Breadcrumb.RootProps["items"] = [
      { href: "/1", label: "サイヤ人編" },
      { href: "/2", label: "ナメック星編" },
      { href: "/3", label: "人造人間編" },
      { href: "/4", currentPage: true, label: "魔人ブウ編" },
    ]

    render(
      <Breadcrumb.Root endBoundaries={1} items={items} startBoundaries={1} />,
    )

    const listItems = screen.getAllByRole("listitem")

    expect(listItems).toHaveLength(5)
    expect(listItems[0]?.querySelector("a")).toHaveAttribute("href", "/1")
    expect(
      listItems[listItems.length - 1]?.querySelector("span"),
    ).toHaveAttribute("aria-current", "page")
  })

  test("if boundaries is 0 or undefined, 1 is correctly reflected.", () => {
    const items: Breadcrumb.RootProps["items"] = [
      { href: "/1", label: "サイヤ人編" },
      { href: "/2", label: "ナメック星編" },
      { href: "/3", label: "人造人間編" },
      { href: "/4", currentPage: true, label: "魔人ブウ編" },
    ]

    render(
      <Breadcrumb.Root
        data-testid="breadCrumb1"
        items={items}
        startBoundaries={1}
      />,
    )

    render(
      <Breadcrumb.Root
        data-testid="breadCrumb2"
        endBoundaries={1}
        items={items}
      />,
    )

    render(
      <Breadcrumb.Root
        data-testid="breadCrumb3"
        endBoundaries={0}
        items={items}
        startBoundaries={0}
      />,
    )

    expect(
      screen.getByTestId("breadCrumb1").querySelectorAll("li"),
    ).toHaveLength(3)
    expect(
      screen.getByTestId("breadCrumb2").querySelectorAll("li"),
    ).toHaveLength(3)
    expect(
      screen.getByTestId("breadCrumb3").querySelectorAll("li"),
    ).toHaveLength(7)
  })

  test("retrieve omitted items correctly", () => {
    const ellipsis = vi.fn()

    const items: Breadcrumb.RootProps["items"] = [
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

    expect(ellipsis).toHaveBeenCalledWith({
      items: [
        { href: "/", label: "ナメック星編" },
        { href: "/", label: "人造人間編" },
      ],
    })
  })
})
