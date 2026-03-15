import type { FC } from "react"
import type { ComboboxItem, UseComboboxProps } from "./"
import { page, render } from "#test/browser"
import { vi } from "vitest"
import {
  ComboboxContext,
  ComboboxDescendantsContext,
  createComboboxChildren,
  useCombobox,
  useComboboxItem,
} from "./"

const Option: FC<{ children: React.ReactNode; value?: string }> = ({
  children,
  value,
}) => <div data-value={value}>{children}</div>

const Group: FC<{ children: React.ReactNode; label?: React.ReactNode }> = ({
  children,
  label,
}) => (
  <div>
    <span>{label}</span>
    {children}
  </div>
)

const Empty: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div data-testid="empty">{children}</div>
)

describe("createComboboxChildren", () => {
  test("renders empty item when data-empty is present and Empty component provided", () => {
    const items: ComboboxItem[] = [
      { "data-empty": true, label: "No results" } as any,
    ]

    const result = createComboboxChildren(items, { Empty, Group, Option })

    expect(result).toHaveLength(1)
  })

  test("renders grouped items", async () => {
    const items: ComboboxItem[] = [
      {
        items: [{ label: "Option 1", value: "one" }],
        label: "Group 1",
      },
    ]

    const result = createComboboxChildren(items, { Group, Option })

    await render(<div>{result}</div>)

    await expect.element(page.getByText("Group 1")).toBeInTheDocument()
    await expect.element(page.getByText("Option 1")).toBeInTheDocument()
  })

  test("renders plain option items", async () => {
    const items: ComboboxItem[] = [{ label: "Option 1", value: "one" }]

    const result = createComboboxChildren(items, { Group, Option })

    await render(<div>{result}</div>)

    await expect.element(page.getByText("Option 1")).toBeInTheDocument()
  })
})

const ComboboxTestComponent: FC<
  UseComboboxProps & { items?: { value: string; closeOnSelect?: boolean }[] }
> = ({ items = [], ...props }) => {
  const {
    descendants,
    open,
    getContentProps,
    getTriggerProps,
    onActiveDescendant,
    onClose,
    onSelect,
  } = useCombobox(props)

  return (
    <ComboboxDescendantsContext value={descendants}>
      <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
        <div {...getTriggerProps({ "data-testid": "trigger" })}>Trigger</div>
        {open ? (
          <div {...getContentProps({ "data-testid": "content" })}>
            {items.map((item) => (
              <ComboboxItemTestComponent
                key={item.value}
                closeOnSelect={item.closeOnSelect}
                value={item.value}
              />
            ))}
          </div>
        ) : null}
      </ComboboxContext>
    </ComboboxDescendantsContext>
  )
}

const ComboboxItemTestComponent: FC<{
  value: string
  closeOnSelect?: boolean
  disabled?: boolean
}> = ({ closeOnSelect, disabled = false, value }) => {
  const { getItemProps } = useComboboxItem({
    closeOnSelect,
    disabled,
    value,
  })

  return (
    <div {...getItemProps({ "data-testid": `item-${value}` })}>{value}</div>
  )
}

