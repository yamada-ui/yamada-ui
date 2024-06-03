import { render, screen } from "@yamada-ui/test"
import type { BreadcrumbGenerateItem } from "../src"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
} from "../src"

describe("<Breadcrumb />", () => {
  test("renders breadcrumb correctly", () => {
    render(
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
    const { container } = render(
      <Breadcrumb separator="-">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">1</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">2</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>,
    )
    const spanElement = container.querySelector(`[aria-current="page"]`)
    expect(spanElement).toBeInTheDocument()
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
    const breadcrumbLink = screen.getByText("Link 1")
    expect(breadcrumbLink.getAttribute("href")).toBe("#")
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
    expect(currentPageLink.getAttribute("href")).toBeNull()
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

    const { container } = render(<Breadcrumb items={items} />)

    expect(container.querySelector("ol")?.children).toHaveLength(4)
  })

  test("is correctly truncated", () => {
    const items: BreadcrumbGenerateItem[] = [
      { href: "/1", name: "サイヤ人編" },
      { href: "/2", name: "ナメック星編" },
      { href: "/3", name: "人造人間編" },
      { href: "/4", name: "魔人ブウ編", isCurrentPage: true },
    ]

    const { container } = render(
      <Breadcrumb items={items} startBoundaries={1} endBoundaries={1} />,
    )

    expect(container.querySelector("ol")?.children).toHaveLength(3)
    expect(
      container.querySelector("ol")?.firstElementChild?.querySelector("a"),
    ).toHaveAttribute("href", "/1")
    expect(
      container.querySelector("ol")?.lastElementChild?.querySelector("span"),
    ).toHaveAttribute("aria-current", "page")
  })

  test("isEllipsisPageを使用して正しく省略される", () => {
    const items: BreadcrumbGenerateItem[] = [
      { href: "/1", name: "サイヤ人編" },
      { href: "/2", name: "ナメック星編", isEllipsisPage: true },
      { href: "/3", name: "人造人間編", isEllipsisPage: true },
      { href: "/4", name: "魔人ブウ編", isCurrentPage: true },
    ]

    const { container } = render(<Breadcrumb items={items} />)

    expect(container.querySelector("ol")?.children).toHaveLength(3)
    expect(
      container.querySelector("ol")?.firstElementChild?.querySelector("a"),
    ).toHaveAttribute("href", "/1")
    expect(
      container.querySelector("ol")?.lastElementChild?.querySelector("span"),
    ).toHaveAttribute("aria-current", "page")
  })

  test("最後の要素にisEllipsisPageがあった場合、正しくbreadcrumbEllipsisがレンダーされる", () => {
    const items: BreadcrumbGenerateItem[] = [
      { href: "/1", name: "サイヤ人編" },
      { href: "/2", name: "ナメック星編", isEllipsisPage: true },
      { href: "/3", name: "人造人間編" },
      {
        href: "/4",
        name: "魔人ブウ編",
        isEllipsisPage: true,
        isCurrentPage: true,
      },
    ]

    const { container } = render(<Breadcrumb items={items} />)

    expect(container.querySelector("ol")?.children).toHaveLength(4)
    expect(
      container.querySelector("ol")?.lastElementChild?.firstElementChild,
    ).toHaveAttribute("aria-label", "ellipsis")
  })

  test("boundariesが0やundefinedだった場合、正しく1が反映される", () => {
    const items: BreadcrumbGenerateItem[] = [
      { href: "/1", name: "サイヤ人編" },
      { href: "/2", name: "ナメック星編" },
      { href: "/3", name: "人造人間編" },
      { href: "/4", name: "魔人ブウ編", isCurrentPage: true },
    ]

    const { container: container1 } = render(
      <Breadcrumb items={items} startBoundaries={1} />,
    )

    const { container: container2 } = render(
      <Breadcrumb items={items} endBoundaries={1} />,
    )

    const { container: container3 } = render(
      <Breadcrumb items={items} startBoundaries={0} endBoundaries={0} />,
    )

    expect(container1.querySelector("ol")?.children).toHaveLength(3)
    expect(container2.querySelector("ol")?.children).toHaveLength(3)
    expect(container3.querySelector("ol")?.children).toHaveLength(3)
  })

  test("省略した項目を正しく取得する", () => {
    const ellipsis = vi.fn()

    const items: BreadcrumbGenerateItem[] = [
      { href: "/", name: "サイヤ人編" },
      { href: "/", name: "ナメック星編" },
      { href: "/", name: "人造人間編" },
      { href: "/", name: "魔人ブウ編", isCurrentPage: true },
    ]

    render(
      <Breadcrumb
        items={items}
        startBoundaries={1}
        endBoundaries={1}
        ellipsis={ellipsis}
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
