import { a11y, render, screen } from "#test"
import { Tree } from "."
import { BoxIcon, FileIcon, FolderIcon, XIcon } from "../icon"

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

  test("sets `displayName` correctly", () => {
    expect(Tree.Root.displayName).toBe("TreeRoot")
    expect(Tree.Item.displayName).toBe("TreeItem")
  })

  test("sets `className` correctly", () => {
    render(
      <Tree.Root
        checkable
        endElement={<XIcon />}
        items={items}
        startElement={{
          group: <FolderIcon />,
          item: <FileIcon />,
        }}
      />,
    )

    const groupItem = screen.getAllByRole("treeitem")[0]
    const item = screen.getByRole("treeitem", { name: /^1-1$/ })
    const checkbox = item.querySelector(".ui-tree__checkbox")
    const startElement = item.querySelector(".ui-tree__element--start")
    const label = item.querySelector(".ui-tree__label")
    const endElement = item.querySelector(".ui-tree__element--end")

    expect(screen.getByRole("tree")).toHaveClass("ui-tree__root")
    const groups = screen.getAllByRole("group")
    expect(groups[0]).toHaveClass("ui-tree__group")
    expect(groupItem).toHaveClass("ui-tree__item")
    expect(item).toHaveClass("ui-tree__item")
    expect(checkbox).toHaveClass("ui-tree__checkbox")
    expect(startElement).toHaveClass(
      "ui-tree__element",
      "ui-tree__element--start",
    )
    expect(label).toHaveClass("ui-tree__label")
    expect(endElement).toHaveClass("ui-tree__element", "ui-tree__element--end")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Tree.Root
        endElement={<XIcon />}
        items={items}
        startElement={{
          group: <FolderIcon />,
          item: <FileIcon />,
        }}
      >
        <Tree.Item label="1">
          <Tree.Item label="1-1" />
        </Tree.Item>
      </Tree.Root>,
    )

    const root = screen.getByRole("tree")
    const group = screen.getAllByRole("group")[0]
    const groupItem = screen.getAllByRole("treeitem")[0]
    const item = screen.getByRole("treeitem", { name: /^1-1$/ })

    expect(group).toBeDefined()
    expect(groupItem).toBeDefined()
    if (!group || !groupItem) return

    expect(root.tagName).toBe("UL")
    expect(group.tagName).toBe("UL")
    expect(groupItem.tagName).toBe("LI")
    expect(groupItem.children[0]?.tagName).toBe("DIV")
    expect(groupItem.children[0]?.children[0]?.tagName).toBe("svg")
    expect(item.tagName).toBe("LI")
    expect(item.children[0]?.tagName).toBe("DIV")
    expect(item.children[0]?.children[1]?.tagName).toBe("DIV")
    expect(item.children[0]?.children[2]?.tagName).toBe("SPAN")
    expect(item.children[0]?.children[3]?.tagName).toBe("DIV")
  })

  test("should not render indicator", () => {
    render(<Tree.Root indicatorHidden items={items} />)

    expect(
      screen.getAllByRole("treeitem")[0]?.querySelector(".ui-tree__indicator"),
    ).toBeNull()
  })

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
