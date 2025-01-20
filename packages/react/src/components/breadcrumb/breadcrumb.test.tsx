import type { BreadcrumbItem } from "./"
import { a11y, render, screen } from "../../../test"
import { Breadcrumb } from "./"

describe("<Breadcrumb />", () => {
  test("renders breadcrumb correctly", async () => {
    await a11y(
      <Breadcrumb.Root>
        <Breadcrumb.Link href="/">1</Breadcrumb.Link>
        <Breadcrumb.Link href="/">2</Breadcrumb.Link>
        <Breadcrumb.Link href="/">3</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          4
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
    expect(screen.getByLabelText("ellipsis")).toBeInTheDocument()
  })

  test("renders breadcrumb correctly with items", () => {
    const items: BreadcrumbItem[] = [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ]

    render(<Breadcrumb.Root items={items} />)

    expect(screen.getAllByRole("listitem")).toHaveLength(4)
  })

  test("is correctly truncated", () => {
    const items: BreadcrumbItem[] = [
      { href: "/1", label: "サイヤ人編" },
      { href: "/2", label: "ナメック星編" },
      { href: "/3", label: "人造人間編" },
      { href: "/4", currentPage: true, label: "魔人ブウ編" },
    ]

    render(
      <Breadcrumb.Root endBoundaries={1} items={items} startBoundaries={1} />,
    )

    const listItems = screen.getAllByRole("listitem")

    expect(listItems).toHaveLength(3)
    expect(listItems[0]?.querySelector("a")).toHaveAttribute("href", "/1")
    expect(
      listItems[listItems.length - 1]?.querySelector("span"),
    ).toHaveAttribute("aria-current", "page")
  })

  test("correctly omitted using ellipsisPage", () => {
    const items: BreadcrumbItem[] = [
      { href: "/1", label: "サイヤ人編" },
      { href: "/2", ellipsisPage: true, label: "ナメック星編" },
      { href: "/3", ellipsisPage: true, label: "人造人間編" },
      { href: "/4", currentPage: true, label: "魔人ブウ編" },
    ]

    render(<Breadcrumb.Root items={items} />)

    const listItems = screen.getAllByRole("listitem")

    expect(listItems).toHaveLength(3)
    expect(listItems[0]?.querySelector("a")).toHaveAttribute("href", "/1")
    expect(
      listItems[listItems.length - 1]?.querySelector("span"),
    ).toHaveAttribute("aria-current", "page")
  })

  test("if the last element has an ellipsisPage, the breadcrumbEllipsis is rendered correctly.", () => {
    const items: BreadcrumbItem[] = [
      { href: "/1", label: "サイヤ人編" },
      { href: "/2", ellipsisPage: true, label: "ナメック星編" },
      { href: "/3", label: "人造人間編" },
      {
        href: "/4",
        currentPage: true,
        ellipsisPage: true,
        label: "魔人ブウ編",
      },
    ]

    render(<Breadcrumb.Root items={items} />)

    const listItems = screen.getAllByRole("listitem")

    expect(listItems).toHaveLength(4)
    expect(listItems[listItems.length - 1]?.firstElementChild).toHaveAttribute(
      "aria-label",
      "ellipsis",
    )
  })

  test("if boundaries is 0 or undefined, 1 is correctly reflected.", () => {
    const items: BreadcrumbItem[] = [
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
    ).toHaveLength(3)
  })

  test("retrieve omitted items correctly", () => {
    const ellipsis = vi.fn()

    const items: BreadcrumbItem[] = [
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
