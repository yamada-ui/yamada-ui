import type { ReactElement } from "react"
import { render, renderHook, screen } from "#test"
import { useReorder } from "./use-reorder"

describe("useReorder", () => {
  test("renders generated items with an RSC lazy-wrapped template", () => {
    const item = {
      $$typeof: Symbol.for("react.lazy"),
      _init: (element: ReactElement) => element,
      _payload: <li className="custom-item" title="Template" />,
    } as unknown as ReactElement
    const { result } = renderHook(() =>
      useReorder({
        item,
        items: [
          { children: "First", title: "First item", value: "a" },
          { children: "Second", value: "b" },
        ],
      }),
    )

    render(<ul>{result.current.children}</ul>)

    expect(screen.getAllByRole("listitem")).toHaveLength(2)
    expect(screen.getByText("First")).toHaveClass("custom-item")
    expect(screen.getByText("First")).toHaveAttribute("title", "First item")
    expect(screen.getByText("Second")).toHaveClass("custom-item")
    expect(screen.getByText("Second")).toHaveAttribute("title", "Template")
    expect(result.current.children.map((child) => child?.key)).toStrictEqual([
      "a",
      "b",
    ])
  })
})
