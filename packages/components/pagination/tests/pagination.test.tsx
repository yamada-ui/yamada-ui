import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Pagination } from "../src"

describe("<Pagination/>", () => {
  it("should pass a11y", async () => await a11y(<Pagination total={10} />))

  it("should render edges control button correctly", () => {
    render(
      <Pagination
        total={10}
        withEdges
        edgeFirstProps={{ children: <p>First edge</p> }}
        edgeLastProps={{ children: <p>Last edge</p> }}
      />,
    )

    expect(screen.getByText("First edge")).toBeInTheDocument()
    expect(screen.getByText("Last edge")).toBeInTheDocument()
  })

  it("should render control button correctly", () => {
    render(
      <Pagination
        total={10}
        controlNextProps={{ children: <p>Prev button</p> }}
        controlPrevProps={{ children: <p>Next button</p> }}
      />,
    )

    expect(screen.getByText("Prev button")).toBeInTheDocument()
    expect(screen.getByText("Next button")).toBeInTheDocument()
  })

  it("should render siblings correctly", () => {
    render(<Pagination total={77} siblings={3} />)

    fireEvent.click(screen.getByText("7"))

    for (let page = 4; page <= 10; page++) {
      expect(screen.getByText(page)).toBeInTheDocument()
    }
  })

  it("should render boundaries correctly", () => {
    render(<Pagination total={77} boundaries={3} />)

    fireEvent.click(screen.getByText("7"))

    for (let page = 6; page <= 8; page++) {
      expect(screen.getByText(page)).toBeInTheDocument()
    }
  })

  it("should render disabled correctly", () => {
    render(<Pagination total={77} isDisabled />)

    expect(screen.getByRole("navigation")).toHaveAttribute("data-disabled")

    // Expect all button should have disabled
    screen
      .getAllByRole("button")
      .forEach((paginationItemEle) =>
        expect(paginationItemEle).toHaveAttribute("disabled"),
      )
  })
})
