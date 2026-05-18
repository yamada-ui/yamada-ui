import { a11y, render, screen } from "#test"
import { Pagination } from "./"

describe("<Pagination />", () => {
  test("renders component correctly", async () => {
    await a11y(<Pagination.Root total={10} />)
  })

  test("renders with edge buttons when withEdges is true", () => {
    render(<Pagination.Root total={10} withEdges />)

    expect(
      screen.getByRole("button", { name: /Go to first page/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /Go to last page/i }),
    ).toBeInTheDocument()
  })

  test("renders without control buttons when withControls is false", () => {
    render(<Pagination.Root total={10} withControls={false} />)

    expect(
      screen.queryByRole("button", { name: /Go to previous page/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /Go to next page/i }),
    ).not.toBeInTheDocument()
  })

  test("prev trigger is disabled on first page", () => {
    render(<Pagination.Root defaultPage={1} total={10} />)

    expect(
      screen.getByRole("button", { name: /Go to previous page/i }),
    ).toBeDisabled()
  })

  test("next trigger is disabled on last page", () => {
    render(<Pagination.Root defaultPage={10} total={10} />)

    expect(
      screen.getByRole("button", { name: /Go to next page/i }),
    ).toBeDisabled()
  })

  test("all items are disabled when disabled prop is true", () => {
    render(<Pagination.Root disabled total={10} />)

    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toBeGreaterThan(0)
    buttons.forEach((button) => {
      expect(button).toBeDisabled()
    })
  })

  test("renders PaginationText with default compact format", () => {
    render(
      <Pagination.Root total={20}>
        <Pagination.Text data-testid="pagination-text" />
      </Pagination.Root>,
    )

    expect(screen.getByTestId("pagination-text")).toHaveTextContent("1 of 20")
  })

  test("renders PaginationText with short format", () => {
    render(
      <Pagination.Root total={20}>
        <Pagination.Text data-testid="pagination-text" format="short" />
      </Pagination.Root>,
    )

    expect(screen.getByTestId("pagination-text")).toHaveTextContent("1 / 20")
  })

  test("renders PaginationText with children function", () => {
    render(
      <Pagination.Root total={20}>
        <Pagination.Text data-testid="pagination-text">
          {({ page, total }) => `Page ${page} out of ${total}`}
        </Pagination.Text>
      </Pagination.Root>,
    )

    expect(screen.getByTestId("pagination-text")).toHaveTextContent(
      "Page 1 out of 20",
    )
  })

  test("PaginationItems renders non-element children directly", () => {
    render(
      <Pagination.Root total={10}>
        <Pagination.Items
          render={(page) => (typeof page === "number" ? String(page) : "...")}
        />
      </Pagination.Root>,
    )

    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })

  test("renders with controlled page", () => {
    const { rerender } = render(<Pagination.Root page={3} total={10} />)

    expect(
      screen.getByRole("button", { name: /Go to page 3/i }),
    ).toHaveAttribute("aria-current", "page")

    rerender(<Pagination.Root page={5} total={10} />)

    expect(
      screen.getByRole("button", { name: /Go to page 5/i }),
    ).toHaveAttribute("aria-current", "page")
  })

  test("edge triggers are disabled at boundaries", () => {
    render(<Pagination.Root defaultPage={1} total={10} withEdges />)

    expect(
      screen.getByRole("button", { name: /Go to first page/i }),
    ).toBeDisabled()
    expect(
      screen.getByRole("button", { name: /Go to last page/i }),
    ).not.toBeDisabled()
  })

  test("renders ellipsis for large page counts", () => {
    render(<Pagination.Root defaultPage={5} total={20} />)

    const ellipsisElements = screen
      .getByRole("navigation")
      .querySelectorAll("[data-ellipsis]")
    expect(ellipsisElements.length).toBeGreaterThan(0)
  })
})
