import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Pagination } from "../src"

describe("<Pagination/>", () => {
  test("should pass a11y", async () => await a11y(<Pagination total={10} />))

  test("should render edges control button correctly", () => {
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

  test("should render control button correctly", () => {
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

  test("should render siblings correctly", () => {
    render(<Pagination total={77} siblings={3} />)

    fireEvent.click(screen.getByText("7"))

    for (let page = 4; page <= 10; page++) {
      expect(screen.getByText(page)).toBeInTheDocument()
    }
  })

  test("should render boundaries correctly", () => {
    render(<Pagination total={77} boundaries={3} />)

    fireEvent.click(screen.getByText("7"))

    for (let page = 6; page <= 8; page++) {
      expect(screen.getByText(page)).toBeInTheDocument()
    }
  })

  test("should render disabled correctly", () => {
    render(<Pagination total={77} isDisabled />)

    expect(screen.getByRole("navigation")).toHaveAttribute("data-disabled")

    // Expect all button should have disabled
    screen
      .getAllByRole("button")
      .forEach((paginationItemEle) =>
        expect(paginationItemEle).toHaveAttribute("disabled"),
      )
  })

  test("should render pagination with previous dots and without next dots correctly", () => {
    render(<Pagination total={100} page={95} siblings={2} boundaries={2} />)

    for (let page = 93; page <= 100; page++) {
      expect(screen.getByText(page.toString())).toBeInTheDocument()
    }

    for (let page = 1; page <= 2; page++) {
      expect(screen.getByText(page.toString())).toBeInTheDocument()
    }

    const dots = screen.getByLabelText("Jump to omitted pages")
    expect(dots).toBeInTheDocument()
  })

  test("should not render dots when there are less than 7 pages", () => {
    render(<Pagination total={6} />)

    for (let page = 1; page <= 6; page++) {
      expect(screen.getByText(page.toString())).toBeInTheDocument()
    }

    const dots = screen.queryByLabelText("Jump to omitted pages")
    expect(dots).not.toBeInTheDocument()
  })

  test("should correctly apply itemProps to pagination props", () => {
    render(<Pagination total={10} itemProps={{ "aria-label": "item props" }} />)

    expect(screen.getAllByLabelText("item props")).toHaveLength(7)
  })

  test("should correctly apply edgeProps to edge buttons", () => {
    render(
      <Pagination
        total={10}
        withEdges
        edgeProps={{ "aria-label": "edge props" }}
      />,
    )

    expect(screen.getAllByLabelText("edge props")).toHaveLength(2)
  })

  test("should correctly apply controlProps to control buttons", () => {
    render(
      <Pagination
        total={10}
        controlProps={{ "aria-label": "control-props" }}
      />,
    )

    expect(screen.getAllByLabelText("control-props")).toHaveLength(2)
  })

  test("should not render control buttons when withControls is false", () => {
    render(<Pagination total={10} withControls={false} />)

    expect(screen.getAllByRole("button")).toHaveLength(7)
    expect(
      screen.queryByLabelText("Go to previous page"),
    ).not.toBeInTheDocument()
    expect(screen.queryByLabelText("Go to next page")).not.toBeInTheDocument()
  })
})
