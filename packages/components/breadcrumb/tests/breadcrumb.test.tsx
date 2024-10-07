import type { BreadcrumbGenerateItem } from "../src"
import { a11y, render, screen } from "@yamada-ui/test"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
} from "../src"

describe("<Breadcrumb />", () => {
  test("renders breadcrumb correctly", async () => {
    await a11y(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">2</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">3</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">4</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>,
    )
  })

  test("separator property is being passed accurately", () => {
    render(
      <Breadcrumb separator="-">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">2</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>,
    )

    const separatorEle = screen.getByText("-")
    expect(separatorEle).toBeInTheDocument()
  })

  test("isCurrentPage property is being passed accurately", () => {
    render(
      <Breadcrumb separator="-">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">2</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>,
    )
    const spanElement = screen.getByText("2")
    expect(spanElement).toBeInTheDocument()
    expect(spanElement.nodeName.toLowerCase()).toBe("span")
  })

  test("breadcrumb link has its href attribute correctly set", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Link 1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Link 2</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>,
    )
    const breadcrumbLink = screen.getByRole("link", { name: /Link 1/i })
    expect(breadcrumbLink).toHaveAttribute("href", "#")
  })

  test("current page link doesn't have href attribute set", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Link 1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Link 2</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>,
    )
    const currentPageLink = screen.getByText("Link 2")
    expect(currentPageLink).not.toHaveAttribute("href")
  })

  test("renders breadcrumbEllipsis correctly", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Link 1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Link 3</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>,
    )
    expect(screen.getByLabelText("ellipsis")).toBeInTheDocument()
  })

  test("renders breadcrumb correctly with items", () => {
    const items: BreadcrumbGenerateItem[] = [
      { href: "/", name: "サイヤ人編" },
      { href: "/", name: "ナメック星編" },
      { href: "/", name: "人造人間編" },
      { href: "/", name: "魔人ブウ編", isCurrentPage: true },
    ]

    render(<Breadcrumb items={items} />)

    expect(screen.getAllByRole("listitem")).toHaveLength(4)
  })

  test("is correctly truncated", () => {
    const items: BreadcrumbGenerateItem[] = [
      { href: "/1", name: "サイヤ人編" },
      { href: "/2", name: "ナメック星編" },
      { href: "/3", name: "人造人間編" },
      { href: "/4", name: "魔人ブウ編", isCurrentPage: true },
    ]

    render(<Breadcrumb endBoundaries={1} items={items} startBoundaries={1} />)

    const listItems = screen.getAllByRole("listitem")

    expect(listItems).toHaveLength(3)
    expect(listItems[0]?.querySelector("a")).toHaveAttribute("href", "/1")
    expect(
      listItems[listItems.length - 1]?.querySelector("span"),
    ).toHaveAttribute("aria-current", "page")
  })

  test("correctly omitted using isEllipsisPage", () => {
    const items: BreadcrumbGenerateItem[] = [
      { href: "/1", name: "サイヤ人編" },
      { href: "/2", name: "ナメック星編", isEllipsisPage: true },
      { href: "/3", name: "人造人間編", isEllipsisPage: true },
      { href: "/4", name: "魔人ブウ編", isCurrentPage: true },
    ]

    render(<Breadcrumb items={items} />)

    const listItems = screen.getAllByRole("listitem")

    expect(listItems).toHaveLength(3)
    expect(listItems[0]?.querySelector("a")).toHaveAttribute("href", "/1")
    expect(
      listItems[listItems.length - 1]?.querySelector("span"),
    ).toHaveAttribute("aria-current", "page")
  })

  test("if the last element has an isEllipsisPage, the breadcrumbEllipsis is rendered correctly.", () => {
    const items: BreadcrumbGenerateItem[] = [
      { href: "/1", name: "サイヤ人編" },
      { href: "/2", name: "ナメック星編", isEllipsisPage: true },
      { href: "/3", name: "人造人間編" },
      {
        href: "/4",
        name: "魔人ブウ編",
        isCurrentPage: true,
        isEllipsisPage: true,
      },
    ]

    render(<Breadcrumb items={items} />)

    const listItems = screen.getAllByRole("listitem")

    expect(listItems).toHaveLength(4)
    expect(listItems[listItems.length - 1]?.firstElementChild).toHaveAttribute(
      "aria-label",
      "ellipsis",
    )
  })

  test("if boundaries is 0 or undefined, 1 is correctly reflected.", () => {
    const items: BreadcrumbGenerateItem[] = [
      { href: "/1", name: "サイヤ人編" },
      { href: "/2", name: "ナメック星編" },
      { href: "/3", name: "人造人間編" },
      { href: "/4", name: "魔人ブウ編", isCurrentPage: true },
    ]

    render(
      <Breadcrumb
        data-testid="breadCrumb1"
        items={items}
        startBoundaries={1}
      />,
    )

    render(
      <Breadcrumb data-testid="breadCrumb2" endBoundaries={1} items={items} />,
    )

    render(
      <Breadcrumb
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

    const items: BreadcrumbGenerateItem[] = [
      { href: "/", name: "サイヤ人編" },
      { href: "/", name: "ナメック星編" },
      { href: "/", name: "人造人間編" },
      { href: "/", name: "魔人ブウ編", isCurrentPage: true },
    ]

    render(
      <Breadcrumb
        ellipsis={ellipsis}
        endBoundaries={1}
        items={items}
        startBoundaries={1}
      />,
    )

    expect(ellipsis).toHaveBeenCalledWith({
      items: [
        { href: "/", name: "ナメック星編" },
        { href: "/", name: "人造人間編" },
      ],
    })
  })
})
