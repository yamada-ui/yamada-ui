import {
  a11y,
  act,
  fireEvent,
  render,
  screen,
  TestIcon,
  waitFor,
} from "@yamada-ui/test"
import {
  ContextMenu,
  ContextMenuTrigger,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuItemButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  MenuSeparator,
} from "../src"

describe("<Menu />", () => {
  test("Menu renders correctly", async () => {
    await a11y(
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuItem>Add item</MenuItem>
          <MenuItem>Edit item</MenuItem>
        </MenuList>
      </Menu>,
    )
  })

  test("should render the menu", () => {
    render(
      <Menu>
        <MenuButton data-testid="MenuButton">Menu</MenuButton>
        <MenuList data-testid="MenuList">
          <MenuItem data-testid="MenuItem">Add item</MenuItem>
          <MenuItem>Edit item</MenuItem>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByTestId("MenuButton")).toBeInTheDocument()
    expect(screen.getByTestId("MenuList")).toBeInTheDocument()
    expect(screen.getByTestId("MenuItem")).toBeInTheDocument()
  })

  test("should render the menu with command", () => {
    render(
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuItem data-testid="MenuItem" command="⌘N">
            Add item
          </MenuItem>
          <MenuItem command="⌘E">Edit item</MenuItem>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByText("⌘N")).toBeInTheDocument()
    expect(screen.getByText("⌘E")).toBeInTheDocument()
  })

  test("should render the menu with icons", () => {
    render(
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuItem command="⌘N" icon={<TestIcon data-testid="plus-icon" />}>
            Add item
          </MenuItem>
          <MenuItem command="⌘E" icon={<TestIcon data-testid="edit-icon" />}>
            Edit item
          </MenuItem>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByTestId("plus-icon")).toBeInTheDocument()
    expect(screen.getByTestId("edit-icon")).toBeInTheDocument()
  })

  test("should render the menu with divider", () => {
    render(
      <Menu placement="right-start">
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuItem>Add item</MenuItem>
          <MenuSeparator data-testid="MenuSeparator" />
          <MenuItem>Edit item</MenuItem>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByTestId("MenuSeparator")).toBeInTheDocument()
  })

  test("should render the menu with menu group", () => {
    render(
      <Menu placement="right-start">
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuGroup data-testid="MenuGroup" label="item">
            <MenuItem>Add item</MenuItem>
            <MenuItem>Edit item</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByTestId("MenuGroup")).toBeInTheDocument()
  })

  test("should render the menu with menu group label", () => {
    render(
      <Menu placement="right-start">
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuGroup label="group-label">
            <MenuItem>Add item</MenuItem>
            <MenuItem>Edit item</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByText("group-label")).toBeInTheDocument()
  })

  test("should render the menu with menu group label style", () => {
    render(
      <Menu placement="right-start">
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuGroup label="group-label" labelProps={{ fontSize: "12px" }}>
            <MenuItem>Add item</MenuItem>
            <MenuItem>Edit item</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByText("group-label")).toBeInTheDocument()
    expect(screen.getByText("group-label")).toHaveStyle({ fontSize: "12px" })
  })

  test("should render the menu with menu option group", () => {
    render(
      <Menu placement="right-start">
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuOptionGroup
            type="radio"
            data-testid="MenuOptionGroup-a"
            label="item"
          >
            <MenuOptionItem data-testid="MenuOptionItemRadio">
              Add item
            </MenuOptionItem>
            <MenuOptionItem>Edit item</MenuOptionItem>
          </MenuOptionGroup>

          <MenuOptionGroup
            type="checkbox"
            data-testid="MenuOptionGroup-b"
            label="order"
          >
            <MenuOptionItem data-testid="MenuOptionItemCheckbox" value="asc">
              Ascending
            </MenuOptionItem>
            <MenuOptionItem value="desc">Descending</MenuOptionItem>
          </MenuOptionGroup>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByTestId("MenuOptionGroup-a")).toBeInTheDocument()
    expect(screen.getByTestId("MenuOptionGroup-b")).toBeInTheDocument()
    expect(screen.getByTestId("MenuOptionItemRadio")).toHaveAttribute(
      "type",
      "radio",
    )
    expect(screen.getByTestId("MenuOptionItemCheckbox")).toHaveAttribute(
      "type",
      "checkbox",
    )
    expect(screen.getByTestId("MenuOptionItemCheckbox")).toHaveAttribute(
      "value",
      "asc",
    )
  })

  test("should update value with menu option group", async () => {
    render(
      <Menu placement="right-start">
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuOptionGroup
            type="radio"
            data-testid="MenuOptionGroup-a"
            label="item"
          >
            <MenuOptionItem data-testid="MenuOptionItemRadio">
              Add item
            </MenuOptionItem>
            <MenuOptionItem>Edit item</MenuOptionItem>
          </MenuOptionGroup>

          <MenuOptionGroup
            type="checkbox"
            defaultValue={["desc"]}
            label="order"
          >
            <MenuOptionItem data-testid="MenuOptionItemCheckbox-a" value="asc">
              Ascending
            </MenuOptionItem>
            <MenuOptionItem data-testid="MenuOptionItemCheckbox-b" value="desc">
              Descending
            </MenuOptionItem>
          </MenuOptionGroup>
        </MenuList>
      </Menu>,
    )

    const radioItem = screen.getByTestId("MenuOptionItemRadio")
    await act(() => fireEvent.click(radioItem))
    expect(radioItem).toHaveAttribute("aria-checked", "true")

    const checkboxItemA = screen.getByTestId("MenuOptionItemCheckbox-a")
    await act(() => fireEvent.click(checkboxItemA))
    expect(checkboxItemA).toHaveAttribute("aria-checked", "true")

    const checkboxItemB = screen.getByTestId("MenuOptionItemCheckbox-b")
    await act(() => fireEvent.click(checkboxItemB))
    expect(checkboxItemB).toHaveAttribute("aria-checked", "false")
  })

  test("should disable the menu item", () => {
    render(
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuItem>Set status</MenuItem>
          <MenuItem data-testid="MenuItem" disabled>
            Edit Profile
          </MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByTestId("MenuItem")).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })

  test("should update value with menu option group label", () => {
    render(
      <Menu placement="right-start">
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuOptionGroup
            type="radio"
            data-testid="MenuOptionGroup-a"
            label="option-group-label"
          >
            <MenuOptionItem data-testid="MenuOptionItemRadio">
              Add item
            </MenuOptionItem>
            <MenuOptionItem>Edit item</MenuOptionItem>
          </MenuOptionGroup>

          <MenuOptionGroup
            type="checkbox"
            data-testid="MenuOptionGroup-b"
            label="order"
          >
            <MenuOptionItem data-testid="MenuOptionItemCheckbox" value="asc">
              Ascending
            </MenuOptionItem>
            <MenuOptionItem value="desc">Descending</MenuOptionItem>
          </MenuOptionGroup>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByText("option-group-label")).toBeInTheDocument()
  })

  test("keydown events for ArrowDown", async () => {
    const { getByRole, user } = render(
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuItem>Add item</MenuItem>
          <MenuItem>Edit item</MenuItem>
        </MenuList>
      </Menu>,
    )

    const menuButton = getByRole("button", { name: "Menu" })
    // focus the menu button
    menuButton.focus()
    // ArrowDown on the MenuButton
    await user.keyboard("[ArrowDown]")

    expect(screen.getByText("Add item")).toHaveFocus()
  })

  test("keydown events for ArrowUp", async () => {
    const { getByRole, user } = render(
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuItem>Add item</MenuItem>
          <MenuItem>Edit item</MenuItem>
        </MenuList>
      </Menu>,
    )

    const menuButton = getByRole("button", { name: "Menu" })

    // focus the menu button
    menuButton.focus()
    // ArrowUp on the MenuButton
    await user.keyboard("[ArrowUp]")

    expect(screen.getByText("Edit item")).toHaveFocus()
  })

  test("keydown events for Enter", async () => {
    const { getByRole, user } = render(
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuItem>Add item</MenuItem>
          <MenuItem>Edit item</MenuItem>
        </MenuList>
      </Menu>,
    )

    const menuButton = getByRole("button", { name: "Menu" })
    // focus the menu button
    menuButton.focus()
    // Enter on the MenuButton
    await user.keyboard("[Enter]")

    expect(screen.getByText("Add item")).toHaveFocus()
  })

  test("Nested menu keyboard interactions", async () => {
    const { getByRole } = render(
      <Menu>
        <MenuButton>Menu</MenuButton>

        <MenuList>
          <MenuItem>
            <Menu>
              <MenuItemButton>Settings</MenuItemButton>

              <MenuList>
                <MenuItem>Extensions</MenuItem>
                <MenuItem>User Tasks</MenuItem>
              </MenuList>
            </Menu>
          </MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuList>
      </Menu>,
    )

    const menuButton = getByRole("button", { name: "Menu" })
    const menuItemButton = screen.getByText("Settings")

    fireEvent.focus(menuButton)

    await act(() => fireEvent.keyDown(menuButton, { key: "ArrowDown" }))
    await act(() => fireEvent.keyDown(menuItemButton, { key: "ArrowRight" }))

    await waitFor(() => expect(screen.getByText("Extensions")).toHaveFocus())

    await act(() =>
      fireEvent.keyDown(screen.getByText("Extensions"), { key: "ArrowLeft" }),
    )

    expect(menuItemButton.parentElement?.parentElement).toHaveFocus()
  })

  test("Keyboard operations within the list", async () => {
    const { getByRole } = render(
      <Menu>
        <MenuButton>Menu</MenuButton>

        <MenuList>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuList>
      </Menu>,
    )

    const menuButton = getByRole("button", { name: "Menu" })

    await act(() => fireEvent.click(menuButton))

    const menuList = await screen.findByRole("menu")

    await act(() => fireEvent.keyDown(menuList, { key: "ArrowDown" }))
    expect(document.activeElement).toHaveTextContent("Settings")

    await act(() => fireEvent.keyDown(menuList, { key: "ArrowDown" }))
    expect(document.activeElement).toHaveTextContent("Edit Profile")

    await act(() => fireEvent.keyDown(menuList, { key: "ArrowUp" }))
    expect(document.activeElement).toHaveTextContent("Settings")

    await act(() => fireEvent.keyDown(menuList, { key: "End" }))
    expect(document.activeElement).toHaveTextContent("Preferences")

    await act(() => fireEvent.keyDown(menuList, { key: "Home" }))
    expect(document.activeElement).toHaveTextContent("Settings")

    await act(() => fireEvent.keyDown(menuList, { key: "Escape" }))
    expect(menuList).not.toBeVisible()
  })
  test("Context menu renders correctly", async () => {
    const { container } = render(
      <ContextMenu>
        <ContextMenuTrigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenuTrigger>
        <MenuList>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Redo</MenuItem>
        </MenuList>
      </ContextMenu>,
    )
    await a11y(container)
  })
  test("should render the context menu", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenuTrigger>
        <MenuList>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Redo</MenuItem>
        </MenuList>
      </ContextMenu>,
    )
    expect(screen.getByText("Right click here")).toBeInTheDocument()
  })
  test("context menu events", async () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenuTrigger>
        <MenuList>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Redo</MenuItem>
        </MenuList>
      </ContextMenu>,
    )
    const contextMenuTrigger = screen.getByText("Right click here")
    await act(() => fireEvent.contextMenu(contextMenuTrigger))
    const menuList = await screen.findByRole("menu")
    expect(menuList).toBeVisible()
    await act(() => fireEvent.keyDown(menuList, { key: "Escape" }))
    expect(menuList).not.toBeVisible()
  })

  test("should render the menu separator in the context menu after right click", async () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenuTrigger>
        <MenuList>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Redo</MenuItem>
          <MenuSeparator data-testid="Menu_separator" />
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenuList>
      </ContextMenu>,
    )
    const contextMenuTrigger = screen.getByText("Right click here")
    await act(() => fireEvent.contextMenu(contextMenuTrigger))
    const separator = screen.getByTestId("Menu_separator")
    expect(separator).toBeInTheDocument()
  })

  test("should render the menu separator in the context menu after pressing down arrow key", async () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="md"
          w="full"
        >
          Right click here
        </ContextMenuTrigger>
        <MenuList>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Redo</MenuItem>
          <MenuSeparator data-testid="Menu_separator" />
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenuList>
      </ContextMenu>,
    )
    const contextMenuTrigger = screen.getByText("Right click here")
    await act(() => fireEvent.focus(contextMenuTrigger))
    await act(() => fireEvent.keyDown(contextMenuTrigger, { key: "ArrowDown" }))
    const separator = screen.getByTestId("Menu_separator")
    expect(separator).toBeInTheDocument()
  })
})
