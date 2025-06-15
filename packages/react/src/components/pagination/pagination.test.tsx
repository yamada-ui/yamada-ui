import { Pagination } from "."
import { a11y, fireEvent, render, screen } from "../../../test"

describe("<Pagination />", () => {
  test("should pass a11y", async () =>
    await a11y(<Pagination.Root total={10} />))

  test("should render edges control button correctly", () => {
    render(
      <Pagination.Root
        total={10}
        withEdges
        edgeFirstProps={{ children: <p>First edge</p> }}
        edgeLastProps={{ children: <p>Last edge</p> }}
      />,
    )

    expect(screen.getByText("First edge")).toBeInTheDocument()
    expect(screen.getByText("Last edge")).toBeInTheDocument()
  })

  test("should render control button correctly", () => {
    render(
      <Pagination.Root
        total={10}
        controlNextProps={{ children: <p>Prev button</p> }}
        controlPrevProps={{ children: <p>Next button</p> }}
      />,
    )

    expect(screen.getByText("Prev button")).toBeInTheDocument()
    expect(screen.getByText("Next button")).toBeInTheDocument()
  })

  test("should render siblings correctly", () => {
    render(<Pagination.Root siblings={3} total={77} />)

    fireEvent.click(screen.getByText("7"))

    for (let page = 4; page <= 10; page++) {
      expect(screen.getByText(page)).toBeInTheDocument()
    }
  })

  test("should render boundaries correctly", () => {
    render(<Pagination.Root boundaries={3} total={77} />)

    fireEvent.click(screen.getByText("7"))

    for (let page = 6; page <= 8; page++) {
      expect(screen.getByText(page)).toBeInTheDocument()
    }
  })

  test("should render disabled correctly", () => {
    render(<Pagination.Root disabled total={77} />)

    expect(screen.getByRole("navigation")).toHaveAttribute("data-disabled")

    // Expect all button should have disabled
    screen
      .getAllByRole("button")
      .forEach((pagination) => expect(pagination).toHaveAttribute("disabled"))
  })

  test("should render Pagination.Root with previous ellipsis and without next ellipsis correctly", () => {
    const { container } = render(
      <Pagination.Root boundaries={2} page={95} siblings={2} total={100} />,
    )

    for (let page = 93; page <= 100; page++) {
      expect(screen.getByText(page.toString())).toBeInTheDocument()
    }

    for (let page = 1; page <= 2; page++) {
      expect(screen.getByText(page.toString())).toBeInTheDocument()
    }

    const ellipsis = container.querySelector(".ui-pagination__ellipsis")
    expect(ellipsis).toBeInTheDocument()
  })

  test("should not render ellipsis when there are less than 7 pages", () => {
    render(<Pagination.Root total={6} />)

    for (let page = 1; page <= 6; page++) {
      expect(screen.getByText(page.toString())).toBeInTheDocument()
    }

    const ellipsis = screen.queryByLabelText("Jump to omitted pages")
    expect(ellipsis).not.toBeInTheDocument()
  })

  test("should correctly apply itemProps to Pagination.Root props", () => {
    render(
      <Pagination.Root total={10} itemProps={{ "aria-label": "Go to page" }} />,
    )

    expect(screen.getAllByLabelText("Go to page")).toHaveLength(9)
  })

  test("should correctly apply edgeProps to edge buttons", () => {
    render(
      <Pagination.Root
        total={10}
        withEdges
        edgeProps={{ "aria-label": "Go to page" }}
      />,
    )

    expect(screen.getAllByLabelText("Go to page")).toHaveLength(2)
  })

  test("should correctly apply controlProps to control buttons", () => {
    render(
      <Pagination.Root
        total={10}
        controlProps={{ "aria-label": "Go to page" }}
      />,
    )

    expect(screen.getAllByLabelText("Go to page")).toHaveLength(2)
  })

  test("should not render control buttons when withControls is false", () => {
    render(<Pagination.Root total={10} withControls={false} />)

    expect(screen.getAllByRole("button")).toHaveLength(6)
    expect(
      screen.queryByLabelText("Go to previous page"),
    ).not.toBeInTheDocument()
    expect(screen.queryByLabelText("Go to next page")).not.toBeInTheDocument()
  })

  test("should render custom component for item", () => {
    const CustomComponent = ({ page }: Pagination.ItemProps) => {
      switch (page) {
        case "ellipsis":
          return <span>...</span>
        case "prev":
          return <span>Previous</span>
        case "next":
          return <span>Next</span>
        case "first":
          return <span>First</span>
        case "last":
          return <span>Last</span>
        default:
          return <span>{page}</span>
      }
    }

    render(<Pagination.Root component={CustomComponent} total={10} withEdges />)

    expect(screen.getByText("First")).toBeInTheDocument()
    expect(screen.getByText("Previous")).toBeInTheDocument()
    for (let page = 1; page <= 5; page++) {
      expect(screen.getByText(page.toString())).toBeInTheDocument()
    }
    expect(screen.getByText("...")).toBeInTheDocument()
    expect(screen.getByText("10")).toBeInTheDocument()
    expect(screen.getByText("Next")).toBeInTheDocument()
    expect(screen.getByText("Last")).toBeInTheDocument()
  })
})
