import { a11y, fireEvent, render, screen } from "@/test"
import { Pagination } from "."
import { isNumber } from "../../utils"
import { IconButton } from "../icon-button"

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
    // Expect all button should have disabled
    screen
      .getAllByRole("button")
      .forEach((pagination) => expect(pagination).toHaveAttribute("disabled"))
  })

  test("should render Pagination.Root with previous ellipsis and without next ellipsis correctly", () => {
    render(
      <Pagination.Root
        boundaries={2}
        page={95}
        siblings={2}
        total={100}
        ellipsisProps={{ "data-testid": "ellipsis" }}
      />,
    )

    for (let page = 93; page <= 100; page++) {
      expect(screen.getByText(page.toString())).toBeInTheDocument()
    }

    for (let page = 1; page <= 2; page++) {
      expect(screen.getByText(page.toString())).toBeInTheDocument()
    }

    expect(screen.getByTestId("ellipsis")).toBeInTheDocument()
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

    expect(screen.getAllByLabelText("Go to page")).toHaveLength(6)
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
    render(
      <Pagination.Root total={10}>
        <Pagination.StartTrigger>
          <IconButton aria-label="start-trigger" />
        </Pagination.StartTrigger>

        <Pagination.PrevTrigger>
          <IconButton aria-label="prev-trigger" />
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) =>
            isNumber(page) ? (
              <IconButton aria-label={`page-${page}`}>{page}</IconButton>
            ) : (
              <IconButton aria-label="ellipsis" />
            )
          }
        />

        <Pagination.NextTrigger>
          <IconButton aria-label="next-trigger" />
        </Pagination.NextTrigger>

        <Pagination.EndTrigger>
          <IconButton aria-label="end-trigger" />
        </Pagination.EndTrigger>
      </Pagination.Root>,
    )

    const buttons = screen.getAllByRole("button")
    expect(buttons).toHaveLength(11)
    expect(buttons[0]).toHaveAttribute("aria-label", "start-trigger")
    expect(buttons[1]).toHaveAttribute("aria-label", "prev-trigger")
    expect(buttons[2]).toHaveAttribute("aria-label", "page-1")
    expect(buttons[3]).toHaveAttribute("aria-label", "page-2")
    expect(buttons[4]).toHaveAttribute("aria-label", "page-3")
    expect(buttons[5]).toHaveAttribute("aria-label", "page-4")
    expect(buttons[6]).toHaveAttribute("aria-label", "page-5")
    expect(buttons[7]).toHaveAttribute("aria-label", "ellipsis")
    expect(buttons[8]).toHaveAttribute("aria-label", "page-10")
    expect(buttons[9]).toHaveAttribute("aria-label", "next-trigger")
    expect(buttons[10]).toHaveAttribute("aria-label", "end-trigger")
  })
})
