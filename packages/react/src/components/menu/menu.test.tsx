import { a11y, act, fireEvent, render, screen, waitFor } from "../../../test"
import { BoxIcon } from "../icon"
import { Menu } from "./"

describe("<Menu />", () => {
  test("Menu renders correctly", async () => {
    await a11y(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Item>Add item</Menu.Item>
          <Menu.Item>Edit item</Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Menu.Root.displayName).toBe("MenuRoot")
    expect(Menu.Button.displayName).toBe("MenuButton")
    expect(Menu.List.displayName).toBe("MenuList")
    expect(Menu.Item.displayName).toBe("MenuItem")
    expect(Menu.Separator.displayName).toBe("MenuSeparator")
    expect(Menu.Group.displayName).toBe("MenuGroup")
    expect(Menu.OptionGroup.displayName).toBe("MenuOptionGroup")
    expect(Menu.OptionItem.displayName).toBe("MenuOptionItem")
    expect(Menu.ItemButton.displayName).toBe("MenuItemButton")
    expect(Menu.Command.displayName).toBe("MenuCommand")
  })

  test.todo("sets `className` correctly", () => {
    render(
      <Menu.Root data-testid="root">
        <Menu.Button data-testid="button">Menu</Menu.Button>
        <Menu.List data-testid="list">
          <Menu.Item data-testid="item">Add item</Menu.Item>
          <Menu.Item>Edit item</Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-menu__root")
    expect(screen.getByTestId("button")).toHaveClass("ui-menu__button")
    expect(screen.getByTestId("list")).toHaveClass("ui-menu__list")
    expect(screen.getByTestId("item")).toHaveClass("ui-menu__item")
  })

  test.skip("should render the menu", () => {
    render(
      <Menu.Root>
        <Menu.Button data-testid="MenuButton">Menu</Menu.Button>
        <Menu.List data-testid="MenuList">
          <Menu.Item data-testid="MenuItem">Add item</Menu.Item>
          <Menu.Item>Edit item</Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )
    expect(screen.getByTestId("MenuButton")).toBeInTheDocument()
    expect(screen.getByTestId("MenuList")).toBeInTheDocument()
    expect(screen.getByTestId("MenuItem")).toBeInTheDocument()
  })

  test.skip("should render the menu with command", () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Item data-testid="MenuItem" command="⌘N">
            Add item
          </Menu.Item>
          <Menu.Item command="⌘E">Edit item</Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )
    expect(screen.getByText("⌘N")).toBeInTheDocument()
    expect(screen.getByText("⌘E")).toBeInTheDocument()
  })

  test.skip("should render the menu with icons", () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Item command="⌘N" icon={<BoxIcon data-testid="plus-icon" />}>
            Add item
          </Menu.Item>
          <Menu.Item command="⌘E" icon={<BoxIcon data-testid="edit-icon" />}>
            Edit item
          </Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )
    expect(screen.getByTestId("plus-icon")).toBeInTheDocument()
    expect(screen.getByTestId("edit-icon")).toBeInTheDocument()
  })

  test.skip("should render the menu with divider", () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Item>Add item</Menu.Item>
          <Menu.Separator data-testid="MenuSeparator" />
          <Menu.Item>Edit item</Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )
    expect(screen.getByTestId("MenuSeparator")).toBeInTheDocument()
  })

  test.skip("should render the menu with menu group", () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Group data-testid="MenuGroup" label="item">
            <Menu.Item>Add item</Menu.Item>
            <Menu.Item>Edit item</Menu.Item>
          </Menu.Group>
        </Menu.List>
      </Menu.Root>,
    )
    expect(screen.getByTestId("MenuGroup")).toBeInTheDocument()
  })

  test.skip("should render the menu with menu group label", () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Group label="group-label">
            <Menu.Item>Add item</Menu.Item>
            <Menu.Item>Edit item</Menu.Item>
          </Menu.Group>
        </Menu.List>
      </Menu.Root>,
    )
    expect(screen.getByText("group-label")).toBeInTheDocument()
  })

  test.skip("should render the menu with menu group label style", () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Group label="group-label" labelProps={{ fontSize: "12px" }}>
            <Menu.Item>Add item</Menu.Item>
            <Menu.Item>Edit item</Menu.Item>
          </Menu.Group>
        </Menu.List>
      </Menu.Root>,
    )
    expect(screen.getByText("group-label")).toBeInTheDocument()
    expect(screen.getByText("group-label")).toHaveStyle({ fontSize: "12px" })
  })

  test.skip("should render the menu with menu option group", () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.OptionGroup
            type="radio"
            data-testid="MenuOptionGroup-a"
            label="item"
          >
            <Menu.OptionItem data-testid="MenuOptionItemRadio">
              Add item
            </Menu.OptionItem>
            <Menu.OptionItem>Edit item</Menu.OptionItem>
          </Menu.OptionGroup>

          <Menu.OptionGroup
            type="checkbox"
            data-testid="MenuOptionGroup-b"
            label="order"
          >
            <Menu.OptionItem data-testid="MenuOptionItemCheckbox" value="asc">
              Ascending
            </Menu.OptionItem>
            <Menu.OptionItem value="desc">Descending</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.List>
      </Menu.Root>,
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

  test.skip("should update value with menu option group", async () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.OptionGroup
            type="radio"
            data-testid="MenuOptionGroup-a"
            label="item"
          >
            <Menu.OptionItem data-testid="MenuOptionItemRadio">
              Add item
            </Menu.OptionItem>
            <Menu.OptionItem>Edit item</Menu.OptionItem>
          </Menu.OptionGroup>

          <Menu.OptionGroup
            type="checkbox"
            defaultValue={["desc"]}
            label="order"
          >
            <Menu.OptionItem data-testid="MenuOptionItemCheckbox-a" value="asc">
              Ascending
            </Menu.OptionItem>
            <Menu.OptionItem
              data-testid="MenuOptionItemCheckbox-b"
              value="desc"
            >
              Descending
            </Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.List>
      </Menu.Root>,
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

  test.skip("should disable the menu item", () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Item>Set status</Menu.Item>
          <Menu.Item data-testid="MenuItem" disabled>
            Edit Profile
          </Menu.Item>
          <Menu.Item>Preferences</Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )
    expect(screen.getByTestId("MenuItem")).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })

  test.skip("should update value with menu option group label", () => {
    render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.OptionGroup
            type="radio"
            data-testid="MenuOptionGroup-a"
            label="option-group-label"
          >
            <Menu.OptionItem data-testid="MenuOptionItemRadio">
              Add item
            </Menu.OptionItem>
            <Menu.OptionItem>Edit item</Menu.OptionItem>
          </Menu.OptionGroup>

          <Menu.OptionGroup
            type="checkbox"
            data-testid="MenuOptionGroup-b"
            label="order"
          >
            <Menu.OptionItem data-testid="MenuOptionItemCheckbox" value="asc">
              Ascending
            </Menu.OptionItem>
            <Menu.OptionItem value="desc">Descending</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.List>
      </Menu.Root>,
    )
    expect(screen.getByText("option-group-label")).toBeInTheDocument()
  })

  test.skip("keydown events for ArrowDown", async () => {
    const { getByRole, user } = render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Item>Add item</Menu.Item>
          <Menu.Item>Edit item</Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )

    const menuButton = getByRole("button", { name: "Menu" })
    // focus the menu button
    menuButton.focus()
    // ArrowDown on the MenuButton
    await user.keyboard("[ArrowDown]")

    expect(screen.getByText("Add item")).toHaveFocus()
  })

  test.skip("keydown events for ArrowUp", async () => {
    const { getByRole, user } = render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Item>Add item</Menu.Item>
          <Menu.Item>Edit item</Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )

    const menuButton = getByRole("button", { name: "Menu" })

    // focus the menu button
    menuButton.focus()
    // ArrowUp on the MenuButton
    await user.keyboard("[ArrowUp]")

    expect(screen.getByText("Edit item")).toHaveFocus()
  })

  test.skip("keydown events for Enter", async () => {
    const { getByRole, user } = render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>
        <Menu.List>
          <Menu.Item>Add item</Menu.Item>
          <Menu.Item>Edit item</Menu.Item>
        </Menu.List>
      </Menu.Root>,
    )

    const menuButton = getByRole("button", { name: "Menu" })
    // focus the menu button
    menuButton.focus()
    // Enter on the MenuButton
    await user.keyboard("[Enter]")

    expect(screen.getByText("Add item")).toHaveFocus()
  })

  test.skip("Nested menu keyboard interactions", async () => {
    const { getByRole } = render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>

        <Menu.List>
          <Menu.Item>
            <Menu.Root>
              <Menu.ItemButton>Settings</Menu.ItemButton>

              <Menu.List>
                <Menu.Item>Extensions</Menu.Item>
                <Menu.Item>User Tasks</Menu.Item>
              </Menu.List>
            </Menu.Root>
          </Menu.Item>
          <Menu.Item>Edit Profile</Menu.Item>
          <Menu.Item>Preferences</Menu.Item>
        </Menu.List>
      </Menu.Root>,
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

  test.skip("Keyboard operations within the list", async () => {
    const { getByRole } = render(
      <Menu.Root>
        <Menu.Button>Menu</Menu.Button>

        <Menu.List>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Edit Profile</Menu.Item>
          <Menu.Item>Preferences</Menu.Item>
        </Menu.List>
      </Menu.Root>,
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
})
