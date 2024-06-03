import {
  faChevronDown,
  faEdit,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, IconButton, Center } from "@yamada-ui/react"
import { a11y, act, fireEvent, render, screen } from "@yamada-ui/test"
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  ContextMenu,
  ContextMenuTrigger,
} from "../src"

describe("<Menu />", () => {
  test("Menu renders correctly", async () => {
    await a11y(
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon size="xs" icon={faChevronDown} />}
        >
          Menu
        </MenuButton>
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
        <MenuButton data-testid="MenuButton" as={Button}>
          Menu
        </MenuButton>
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
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <MenuItem command="⌘N" data-testid="MenuItem">
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
        <MenuButton as={IconButton}>Menu</MenuButton>
        <MenuList>
          <MenuItem
            command="⌘N"
            icon={<Icon data-testid="plus-icon" icon={faPlus} />}
          >
            Add item
          </MenuItem>
          <MenuItem
            command="⌘E"
            icon={<Icon data-testid="edit-icon" icon={faEdit} />}
          >
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
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <MenuItem>Add item</MenuItem>
          <MenuDivider data-testid="MenuDivider" />
          <MenuItem>Edit item</MenuItem>
        </MenuList>
      </Menu>,
    )
    expect(screen.getByTestId("MenuDivider")).toBeInTheDocument()
  })

  test("should render the menu with menu group", () => {
    render(
      <Menu placement="right-start">
        <MenuButton as={Button}>Menu</MenuButton>
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

  test("should render the menu with menu option group", () => {
    render(
      <Menu placement="right-start">
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <MenuOptionGroup
            data-testid="MenuOptionGroup-a"
            label="item"
            type="radio"
          >
            <MenuOptionItem data-testid="MenuOptionItemRadio">
              Add item
            </MenuOptionItem>
            <MenuOptionItem>Edit item</MenuOptionItem>
          </MenuOptionGroup>

          <MenuOptionGroup
            data-testid="MenuOptionGroup-b"
            label="order"
            type="checkbox"
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
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <MenuOptionGroup
            data-testid="MenuOptionGroup-a"
            label="item"
            type="radio"
          >
            <MenuOptionItem data-testid="MenuOptionItemRadio">
              Add item
            </MenuOptionItem>
            <MenuOptionItem>Edit item</MenuOptionItem>
          </MenuOptionGroup>

          <MenuOptionGroup
            type="checkbox"
            label="order"
            defaultValue={["desc"]}
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
    expect(checkboxItemB).not.toHaveAttribute("aria-checked")
  })

  test("should disable the menu item", () => {
    render(
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuList>
          <MenuItem>Set status</MenuItem>
          <MenuItem data-testid="MenuItem" isDisabled>
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

  test("keydown events for ArrowDown", async () => {
    const { user, getByRole } = render(
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
    const { user, getByRole } = render(
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
    const { user, getByRole } = render(
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

    expect(screen.getByText("Extensions")).toHaveFocus()

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

    const menuList = getByRole("menu")

    await act(() => fireEvent.keyDown(menuList, { key: "ArrowDown" }))
    expect(document.activeElement).toHaveTextContent("Settings")

    await act(() => fireEvent.keyDown(menuList, { key: "ArrowDown" }))
    expect(document.activeElement).toHaveTextContent("Edit Profile")

    await act(() => fireEvent.keyDown(menuList, { key: "ArrowUp" }))
    expect(document.activeElement).toHaveTextContent("Settings")

    await act(() => fireEvent.keyDown(menuList, { key: "Tab" }))
    expect(document.activeElement).toHaveTextContent("Settings")

    await act(() => fireEvent.keyDown(menuList, { key: "Home" }))
    expect(document.activeElement).toHaveTextContent("Settings")

    await act(() => fireEvent.keyDown(menuList, { key: "End" }))
    expect(document.activeElement).toHaveTextContent("Preferences")

    await act(() => fireEvent.keyDown(menuList, { key: "Escape" }))
    expect(menuList).not.toBeVisible()
  })
  test("Context menu renders correctly", async () => {
    const { container } = render(
      <ContextMenu>
        <ContextMenuTrigger
          as={Center}
          w="full"
          h="xs"
          borderWidth="1px"
          borderStyle="dashed"
          p="md"
          rounded="md"
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
          as={Center}
          w="full"
          h="xs"
          borderWidth="1px"
          borderStyle="dashed"
          p="md"
          rounded="md"
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
          as={Center}
          w="full"
          h="xs"
          borderWidth="1px"
          borderStyle="dashed"
          p="md"
          rounded="md"
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
    const menuList = screen.getByRole("menu")
    expect(menuList).toBeVisible()
    await act(() => fireEvent.keyDown(menuList, { key: "Escape" }))
    expect(menuList).not.toBeVisible()
  })
})
