import { ContextMenu } from "."
import { a11y, act, fireEvent, render, screen } from "../../../test"
import { Menu } from "../menu"

describe("<ContextMenu />", () => {
  test("Context menu renders correctly", async () => {
    const { container } = render(
      <ContextMenu.Root>
        <ContextMenu.Trigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenu.Trigger>
        <Menu.List>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
        </Menu.List>
      </ContextMenu.Root>,
    )
    await a11y(container)
  })

  test("sets `displayName` correctly", () => {
    expect(ContextMenu.Root.displayName).toBe("ContextMenuRoot")
    expect(ContextMenu.Trigger.displayName).toBe("ContextMenuTrigger")
  })

  test.todo("sets `className` correctly", () => {
    render(
      <ContextMenu.Root data-testid="root">
        <ContextMenu.Trigger
          data-testid="trigger"
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenu.Trigger>
        <Menu.List>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
        </Menu.List>
      </ContextMenu.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-context-menu__root")
    expect(screen.getByTestId("trigger")).toHaveClass(
      "ui-context-menu__trigger",
    )
  })

  test("should render the context menu", () => {
    render(
      <ContextMenu.Root>
        <ContextMenu.Trigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenu.Trigger>
        <Menu.List>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
        </Menu.List>
      </ContextMenu.Root>,
    )
    expect(screen.getByText("Right click here")).toBeInTheDocument()
  })

  test.skip("context menu events", async () => {
    render(
      <ContextMenu.Root>
        <ContextMenu.Trigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenu.Trigger>
        <Menu.List>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
        </Menu.List>
      </ContextMenu.Root>,
    )
    const contextMenuTrigger = screen.getByText("Right click here")
    await act(() => fireEvent.contextMenu(contextMenuTrigger))
    const menuList = await screen.findByRole("menu")
    expect(menuList).toBeVisible()
    await act(() => fireEvent.keyDown(menuList, { key: "Escape" }))
    expect(menuList).not.toBeVisible()
  })

  test.skip("should render the menu separator in the context menu after right click", async () => {
    render(
      <ContextMenu.Root>
        <ContextMenu.Trigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenu.Trigger>
        <Menu.List>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
          <Menu.Separator data-testid="Menu_separator" />
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menu.List>
      </ContextMenu.Root>,
    )
    const contextMenuTrigger = screen.getByText("Right click here")
    await act(() => fireEvent.contextMenu(contextMenuTrigger))
    const separator = screen.getByTestId("Menu_separator")
    expect(separator).toBeInTheDocument()
  })

  test.skip("should render the menu separator in the context menu after pressing down arrow key", async () => {
    render(
      <ContextMenu.Root>
        <ContextMenu.Trigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenu.Trigger>
        <Menu.List>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
          <Menu.Separator data-testid="Menu_separator" />
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menu.List>
      </ContextMenu.Root>,
    )
    const contextMenuTrigger = screen.getByText("Right click here")
    await act(() => fireEvent.focus(contextMenuTrigger))
    await act(() => fireEvent.keyDown(contextMenuTrigger, { key: "ArrowDown" }))
    const separator = screen.getByTestId("Menu_separator")
    expect(separator).toBeInTheDocument()
  })
})
