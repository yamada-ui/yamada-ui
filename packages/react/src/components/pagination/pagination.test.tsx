import { Pagination } from "."
import { a11y, render, screen } from "../../../test"

describe("<Pagination />", () => {
  test("passes a11y test", async () => {
    await a11y(<Pagination.Root total={10} withEdges />)
  })

  test("sets `displayName` correctly", () => {
    expect(Pagination.Root.displayName).toBe("PaginationRoot")
    expect(Pagination.Items.name).toBe("PaginationItems")
    expect(Pagination.Item.displayName).toBe("PaginationItem")
    expect(Pagination.Text.displayName).toBe("PaginationText")
    expect(Pagination.PrevTrigger.displayName).toBe("PaginationPrevTrigger")
    expect(Pagination.NextTrigger.displayName).toBe("PaginationNextTrigger")
    expect(Pagination.EndTrigger.displayName).toBe("PaginationEndTrigger")
    expect(Pagination.StartTrigger.displayName).toBe("PaginationStartTrigger")
  })

  test("sets `className` correctly", () => {
    render(<Pagination.Root total={9} withEdges />)
    expect(screen.getByRole("navigation")).toHaveClass("ui-pagination__root")
    expect(screen.getByRole("button", { name: /Go to page 1/i })).toHaveClass(
      "ui-pagination__item",
    )
    expect(
      screen.getByRole("button", { name: /Go to first page/i }),
    ).toHaveClass(
      "ui-pagination__item",
      "ui-pagination__trigger",
      "ui-pagination__trigger--start",
    )
    expect(
      screen.getByRole("button", { name: /Go to previous page/i }),
    ).toHaveClass(
      "ui-pagination__item",
      "ui-pagination__trigger",
      "ui-pagination__trigger--prev",
    )
    expect(
      screen.getByRole("button", { name: /Go to next page/i }),
    ).toHaveClass(
      "ui-pagination__item",
      "ui-pagination__trigger",
      "ui-pagination__trigger--next",
    )
    expect(
      screen.getByRole("button", { name: /Go to last page/i }),
    ).toHaveClass(
      "ui-pagination__item",
      "ui-pagination__trigger",
      "ui-pagination__trigger--end",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <Pagination.Root
        total={9}
        withEdges
        ellipsisProps={{ "data-testid": "ellipsis" }}
      />,
    )
    expect(screen.getByRole("navigation").tagName).toBe("NAV")
    expect(screen.getByRole("button", { name: /Go to page 1/i }).tagName).toBe(
      "BUTTON",
    )
    expect(
      screen.getByRole("button", { name: /Go to first page/i }).tagName,
    ).toBe("BUTTON")
    expect(
      screen.getByRole("button", { name: /Go to previous page/i }).tagName,
    ).toBe("BUTTON")
    expect(
      screen.getByRole("button", { name: /Go to next page/i }).tagName,
    ).toBe("BUTTON")
    expect(
      screen.getByRole("button", { name: /Go to last page/i }).tagName,
    ).toBe("BUTTON")
    expect(screen.getByTestId("ellipsis").tagName).toBe("SPAN")
  })
})
