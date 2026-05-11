import { useState } from "react"
import { page, render, waitFor } from "#test/browser"
import { Button } from "../button"
import { Menu } from "./"
import { fullItems } from "./menu.test.fixtures"

describe("<Menu />", () => {
  test("renders full items config with separator, radio, checkbox, and group", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content items={fullItems} />
      </Menu.Root>,
    )

    await expect.element(page.getByRole("menu")).toBeInTheDocument()
    await expect
      .element(page.getByRole("menuitem", { name: /Menu 1/i }))
      .toBeInTheDocument()
    await expect.element(page.getByTestId("label")).toBeInTheDocument()
    await expect
      .element(page.getByRole("menuitemradio", { name: /Option 1/i }))
      .toBeInTheDocument()
    await expect
      .element(page.getByRole("menuitemcheckbox", { name: /Option 1/i }))
      .toBeInTheDocument()
  })

  test("keeps useMenuItem click handler order as getter then consumer then internal", async () => {
    const calls: string[] = []
    const onChange = vi.fn(() => calls.push("getter"))
    const onClick = vi.fn(() => calls.push("consumer"))
    const onSelect = vi.fn(() => calls.push("internal"))
    const { user } = await render(
      <Menu.Root defaultOpen onSelect={onSelect}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="checkbox" onChange={onChange}>
            <Menu.OptionItem value="opt-1" onClick={onClick}>
              Opt 1
            </Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByRole("menuitemcheckbox", { name: /Opt 1/i }))

    expect(calls).toStrictEqual(["getter", "consumer", "internal"])
    expect(onChange).toHaveBeenCalledWith(["opt-1"])
    expect(onSelect).toHaveBeenCalledWith("opt-1")
  })

  test("opens menu on trigger click", async () => {
    const { user } = await render(
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()
    await user.click(page.getByRole("button", { name: /Menu/i }))

    await expect.element(page.getByRole("menu")).toBeInTheDocument()
  })

  test("closes menu on trigger click when already open", async () => {
    const { user } = await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect.element(page.getByRole("menu")).toBeInTheDocument()

    await user.click(page.getByRole("button", { name: /Menu/i }))

    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()
  })

  test("does not open menu when disabled", async () => {
    const { user } = await render(
      <Menu.Root disabled>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByRole("button", { name: /Menu/i }))

    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()
  })

  test("opens menu with ArrowDown key and focuses first item", async () => {
    const { user } = await render(
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

    await user.click(page.getByRole("button", { name: /Menu/i }))

    await expect.element(page.getByRole("menu")).toBeInTheDocument()
  })

  test("opens menu with keyboard", async () => {
    const { user } = await render(
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const trigger = page.getByRole("button", { name: /Menu/i }).element()

    trigger.focus()
    await user.keyboard("{ArrowUp}")
    await expect.element(page.getByRole("menu")).toBeInTheDocument()

    await user.keyboard("{Escape}")
    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()

    trigger.focus()
    await user.keyboard("{Enter}")
    await expect.element(page.getByRole("menu")).toBeInTheDocument()

    await user.keyboard("{Escape}")
    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()

    trigger.focus()
    await user.keyboard(" ")
    await expect.element(page.getByRole("menu")).toBeInTheDocument()
  })

  test("does not open menu on keyboard when disabled", async () => {
    const { user } = await render(
      <Menu.Root disabled>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const trigger = page.getByRole("button", { name: /Menu/i }).element()
    trigger.focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()
  })

  test("calls onSelect when a menu item is clicked", async () => {
    const onSelect = vi.fn()
    const { user } = await render(
      <Menu.Root defaultOpen onSelect={onSelect}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByRole("menuitem", { name: /Item 1/i }))

    expect(onSelect).toHaveBeenCalledWith("item-1")
  })

  test("does not call onSelect when disabled", async () => {
    const onSelect = vi.fn()
    const { user } = await render(
      <Menu.Root defaultOpen disabled onSelect={onSelect}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByRole("menuitem", { name: /Item 1/i }))

    expect(onSelect).not.toHaveBeenCalled()
  })

  test("closes menu on select when closeOnSelect is true", async () => {
    const { user } = await render(
      <Menu.Root closeOnSelect defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByRole("menuitem", { name: /Item 1/i }))

    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()
  })

  test("does not close menu on select when closeOnSelect is false", async () => {
    const { user } = await render(
      <Menu.Root closeOnSelect={false} defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByRole("menuitem", { name: /Item 1/i }))

    await expect.element(page.getByRole("menu")).toBeInTheDocument()
  })

  test("navigates menu items with keyboard", async () => {
    await render(
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

    const menu = page.getByRole("menu").element() as HTMLElement
    const item1 = page
      .getByRole("menuitem", { name: /Item 1/i })
      .element() as HTMLElement
    const item2 = page
      .getByRole("menuitem", { name: /Item 2/i })
      .element() as HTMLElement
    const item3 = page
      .getByRole("menuitem", { name: /Item 3/i })
      .element() as HTMLElement

    item1.focus()
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item1.id)
    })
    item1.focus()
    item1.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    )
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item2.id)
    })

    item2.focus()
    item2.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
    )
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item1.id)
    })

    item3.focus()
    item3.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Home", bubbles: true }),
    )
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item1.id)
    })

    item1.focus()
    item1.dispatchEvent(
      new KeyboardEvent("keydown", { key: "End", bubbles: true }),
    )
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item3.id)
    })
  })

  test("selects item with keyboard", async () => {
    const onSelect = vi.fn()
    await render(
      <Menu.Root closeOnSelect={false} defaultOpen onSelect={onSelect}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const item1 = page
      .getByRole("menuitem", { name: /Item 1/i })
      .element() as HTMLElement
    item1.focus()
    item1.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    )
    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith("item-1")
    })

    item1.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: " ",
        bubbles: true,
        charCode: 32,
        code: "Space",
      }),
    )
    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledTimes(2)
    })
  })

  test("renders context menu trigger", async () => {
    await render(
      <Menu.Root>
        <Menu.ContextTrigger>
          <div data-testid="context-area">Right click here</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByTestId("context-area"))
      .toHaveAttribute("role", "application")
  })

  test("opens context menu on right click", async () => {
    const { user } = await render(
      <Menu.Root>
        <Menu.ContextTrigger>
          <div data-testid="context-area">Right click here</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByTestId("context-area"), { button: "right" })

    await expect.element(page.getByRole("menu")).toBeInTheDocument()
  })

  test("does not open context menu when disabled", async () => {
    const { user } = await render(
      <Menu.Root disabled>
        <Menu.ContextTrigger>
          <div data-testid="context-area">Right click here</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByTestId("context-area"), { button: "right" })

    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()
  })

  test("renders nested menu with submenu indicator", async () => {
    await render(
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

    await expect.element(page.getByText("Sub Menu")).toBeInTheDocument()
  })

  test("selects radio option in option group", async () => {
    const onChange = vi.fn()
    const { user } = await render(
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

    await user.click(page.getByRole("menuitemradio", { name: /Option 1/i }))

    expect(onChange).toHaveBeenCalledWith("option-1")
  })

  test("toggles checkbox option in option group", async () => {
    const onChange = vi.fn()
    const { user } = await render(
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

    await user.click(page.getByRole("menuitemcheckbox", { name: /Option 1/i }))

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

    const { user } = await render(<ControlledRadio />)

    await user.click(page.getByRole("menuitemradio", { name: /Option 2/i }))

    await expect
      .element(page.getByRole("menuitemradio", { name: /Option 2/i }))
      .toBeInTheDocument()
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

    const { user } = await render(<ControlledCheckbox />)

    await user.click(page.getByRole("menuitemcheckbox", { name: /Option 1/i }))

    await expect
      .element(page.getByRole("menuitemcheckbox", { name: /Option 1/i }))
      .toBeInTheDocument()
  })

  test("renders disabled menu item", async () => {
    await render(
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

    await expect
      .element(page.getByRole("menuitem", { name: /Item 1/i }))
      .toHaveAttribute("aria-disabled", "true")
  })

  test("renders menu with header and footer", async () => {
    await render(
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

    await expect.element(page.getByText("Header Text")).toBeInTheDocument()
    await expect.element(page.getByText("Footer Text")).toBeInTheDocument()
  })

  test("renders menu with children instead of items", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="child-item">Child Item</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByRole("menuitem", { name: /Child Item/i }))
      .toBeInTheDocument()
  })

  test("renders items with radio group and separator control", async () => {
    await render(
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

    await expect
      .element(page.getByRole("menuitemradio", { name: /R1/i }))
      .toBeInTheDocument()
  })

  test("renders items with checkbox group and separator control", async () => {
    await render(
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

    await expect
      .element(page.getByRole("menuitemcheckbox", { name: /C1/i }))
      .toBeInTheDocument()
  })

  test("renders group items with separator control", async () => {
    await render(
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

    await expect
      .element(page.getByRole("menuitem", { name: /G1/i }))
      .toBeInTheDocument()
  })

  test("disabled menu item does not activate on focus", async () => {
    await render(
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

    await expect
      .element(page.getByRole("menuitem", { name: /Disabled Item/i }))
      .toHaveAttribute("aria-disabled", "true")
  })

  test("renders custom icon for radio option item", async () => {
    await render(
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

    await expect.element(page.getByTestId("custom-icon")).toBeInTheDocument()
  })

  test("renders default icon for checkbox option item", async () => {
    await render(
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

    await expect
      .element(page.getByRole("menuitemcheckbox", { name: /Opt 1/i }))
      .toBeInTheDocument()
  })

  test("onMouseMove on menu item activates it", async () => {
    const { user } = await render(
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

    const menu = page.getByRole("menu").element() as HTMLElement
    const item2 = page
      .getByRole("menuitem", { name: /Item 2/i })
      .element() as HTMLElement

    await user.hover(page.getByRole("menuitem", { name: /Item 2/i }))

    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(item2.id)
    })
  })

  test("renders items with value prop directly", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content items={[{ label: "Direct Item", value: "direct" }]} />
      </Menu.Root>,
    )

    await expect
      .element(page.getByRole("menuitem", { name: /Direct Item/i }))
      .toBeInTheDocument()
  })

  test("checkbox option toggles off when clicked again", async () => {
    const onChange = vi.fn()
    const { user } = await render(
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

    await user.click(page.getByRole("menuitemcheckbox", { name: /Option 1/i }))

    expect(onChange).toHaveBeenCalledWith([])
  })

  test("item closeOnSelect overrides menu closeOnSelect", async () => {
    const { user } = await render(
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

    await user.click(page.getByRole("menuitem", { name: /Item 1/i }))

    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()
  })

  test("option item does not call onChange when disabled", async () => {
    const onChange = vi.fn()
    const { user } = await render(
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

    await user.click(page.getByRole("menuitemradio", { name: /Opt 1/i }))

    expect(onChange).not.toHaveBeenCalled()
  })

  test("context trigger sets aria attributes correctly", async () => {
    await render(
      <Menu.Root>
        <Menu.ContextTrigger>
          <div data-testid="context-area">Right click here</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByTestId("context-area"))
      .toHaveAttribute("aria-haspopup", "menu")
    await expect
      .element(page.getByTestId("context-area"))
      .toHaveAttribute("aria-expanded", "false")
  })

  test("context trigger updates aria-expanded when opened", async () => {
    const { user } = await render(
      <Menu.Root>
        <Menu.ContextTrigger>
          <div data-testid="context-area">Right click here</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByTestId("context-area"), { button: "right" })

    await expect
      .element(page.getByTestId("context-area"))
      .toHaveAttribute("aria-expanded", "true")
  })

  test("submenu trigger renders indicator icon", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root>
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    const indicator = page
      .getByText("Sub Menu")
      .element()
      .parentElement?.querySelector(".ui-menu__indicator") as HTMLElement
    expect(indicator).toBeInTheDocument()
  })

  test("submenu trigger has correct attributes", async () => {
    await render(
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
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByText("Sub Menu"))
      .toHaveAttribute("aria-haspopup", "menu")
    await expect
      .element(page.getByText("Sub Menu"))
      .toHaveAttribute("aria-expanded")
  })

  test("submenu content renders when defaultOpen", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>

          <Menu.Root defaultOpen>
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect.element(page.getByText("Sub Item 1")).toBeInTheDocument()
  })

  test("submenu click is prevented on disabled submenu trigger", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root disabled>
            <Menu.Trigger>
              <Menu.Item disabled>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByText("Sub Menu"))
      .toHaveAttribute("aria-disabled", "true")
  })

  test("submenu does not open on mouse enter when disabled", async () => {
    const { user } = await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root disabled>
            <Menu.Trigger>
              <Menu.Item disabled>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.hover(page.getByText("Sub Menu"))

    await expect
      .element(page.getByText("Sub Item 1").query())
      .not.toBeInTheDocument()
  })

  test("submenu does not respond to keyboard when disabled", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root disabled>
            <Menu.Trigger>
              <Menu.Item disabled>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    const subMenuText = page.getByText("Sub Menu").element() as HTMLElement
    subMenuText.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    )

    await expect
      .element(page.getByText("Sub Item 1").query())
      .not.toBeInTheDocument()
  })

  test("radio option item indicator shows correct opacity based on selection", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="radio" defaultValue="opt-1">
            <Menu.OptionItem value="opt-1">Opt 1</Menu.OptionItem>
            <Menu.OptionItem value="opt-2">Opt 2</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    const selectedItem = page
      .getByRole("menuitemradio", { name: /Opt 1/i })
      .element() as HTMLElement
    const unselectedItem = page
      .getByRole("menuitemradio", { name: /Opt 2/i })
      .element() as HTMLElement
    expect(selectedItem.querySelector(".ui-menu__indicator")).toHaveStyle({
      opacity: "1",
    })
    expect(unselectedItem.querySelector(".ui-menu__indicator")).toHaveStyle({
      opacity: "0",
    })
  })

  test("checkbox option item indicator shows correct opacity based on selection", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="checkbox" defaultValue={["opt-1"]}>
            <Menu.OptionItem value="opt-1">Opt 1</Menu.OptionItem>
            <Menu.OptionItem value="opt-2">Opt 2</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    const selectedItem = page
      .getByRole("menuitemcheckbox", {
        name: /Opt 1/i,
      })
      .element() as HTMLElement
    const unselectedItem = page
      .getByRole("menuitemcheckbox", {
        name: /Opt 2/i,
      })
      .element() as HTMLElement
    expect(selectedItem.querySelector(".ui-menu__indicator")).toHaveStyle({
      opacity: "1",
    })
    expect(unselectedItem.querySelector(".ui-menu__indicator")).toHaveStyle({
      opacity: "0",
    })
  })

  test("renders submenu with start direction", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root subMenuDirection="start">
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByText("Sub Menu"))
      .toHaveAttribute("aria-haspopup", "menu")
  })

  test("renders menu with controlled open state", async () => {
    const ControlledMenu = () => {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button data-testid="external-toggle" onClick={() => setOpen(!open)}>
            Toggle
          </Button>
          <Menu.Root
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <Menu.Trigger>
              <Button>Menu</Button>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="item-1">Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </>
      )
    }

    const { user } = await render(<ControlledMenu />)

    await expect.element(page.getByRole("menu").query()).not.toBeInTheDocument()

    await user.click(page.getByTestId("external-toggle"))

    await expect.element(page.getByRole("menu")).toBeInTheDocument()
  })

  test("renders items with hasStartSeparator and hasEndSeparator for radio group", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            {
              type: "radio",
              hasEndSeparator: true,
              hasStartSeparator: true,
              items: [{ label: "R1", value: "r1" }],
            },
          ]}
        />
      </Menu.Root>,
    )

    const separators = document.querySelectorAll(".ui-menu__separator")
    expect(separators.length).toBeGreaterThanOrEqual(2)
  })

  test("renders items with hasStartSeparator and hasEndSeparator for checkbox group", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            {
              type: "checkbox",
              hasEndSeparator: true,
              hasStartSeparator: true,
              items: [{ label: "C1", value: "c1" }],
            },
          ]}
        />
      </Menu.Root>,
    )

    const separators = document.querySelectorAll(".ui-menu__separator")
    expect(separators.length).toBeGreaterThanOrEqual(2)
  })

  test("renders items with hasStartSeparator and hasEndSeparator for group", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            {
              hasEndSeparator: true,
              hasStartSeparator: true,
              items: [{ label: "G1", value: "g1" }],
              label: "Group",
            },
          ]}
        />
      </Menu.Root>,
    )

    const separators = document.querySelectorAll(".ui-menu__separator")
    expect(separators.length).toBeGreaterThanOrEqual(2)
  })

  test("disabled menu item does not activate on onFocus handler", async () => {
    await render(
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

    const menu = page.getByRole("menu").element() as HTMLElement
    const disabledItem = page
      .getByRole("menuitem", {
        name: /Disabled Item/i,
      })
      .element() as HTMLElement

    disabledItem.focus()

    expect(menu.getAttribute("aria-activedescendant")).toBeNull()
  })

  test("submenu opens on mouse enter", async () => {
    const { user } = await render(
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
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.hover(page.getByText("Sub Menu"))

    await expect.element(page.getByText("Sub Item 1")).toBeInTheDocument()
  })

  test("submenu opens on ArrowRight key and focuses first item", async () => {
    await render(
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
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    const subMenuTrigger = page.getByText("Sub Menu").element() as HTMLElement
    subMenuTrigger.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    )

    await expect.element(page.getByText("Sub Item 1")).toBeInTheDocument()
  })

  test("submenu with start direction opens on ArrowLeft key", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root subMenuDirection="start">
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    const subMenuTrigger = page.getByText("Sub Menu").element() as HTMLElement
    subMenuTrigger.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }),
    )

    await expect.element(page.getByText("Sub Item 1")).toBeInTheDocument()
  })

  test("submenu trigger navigates with keyboard", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="first-item">First Item</Menu.Item>

          <Menu.Root>
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>

          <Menu.Item value="last-item">Last Item</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const subMenuTrigger = page.getByText("Sub Menu").element() as HTMLElement
    const menu = page.getByRole("menu").element() as HTMLElement
    const firstItem = page
      .getByRole("menuitem", { name: /First Item/i })
      .element() as HTMLElement
    const lastItem = page
      .getByRole("menuitem", { name: /Last Item/i })
      .element() as HTMLElement

    subMenuTrigger.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    )
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(lastItem.id)
    })

    subMenuTrigger.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
    )
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(firstItem.id)
    })

    subMenuTrigger.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Home", bubbles: true }),
    )
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(firstItem.id)
    })

    subMenuTrigger.dispatchEvent(
      new KeyboardEvent("keydown", { key: "End", bubbles: true }),
    )
    await waitFor(() => {
      expect(menu.getAttribute("aria-activedescendant")).toBe(lastItem.id)
    })
  })

  test("submenu mouse move activates submenu trigger in parent", async () => {
    const { user } = await render(
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
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.hover(page.getByText("Sub Menu"))

    await expect.element(page.getByText("Sub Menu")).toBeInTheDocument()
  })

  test("submenu item closes submenu with ArrowLeft key", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root defaultOpen>
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    const subItem = page
      .getByRole("menuitem", { name: /Sub Item 1/i })
      .element() as HTMLElement
    subItem.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }),
    )

    await expect
      .element(page.getByText("Sub Item 1").query())
      .not.toBeInTheDocument()
  })

  test("submenu item with start direction closes with ArrowRight key", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root defaultOpen subMenuDirection="start">
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    const subItem = page
      .getByRole("menuitem", { name: /Sub Item 1/i })
      .element() as HTMLElement
    subItem.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    )

    await expect
      .element(page.getByText("Sub Item 1").query())
      .not.toBeInTheDocument()
  })

  test("submenu click on trigger prevents default when in submenu", async () => {
    const { user } = await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root>
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByText("Sub Menu"))

    await expect.element(page.getByText("Sub Menu")).toBeInTheDocument()
  })

  test("trigger has correct aria attributes", async () => {
    const { user } = await render(
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const trigger = page.getByRole("button", { name: /Menu/i })
    await expect.element(trigger).toHaveAttribute("aria-haspopup", "menu")
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
    await expect.element(trigger).not.toHaveAttribute("aria-controls")

    await user.click(trigger)
    await expect.element(page.getByRole("menu")).toBeInTheDocument()

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")
    await expect.element(trigger).toHaveAttribute("data-trigger", "")
  })

  test("content has correct role and aria-labelledby", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const menu = page.getByRole("menu").element() as HTMLElement
    await expect.element(page.getByRole("menu")).toHaveAttribute("role", "menu")
    expect(menu.getAttribute("aria-labelledby")).toBeTruthy()
  })

  test("separator has correct role", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
          <Menu.Separator />
          <Menu.Item value="item-2">Item 2</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByRole("separator"))
      .toHaveAttribute("role", "separator")
  })

  test("menu group has correct role and aria-labelledby", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Group label="Group Label">
            <Menu.Item value="item-1">Item 1</Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByRole("group"))
      .toHaveAttribute("aria-labelledby")
  })

  test("menu item has correct tabIndex", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByRole("menuitem", { name: /Item 1/i }))
      .toHaveAttribute("tabindex", "-1")
  })

  test("disabled trigger has tabIndex -1", async () => {
    await render(
      <Menu.Root disabled>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByRole("button", { name: /Menu/i }))
      .toHaveAttribute("aria-disabled", "true")
  })

  test("menu label has presentation role", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Group>
            <Menu.Label data-testid="menu-label">Label</Menu.Label>
            <Menu.Item value="item-1">Item 1</Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByTestId("menu-label"))
      .toHaveAttribute("role", "presentation")
  })

  test("submenu trigger has correct haspopup attribute", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root>
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByText("Sub Menu"))
      .toHaveAttribute("aria-haspopup", "menu")
  })

  test("submenu item navigates with keyboard within submenu", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root defaultOpen>
            <Menu.Trigger>
              <Menu.Item>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
              <Menu.Item value="sub-2">Sub Item 2</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    const subMenuTrigger = page.getByText("Sub Menu").element() as HTMLElement
    const allMenus = page.getByRole("menu").all()
    const subMenu = allMenus[allMenus.length - 1]!.element() as HTMLElement
    const subItem1 = page
      .getByRole("menuitem", { name: /Sub Item 1/i })
      .element() as HTMLElement
    const subItem2 = page
      .getByRole("menuitem", { name: /Sub Item 2/i })
      .element() as HTMLElement

    subItem1.focus()
    await waitFor(() => {
      expect(subMenu.getAttribute("aria-activedescendant")).toBe(subItem1.id)
    })
    subItem1.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    )
    await waitFor(() => {
      expect(subMenu.getAttribute("aria-activedescendant")).toBe(subItem2.id)
    })

    subItem2.focus()
    await waitFor(() => {
      expect(subMenu.getAttribute("aria-activedescendant")).toBe(subItem2.id)
    })
    subItem2.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
    )
    await waitFor(() => {
      expect(subMenu.getAttribute("aria-activedescendant")).toBe(subItem1.id)
    })

    subMenuTrigger.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Home", bubbles: true }),
    )
    await waitFor(() => {
      expect(subMenu.getAttribute("aria-activedescendant")).toBe(subItem1.id)
    })

    subMenuTrigger.dispatchEvent(
      new KeyboardEvent("keydown", { key: "End", bubbles: true }),
    )
    await waitFor(() => {
      expect(subMenu.getAttribute("aria-activedescendant")).toBe(subItem2.id)
    })
  })

  test("menu option group with radio type and defaultValue", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="radio" defaultValue="opt-2">
            <Menu.OptionItem value="opt-1">Opt 1</Menu.OptionItem>
            <Menu.OptionItem value="opt-2">Opt 2</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    const opt1 = page
      .getByRole("menuitemradio", { name: /Opt 1/i })
      .element() as HTMLElement
    const opt2 = page
      .getByRole("menuitemradio", { name: /Opt 2/i })
      .element() as HTMLElement
    const indicator1 = opt1.querySelector(".ui-menu__indicator")
    const indicator2 = opt2.querySelector(".ui-menu__indicator")
    expect(indicator1).toHaveStyle({ opacity: "0" })
    expect(indicator2).toHaveStyle({ opacity: "1" })
  })

  test("onOpen and onClose callbacks are called", async () => {
    const onOpen = vi.fn()
    const onClose = vi.fn()
    const { user } = await render(
      <Menu.Root onClose={onClose} onOpen={onOpen}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByRole("button", { name: /Menu/i }))
    await waitFor(() => {
      expect(onOpen).toHaveBeenCalledWith(undefined)
    })

    await user.click(page.getByRole("button", { name: /Menu/i }))
    await waitFor(() => {
      expect(onClose).toHaveBeenCalledWith(undefined)
    })
  })

  test("menu item with value calls onSelect with value on click", async () => {
    const onSelect = vi.fn()
    const { user } = await render(
      <Menu.Root closeOnSelect={false} defaultOpen onSelect={onSelect}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="my-value">My Item</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByRole("menuitem", { name: /My Item/i }))

    expect(onSelect).toHaveBeenCalledWith("my-value")
  })

  test("checkbox option group can uncheck an item", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Menu.Root closeOnSelect={false} defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup
            type="checkbox"
            defaultValue={["opt-1", "opt-2"]}
            onChange={onChange}
          >
            <Menu.OptionItem value="opt-1">Opt 1</Menu.OptionItem>
            <Menu.OptionItem value="opt-2">Opt 2</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.click(page.getByRole("menuitemcheckbox", { name: /Opt 1/i }))

    expect(onChange).toHaveBeenCalledWith(["opt-2"])
  })

  test("menu item data-disabled attribute when disabled", async () => {
    await render(
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

    await expect
      .element(page.getByRole("menuitem", { name: /Item 1/i }))
      .toHaveAttribute("data-disabled", "")
  })

  test("trigger aria-controls references content id when open", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    const trigger = page
      .getByRole("button", { name: /Menu/i })
      .element() as HTMLElement
    const menu = page.getByRole("menu").element() as HTMLElement
    expect(trigger.getAttribute("aria-controls")).toBe(menu.id)
  })

  test("menu command renders with correct class", async () => {
    await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">
            Item 1 <Menu.Command>⌘T</Menu.Command>
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect.element(page.getByText("⌘T")).toBeInTheDocument()
  })

  test("controlled radio option group updates when value changes", async () => {
    const ControlledRadio = () => {
      const [value, setValue] = useState("opt-1")
      return (
        <Menu.Root closeOnSelect={false} defaultOpen>
          <Menu.Trigger>
            <Button>Menu</Button>
          </Menu.Trigger>

          <Menu.Content>
            <Menu.OptionGroup type="radio" value={value} onChange={setValue}>
              <Menu.OptionItem value="opt-1">Opt 1</Menu.OptionItem>
              <Menu.OptionItem value="opt-2">Opt 2</Menu.OptionItem>
            </Menu.OptionGroup>
          </Menu.Content>
        </Menu.Root>
      )
    }

    const { user } = await render(<ControlledRadio />)

    const opt1 = page
      .getByRole("menuitemradio", { name: /Opt 1/i })
      .element() as HTMLElement
    const indicator1 = opt1.querySelector(".ui-menu__indicator")
    expect(indicator1).toHaveStyle({ opacity: "1" })

    await user.click(page.getByRole("menuitemradio", { name: /Opt 2/i }))

    await waitFor(() => {
      const opt2 = page
        .getByRole("menuitemradio", { name: /Opt 2/i })
        .element() as HTMLElement
      const indicator = opt2.querySelector(".ui-menu__indicator")
      expect(indicator).toHaveStyle({ opacity: "1" })
    })
  })

  test("submenu does not react to mouse move when disabled", async () => {
    const { user } = await render(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Root disabled>
            <Menu.Trigger>
              <Menu.Item disabled>Sub Menu</Menu.Item>
            </Menu.Trigger>

            <Menu.Content>
              <Menu.Item value="sub-1">Sub Item 1</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Menu.Content>
      </Menu.Root>,
    )

    await user.hover(page.getByText("Sub Menu"))

    await expect
      .element(page.getByText("Sub Item 1").query())
      .not.toBeInTheDocument()
  })

  test("item ArrowLeft does not close when not in submenu", async () => {
    await render(
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

    const item1 = page
      .getByRole("menuitem", { name: /Item 1/i })
      .element() as HTMLElement
    item1.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }),
    )

    await expect.element(page.getByRole("menu")).toBeInTheDocument()
  })

  test("menu with open and defaultOpen props", async () => {
    await render(
      <Menu.Root defaultOpen open>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect.element(page.getByRole("menu")).toBeInTheDocument()
  })

  test("context trigger does not have aria-controls when closed", async () => {
    await render(
      <Menu.Root>
        <Menu.ContextTrigger>
          <div data-testid="ctx">Right click</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByTestId("ctx"))
      .not.toHaveAttribute("aria-controls")
  })

  test("context trigger has aria-disabled when menu is disabled", async () => {
    await render(
      <Menu.Root disabled>
        <Menu.ContextTrigger>
          <div data-testid="ctx">Right click</div>
        </Menu.ContextTrigger>

        <Menu.Content>
          <Menu.Item value="item-1">Item 1</Menu.Item>
        </Menu.Content>
      </Menu.Root>,
    )

    await expect
      .element(page.getByTestId("ctx"))
      .toHaveAttribute("aria-disabled", "true")
  })
})
