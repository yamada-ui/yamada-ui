import { a11y, render, screen } from "#test"
import { Button } from "../button"
import { Menu } from "./"
import { fullItems } from "./menu.test.fixtures"

describe("<Menu />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content items={fullItems} />
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

        <Menu.Content items={fullItems} />
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

        <Menu.Content items={fullItems} />
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
})
