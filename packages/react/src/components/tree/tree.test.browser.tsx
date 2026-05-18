import type { TreeControl } from "./use-tree"
import { useRef, useState } from "react"
import { page, render } from "#test/browser"
import { Tree } from "."
import { BoxIcon, FileIcon, FolderIcon } from "../icon"

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
  test("should select item on click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root
        defaultExpandedValue={["1"]}
        items={items}
        onSelectedChange={onSelectedChange}
      />,
    )

    await user.click(getTreeItemLabel("1-1"))

    expect(onSelectedChange).toHaveBeenCalledWith("1/1-1")
  })

  test("should select group item on click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onSelectedChange={onSelectedChange} />,
    )

    await user.click(getTreeItemLabel("1"))

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

    await user.click(getTreeItemLabel("1-1"))

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

  test("should toggle group with arrow keys", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    await user.tab()
    await user.keyboard("{ArrowRight}")
    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
    await user.keyboard("{ArrowLeft}")
    expect(onExpandedChange).toHaveBeenCalledWith([])
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

  test("should navigate with Home and End keys", async () => {
    const { user } = await render(
      <Tree.Root defaultExpandedValue={["1"]} items={items} />,
    )

    await user.tab()
    await user.keyboard("{End}")
    await expect.element(getTreeItem("5")).toHaveAttribute("tabindex", "0")
    await user.keyboard("{Home}")
    await expect.element(firstTreeItem()).toHaveAttribute("tabindex", "0")
  })

  test("should toggle group with keyboard", async () => {
    const onExpandedChange = vi.fn()

    const { user } = await render(
      <Tree.Root items={items} onExpandedChange={onExpandedChange} />,
    )

    await user.tab()
    await user.keyboard("{Enter}")
    expect(onExpandedChange).toHaveBeenCalledWith(["1"])
    await user.keyboard("{Enter}")
    expect(onExpandedChange).toHaveBeenCalledWith([])
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

  test("should check and uncheck item with checkbox", async () => {
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

    onCheckedChange.mockClear()

    await user.click(getTreeItemCheckboxIndicator("1-1"), { force: true })

    expect(onCheckedChange).toHaveBeenCalledWith(
      expect.not.arrayContaining(["1/1-1"]),
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

    await user.click(getTreeItem("4"), { force: true })

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

    await expect.element(page.getByText("async-1")).toBeInTheDocument()
    await expect.element(page.getByText("async-2")).toBeInTheDocument()
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

    await expect.element(page.getByText("lazy-1")).toBeInTheDocument()
  })
})
