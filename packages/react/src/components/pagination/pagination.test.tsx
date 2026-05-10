import type { Ref } from "react"
import { a11y, render, renderHook, screen } from "#test"
import { Pagination } from "./"
import { usePagination } from "./use-pagination"

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
}

describe("<Pagination />", () => {
  test("renders component correctly", async () => {
    await a11y(<Pagination.Root total={10} />)
  })

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

describe("usePagination", () => {
  test("should return the correct pagination", () => {
    const { result } = renderHook(() => usePagination({ page: 1, total: 10 }))
    expect(result.current.range).toStrictEqual([1, 2, 3, 4, 5, "ellipsis", 10])
  })

  test("getRootProps merges root props and composes refs without duplicate calls", () => {
    const order: string[] = []
    const restRef = vi.fn<(node: HTMLDivElement | null) => void>()
    const propRef = vi.fn<(node: HTMLDivElement | null) => void>()
    const restOnClick = vi.fn(() => {
      order.push("rest")
    })
    const propOnClick = vi.fn(() => {
      order.push("props")
    })
    const restCss = { color: "red" }
    const propCss = { backgroundColor: "blue" }
    const { result } = renderHook(
      () =>
        usePagination({
          ref: restRef,
          className: "from-rest",
          // @ts-expect-error css is not in HTMLProps but mergeProps passes it through
          css: restCss,
          style: { color: "red", paddingTop: "4px" },
          total: 10,
          onClick: restOnClick,
        }),
      { withProvider: false },
    )
    const merged = result.current.getRootProps({
      ref: propRef,
      className: "from-props",
      // @ts-expect-error css is not in PropGetter input but mergeProps passes it through
      css: propCss,
      style: { backgroundColor: "blue", paddingTop: "8px" },
      onClick: propOnClick,
    })
    const node = document.createElement("div")
    const event = new MouseEvent("click")

    expect(merged.role).toBe("navigation")
    expect(String(merged.className)).toContain("from-rest")
    expect(String(merged.className)).toContain("from-props")
    expect(merged.style).toMatchObject({
      backgroundColor: "blue",
      color: "red",
      paddingTop: "8px",
    })
    // @ts-expect-error css is forwarded by mergeProps despite not being in the return type
    expect(merged.css).toStrictEqual(expect.arrayContaining([restCss, propCss]))

    invokeCallbackRef(merged.ref, node)
    // @ts-expect-error native MouseEvent vs React.MouseEvent shape mismatch
    invokeHandler(merged.onClick, event)

    expect(restRef).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledWith(node)
    expect(propRef).toHaveBeenCalledTimes(1)
    expect(propRef).toHaveBeenCalledWith(node)
    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(propOnClick).toHaveBeenCalledTimes(1)
    expect(order).toStrictEqual(["rest", "props"])
  })
})
