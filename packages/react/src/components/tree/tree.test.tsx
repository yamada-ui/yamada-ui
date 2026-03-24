import type { TreeControl } from "./use-tree"
import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { useRef, useState } from "react"
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
    const root = screen.getByRole("tree")
    const group = screen.getAllByRole("group")[0]
    const groupItem = screen.getAllByRole("treeitem")[0]
    const trigger = groupItem?.children[0]
    const item = screen.getAllByRole("treeitem")[1]
    expect(root).toHaveClass("ui-tree__root")
    expect(group).toHaveClass("ui-tree__group")
    expect(groupItem).toHaveClass("ui-tree__item")
    expect(trigger).toHaveClass("ui-tree__trigger")
    expect(trigger?.children[0]).toHaveClass("ui-tree__indicator")
    expect(item).toHaveClass("ui-tree__item")
    expect(item?.children[1]).toHaveClass("ui-tree__checkbox")
    expect(item?.children[2]).toHaveClass(
      "ui-tree__element",
      "ui-tree__element--start",
    )
    expect(item?.children[3]).toHaveClass("ui-tree__label")
    expect(item?.children[4]).toHaveClass(
      "ui-tree__element",
      "ui-tree__element--end",
    )
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
    const trigger = groupItem?.children[0]
    const item = screen.getAllByRole("treeitem")[1]
    expect(root.tagName).toBe("UL")
    expect(group?.tagName).toBe("UL")
    expect(groupItem?.tagName).toBe("LI")
    expect(trigger?.tagName).toBe("DIV")
    expect(trigger?.children[0]?.tagName).toBe("svg")
    expect(item?.tagName).toBe("LI")
    expect(item?.children[1]?.tagName).toBe("DIV")
    expect(item?.children[2]?.tagName).toBe("SPAN")
    expect(item?.children[3]?.tagName).toBe("DIV")
  })

  test("should not render indicator", () => {
    render(<Tree.Root indicatorHidden items={items} />)
    const item = screen.getAllByRole("treeitem")[0]
    const trigger = item?.children[0]

    expect(trigger?.querySelector("ui-tree__indicator")).not.toBeInTheDocument()
  })

  test("should select item on click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    await user.click(leafItem)

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should select group item on trigger click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = render(
      <Tree.Root items={items} onSelectedChange={onSelectedChange} />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const groupItem = treeItems[0]!
    const trigger = groupItem.querySelector(".ui-tree__trigger")!

    await user.click(trigger)

    expect(onSelectedChange).toHaveBeenCalledWith("1")
  })

  test("should expand and collapse group on trigger click", async () => {
    const onExpandedChange = vi.fn()

    const { user } = render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    const groupItem = screen.getAllByRole("treeitem")[0]!
    const trigger = groupItem.querySelector(".ui-tree__trigger")!

    await user.click(trigger)

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
    expect(groupItem).toHaveAttribute("aria-expanded", "true")

    await user.click(trigger)

    expect(onExpandedChange).toHaveBeenCalledWith([])
  })

  test("should support controlled selectedValue", () => {
    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        selectedValue="1/1-1"
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )

    expect(leafItem).toHaveAttribute("aria-selected", "true")
  })

  test("should support controlled expandedValue", () => {
    render(<Tree.Root expandedValue={["1"]} items={items} />)

    const groupItem = screen.getAllByRole("treeitem")[0]

    expect(groupItem).toHaveAttribute("aria-expanded", "true")
  })

  test("should support multiple selection", async () => {
    const onSelectedChange = vi.fn()

    const { user } = render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    await user.click(leafItem)

    expect(onSelectedChange).toHaveBeenCalledWith(["1/1-1"])
  })

  test("should support multiple selection with ctrl+click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        defaultSelectedValue={["1/1-1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const secondLeaf = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "3",
    )!

    await user.keyboard("{Control>}")
    await user.click(secondLeaf)
    await user.keyboard("{/Control}")

    expect(onSelectedChange).toHaveBeenCalledWith(expect.arrayContaining(["3"]))
  })

  test("should navigate with ArrowDown key", async () => {
    render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = screen.getAllByRole("treeitem")
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "ArrowDown" })

    await waitFor(() => {
      const activeId = screen
        .getByRole("tree")
        .getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("should navigate with ArrowUp key", async () => {
    render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = screen.getAllByRole("treeitem")
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "ArrowDown" })
    fireEvent.keyDown(firstItem, { key: "ArrowUp" })

    await waitFor(() => {
      const activeId = screen
        .getByRole("tree")
        .getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("should collapse group with ArrowLeft key", () => {
    const onExpandedChange = vi.fn()

    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onExpandedChange={onExpandedChange}
      />,
    )

    const groupItem = screen.getAllByRole("treeitem")[0]!

    fireEvent.keyDown(groupItem, { key: "ArrowLeft" })

    expect(onExpandedChange).toHaveBeenCalledWith([])
  })

  test("should expand group with ArrowRight key", () => {
    const onExpandedChange = vi.fn()

    render(<Tree.Root items={items} onExpandedChange={onExpandedChange} />)

    const groupItem = screen.getAllByRole("treeitem")[0]!

    fireEvent.keyDown(groupItem, { key: "ArrowRight" })

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
  })

  test("should navigate to parent with ArrowLeft on nested item", async () => {
    render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = screen.getAllByRole("treeitem")
    const nestedItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.keyDown(nestedItem, { key: "ArrowLeft" })

    await waitFor(() => {
      const activeId = screen
        .getByRole("tree")
        .getAttribute("aria-activedescendant")
      const groupItem = treeItems[0]!

      expect(activeId).toBe(groupItem.id)
    })
  })

  test("should navigate to first item with Home key", async () => {
    render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = screen.getAllByRole("treeitem")
    const lastItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "5",
    )!

    fireEvent.keyDown(lastItem, { key: "Home" })

    await waitFor(() => {
      const activeId = screen
        .getByRole("tree")
        .getAttribute("aria-activedescendant")

      expect(activeId).toBe(treeItems[0]!.id)
    })
  })

  test("should navigate to last item with End key", async () => {
    render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = screen.getAllByRole("treeitem")
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "End" })

    await waitFor(() => {
      const activeId = screen
        .getByRole("tree")
        .getAttribute("aria-activedescendant")
      const lastItem = treeItems.find(
        (el) => el.querySelector(".ui-tree__label")?.textContent === "5",
      )!

      expect(activeId).toBe(lastItem.id)
    })
  })

  test("should toggle group with Enter key", () => {
    const onExpandedChange = vi.fn()

    render(<Tree.Root items={items} onExpandedChange={onExpandedChange} />)

    const groupItem = screen.getAllByRole("treeitem")[0]!

    fireEvent.keyDown(groupItem, { key: "Enter" })

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
  })

  test("should toggle group with Space key", () => {
    const onExpandedChange = vi.fn()

    render(<Tree.Root items={items} onExpandedChange={onExpandedChange} />)

    const groupItem = screen.getAllByRole("treeitem")[0]!

    fireEvent.keyDown(groupItem, { key: " ", code: "Space" })

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
  })

  test("should select all with Ctrl+A in multiple mode", () => {
    const onSelectedChange = vi.fn()

    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "a", ctrlKey: true })

    expect(onSelectedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should expand all with Ctrl+Shift+ArrowDown", () => {
    const onExpandedChange = vi.fn()

    render(<Tree.Root items={items} onExpandedChange={onExpandedChange} />)

    const groupItem = screen.getAllByRole("treeitem")[0]!

    fireEvent.keyDown(groupItem, {
      key: "ArrowDown",
      ctrlKey: true,
      shiftKey: true,
    })

    expect(onExpandedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should collapse all with Ctrl+Shift+ArrowUp", () => {
    const onExpandedChange = vi.fn()

    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onExpandedChange={onExpandedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const nestedItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.keyDown(nestedItem, {
      key: "ArrowUp",
      ctrlKey: true,
      shiftKey: true,
    })

    expect(onExpandedChange).toHaveBeenCalledWith([])
  })

  test("should select with Shift+ArrowDown in multiple mode", () => {
    const onSelectedChange = vi.fn()

    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "ArrowDown", shiftKey: true })

    expect(onSelectedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-1"]),
    )
  })

  test("should check item with checkbox", async () => {
    const onCheckedChange = vi.fn()

    const { user } = render(
      <Tree.Root
        checkable
        defaultExpandedValue={["1"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    const checkboxes = screen.getAllByRole("checkbox")
    const leafCheckbox = checkboxes[1]!

    await user.click(leafCheckbox)

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-1"]),
    )
  })

  test("should check parent and children together", async () => {
    const onCheckedChange = vi.fn()

    const { user } = render(
      <Tree.Root
        checkable
        defaultExpandedValue={["1", "1/1-2"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    const checkboxes = screen.getAllByRole("checkbox")
    const parentCheckbox = checkboxes[0]!

    await user.click(parentCheckbox)

    expect(onCheckedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should support controlRef", async () => {
    const ControlledTree = () => {
      const controlRef = useRef<TreeControl>(null)

      return (
        <>
          <button
            data-testid="expand"
            onClick={() => controlRef.current?.expand()}
          >
            Expand
          </button>
          <button
            data-testid="collapse"
            onClick={() => controlRef.current?.collapse()}
          >
            Collapse
          </button>
          <Tree.Root controlRef={controlRef} items={items} />
        </>
      )
    }

    const { user } = render(<ControlledTree />)

    await user.click(screen.getByTestId("expand"))

    await waitFor(() => {
      const groupItem = screen.getAllByRole("treeitem")[0]

      expect(groupItem).toHaveAttribute("aria-expanded", "true")
    })

    await user.click(screen.getByTestId("collapse"))

    await waitFor(() => {
      const groupItem = screen.getAllByRole("treeitem")[0]

      expect(groupItem).toHaveAttribute("aria-expanded", "false")
    })
  })

  test("should set aria-multiselectable on tree root", () => {
    render(<Tree.Root items={items} multiple />)

    const tree = screen.getByRole("tree")

    expect(tree).toHaveAttribute("aria-multiselectable", "true")
  })

  test("should search items by typing characters", async () => {
    render(<Tree.Root items={items} />)

    const treeItems = screen.getAllByRole("treeitem")
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "5" })

    await waitFor(() => {
      const activeId = screen
        .getByRole("tree")
        .getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("should not respond to disabled item click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = render(
      <Tree.Root items={items} onSelectedChange={onSelectedChange} />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const disabledItem = treeItems.find(
      (el) =>
        el.querySelector(".ui-tree__label")?.textContent === "4" &&
        el.getAttribute("aria-disabled") === "true",
    )!

    await user.click(disabledItem)

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should navigate into expanded group with ArrowRight", async () => {
    render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const groupItem = screen.getAllByRole("treeitem")[0]!

    fireEvent.keyDown(groupItem, { key: "ArrowRight" })

    await waitFor(() => {
      const activeId = screen
        .getByRole("tree")
        .getAttribute("aria-activedescendant")
      const treeItems = screen.getAllByRole("treeitem")
      const firstChild = treeItems.find(
        (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
      )

      expect(activeId).toBe(firstChild?.id)
    })
  })

  test("should uncheck item when clicking checked checkbox", async () => {
    const onCheckedChange = vi.fn()

    const { user } = render(
      <Tree.Root
        checkable
        checkedValue={["1/1-1"]}
        defaultExpandedValue={["1"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    const checkboxes = screen.getAllByRole("checkbox")
    const leafCheckbox = checkboxes[1]!

    await user.click(leafCheckbox)

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.not.arrayContaining(["1/1-1"]),
    )
  })

  test("should set aria-multiselectable when checkable", () => {
    render(<Tree.Root checkable items={items} />)

    const tree = screen.getByRole("tree")

    expect(tree).toHaveAttribute("aria-multiselectable", "true")
  })

  test("should select item with Enter key on leaf", () => {
    const onSelectedChange = vi.fn()

    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.keyDown(leafItem, { key: "Enter" })

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should select item with Space key on leaf", () => {
    const onSelectedChange = vi.fn()

    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.keyDown(leafItem, { key: " ", code: "Space" })

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should not respond to keyboard on disabled item", () => {
    const onSelectedChange = vi.fn()

    render(<Tree.Root items={items} onSelectedChange={onSelectedChange} />)

    const treeItems = screen.getAllByRole("treeitem")
    const disabledItem = treeItems.find(
      (el) =>
        el.querySelector(".ui-tree__label")?.textContent === "4" &&
        el.getAttribute("aria-disabled") === "true",
    )!

    fireEvent.keyDown(disabledItem, { key: "Enter" })

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should ignore Ctrl+A in single selection mode", () => {
    const onSelectedChange = vi.fn()

    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "a", ctrlKey: true })

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should not expand disabled group with ArrowRight", () => {
    const onExpandedChange = vi.fn()

    render(<Tree.Root items={items} onExpandedChange={onExpandedChange} />)

    const treeItems = screen.getAllByRole("treeitem")
    const disabledGroup = treeItems.find(
      (el) =>
        el.querySelector(".ui-tree__label")?.textContent === "2" &&
        el.getAttribute("aria-disabled") === "true",
    )!

    fireEvent.keyDown(disabledGroup, { key: "ArrowRight" })

    expect(onExpandedChange).not.toHaveBeenCalled()
  })

  test("should not trigger click on non-group trigger with modifier keys", async () => {
    const onExpandedChange = vi.fn()

    const { user } = render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const groupItem = treeItems[0]!
    const trigger = groupItem.querySelector(".ui-tree__trigger")!

    await user.pointer({
      target: trigger,
      keyDef: { key: "ctrl" } as never,
      keys: "[MouseLeft][/MouseLeft]",
    })
  })

  test("should check nested item and propagate to parent", async () => {
    const onCheckedChange = vi.fn()

    const { user } = render(
      <Tree.Root
        checkable
        defaultExpandedValue={["1", "1/1-2"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    const checkboxes = screen.getAllByRole("checkbox")
    const nestedCheckbox = checkboxes.find((el) => {
      const item = el.closest("[role='treeitem']")

      return item?.querySelector(".ui-tree__label")?.textContent === "1-2-1"
    })!

    await user.click(nestedCheckbox)

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-2/1-2-1"]),
    )
  })

  test("should deselect item with ctrl+click in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    const { user } = render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        defaultSelectedValue={["1/1-1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    await user.keyboard("{Control>}")
    await user.click(leafItem)
    await user.keyboard("{/Control}")

    expect(onSelectedChange).toHaveBeenCalledWith([])
  })

  test("should select range with shift+click in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    const { user } = render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        defaultSelectedValue={["1/1-1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const targetItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "3",
    )!

    await user.keyboard("{Shift>}")
    await user.click(targetItem)
    await user.keyboard("{/Shift}")

    expect(onSelectedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-1"]),
    )
  })

  test("should handle Shift+ArrowUp in multiple mode", () => {
    const onSelectedChange = vi.fn()

    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = screen.getAllByRole("treeitem")
    const groupItem = treeItems[0]!

    fireEvent.keyDown(groupItem, { key: "ArrowDown" })
    fireEvent.keyDown(groupItem, { key: "ArrowUp", shiftKey: true })

    expect(onSelectedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should not navigate with ArrowRight on leaf item", () => {
    render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = screen.getAllByRole("treeitem")
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!
    const tree = screen.getByRole("tree")
    const activeBefore = tree.getAttribute("aria-activedescendant")

    fireEvent.keyDown(leafItem, { key: "ArrowRight" })

    expect(tree.getAttribute("aria-activedescendant")).toBe(activeBefore)
  })

  test("should collapse all on Ctrl+Shift+ArrowUp on top-level item", () => {
    const onExpandedChange = vi.fn()

    render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onExpandedChange={onExpandedChange}
      />,
    )

    const groupItem = screen.getAllByRole("treeitem")[0]!

    fireEvent.keyDown(groupItem, {
      key: "ArrowUp",
      ctrlKey: true,
      shiftKey: true,
    })

    expect(onExpandedChange).toHaveBeenCalledWith([])
  })

  test("should load async children on expand", async () => {
    const asyncChildren = vi
      .fn()
      .mockResolvedValue([{ label: "async-1" }, { label: "async-2" }])

    const { user } = render(
      <Tree.Root>
        <Tree.Item asyncChildren={asyncChildren} label="parent" />
      </Tree.Root>,
    )

    const groupItem = screen.getAllByRole("treeitem")[0]!
    const trigger = groupItem.querySelector(".ui-tree__trigger")!

    await user.click(trigger)

    await waitFor(() => {
      expect(asyncChildren).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(screen.getByText("async-1")).toBeInTheDocument()
      expect(screen.getByText("async-2")).toBeInTheDocument()
    })
  })

  test("should load async children when expandedValue changes", async () => {
    const asyncChildren = vi.fn().mockResolvedValue([{ label: "lazy-1" }])

    const AsyncTree = () => {
      const [expanded, setExpanded] = useState<string[]>([])

      return (
        <>
          <button data-testid="expand" onClick={() => setExpanded(["parent"])}>
            Expand
          </button>
          <Tree.Root expandedValue={expanded}>
            <Tree.Item asyncChildren={asyncChildren} label="parent" />
          </Tree.Root>
        </>
      )
    }

    const { user } = render(<AsyncTree />)

    await user.click(screen.getByTestId("expand"))

    await waitFor(() => {
      expect(asyncChildren).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(screen.getByText("lazy-1")).toBeInTheDocument()
    })
  })
})
