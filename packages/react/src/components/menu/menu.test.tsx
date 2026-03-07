import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { useState } from "react"
import { Button } from "../button"
import { Menu } from "./"

const items: Menu.Item[] = [
  { label: "Menu 1", value: "menu-1" },
  { label: "Menu 2", value: "menu-2" },
  { label: "Menu 3", value: "menu-3" },
  { type: "separator" },
  {
    items: [
      { label: "Menu 4", value: "menu-4" },
      { label: "Menu 5", value: "menu-5" },
      { label: "Menu 6", value: "menu-6" },
    ],
    label: "Group",
    labelProps: { "data-testid": "label" },
  },
]

const itemsWithRadioGroup: Menu.Item[] = [
  {
    type: "radio",
    items: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
]

const itemsWithCheckboxGroup: Menu.Item[] = [
  {
    type: "checkbox",
    items: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
]

describe("<Menu />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            ...items,
            { type: "separator" },
            ...itemsWithRadioGroup,
            { type: "separator" },
            ...itemsWithCheckboxGroup,
          ]}
        />
      </Menu.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Menu.Root.name).toBe("MenuRoot")
    expect(Menu.Trigger.displayName).toBe("MenuTrigger")
    expect(Menu.ContextTrigger.displayName).toBe("MenuContextTrigger")
    expect(Menu.Anchor.displayName).toBe("MenuAnchor")
    expect(Menu.Content.displayName).toBe("MenuContent")
    expect(Menu.Label.displayName).toBe("MenuLabel")
    expect(Menu.Item.displayName).toBe("MenuItem")
    expect(Menu.Separator.displayName).toBe("MenuSeparator")
    expect(Menu.Group.displayName).toBe("MenuGroup")
    expect(Menu.OptionGroup.displayName).toBe("MenuOptionGroup")
    expect(Menu.OptionItem.displayName).toBe("MenuOptionItem")
    expect(Menu.Indicator.displayName).toBe("MenuIndicator")
    expect(Menu.Command.displayName).toBe("MenuCommand")
  })

  test("sets `className` correctly", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            ...items,
            { type: "separator" },
            ...itemsWithRadioGroup,
            { type: "separator" },
            ...itemsWithCheckboxGroup,
          ]}
        />
      </Menu.Root>,
    )
    expect(screen.getByRole("button", { name: /Menu/i })).toHaveClass(
      "ui-menu__trigger",
    )
    expect(screen.getByRole("menu")).toHaveClass("ui-menu__content")
    expect(screen.getByRole("menuitem", { name: /Menu 1/i })).toHaveClass(
      "ui-menu__item",
    )
    expect(screen.getAllByRole("separator")[0]).toHaveClass(
      "ui-menu__separator",
    )
    expect(screen.getByTestId("label")).toHaveClass("ui-menu__label")
    expect(screen.getAllByRole("group")[0]).toHaveClass("ui-menu__group")
    expect(screen.getAllByRole("group")[1]).toHaveClass(
      "ui-menu__group--option",
    )
    expect(
      screen.getByRole("menuitemradio", { name: /Option 1/i }),
    ).toHaveClass("ui-menu__item--option")
    expect(
      screen.getByRole("menuitemcheckbox", { name: /Option 1/i }),
    ).toHaveClass("ui-menu__item--option")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            ...items,
            { type: "separator" },
            ...itemsWithRadioGroup,
            { type: "separator" },
            ...itemsWithCheckboxGroup,
          ]}
        />
      </Menu.Root>,
    )
    expect(screen.getByRole("button", { name: /Menu/i }).tagName).toBe("BUTTON")
    expect(screen.getByRole("menu").tagName).toBe("DIV")
    expect(screen.getByRole("menuitem", { name: /Menu 1/i }).tagName).toBe(
      "DIV",
    )
    expect(screen.getAllByRole("separator")[0]?.tagName).toBe("HR")
    expect(screen.getByTestId("label").tagName).toBe("SPAN")
    expect(screen.getAllByRole("group")[0]?.tagName).toBe("DIV")
    expect(screen.getAllByRole("group")[1]?.tagName).toBe("DIV")
    expect(
      screen.getByRole("menuitemradio", { name: /Option 1/i }).tagName,
    ).toBe("DIV")
    expect(
      screen.getByRole("menuitemcheckbox", { name: /Option 1/i }).tagName,
    ).toBe("DIV")
  })

  test("opens menu on trigger click", async () => {
    const { user } = render(
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    expect(screen.queryByRole("menu")).not.toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /Menu/i }))

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument()
    })
  })

  test("closes menu on trigger click when already open", async () => {
    const { user } = render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    expect(screen.getByRole("menu")).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /Menu/i }))

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    })
  })

  test("does not open menu when disabled", async () => {
    const { user } = render(
      <Menu.Root disabled>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(screen.getByRole("button", { name: /Menu/i }))

    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  test("opens menu with ArrowDown key and focuses first item", async () => {
    const { user } = render(
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
          <Menu.Item value="item-2">Item 2</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const trigger = screen.getByRole("button", { name: /Menu/i })
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument()
    })
  })

  test("opens menu with ArrowUp key", async () => {
    const { user } = render(
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
          <Menu.Item value="item-2">Item 2</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const trigger = screen.getByRole("button", { name: /Menu/i })
    trigger.focus()
    await user.keyboard("{ArrowUp}")

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument()
    })
  })

  test("opens menu with Enter key", async () => {
    const { user } = render(
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const trigger = screen.getByRole("button", { name: /Menu/i })
    trigger.focus()
    await user.keyboard("{Enter}")

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument()
    })
  })

  test("opens menu with Space key", async () => {
    const { user } = render(
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const trigger = screen.getByRole("button", { name: /Menu/i })
    trigger.focus()
    await user.keyboard(" ")

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument()
    })
  })

  test("does not open menu on keyboard when disabled", async () => {
    const { user } = render(
      <Menu.Root disabled>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const trigger = screen.getByRole("button", { name: /Menu/i })
    trigger.focus()
    await user.keyboard("{ArrowDown}")

    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  test("calls onSelect when a menu item is clicked", async () => {
    const onSelect = vi.fn()
    const { user } = render(
      <Menu.Root defaultOpen onSelect={onSelect}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(screen.getByRole("menuitem", { name: /Item 1/i }))

    expect(onSelect).toHaveBeenCalledWith("item-1")
  })

  test("does not call onSelect when disabled", async () => {
    const onSelect = vi.fn()
    const { user } = render(
      <Menu.Root defaultOpen disabled onSelect={onSelect}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(screen.getByRole("menuitem", { name: /Item 1/i }))

    expect(onSelect).not.toHaveBeenCalled()
  })

  test("closes menu on select when closeOnSelect is true", async () => {
    const { user } = render(
      <Menu.Root closeOnSelect defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(screen.getByRole("menuitem", { name: /Item 1/i }))

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    })
  })

  test("does not close menu on select when closeOnSelect is false", async () => {
    const { user } = render(
      <Menu.Root closeOnSelect={false} defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(screen.getByRole("menuitem", { name: /Item 1/i }))

    expect(screen.getByRole("menu")).toBeInTheDocument()
  })

  test("navigates menu items with ArrowDown key", async () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
          <Menu.Item value="item-2">Item 2</Menu.Item>
          <Menu.Item value="item-3">Item 3</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const menu = screen.getByRole("menu")
    const item1 = screen.getByRole("menuitem", { name: /Item 1/i })

    fireEvent.focus(item1)

    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item1.id)
    })

    fireEvent.keyDown(item1, { key: "ArrowDown" })

    const item2 = screen.getByRole("menuitem", { name: /Item 2/i })
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item2.id)
    })
  })

  test("navigates menu items with ArrowUp key", async () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
          <Menu.Item value="item-2">Item 2</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const menu = screen.getByRole("menu")
    const item2 = screen.getByRole("menuitem", { name: /Item 2/i })

    fireEvent.focus(item2)

    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item2.id)
    })

    fireEvent.keyDown(item2, { key: "ArrowUp" })

    const item1 = screen.getByRole("menuitem", { name: /Item 1/i })
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item1.id)
    })
  })

  test("navigates to first item with Home key", async () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
          <Menu.Item value="item-2">Item 2</Menu.Item>
          <Menu.Item value="item-3">Item 3</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const menu = screen.getByRole("menu")
    const item3 = screen.getByRole("menuitem", { name: /Item 3/i })

    fireEvent.focus(item3)
    fireEvent.keyDown(item3, { key: "Home" })

    const item1 = screen.getByRole("menuitem", { name: /Item 1/i })
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item1.id)
    })
  })

  test("navigates to last item with End key", async () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
          <Menu.Item value="item-2">Item 2</Menu.Item>
          <Menu.Item value="item-3">Item 3</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const menu = screen.getByRole("menu")
    const item1 = screen.getByRole("menuitem", { name: /Item 1/i })

    fireEvent.focus(item1)
    fireEvent.keyDown(item1, { key: "End" })

    const item3 = screen.getByRole("menuitem", { name: /Item 3/i })
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item3.id)
    })
  })

  test("selects item with Enter key", () => {
    const onSelect = vi.fn()
    render(
      <Menu.Root defaultOpen onSelect={onSelect}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const item1 = screen.getByRole("menuitem", { name: /Item 1/i })
    fireEvent.focus(item1)
    fireEvent.keyDown(item1, { key: "Enter" })

    expect(onSelect).toHaveBeenCalledWith("item-1")
  })

  test("selects item with Space key", () => {
    const onSelect = vi.fn()
    render(
      <Menu.Root defaultOpen onSelect={onSelect}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const item1 = screen.getByRole("menuitem", { name: /Item 1/i })
    fireEvent.focus(item1)
    fireEvent.keyDown(item1, { key: " ", charCode: 32, code: "Space" })

    expect(onSelect).toHaveBeenCalledWith("item-1")
  })

  test("renders context menu trigger", () => {
    render(
      <Menu.Root>
        <Menu.ContextTrigger>
          <div data-testid="context-area">Right click here</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const area = screen.getByTestId("context-area")
    expect(area).toHaveAttribute("role", "application")
  })

  test("opens context menu on right click", async () => {
    render(
      <Menu.Root>
        <Menu.ContextTrigger>
          <div data-testid="context-area">Right click here</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const area = screen.getByTestId("context-area")
    fireEvent.contextMenu(area, { clientX: 100, clientY: 200 })

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument()
    })
  })

  test("does not open context menu when disabled", () => {
    render(
      <Menu.Root disabled>
        <Menu.ContextTrigger>
          <div data-testid="context-area">Right click here</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const area = screen.getByTestId("context-area")
    fireEvent.contextMenu(area, { clientX: 100, clientY: 200 })

    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  test("renders nested menu with submenu indicator", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>

          <Menu.Root>
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-item-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    expect(screen.getByText("Sub Menu")).toBeInTheDocument()
  })

  test("selects radio option in option group", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="radio" onChange={onChange}>
            <Menu.OptionItem value="option-1">Option 1</Menu.OptionItem>
            <Menu.OptionItem value="option-2">Option 2</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(screen.getByRole("menuitemradio", { name: /Option 1/i }))

    expect(onChange).toHaveBeenCalledWith("option-1")
  })

  test("toggles checkbox option in option group", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <Menu.Root closeOnSelect={false} defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="checkbox" onChange={onChange}>
            <Menu.OptionItem value="option-1">Option 1</Menu.OptionItem>
            <Menu.OptionItem value="option-2">Option 2</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(
      screen.getByRole("menuitemcheckbox", { name: /Option 1/i }),
    )

    expect(onChange).toHaveBeenCalledWith(["option-1"])
  })

  test("controls radio option group with value prop", async () => {
    const ControlledRadio = () => {
      const [value, setValue] = useState("option-1")
      return (
        <Menu.Root closeOnSelect={false} defaultOpen>
          <Menu.Trigger>
            <Button>Menu</Button>
          </Menu.Trigger>

          <Menu.Content>
            <Menu.OptionGroup type="radio" value={value} onChange={setValue}>
              <Menu.OptionItem value="option-1">Option 1</Menu.OptionItem>
              <Menu.OptionItem value="option-2">Option 2</Menu.OptionItem>
            </Menu.OptionGroup>
          </Menu.Content>
        </Menu.Root>
      )
    }

    const { user } = render(<ControlledRadio />)

    await user.click(screen.getByRole("menuitemradio", { name: /Option 2/i }))

    await waitFor(() => {
      const option2 = screen.getByRole("menuitemradio", {
        name: /Option 2/i,
      })
      expect(option2).toBeInTheDocument()
    })
  })

  test("controls checkbox option group with value prop", async () => {
    const ControlledCheckbox = () => {
      const [value, setValue] = useState<string[]>([])
      return (
        <Menu.Root closeOnSelect={false} defaultOpen>
          <Menu.Trigger>
            <Button>Menu</Button>
          </Menu.Trigger>

          <Menu.Content>
            <Menu.OptionGroup type="checkbox" value={value} onChange={setValue}>
              <Menu.OptionItem value="option-1">Option 1</Menu.OptionItem>
              <Menu.OptionItem value="option-2">Option 2</Menu.OptionItem>
            </Menu.OptionGroup>
          </Menu.Content>
        </Menu.Root>
      )
    }

    const { user } = render(<ControlledCheckbox />)

    await user.click(
      screen.getByRole("menuitemcheckbox", { name: /Option 1/i }),
    )

    await waitFor(() => {
      expect(
        screen.getByRole("menuitemcheckbox", { name: /Option 1/i }),
      ).toBeInTheDocument()
    })
  })

  test("renders disabled menu item", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item disabled value="item-1">
            Item 1
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    expect(screen.getByRole("menuitem", { name: /Item 1/i })).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })

  test("renders menu with header and footer", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          footer="Footer Text"
          header="Header Text"
          items={[{ label: "Item 1", value: "item-1" }]}
        />
      </Menu.Root>,
    )

    expect(screen.getByText("Header Text")).toBeInTheDocument()
    expect(screen.getByText("Footer Text")).toBeInTheDocument()
  })

  test("renders menu with children instead of items", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="child-item">Child Item</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    expect(
      screen.getByRole("menuitem", { name: /Child Item/i }),
    ).toBeInTheDocument()
  })

  test("renders items with radio group and separator control", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            {
              type: "radio",
              hasSeparator: false,
              items: [
                { label: "R1", value: "r1" },
                { label: "R2", value: "r2" },
              ],
            },
          ]}
        />
      </Menu.Root>,
    )

    expect(
      screen.getByRole("menuitemradio", { name: /R1/i }),
    ).toBeInTheDocument()
  })

  test("renders items with checkbox group and separator control", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            {
              type: "checkbox",
              hasSeparator: false,
              items: [
                { label: "C1", value: "c1" },
                { label: "C2", value: "c2" },
              ],
            },
          ]}
        />
      </Menu.Root>,
    )

    expect(
      screen.getByRole("menuitemcheckbox", { name: /C1/i }),
    ).toBeInTheDocument()
  })

  test("renders group items with separator control", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            {
              hasSeparator: false,
              items: [
                { label: "G1", value: "g1" },
                { label: "G2", value: "g2" },
              ],
              label: "My Group",
            },
          ]}
        />
      </Menu.Root>,
    )

    expect(screen.getByRole("menuitem", { name: /G1/i })).toBeInTheDocument()
  })

  test("disabled menu item does not activate on focus", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item disabled value="item-1">
            Disabled Item
          </Menu.Item>
          <Menu.Item value="item-2">Enabled Item</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const disabledItem = screen.getByRole("menuitem", {
      name: /Disabled Item/i,
    })
    expect(disabledItem).toHaveAttribute("aria-disabled", "true")
  })

  test("renders custom icon for radio option item", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="radio">
            <Menu.OptionItem
              icon={<span data-testid="custom-icon">*</span>}
              value="opt-1"
            >
              Opt 1
            </Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument()
  })

  test("renders default icon for checkbox option item", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="checkbox" defaultValue={["opt-1"]}>
            <Menu.OptionItem value="opt-1">Opt 1</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    const optionItem = screen.getByRole("menuitemcheckbox", {
      name: /Opt 1/i,
    })
    expect(optionItem).toBeInTheDocument()
  })

  test("onMouseMove on menu item activates it", async () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
          <Menu.Item value="item-2">Item 2</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const menu = screen.getByRole("menu")
    const item2 = screen.getByRole("menuitem", { name: /Item 2/i })

    fireEvent.mouseMove(item2)

    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item2.id)
    })
  })

  test("renders items with value prop directly", () => {
    render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content items={[{ label: "Direct Item", value: "direct" }]} />
      </Menu.Root>,
    )

    expect(
      screen.getByRole("menuitem", { name: /Direct Item/i }),
    ).toBeInTheDocument()
  })

  test("checkbox option toggles off when clicked again", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <Menu.Root closeOnSelect={false} defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup
            type="checkbox"
            defaultValue={["option-1"]}
            onChange={onChange}
          >
            <Menu.OptionItem value="option-1">Option 1</Menu.OptionItem>
            <Menu.OptionItem value="option-2">Option 2</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(
      screen.getByRole("menuitemcheckbox", { name: /Option 1/i }),
    )

    expect(onChange).toHaveBeenCalledWith([])
  })

  test("item closeOnSelect overrides menu closeOnSelect", async () => {
    const { user } = render(
      <Menu.Root closeOnSelect={false} defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item closeOnSelect value="item-1">
            Item 1
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(screen.getByRole("menuitem", { name: /Item 1/i }))

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    })
  })

  test("option item does not call onChange when disabled", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <Menu.Root closeOnSelect={false} defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="radio" onChange={onChange}>
            <Menu.OptionItem disabled value="opt-1">
              Opt 1
            </Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(screen.getByRole("menuitemradio", { name: /Opt 1/i }))

    expect(onChange).not.toHaveBeenCalled()
  })
})
