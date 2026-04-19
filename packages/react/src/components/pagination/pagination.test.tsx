import { a11y, page, render } from "#test/browser"
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

  test("renders with edge buttons when withEdges is true", async () => {
    await render(<Pagination.Root total={10} withEdges />)

    await expect
      .element(page.getByRole("button", { name: /Go to first page/i }))
      .toBeInTheDocument()
    await expect
      .element(page.getByRole("button", { name: /Go to last page/i }))
      .toBeInTheDocument()
  })

  test("renders without control buttons when withControls is false", async () => {
    await render(<Pagination.Root total={10} withControls={false} />)

    await expect
      .element(
        page.getByRole("button", { name: /Go to previous page/i }).query(),
      )
      .not.toBeInTheDocument()
    await expect
      .element(page.getByRole("button", { name: /Go to next page/i }).query())
      .not.toBeInTheDocument()
  })

  test("merges `controlProps` with `controlPrevProps` without overwriting props", async () => {
    const onControlClick = vi.fn()
    const onControlPrevClick = vi.fn()

    const { user } = await render(
      <Pagination.Root
        defaultPage={2}
        total={10}
        controlPrevProps={{
          className: "from-control-prev",
          style: { backgroundColor: "blue" },
          onClick: onControlPrevClick,
        }}
        controlProps={{
          className: "from-control",
          style: { color: "red" },
          onClick: onControlClick,
        }}
      />,
    )

    const prevButton = page.getByRole("button", {
      name: /Go to previous page/i,
    })

    await expect
      .element(prevButton)
      .toHaveClass("from-control", "from-control-prev")
    await expect.element(prevButton).toHaveStyle({ color: "rgb(255, 0, 0)" })
    await expect
      .element(prevButton)
      .toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    await user.click(prevButton)

    expect(onControlClick).toHaveBeenCalledTimes(1)
    expect(onControlPrevClick).toHaveBeenCalledTimes(1)
  })

  test("merges `edgeProps` with `edgeStartProps` without overwriting props", async () => {
    const onEdgeClick = vi.fn()
    const onEdgeStartClick = vi.fn()

    const { user } = await render(
      <Pagination.Root
        defaultPage={2}
        total={10}
        withEdges
        edgeProps={{
          className: "from-edge",
          style: { color: "red" },
          onClick: onEdgeClick,
        }}
        edgeStartProps={{
          className: "from-edge-start",
          style: { backgroundColor: "blue" },
          onClick: onEdgeStartClick,
        }}
      />,
    )

    const startButton = page.getByRole("button", {
      name: /Go to first page/i,
    })

    await expect
      .element(startButton)
      .toHaveClass("from-edge", "from-edge-start")
    await expect.element(startButton).toHaveStyle({ color: "rgb(255, 0, 0)" })
    await expect
      .element(startButton)
      .toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    await user.click(startButton)

    expect(onEdgeClick).toHaveBeenCalledTimes(1)
    expect(onEdgeStartClick).toHaveBeenCalledTimes(1)
  })

  test("navigates to next page when next trigger is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root defaultPage={1} total={10} onChange={onChange} />,
    )

    const nextButton = page.getByRole("button", {
      name: /Go to next page/i,
    })
    await user.click(nextButton)

    expect(onChange).toHaveBeenCalledWith(2)
  })

  test("navigates to previous page when prev trigger is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root defaultPage={3} total={10} onChange={onChange} />,
    )

    const prevButton = page.getByRole("button", {
      name: /Go to previous page/i,
    })
    await user.click(prevButton)

    expect(onChange).toHaveBeenCalledWith(2)
  })

  test("navigates to last page when end trigger is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root
        defaultPage={1}
        total={10}
        withEdges
        onChange={onChange}
      />,
    )

    const endButton = page.getByRole("button", {
      name: /Go to last page/i,
    })
    await user.click(endButton)

    expect(onChange).toHaveBeenCalledWith(10)
  })

  test("navigates to first page when start trigger is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root
        defaultPage={5}
        total={10}
        withEdges
        onChange={onChange}
      />,
    )

    const startButton = page.getByRole("button", {
      name: /Go to first page/i,
    })
    await user.click(startButton)

    expect(onChange).toHaveBeenCalledWith(1)
  })

  test("navigates to specific page when page button is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root defaultPage={1} total={10} onChange={onChange} />,
    )

    const page3 = page.getByRole("button", { name: /Go to page 3/i })
    await user.click(page3)

    expect(onChange).toHaveBeenCalledWith(3)
  })

  test("prev trigger is disabled on first page", async () => {
    await render(<Pagination.Root defaultPage={1} total={10} />)

    const prevButton = page.getByRole("button", {
      name: /Go to previous page/i,
    })
    await expect.element(prevButton).toBeDisabled()
  })

  test("next trigger is disabled on last page", async () => {
    await render(<Pagination.Root defaultPage={10} total={10} />)

    const nextButton = page.getByRole("button", {
      name: /Go to next page/i,
    })
    await expect.element(nextButton).toBeDisabled()
  })

  test("all items are disabled when disabled prop is true", async () => {
    await render(<Pagination.Root disabled total={10} />)

    const buttons = page.getByRole("button").elements()
    buttons.forEach((button) => {
      expect(button).toBeDisabled()
    })
  })

  test("renders PaginationText with default compact format", async () => {
    await render(
      <Pagination.Root total={20}>
        <Pagination.Text data-testid="pagination-text" />
      </Pagination.Root>,
    )

    await expect
      .element(page.getByTestId("pagination-text"))
      .toHaveTextContent("1 of 20")
  })

  test("renders PaginationText with short format", async () => {
    await render(
      <Pagination.Root total={20}>
        <Pagination.Text data-testid="pagination-text" format="short" />
      </Pagination.Root>,
    )

    await expect
      .element(page.getByTestId("pagination-text"))
      .toHaveTextContent("1 / 20")
  })

  test("renders PaginationText with children function", async () => {
    await render(
      <Pagination.Root total={20}>
        <Pagination.Text data-testid="pagination-text">
          {({ page, total }) => `Page ${page} out of ${total}`}
        </Pagination.Text>
      </Pagination.Root>,
    )

    await expect
      .element(page.getByTestId("pagination-text"))
      .toHaveTextContent("Page 1 out of 20")
  })

  test("PaginationItems renders non-element children directly", async () => {
    await render(
      <Pagination.Root total={10}>
        <Pagination.Items
          render={(page) => (typeof page === "number" ? String(page) : "...")}
        />
      </Pagination.Root>,
    )

    await expect.element(page.getByRole("navigation")).toBeInTheDocument()
  })

  test("renders with controlled page", async () => {
    const { rerender } = await render(<Pagination.Root page={3} total={10} />)

    const page3Button = page.getByRole("button", { name: /Go to page 3/i })
    await expect.element(page3Button).toHaveAttribute("aria-current", "page")

    await rerender(<Pagination.Root page={5} total={10} />)

    const page5Button = page.getByRole("button", { name: /Go to page 5/i })
    await expect.element(page5Button).toHaveAttribute("aria-current", "page")
  })

  test("edge triggers are disabled at boundaries", async () => {
    await render(<Pagination.Root defaultPage={1} total={10} withEdges />)

    await expect
      .element(page.getByRole("button", { name: /Go to first page/i }))
      .toBeDisabled()

    await expect
      .element(page.getByRole("button", { name: /Go to last page/i }))
      .not.toBeDisabled()
  })

  test("renders ellipsis for large page counts", async () => {
    await render(<Pagination.Root defaultPage={5} total={20} />)

    const ellipsisElements = page
      .getByRole("navigation")
      .element()
      .querySelectorAll("[data-ellipsis]")
    expect(ellipsisElements.length).toBeGreaterThan(0)
  })
})