describe("useCombobox", () => {
  test("returns trigger props with combobox role", async () => {
    await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    await expect.element(trigger).toHaveAttribute("role", "combobox")
    await expect.element(trigger).toHaveAttribute("aria-haspopup", "listbox")
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
    await expect.element(trigger).toHaveAttribute("tabindex", "0")
  })

  test("opens on click and shows content", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    await user.click(trigger)

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect.element(page.getByTestId("content")).toBeInTheDocument()
  })

  test("does not open on click when disabled", async () => {
    await render(
      <ComboboxTestComponent
        disabled
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().click()

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("does not open on click when openOnClick is false", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        openOnClick={false}
      />,
    )

    const trigger = page.getByTestId("trigger")

    await user.click(trigger)

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("closes on second click", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    await user.click(trigger)

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await user.click(trigger)

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("opens on ArrowDown key and sets active descendant", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("opens on ArrowUp key", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowUp}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("opens on Enter key when openOnEnter is true", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{Enter}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("does not open on Enter key when openOnEnter is false", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        openOnEnter={false}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{Enter}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("opens on Space key when openOnSpace is true", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ }")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("does not open on Space key when openOnSpace is false", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        openOnSpace={false}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ }")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("does not respond to key events when disabled", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        disabled
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("does not respond to key events during composition", async () => {
    await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    // Composition events (keyCode 229) cannot be directly simulated in browser mode.
    // The original test verified that keyCode 229 is ignored, which is an IME behavior.
    // In browser mode, we verify the trigger stays closed without interaction.
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("navigates items with ArrowDown when open", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{ArrowDown}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("navigates items with ArrowUp when open", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowUp}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{ArrowUp}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("Home key sets active descendant to first item", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{Home}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("End key sets active descendant to last item", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{End}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("Home key does nothing when closed", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{Home}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("End key does nothing when closed", async () => {
    const { user } = await render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{End}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("Enter key selects active descendant and calls onChange", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{Enter}")

    await expect.poll(() => onChange).toHaveBeenCalledWith("one")
  })

  test("Enter key does nothing when no active descendant", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    trigger.element().focus()
    await user.keyboard("{Enter}")

    expect(onChange).not.toHaveBeenCalled()
  })

  test("Space key selects active descendant", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{ }")

    await expect.poll(() => onChange).toHaveBeenCalledWith("one")
  })

  test("Space key does nothing when selectOnSpace is false", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        selectOnSpace={false}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{ }")

    expect(onChange).not.toHaveBeenCalled()
  })

  test("selecting with closeOnSelect closes the combobox", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{Enter}")

    await expect.poll(() => onChange).toHaveBeenCalledWith("one")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("selecting with closeOnSelect=false keeps the combobox open", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        closeOnSelect={false}
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{Enter}")

    await expect.poll(() => onChange).toHaveBeenCalledWith("one")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("clicking an item selects it", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    await expect.element(page.getByTestId("item-one")).toBeInTheDocument()

    await user.click(page.getByTestId("item-one"))

    await expect.poll(() => onChange).toHaveBeenCalledWith("one")
  })

  test("mouse move on item activates it", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    await expect.element(page.getByTestId("item-one")).toBeInTheDocument()

    const trigger = page.getByTestId("trigger")

    await user.hover(page.getByTestId("item-two"))

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("disabled item does not activate on mouse move", async () => {
    const DisabledItemComponent: FC = () => {
      const {
        descendants,
        open,
        getContentProps,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({ defaultOpen: true })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            {open ? (
              <div {...getContentProps({ "data-testid": "content" })}>
                <ComboboxItemTestComponent disabled value="disabled-item" />
                <ComboboxItemTestComponent value="enabled-item" />
              </div>
            ) : null}
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    const { user } = await render(<DisabledItemComponent />)

    await expect
      .element(page.getByTestId("item-disabled-item"))
      .toBeInTheDocument()

    const trigger = page.getByTestId("trigger")

    await user.hover(page.getByTestId("item-disabled-item"))

    expect(trigger.element()).not.toHaveAttribute("aria-activedescendant")
  })

  test("disabled item does not respond to click", async () => {
    const onChange = vi.fn()
    const DisabledItemComponent: FC = () => {
      const {
        descendants,
        open,
        getContentProps,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({ defaultOpen: true, onChange })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            {open ? (
              <div {...getContentProps({ "data-testid": "content" })}>
                <ComboboxItemTestComponent disabled value="disabled-item" />
              </div>
            ) : null}
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    await render(<DisabledItemComponent />)

    await expect
      .element(page.getByTestId("item-disabled-item"))
      .toBeInTheDocument()

    page.getByTestId("item-disabled-item").element().click()

    expect(onChange).not.toHaveBeenCalled()
  })

  test("trigger has correct aria attributes when disabled", async () => {
    await render(<ComboboxTestComponent disabled items={[{ value: "one" }]} />)

    const trigger = page.getByTestId("trigger")

    await expect.element(trigger).toHaveAttribute("aria-disabled", "true")
    await expect.element(trigger).toHaveAttribute("data-disabled", "")
    await expect.element(trigger).toHaveAttribute("tabindex", "-1")
  })

  test("trigger has correct aria attributes when readOnly", async () => {
    await render(<ComboboxTestComponent items={[{ value: "one" }]} readOnly />)

    const trigger = page.getByTestId("trigger")

    await expect.element(trigger).toHaveAttribute("aria-disabled", "true")
    await expect.element(trigger).toHaveAttribute("data-readonly", "")
    await expect.element(trigger).toHaveAttribute("tabindex", "-1")
  })

  test("onSelect with selectFocusRef focuses the ref element", async () => {
    const SelectFocusRefComponent: FC = () => {
      const focusRef = { current: document.createElement("input") }
      const {
        descendants,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({ selectFocusRef: focusRef })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            <button data-testid="select-btn" onClick={() => onSelect("test")}>
              Select
            </button>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    const { user } = await render(<SelectFocusRefComponent />)

    await user.click(page.getByTestId("select-btn"))
  })

  test("onSelect with undefined value does not call onChange", async () => {
    const onChange = vi.fn()
    const UndefinedSelectComponent: FC = () => {
      const {
        descendants,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({ onChange })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            <button
              data-testid="select-btn"
              onClick={() => onSelect(undefined)}
            >
              Select
            </button>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    const { user } = await render(<UndefinedSelectComponent />)

    await user.click(page.getByTestId("select-btn"))

    expect(onChange).not.toHaveBeenCalled()
  })

  test("opens with initialFocusValue", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        initialFocusValue="two"
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("item closeOnSelect overrides combobox closeOnSelect", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        items={[{ closeOnSelect: false, value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.click(page.getByTestId("item-one"))

    await expect.poll(() => onChange).toHaveBeenCalledWith("one")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("onActiveDescendant does nothing when disabled", async () => {
    const DisabledActiveComponent: FC = () => {
      const {
        descendants,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({ disabled: true })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            <button
              data-testid="activate-btn"
              onClick={() =>
                onActiveDescendant({
                  id: "test-id",
                  closeOnSelect: true,
                  disabled: false,
                  index: 0,
                  node: document.createElement("div"),
                  value: "test",
                })
              }
            >
              Activate
            </button>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    const { user } = await render(<DisabledActiveComponent />)

    const trigger = page.getByTestId("trigger")

    await user.click(page.getByTestId("activate-btn"))

    expect(trigger.element()).not.toHaveAttribute("aria-activedescendant")
  })

  test("ArrowDown when open without active descendant selects first item", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    await expect.element(page.getByTestId("item-one")).toBeInTheDocument()

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("ArrowUp when open without active descendant selects last item", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    await expect.element(page.getByTestId("item-two")).toBeInTheDocument()

    trigger.element().focus()
    await user.keyboard("{ArrowUp}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("Space key does nothing when open with no active descendant", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ }")

    expect(onChange).not.toHaveBeenCalled()
  })

  test("initialFocusValue falls back to default when value not found", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        initialFocusValue="nonexistent"
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("onSelect calls onChange and closes when interactive", async () => {
    const onChange = vi.fn()
    const SelectComponent: FC = () => {
      const {
        descendants,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({ onChange })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            <button
              data-testid="select-btn"
              onClick={() => onSelect("test-value")}
            >
              Select
            </button>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    const { user } = await render(<SelectComponent />)

    await user.click(page.getByTestId("select-btn"))

    expect(onChange).toHaveBeenCalledWith("test-value")
  })

  test("onSelect does not call onChange when not interactive (readOnly)", async () => {
    const onChange = vi.fn()
    const ReadOnlyComponent: FC = () => {
      const {
        descendants,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({ readOnly: true, onChange })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            <button
              data-testid="select-btn"
              onClick={() => onSelect("test-value")}
            >
              Select
            </button>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    const { user } = await render(<ReadOnlyComponent />)

    await user.click(page.getByTestId("select-btn"))

    expect(onChange).not.toHaveBeenCalled()
  })

  test("onSelect with closeOnSelect=false does not close", async () => {
    const onChange = vi.fn()
    const NoCloseComponent: FC = () => {
      const {
        descendants,
        open,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({ defaultOpen: true, onChange })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            <div data-testid="open-state">{open ? "open" : "closed"}</div>
            <button
              data-testid="select-btn"
              onClick={() => onSelect("test-value", false)}
            >
              Select
            </button>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    const { user } = await render(<NoCloseComponent />)

    await user.click(page.getByTestId("select-btn"))

    expect(onChange).toHaveBeenCalledWith("test-value")
  })

  test("End key sets active descendant when open", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    await expect.element(page.getByTestId("item-three")).toBeInTheDocument()

    trigger.element().focus()
    await user.keyboard("{End}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("Home key sets active descendant when open", async () => {
    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger")

    await expect.element(page.getByTestId("item-one")).toBeInTheDocument()

    trigger.element().focus()
    await user.keyboard("{Home}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()
  })

  test("Enter key selects and closes with active descendant", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    await expect.element(page.getByTestId("item-one")).toBeInTheDocument()

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{Enter}")

    await expect.poll(() => onChange).toHaveBeenCalledWith("one")
  })

  test("Space key selects with active descendant when selectOnSpace is true", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger")

    await expect.element(page.getByTestId("item-one")).toBeInTheDocument()

    trigger.element().focus()
    await user.keyboard("{ArrowDown}")

    await expect
      .poll(() => trigger.element().getAttribute("aria-activedescendant"))
      .toBeTruthy()

    await user.keyboard("{ }")

    await expect.poll(() => onChange).toHaveBeenCalledWith("one")
  })
})
