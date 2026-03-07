import { a11y, fireEvent, render, screen } from "#test"
import { Pagination } from "./"

describe("<Pagination />", () => {
  test("renders component correctly", async () => {
    await a11y(<Pagination.Root total={10} />)
  }, 10000)

  test("sets `displayName` correctly", () => {
    expect(Pagination.Root.displayName).toBe("PaginationRoot")
    expect(Pagination.Item.displayName).toBe("PaginationItem")
    expect(Pagination.Text.displayName).toBe("PaginationText")
    expect(Pagination.StartTrigger.displayName).toBe("PaginationStartTrigger")
    expect(Pagination.EndTrigger.displayName).toBe("PaginationEndTrigger")
    expect(Pagination.PrevTrigger.displayName).toBe("PaginationPrevTrigger")
    expect(Pagination.NextTrigger.displayName).toBe("PaginationNextTrigger")
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
    ).toBeNull()
    expect(
      screen.queryByRole("button", { name: /Go to next page/i }),
    ).toBeNull()
  })

  test("navigates to next page when next trigger is clicked", () => {
    const onChange = vi.fn()
    render(<Pagination.Root defaultPage={1} total={10} onChange={onChange} />)

    const nextButton = screen.getByRole("button", {
      name: /Go to next page/i,
    })
    fireEvent.click(nextButton)

    expect(onChange).toHaveBeenCalledWith(2)
  })

  test("navigates to previous page when prev trigger is clicked", () => {
    const onChange = vi.fn()
    render(<Pagination.Root defaultPage={3} total={10} onChange={onChange} />)

    const prevButton = screen.getByRole("button", {
      name: /Go to previous page/i,
    })
    fireEvent.click(prevButton)

    expect(onChange).toHaveBeenCalledWith(2)
  })

  test("navigates to last page when end trigger is clicked", () => {
    const onChange = vi.fn()
    render(
      <Pagination.Root
        defaultPage={1}
        total={10}
        withEdges
        onChange={onChange}
      />,
    )

    const endButton = screen.getByRole("button", {
      name: /Go to last page/i,
    })
    fireEvent.click(endButton)

    expect(onChange).toHaveBeenCalledWith(10)
  })

  test("navigates to first page when start trigger is clicked", () => {
    const onChange = vi.fn()
    render(
      <Pagination.Root
        defaultPage={5}
        total={10}
        withEdges
        onChange={onChange}
      />,
    )

    const startButton = screen.getByRole("button", {
      name: /Go to first page/i,
    })
    fireEvent.click(startButton)

    expect(onChange).toHaveBeenCalledWith(1)
  })

  test("navigates to specific page when page button is clicked", () => {
    const onChange = vi.fn()
    render(<Pagination.Root defaultPage={1} total={10} onChange={onChange} />)

    const page3 = screen.getByRole("button", { name: /Go to page 3/i })
    fireEvent.click(page3)

    expect(onChange).toHaveBeenCalledWith(3)
  })

  test("prev trigger is disabled on first page", () => {
    render(<Pagination.Root defaultPage={1} total={10} />)

    const prevButton = screen.getByRole("button", {
      name: /Go to previous page/i,
    })
    expect(prevButton).toBeDisabled()
  })

  test("next trigger is disabled on last page", () => {
    render(<Pagination.Root defaultPage={10} total={10} />)

    const nextButton = screen.getByRole("button", {
      name: /Go to next page/i,
    })
    expect(nextButton).toBeDisabled()
  })

  test("all items are disabled when disabled prop is true", () => {
    render(<Pagination.Root disabled total={10} />)

    const buttons = screen.getAllByRole("button")
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

    const text = screen.getByTestId("pagination-text")
    expect(text).toHaveTextContent("1 of 20")
  })

  test("renders PaginationText with short format", () => {
    render(
      <Pagination.Root total={20}>
        <Pagination.Text data-testid="pagination-text" format="short" />
      </Pagination.Root>,
    )

    const text = screen.getByTestId("pagination-text")
    expect(text).toHaveTextContent("1 / 20")
  })

  test("renders PaginationText with children function", () => {
    render(
      <Pagination.Root total={20}>
        <Pagination.Text data-testid="pagination-text">
          {({ page, total }) => `Page ${page} out of ${total}`}
        </Pagination.Text>
      </Pagination.Root>,
    )

    const text = screen.getByTestId("pagination-text")
    expect(text).toHaveTextContent("Page 1 out of 20")
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

    const page3Button = screen.getByRole("button", { name: /Go to page 3/i })
    expect(page3Button).toHaveAttribute("aria-current", "page")

    rerender(<Pagination.Root page={5} total={10} />)

    const page5Button = screen.getByRole("button", { name: /Go to page 5/i })
    expect(page5Button).toHaveAttribute("aria-current", "page")
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
