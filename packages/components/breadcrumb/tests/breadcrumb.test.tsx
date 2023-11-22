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
})
