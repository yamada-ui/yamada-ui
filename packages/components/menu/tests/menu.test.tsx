import {
  faChevronDown,
  faEdit,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, IconButton } from "@yamada-ui/react"
import { a11y, render, screen } from "@yamada-ui/test"
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
} from "../src"

describe("<Menu />", () => {
  test("Menu renders correctly", async () => {
    const { container } = render(
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
    await a11y(container)
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
    expect(screen.getByTestId("MenuList")).toBeInTheDocument()
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
})
