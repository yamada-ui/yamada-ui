import type { TreeControl } from "./use-tree"
import { useRef, useState } from "react"
import { vi } from "vitest"
import { a11y, page, render } from "#test/browser"
import { Tree } from "."
import { BoxIcon, FileIcon, FolderIcon, XIcon } from "../icon"
import { useTree } from "./use-tree"

const exactName = (name: string) =>
  new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`)

const getTreeItem = (name: string) =>
  page.getByRole("treeitem", { name: exactName(name) })

const getTreeItemLabel = (name: string) =>
  page.getByText(exactName(name)).first()

const firstTreeItem = () => page.getByRole("treeitem").first()

const getMultiSelectModifier = () =>
  /Mac|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control"

const getTreeItemCheckboxIndicator = (name: string) => {
  const item = getTreeItem(name).element()
  const indicator = item.querySelector("[data-indicator]")

  if (!(indicator instanceof HTMLElement))
    throw new Error("Tree checkbox indicator is not found")

  return indicator
}

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
    const root = page.getByRole("tree")
    const group = page.getByRole("group").first()
    const groupItem = getTreeItem("1")
    const item = getTreeItem("1-1")
    const checkbox = item.element().querySelector(".ui-tree__checkbox")
    const startElement = item
      .element()
      .querySelector(".ui-tree__element--start")
    const label = item.element().querySelector(".ui-tree__label")
    const endElement = item.element().querySelector(".ui-tree__element--end")

    if (!(checkbox instanceof HTMLElement))
      throw new Error("Tree checkbox is not found")
    if (!(startElement instanceof HTMLElement))
      throw new Error("Tree start element is not found")
    if (!(label instanceof HTMLElement))
      throw new Error("Tree label is not found")
    if (!(endElement instanceof HTMLElement))
      throw new Error("Tree end element is not found")

    await expect.element(root).toHaveClass("ui-tree__root")
    await expect.element(group).toHaveClass("ui-tree__group")
    await expect.element(groupItem).toHaveClass("ui-tree__item")
    await expect.element(item).toHaveClass("ui-tree__item")
    expect(checkbox).toHaveClass("ui-tree__checkbox")
    expect(startElement).toHaveClass(
      "ui-tree__element",
      "ui-tree__element--start",
    )
    expect(label).toHaveClass("ui-tree__label")
    expect(endElement).toHaveClass("ui-tree__element", "ui-tree__element--end")
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
    const group = page.getByRole("group").first().element()
    const groupItem = firstTreeItem().element()
    const item = getTreeItem("1-1").element()
    expect(page.getByRole("tree").element().tagName).toBe("UL")
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

  test("should not render indicator", async () => {
    await render(<Tree.Root indicatorHidden items={items} />)
    expect(
      getTreeItem("1").element().querySelector(".ui-tree__indicator"),
    ).toBeNull()
  })

  test("should select item on click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    const leafItem = getTreeItemLabel("1-1")

    await user.click(leafItem)

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should select group item on click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onSelectedChange={onSelectedChange} />,
    )

    const groupItem = getTreeItemLabel("1")

    await user.click(groupItem)

    expect(onSelectedChange).toHaveBeenCalledWith("1")
  })

  test("should expand and collapse group on click", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    const groupItem = getTreeItemLabel("1")

    await user.click(groupItem)

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
    await expect
      .element(firstTreeItem())
      .toHaveAttribute("aria-expanded", "true")

    await user.click(groupItem)

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

    await expect
      .element(getTreeItem("1-1"))
      .toHaveAttribute("aria-selected", "true")
  })

  test("should support controlled expandedValue", async () => {
    await render(<Tree.Root expandedValue={["1"]} items={items} />)

    await expect
      .element(firstTreeItem())
      .toHaveAttribute("aria-expanded", "true")
  })

  test("should support multiple selection", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    const leafItem = getTreeItemLabel("1-1")

    await user.click(leafItem)

    expect(onSelectedChange).toHaveBeenCalledWith(["1/1-1"])
  })

  test("should support multiple selection with ctrl+click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        defaultSelectedValue={["1/1-1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.keyboard(`{${getMultiSelectModifier()}>}`)
    await user.click(getTreeItemLabel("3"), {})
    await user.keyboard(`{/${getMultiSelectModifier()}}`)

    expect(onSelectedChange).toHaveBeenCalledWith(expect.arrayContaining(["3"]))
  })

  test("should collapse group with ArrowLeft key", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onExpandedChange={onExpandedChange}
      />,
    )

    await user.tab()
    await user.keyboard("{ArrowLeft}")

    expect(onExpandedChange).toHaveBeenCalledWith([])
  })

  test("should expand group with ArrowRight key", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    await user.tab()
    await user.keyboard("{ArrowRight}")

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
  })

  test("should navigate to parent with ArrowLeft on nested item", async () => {
    const { user } = await render(
      <Tree.Root defaultExpandedValue={["1"]} items={items} />,
    )

    await user.tab()
    await user.keyboard("{ArrowDown}")
    await expect.element(getTreeItem("1-1")).toHaveAttribute("tabindex", "0")

    await user.keyboard("{ArrowLeft}")

    await expect.element(firstTreeItem()).toHaveAttribute("tabindex", "0")
  })

  test("should navigate to first item with Home key", async () => {
    const { user } = await render(
      <Tree.Root defaultExpandedValue={["1"]} items={items} />,
    )

    await user.tab()
    await user.keyboard("{End}")
    await expect.element(getTreeItem("5")).toHaveAttribute("tabindex", "0")

    await user.keyboard("{Home}")

    await expect.element(firstTreeItem()).toHaveAttribute("tabindex", "0")
  })

  test("should navigate to last item with End key", async () => {
    const { user } = await render(
      <Tree.Root defaultExpandedValue={["1"]} items={items} />,
    )

    await user.tab()
    await user.keyboard("{End}")

    await expect.element(getTreeItem("5")).toHaveAttribute("tabindex", "0")
  })

  test("should toggle group with Enter key", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    await user.tab()
    await user.keyboard("{Enter}")

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
  })

  test("should toggle group with Space key", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    await user.tab()
    await user.keyboard("{Space}")

    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
  })

  test("should select all with Ctrl+A in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.tab()
    await user.keyboard("{Control>}a{/Control}")

    expect(onSelectedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should expand all with Ctrl+Shift+ArrowDown", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    await user.tab()
    await user.keyboard("{Control>}{Shift>}{ArrowDown}{/Shift}{/Control}")

    expect(onExpandedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should collapse all with Ctrl+Shift+ArrowUp", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onExpandedChange={onExpandedChange}
      />,
    )

    await user.click(getTreeItemLabel("1-1"))
    await user.keyboard("{Control>}{Shift>}{ArrowUp}{/Shift}{/Control}")

    expect(onExpandedChange).toHaveBeenCalledWith([])
  })

  test("should select with Shift+ArrowDown in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.tab()
    await user.keyboard("{Shift>}{ArrowDown}{/Shift}")

    expect(onSelectedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-1"]),
    )
  })

  test("should check item with checkbox", async () => {
    const onCheckedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        checkable
        defaultExpandedValue={["1"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    await user.click(getTreeItemCheckboxIndicator("1-1"), { force: true })

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-1"]),
    )
  })

  test("should check parent and children together", async () => {
    const onCheckedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        checkable
        defaultExpandedValue={["1", "1/1-2"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    await user.click(getTreeItemCheckboxIndicator("1"), { force: true })

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

    await user.click(page.getByTestId("expand"), { force: true })

    await expect
      .element(firstTreeItem())
      .toHaveAttribute("aria-expanded", "true")

    await user.click(page.getByTestId("collapse"), { force: true })

    await expect
      .element(firstTreeItem())
      .toHaveAttribute("aria-expanded", "false")
  })

  test("should set aria-multiselectable on tree root", async () => {
    await render(<Tree.Root items={items} multiple />)

    await expect
      .element(page.getByRole("tree"))
      .toHaveAttribute("aria-multiselectable", "true")
  })

  test("should merge root props from useTree options and getRootProps", async () => {
    const onClickFromOptions = vi.fn()
    const onClickFromGetter = vi.fn()
    const refFromOptions = vi.fn()
    const refFromGetter = vi.fn()

    const TestComponent = () => {
      const { getRootProps } = useTree({
        ref: refFromOptions,
        className: "option-root",
        style: { color: "red" },
        onClick: onClickFromOptions,
      })

      return (
        <ul
          data-testid="hook-root"
          {...getRootProps({
            ref: refFromGetter,
            className: "getter-root",
            style: { fontSize: "16px" },
            onClick: onClickFromGetter,
          })}
        >
          <li role="treeitem">Item</li>
        </ul>
      )
    }

    const { user } = await render(<TestComponent />)

    const root = page.getByTestId("hook-root").element() as HTMLElement

    await expect
      .element(page.getByTestId("hook-root"))
      .toHaveClass("option-root")
    await expect
      .element(page.getByTestId("hook-root"))
      .toHaveClass("getter-root")
    await expect.element(page.getByTestId("hook-root")).toHaveStyle({
      color: "red",
      fontSize: "16px",
    })

    await user.click(page.getByRole("treeitem", { name: "Item" }))

    expect(onClickFromOptions).toHaveBeenCalledTimes(1)
    expect(onClickFromGetter).toHaveBeenCalledTimes(1)
    expect(refFromOptions).toHaveBeenCalledWith(root)
    expect(refFromGetter).toHaveBeenCalledWith(root)
  })

  test("should merge item slot props with slot component props", async () => {
    const onSelectedChange = vi.fn()
    const onLabelClick = vi.fn()
    const indicatorRef = vi.fn()
    const checkboxRef = vi.fn()
    const startElementRef = vi.fn()
    const endElementRef = vi.fn()
    const labelRef = vi.fn()

    const { user } = await render(
      <Tree.Root checkable onSelectedChange={onSelectedChange}>
        <Tree.Item
          endElement={<XIcon />}
          label="parent"
          startElement={<FolderIcon />}
          checkboxProps={{
            ref: checkboxRef,
            className: "custom-checkbox",
          }}
          endElementProps={{
            ref: endElementRef,
            className: "custom-end-element",
          }}
          indicatorProps={{
            ref: indicatorRef,
            className: "custom-indicator",
          }}
          labelProps={{
            ref: labelRef,
            className: "custom-label",
            onClick: onLabelClick,
          }}
          startElementProps={{
            ref: startElementRef,
            className: "custom-start-element",
          }}
        />
      </Tree.Root>,
    )

    const item = getTreeItem("parent").element()
    const indicator = item.querySelector(".ui-tree__indicator")
    const checkbox = item.querySelector(".ui-tree__checkbox")
    const startElement = item.querySelector(".ui-tree__element--start")
    const label = item.querySelector(".ui-tree__label")
    const endElement = item.querySelector(".ui-tree__element--end")
    const checkboxInput = checkbox?.querySelector("input[type='checkbox']")

    if (!(indicator instanceof SVGElement))
      throw new Error("Tree indicator is not found")
    if (!(checkbox instanceof HTMLElement))
      throw new Error("Tree checkbox is not found")
    if (!(checkboxInput instanceof HTMLInputElement))
      throw new Error("Tree checkbox input is not found")
    if (!(startElement instanceof HTMLElement))
      throw new Error("Tree start element is not found")
    if (!(label instanceof HTMLElement))
      throw new Error("Tree label is not found")
    if (!(endElement instanceof HTMLElement))
      throw new Error("Tree end element is not found")

    expect(indicator).toHaveClass("ui-tree__indicator", "custom-indicator")
    expect(checkbox).toHaveClass("ui-tree__checkbox", "custom-checkbox")
    expect(startElement).toHaveClass(
      "ui-tree__element",
      "ui-tree__element--start",
      "custom-start-element",
    )
    expect(label).toHaveClass("ui-tree__label", "custom-label")
    expect(endElement).toHaveClass(
      "ui-tree__element",
      "ui-tree__element--end",
      "custom-end-element",
    )
    expect(indicatorRef).toHaveBeenCalledWith(indicator)
    expect(checkboxRef).toHaveBeenCalledWith(checkboxInput)
    expect(startElementRef).toHaveBeenCalledWith(startElement)
    expect(endElementRef).toHaveBeenCalledWith(endElement)
    expect(labelRef).toHaveBeenCalledWith(label)

    await user.click(getTreeItemLabel("parent"))

    expect(onSelectedChange).toHaveBeenCalledWith("parent")
    expect(onLabelClick).toHaveBeenCalledTimes(1)
  })

  test("should search items by typing characters", async () => {
    const { user } = await render(<Tree.Root items={items} />)

    await user.tab()
    await user.keyboard("5")

    await expect.element(getTreeItem("5")).toHaveAttribute("tabindex", "0")
  })

  test("should not respond to disabled item click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onSelectedChange={onSelectedChange} />,
    )

    const disabledItem = getTreeItem("4")

    await user.click(disabledItem, { force: true })

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should navigate into expanded group with ArrowRight", async () => {
    const { user } = await render(
      <Tree.Root defaultExpandedValue={["1"]} items={items} />,
    )

    await user.tab()
    await user.keyboard("{ArrowRight}")

    await expect.element(getTreeItem("1-1")).toHaveAttribute("tabindex", "0")
  })

  test("should uncheck item when clicking checked checkbox", async () => {
    const onCheckedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        checkable
        checkedValue={["1/1-1"]}
        defaultExpandedValue={["1"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    await user.click(getTreeItemCheckboxIndicator("1-1"), { force: true })

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.not.arrayContaining(["1/1-1"]),
    )
  })

  test("should set aria-multiselectable when checkable", async () => {
    await render(<Tree.Root checkable items={items} />)

    await expect
      .element(page.getByRole("tree"))
      .toHaveAttribute("aria-multiselectable", "true")
  })

  test("should select item with Enter key on leaf", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.click(getTreeItemLabel("1-1"))
    await user.keyboard("{Enter}")

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should select item with Space key on leaf", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.click(getTreeItemLabel("1-1"))
    await user.keyboard("{Space}")

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should not respond to keyboard on disabled item", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onSelectedChange={onSelectedChange} />,
    )

    await user.click(getTreeItem("4"), { force: true })
    await user.keyboard("{Enter}")

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should ignore Ctrl+A in single selection mode", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.tab()
    await user.keyboard("{Control>}a{/Control}")

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should not expand disabled group with ArrowRight", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    await user.click(getTreeItem("2"), { force: true })
    await user.keyboard("{ArrowRight}")

    expect(onExpandedChange).not.toHaveBeenCalled()
  })

  test("should check nested item and propagate to parent", async () => {
    const onCheckedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        checkable
        defaultExpandedValue={["1", "1/1-2"]}
        items={items}
        onCheckedChange={onCheckedChange}
      />,
    )

    await user.click(getTreeItemCheckboxIndicator("1-2-1"), { force: true })

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-2/1-2-1"]),
    )
  })

  test("should deselect item with ctrl+click in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        defaultSelectedValue={["1/1-1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.keyboard(`{${getMultiSelectModifier()}>}`)
    await user.click(getTreeItemLabel("1-1"), {})
    await user.keyboard(`{/${getMultiSelectModifier()}}`)

    expect(onSelectedChange).toHaveBeenCalledWith([])
  })

  test("should select range with shift+click in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        defaultSelectedValue={["1/1-1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.keyboard("{Shift>}")
    await user.click(getTreeItem("3"), { force: true })
    await user.keyboard("{/Shift}")

    expect(onSelectedChange).toHaveBeenCalledWith(
      expect.arrayContaining(["1/1-1"]),
    )
  })

  test("should handle Shift+ArrowUp in multiple mode", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        multiple
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.tab()
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Shift>}{ArrowUp}{/Shift}")

    expect(onSelectedChange).toHaveBeenCalledWith(expect.arrayContaining(["1"]))
  })

  test("should not navigate with ArrowRight on leaf item", async () => {
    const { user } = await render(
      <Tree.Root defaultExpandedValue={["1"]} items={items} />,
    )

    await user.tab()
    await user.keyboard("{ArrowDown}")
    await expect.element(getTreeItem("1-1")).toHaveAttribute("tabindex", "0")

    await user.keyboard("{ArrowRight}")

    await expect.element(getTreeItem("1-1")).toHaveAttribute("tabindex", "0")
  })

  test("should collapse all on Ctrl+Shift+ArrowUp on top-level item", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onExpandedChange={onExpandedChange}
      />,
    )

    await user.click(getTreeItemLabel("1-1"))
    await user.keyboard("{Control>}{Shift>}{ArrowUp}{/Shift}{/Control}")

    expect(onExpandedChange).toHaveBeenCalledWith([])
  })

  test("should load async children on expand", async () => {
    const asyncChildren = vi
      .fn()
      .mockResolvedValue([{ label: "async-1" }, { label: "async-2" }])

    const { user } = await render(
      <Tree.Root>
        <Tree.Item asyncChildren={asyncChildren} label="parent" />
      </Tree.Root>,
    )

    await user.click(getTreeItemLabel("parent"))

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

    await user.click(page.getByTestId("expand"), { force: true })

    await vi.waitFor(() => {
      expect(asyncChildren).toHaveBeenCalledTimes(1)
    })

    await vi.waitFor(async () => {
      await expect.element(page.getByText("lazy-1")).toBeInTheDocument()
    })
  })
})
