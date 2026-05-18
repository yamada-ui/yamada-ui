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
