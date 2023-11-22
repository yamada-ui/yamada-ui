import { render, screen } from "@yamada-ui/test"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../src"

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

  test("separator propertie is being passed accurately", () => {
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

  test("isCurrentPage propertie is being passed accurately", () => {
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
    expect(currentPageLink.getAttribute("href")).toBe(null)
  })
})
