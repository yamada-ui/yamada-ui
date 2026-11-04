import type { ReactElement } from "react"
import { createRef } from "react"
import { a11y, render, screen } from "#test"
import { Tree } from "."
import { BoxIcon, FileIcon, FolderIcon } from "../icon"

const items: Tree.ItemType[] = [
  {
    children: [
      { label: "1-1" },
      {
        children: [{ label: "1-2-1" }, { disabled: true, label: "1-2-2" }],
        label: "1-2",
        startElement: <BoxIcon />,
      },
      { disabled: true, label: "1-3" },
    ],
    label: "1",
    startElement: { group: <FolderIcon />, item: <FileIcon /> },
  },
  {
    children: [{ label: "2-1" }, { label: "2-2" }],
    disabled: true,
    label: "2",
  },
  { label: "3" },
  { disabled: true, label: "4" },
  { label: "5" },
]

describe("<Tree />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Tree.Root
        checkable
        defaultExpandedValue={["1"]}
        items={items}
        multiple
      />,
    )
  })

  test("should not render indicator", () => {
    render(<Tree.Root indicatorHidden items={items} />)

    expect(
      screen.getAllByRole("treeitem")[0]?.querySelector(".ui-tree__indicator"),
    ).toBeNull()
  })

  test.each([false, true])(
    "renders a lazy-wrapped indicator with callback=%s",
    (callback) => {
      const ref = createRef<SVGSVGElement>()
      const indicator = {
        $$typeof: Symbol.for("react.lazy"),
        _init: (payload: ReactElement) => payload,
        _payload: <svg ref={ref} data-testid="lazy-indicator" width="12" />,
      } as unknown as ReactElement

      render(
        <Tree.Root
          indicator={callback ? () => indicator : indicator}
          items={[{ children: [{ label: "Child" }], label: "Parent" }]}
          indicatorProps={{ width: "24" }}
        />,
      )

      expect(screen.getByTestId("lazy-indicator")).toHaveAttribute(
        "width",
        "12",
      )
      expect(screen.getByTestId("lazy-indicator")).toHaveAttribute(
        "aria-hidden",
        "true",
      )
      expect(ref.current).toBe(screen.getByTestId("lazy-indicator"))
    },
  )

  test.each(["hidden", "leaf"])(
    "does not resolve an unused lazy indicator for %s items",
    (mode) => {
      const init = vi.fn(() => {
        throw new Error("Unused indicator")
      })
      const indicator = {
        $$typeof: Symbol.for("react.lazy"),
        _init: init,
        _payload: {},
      } as unknown as ReactElement

      render(
        <Tree.Root
          indicator={indicator}
          indicatorHidden={mode === "hidden"}
          items={
            mode === "hidden"
              ? [{ children: [{ label: "Child" }], label: "Parent" }]
              : [{ label: "Parent" }]
          }
        />,
      )

      expect(init).not.toHaveBeenCalled()
      expect(screen.getByText("Parent")).toBeInTheDocument()
    },
  )

  test("should support controlled selectedValue", () => {
    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        selectedValue="1/1-1"
      />,
    )

    expect(screen.getByRole("treeitem", { name: /^1-1$/ })).toHaveAttribute(
      "aria-selected",
      "true",
    )
  })

  test("should support controlled expandedValue", () => {
    render(<Tree.Root expandedValue={["1"]} items={items} />)

    const firstItem = screen.getAllByRole("treeitem")[0]
    expect(firstItem).toHaveAttribute("aria-expanded", "true")
  })

  test("should set aria-multiselectable on tree root", () => {
    render(<Tree.Root items={items} multiple />)

    expect(screen.getByRole("tree")).toHaveAttribute(
      "aria-multiselectable",
      "true",
    )
  })

  test("should set aria-multiselectable when checkable", () => {
    render(<Tree.Root checkable items={items} />)

    expect(screen.getByRole("tree")).toHaveAttribute(
      "aria-multiselectable",
      "true",
    )
  })
})
