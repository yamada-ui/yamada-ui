import type { TreeControl } from "./use-tree"
import { a11y, page, render } from "#test/browser"
import { fireEvent } from "@testing-library/react"
import { useRef, useState } from "react"
import { vi } from "vitest"
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

  test("sets `className` correctly", async () => {
    await render(
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
    const root = document.querySelector('[role="tree"]') as HTMLElement
    const group = [...document.querySelectorAll('[role="group"]')][0]
    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]
    const item = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[1]
    expect(root).toHaveClass("ui-tree__root")
    expect(group).toHaveClass("ui-tree__group")
    expect(groupItem).toHaveClass("ui-tree__item")
    expect(groupItem?.children[0]?.children[0]).toHaveClass(
      "ui-tree__indicator",
    )
    expect(item).toHaveClass("ui-tree__item")
    expect(item?.children[0]?.children[1]).toHaveClass("ui-tree__checkbox")
    expect(item?.children[0]?.children[2]).toHaveClass(
      "ui-tree__element",
      "ui-tree__element--start",
    )
    expect(item?.children[0]?.children[3]).toHaveClass("ui-tree__label")
    expect(item?.children[0]?.children[4]).toHaveClass(
      "ui-tree__element",
      "ui-tree__element--end",
    )
  })

  test("renders HTML tag correctly", async () => {
    await render(
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
    const root = document.querySelector('[role="tree"]') as HTMLElement
    const group = [...document.querySelectorAll('[role="group"]')][0]
    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]
    const item = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[1]
    expect(root.tagName).toBe("UL")
    expect(group?.tagName).toBe("UL")
    expect(groupItem?.tagName).toBe("LI")
    expect(groupItem?.children[0]?.tagName).toBe("DIV")
    expect(groupItem?.children[0]?.children[0]?.tagName).toBe("svg")
    expect(item?.tagName).toBe("LI")
    expect(item?.children[0]?.tagName).toBe("DIV")
    expect(item?.children[0]?.children[1]?.tagName).toBe("DIV")
    expect(item?.children[0]?.children[2]?.tagName).toBe("SPAN")
    expect(item?.children[0]?.children[3]?.tagName).toBe("DIV")
  })

  test("should not render indicator", async () => {
    await render(<Tree.Root indicatorHidden items={items} />)
    const item = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]
    const trigger = item?.children[0]

    expect(trigger?.querySelector("ui-tree__indicator")).not.toBeInTheDocument()
  })

  test("should select item on click", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.click(leafItem)

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should select group item on click", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root items={items} onSelectedChange={onSelectedChange} />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const groupItem = treeItems[0]!

    fireEvent.click(groupItem)

    expect(onSelectedChange).toHaveBeenCalledWith("1")
  })

  test("should expand and collapse group on click", async () => {
    const onExpandedChange = vi.fn()

    await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]!

    fireEvent.click(groupItem)

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
    expect(groupItem).toHaveAttribute("aria-expanded", "true")

    fireEvent.click(groupItem)

    expect(onExpandedChange).toHaveBeenCalledWith([])
  })

  test("should support controlled selectedValue", async () => {
    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        selectedValue="1/1-1"
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )

    expect(leafItem).toHaveAttribute("aria-selected", "true")
  })

  test("should support controlled expandedValue", async () => {
    await render(<Tree.Root expandedValue={["1"]} items={items} />)

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]

    expect(groupItem).toHaveAttribute("aria-expanded", "true")
  })

  test("should support multiple selection", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.click(leafItem)

    expect(onSelectedChange).toHaveBeenCalledWith(["1/1-1"])
  })

  test("should support multiple selection with ctrl+click", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        defaultSelectedValue={["1/1-1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const secondLeaf = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "3",
    )!

    fireEvent.click(secondLeaf, { ctrlKey: true })

    expect(onSelectedChange).toHaveBeenCalledWith(expect.arrayContaining(["3"]))
  })

  test("should collapse group with ArrowLeft key", async () => {
    const onExpandedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onExpandedChange={onExpandedChange}
      />,
    )

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]!

    fireEvent.keyDown(groupItem, { key: "ArrowLeft" })

    expect(onExpandedChange).toHaveBeenCalledWith([])
  })

  test("should expand group with ArrowRight key", async () => {
    const onExpandedChange = vi.fn()

    await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]!

    fireEvent.keyDown(groupItem, { key: "ArrowRight" })

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
  })

  test("should navigate to parent with ArrowLeft on nested item", async () => {
    await render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const nestedItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.keyDown(nestedItem, { key: "ArrowLeft" })

    await vi.waitFor(() => {
      const groupItem = treeItems[0]!
      expect(groupItem).toHaveAttribute("tabindex", "0")
    })
  })

  test("should navigate to first item with Home key", async () => {
    await render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const lastItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "5",
    )!

    fireEvent.keyDown(lastItem, { key: "Home" })

    await vi.waitFor(() => {
      const firstItem = treeItems[0]!
      expect(firstItem).toHaveAttribute("tabindex", "0")
    })
  })

  test("should navigate to last item with End key", async () => {
    await render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "End" })

    await vi.waitFor(() => {
      const lastItem = treeItems.find(
        (el) => el.querySelector(".ui-tree__label")?.textContent === "5",
      )!
      expect(lastItem).toHaveAttribute("tabindex", "0")
    })
  })

  test("should toggle group with Enter key", async () => {
    const onExpandedChange = vi.fn()

    await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]!

    fireEvent.keyDown(groupItem, { key: "Enter" })

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
  })

  test("should toggle group with Space key", async () => {
    const onExpandedChange = vi.fn()

    await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]!

    fireEvent.keyDown(groupItem, { key: " ", code: "Space" })

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
  })

  test("should select all with Ctrl+A in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "a", ctrlKey: true })

    expect(onSelectedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should expand all with Ctrl+Shift+ArrowDown", async () => {
    const onExpandedChange = vi.fn()

    await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]!

    fireEvent.keyDown(groupItem, {
      key: "ArrowDown",
      ctrlKey: true,
      shiftKey: true,
    })

    expect(onExpandedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should collapse all with Ctrl+Shift+ArrowUp", async () => {
    const onExpandedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onExpandedChange={onExpandedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
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

  test("should select with Shift+ArrowDown in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "ArrowDown", shiftKey: true })

    expect(onSelectedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-1"]),
    )
  })

  test("should check item with checkbox", async () => {
    const onCheckedChange = vi.fn()

    await render(
      <Tree.Root
        checkable
        defaultExpandedValue={["1"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    const checkboxes = [
      ...document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ]
    const leafCheckbox = checkboxes[1]!

    fireEvent.click(leafCheckbox)

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-1"]),
    )
  })

  test("should check parent and children together", async () => {
    const onCheckedChange = vi.fn()

    await render(
      <Tree.Root
        checkable
        defaultExpandedValue={["1", "1/1-2"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    const checkboxes = [
      ...document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ]
    const parentCheckbox = checkboxes[0]!

    fireEvent.click(parentCheckbox)

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

    const { user } = await render(<ControlledTree />)

    await user.click(page.getByTestId("expand"))

    await vi.waitFor(() => {
      const groupItem = (
        [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
      )[0]

      expect(groupItem).toHaveAttribute("aria-expanded", "true")
    })

    await user.click(page.getByTestId("collapse"))

    await vi.waitFor(() => {
      const groupItem = (
        [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
      )[0]

      expect(groupItem).toHaveAttribute("aria-expanded", "false")
    })
  })

  test("should set aria-multiselectable on tree root", async () => {
    await render(<Tree.Root items={items} multiple />)

    const tree = document.querySelector('[role="tree"]') as HTMLElement

    expect(tree).toHaveAttribute("aria-multiselectable", "true")
  })

  test("should search items by typing characters", async () => {
    await render(<Tree.Root items={items} />)

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "5" })

    await vi.waitFor(() => {
      const item = treeItems.find(
        (el) => el.querySelector(".ui-tree__label")?.textContent === "5",
      )!
      expect(item).toHaveAttribute("tabindex", "0")
    })
  })

  test("should not respond to disabled item click", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root items={items} onSelectedChange={onSelectedChange} />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const disabledItem = treeItems.find(
      (el) =>
        el.querySelector(".ui-tree__label")?.textContent === "4" &&
        el.getAttribute("aria-disabled") === "true",
    )!

    fireEvent.click(disabledItem)

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should navigate into expanded group with ArrowRight", async () => {
    await render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]!

    fireEvent.keyDown(groupItem, { key: "ArrowRight" })

    await vi.waitFor(() => {
      const treeItems = [
        ...document.querySelectorAll('[role="treeitem"]'),
      ] as HTMLElement[]
      const firstChild = treeItems.find(
        (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
      )
      expect(firstChild).toHaveAttribute("tabindex", "0")
    })
  })

  test("should uncheck item when clicking checked checkbox", async () => {
    const onCheckedChange = vi.fn()

    await render(
      <Tree.Root
        checkable
        checkedValue={["1/1-1"]}
        defaultExpandedValue={["1"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    const checkboxes = [
      ...document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ]
    const leafCheckbox = checkboxes[1]!

    fireEvent.click(leafCheckbox)

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.not.arrayContaining(["1/1-1"]),
    )
  })

  test("should set aria-multiselectable when checkable", async () => {
    await render(<Tree.Root checkable items={items} />)

    const tree = document.querySelector('[role="tree"]') as HTMLElement

    expect(tree).toHaveAttribute("aria-multiselectable", "true")
  })

  test("should select item with Enter key on leaf", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.keyDown(leafItem, { key: "Enter" })

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should select item with Space key on leaf", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.keyDown(leafItem, { key: " ", code: "Space" })

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should not respond to keyboard on disabled item", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root items={items} onSelectedChange={onSelectedChange} />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const disabledItem = treeItems.find(
      (el) =>
        el.querySelector(".ui-tree__label")?.textContent === "4" &&
        el.getAttribute("aria-disabled") === "true",
    )!

    fireEvent.keyDown(disabledItem, { key: "Enter" })

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should ignore Ctrl+A in single selection mode", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const firstItem = treeItems[0]!

    fireEvent.keyDown(firstItem, { key: "a", ctrlKey: true })

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should not expand disabled group with ArrowRight", async () => {
    const onExpandedChange = vi.fn()

    await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const disabledGroup = treeItems.find(
      (el) =>
        el.querySelector(".ui-tree__label")?.textContent === "2" &&
        el.getAttribute("aria-disabled") === "true",
    )!

    fireEvent.keyDown(disabledGroup, { key: "ArrowRight" })

    expect(onExpandedChange).not.toHaveBeenCalled()
  })

  test("should check nested item and propagate to parent", async () => {
    const onCheckedChange = vi.fn()

    await render(
      <Tree.Root
        checkable
        defaultExpandedValue={["1", "1/1-2"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    const checkboxes = [
      ...document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    ]
    const nestedCheckbox = checkboxes.find((el) => {
      const item = el.closest("[role='treeitem']")

      return item?.querySelector(".ui-tree__label")?.textContent === "1-2-1"
    })!

    fireEvent.click(nestedCheckbox)

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-2/1-2-1"]),
    )
  })

  test("should deselect item with ctrl+click in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        defaultSelectedValue={["1/1-1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.click(leafItem, { ctrlKey: true })

    expect(onSelectedChange).toHaveBeenCalledWith([])
  })

  test("should select range with shift+click in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        defaultSelectedValue={["1/1-1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const targetItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "3",
    )!

    fireEvent.click(targetItem, { shiftKey: true })

    expect(onSelectedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-1"]),
    )
  })

  test("should handle Shift+ArrowUp in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const groupItem = treeItems[0]!

    fireEvent.keyDown(groupItem, { key: "ArrowDown" })
    fireEvent.keyDown(groupItem, { key: "ArrowUp", shiftKey: true })

    expect(onSelectedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should not navigate with ArrowRight on leaf item", async () => {
    await render(<Tree.Root defaultExpandedValue={["1"]} items={items} />)

    const treeItems = [
      ...document.querySelectorAll('[role="treeitem"]'),
    ] as HTMLElement[]
    const leafItem = treeItems.find(
      (el) => el.querySelector(".ui-tree__label")?.textContent === "1-1",
    )!

    fireEvent.keyDown(leafItem, { key: "ArrowRight" })

    expect(leafItem).toHaveAttribute("tabindex", "-1")
  })

  test("should collapse all on Ctrl+Shift+ArrowUp on top-level item", async () => {
    const onExpandedChange = vi.fn()

    await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onExpandedChange={onExpandedChange}
      />,
    )

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]!

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

    await render(
      <Tree.Root>
        <Tree.Item asyncChildren={asyncChildren} label="parent" />
      </Tree.Root>,
    )

    const groupItem = (
      [...document.querySelectorAll('[role="treeitem"]')] as HTMLElement[]
    )[0]!

    fireEvent.click(groupItem)

    await vi.waitFor(() => {
      expect(asyncChildren).toHaveBeenCalledTimes(1)
    })

    await vi.waitFor(async () => {
      await expect.element(page.getByText("async-1")).toBeInTheDocument()
      await expect.element(page.getByText("async-2")).toBeInTheDocument()
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

    const { user } = await render(<AsyncTree />)

    await user.click(page.getByTestId("expand"))

    await vi.waitFor(() => {
      expect(asyncChildren).toHaveBeenCalledTimes(1)
    })

    await vi.waitFor(async () => {
      await expect.element(page.getByText("lazy-1")).toBeInTheDocument()
    })
  })
})
