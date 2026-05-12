import type {
  FC,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from "react"
import type { ComboboxItem, UseComboboxProps } from "./"
import { vi } from "vitest"
import { page, render, waitFor } from "#test/browser"
import {
  ComboboxContext,
  ComboboxDescendantsContext,
  createComboboxChildren,
  useCombobox,
  useComboboxItem,
} from "./"

let user: Awaited<ReturnType<typeof render>>["user"]

const setup = async (ui: React.ReactNode) => {
  const result = await render(ui)
  user = result.user

  return result
}

const pressTrigger = async (key: string) => {
  const trigger = page.getByTestId("trigger").element() as HTMLElement

  trigger.focus()
  await user.keyboard(key)
}

const pressComposingTrigger = (key: string) => {
  const trigger = page.getByTestId("trigger").element() as HTMLElement

  trigger.focus()

  const event = new KeyboardEvent("keydown", {
    key,
    bubbles: true,
    cancelable: true,
  })

  Object.defineProperty(event, "isComposing", { value: true })
  Object.defineProperty(event, "keyCode", { value: 229 })

  trigger.dispatchEvent(event)
}
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

    await setup(<div>{result}</div>)

    await expect.element(page.getByText("Group 1")).toBeInTheDocument()
    await expect.element(page.getByText("Option 1")).toBeInTheDocument()
  })

  test("renders plain option items", async () => {
    const items: ComboboxItem[] = [{ label: "Option 1", value: "one" }]

    const result = createComboboxChildren(items, { Group, Option })

    await setup(<div>{result}</div>)

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
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    expect(trigger).toHaveAttribute("role", "combobox")
    expect(trigger).toHaveAttribute("aria-haspopup", "listbox")
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(trigger).toHaveAttribute("tabindex", "0")
  })

  test("opens on click and shows content", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await user.click(trigger)

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    expect(page.getByTestId("content")).toBeInTheDocument()
  })

  test("trigger click keeps prop getter handler before rest handler", async () => {
    const sequence: string[] = []
    const propsOnClick = vi.fn(() => {
      sequence.push("props")
    })
    const restOnClick = vi.fn((ev: ReactMouseEvent<HTMLDivElement>) => {
      sequence.push("rest")
      ev.preventDefault()
    })
    const Component: FC = () => {
      const {
        descendants,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({
        onClick: restOnClick,
      })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div
              {...getTriggerProps({
                "data-testid": "trigger",
                onClick: propsOnClick,
              })}
            >
              Trigger
            </div>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    await setup(<Component />)

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await user.click(trigger)

    expect(propsOnClick).toHaveBeenCalledTimes(1)
    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(sequence).toStrictEqual(["props", "rest"])
    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("trigger keydown keeps prop getter handler before rest handler", async () => {
    const sequence: string[] = []
    const propsOnKeyDown = vi.fn(() => {
      sequence.push("props")
    })
    const restOnKeyDown = vi.fn((ev: ReactKeyboardEvent<HTMLDivElement>) => {
      if (ev.key === "Enter") {
        sequence.push("rest")
        ev.preventDefault()
      }
    })
    const Component: FC = () => {
      const {
        descendants,
        getTriggerProps,
        onActiveDescendant,
        onClose,
        onSelect,
      } = useCombobox({
        onKeyDown: restOnKeyDown,
      })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div
              {...getTriggerProps({
                "data-testid": "trigger",
                onKeyDown: propsOnKeyDown,
              })}
            >
              Trigger
            </div>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    await setup(<Component />)

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{Enter}")

    expect(propsOnKeyDown).toHaveBeenCalledTimes(1)
    expect(restOnKeyDown).toHaveBeenCalledTimes(1)
    expect(sequence).toStrictEqual(["props", "rest"])
    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("item click keeps prop getter handler before rest handler", async () => {
    const sequence: string[] = []
    const onSelect = vi.fn()
    const onActiveDescendant = vi.fn()
    const propsOnClick = vi.fn(() => {
      sequence.push("props")
    })
    const restOnClick = vi.fn((ev: ReactMouseEvent<HTMLDivElement>) => {
      sequence.push("rest")
      ev.preventDefault()
    })
    const Item: FC = () => {
      const { getItemProps } = useComboboxItem({
        value: "one",
        onClick: restOnClick,
      })

      return (
        <div
          {...getItemProps({
            "data-testid": "item-one",
            onClick: propsOnClick,
          })}
        >
          one
        </div>
      )
    }
    const Component: FC = () => {
      const { descendants, getContentProps, getTriggerProps, onClose } =
        useCombobox({
          defaultOpen: true,
        })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            <div {...getContentProps({ "data-testid": "content" })}>
              <Item />
            </div>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    await setup(<Component />)

    await waitFor(() => {
      expect(page.getByTestId("item-one")).toBeInTheDocument()
    })

    await user.click(page.getByTestId("item-one"))

    expect(propsOnClick).toHaveBeenCalledTimes(1)
    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(sequence).toStrictEqual(["props", "rest"])
    expect(onSelect).not.toHaveBeenCalled()
  })

  test("item mouse move keeps prop getter handler before rest handler", async () => {
    const sequence: string[] = []
    const onSelect = vi.fn()
    const onActiveDescendant = vi.fn()
    const propsOnMouseMove = vi.fn(() => {
      sequence.push("props")
    })
    const restOnMouseMove = vi.fn((ev: ReactMouseEvent<HTMLDivElement>) => {
      sequence.push("rest")
      ev.preventDefault()
    })
    const Item: FC = () => {
      const { getItemProps } = useComboboxItem({
        value: "one",
        onMouseMove: restOnMouseMove,
      })

      return (
        <div
          {...getItemProps({
            "data-testid": "item-one",
            onMouseMove: propsOnMouseMove,
          })}
        >
          one
        </div>
      )
    }
    const Component: FC = () => {
      const { descendants, getContentProps, getTriggerProps, onClose } =
        useCombobox({
          defaultOpen: true,
        })

      return (
        <ComboboxDescendantsContext value={descendants}>
          <ComboboxContext value={{ onActiveDescendant, onClose, onSelect }}>
            <div {...getTriggerProps({ "data-testid": "trigger" })}>
              Trigger
            </div>
            <div {...getContentProps({ "data-testid": "content" })}>
              <Item />
            </div>
          </ComboboxContext>
        </ComboboxDescendantsContext>
      )
    }

    await setup(<Component />)

    await waitFor(() => {
      expect(page.getByTestId("item-one")).toBeInTheDocument()
    })

    await user.hover(page.getByTestId("item-one"))

    expect(propsOnMouseMove).toHaveBeenCalledTimes(1)
    expect(restOnMouseMove).toHaveBeenCalledTimes(1)
    expect(sequence).toStrictEqual(["props", "rest"])
    expect(onActiveDescendant).not.toHaveBeenCalled()
  })

  test("does not open on click when disabled", async () => {
    await setup(
      <ComboboxTestComponent
        disabled
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await user.click(trigger, { force: true })

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("does not open on click when openOnClick is false", async () => {
    await setup(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        openOnClick={false}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await user.click(trigger)

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("closes on second click", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await user.click(trigger)

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await user.click(trigger)

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "false")
    })
  })

  test("opens on ArrowDown key and sets active descendant", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })
  })

  test("opens on ArrowUp key", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowUp}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })
  })

  test("opens on Enter key when openOnEnter is true", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{Enter}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })
  })

  test("does not open on Enter key when openOnEnter is false", async () => {
    await setup(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        openOnEnter={false}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{Enter}")

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("opens on Space key when openOnSpace is true", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement
    await pressTrigger(" ")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })
  })

  test("does not open on Space key when openOnSpace is false", async () => {
    await setup(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        openOnSpace={false}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement
    await pressTrigger(" ")

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("does not respond to key events when disabled", async () => {
    await setup(
      <ComboboxTestComponent
        disabled
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("does not respond to key events during composition", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    pressComposingTrigger("ArrowDown")

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("navigates items with ArrowDown when open", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      const activeId = trigger.getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("navigates items with ArrowUp when open", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowUp}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger("{ArrowUp}")

    await waitFor(() => {
      const activeId = trigger.getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("Home key sets active descendant to first item", async () => {
    await setup(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger("{Home}")

    await waitFor(() => {
      const activeId = trigger.getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("End key sets active descendant to last item", async () => {
    await setup(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger("{End}")

    await waitFor(() => {
      const activeId = trigger.getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("Home key does nothing when closed", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{Home}")

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("End key does nothing when closed", async () => {
    await setup(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{End}")

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("Enter key selects active descendant and calls onChange", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger("{Enter}")

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })
  })

  test("Enter key does nothing when no active descendant", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    expect(trigger).toHaveAttribute("aria-expanded", "true")

    await pressTrigger("{Enter}")

    expect(onChange).not.toHaveBeenCalled()
  })

  test("Space key selects active descendant", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger(" ")

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })
  })

  test("Space key does nothing when selectOnSpace is false", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        selectOnSpace={false}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger(" ")

    expect(onChange).not.toHaveBeenCalled()
  })

  test("selecting with closeOnSelect closes the combobox", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger("{Enter}")

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "false")
    })
  })

  test("selecting with closeOnSelect=false keeps the combobox open", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        closeOnSelect={false}
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger("{Enter}")

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })

    expect(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("clicking an item selects it", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    await waitFor(() => {
      expect(page.getByTestId("item-one")).toBeInTheDocument()
    })

    await user.click(page.getByTestId("item-one"))

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })
  })

  test("mouse move on item activates it", async () => {
    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    await waitFor(() => {
      expect(page.getByTestId("item-one")).toBeInTheDocument()
    })

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await user.hover(page.getByTestId("item-two"))

    await waitFor(() => {
      const activeId = trigger.getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
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

    await setup(<DisabledItemComponent />)

    await waitFor(() => {
      expect(page.getByTestId("item-disabled-item")).toBeInTheDocument()
    })

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await user.hover(page.getByTestId("item-disabled-item"))

    expect(trigger).not.toHaveAttribute("aria-activedescendant")
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

    await setup(<DisabledItemComponent />)

    await waitFor(() => {
      expect(page.getByTestId("item-disabled-item")).toBeInTheDocument()
    })

    await user.click(page.getByTestId("item-disabled-item"), { force: true })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("trigger has correct aria attributes when disabled", async () => {
    await setup(<ComboboxTestComponent disabled items={[{ value: "one" }]} />)

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    expect(trigger).toHaveAttribute("aria-disabled", "true")
    expect(trigger).toHaveAttribute("data-disabled", "")
    expect(trigger).toHaveAttribute("tabindex", "-1")
  })

  test("trigger has correct aria attributes when readOnly", async () => {
    await setup(<ComboboxTestComponent items={[{ value: "one" }]} readOnly />)

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    expect(trigger).toHaveAttribute("aria-disabled", "true")
    expect(trigger).toHaveAttribute("data-readonly", "")
    expect(trigger).toHaveAttribute("tabindex", "-1")
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

    await setup(<SelectFocusRefComponent />)

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

    await setup(<UndefinedSelectComponent />)

    await user.click(page.getByTestId("select-btn"))

    expect(onChange).not.toHaveBeenCalled()
  })

  test("opens with initialFocusValue", async () => {
    await setup(
      <ComboboxTestComponent
        initialFocusValue="two"
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })
  })

  test("item closeOnSelect overrides combobox closeOnSelect", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        items={[{ closeOnSelect: false, value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await user.click(page.getByTestId("item-one"))

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })

    expect(trigger).toHaveAttribute("aria-expanded", "true")
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

    await setup(<DisabledActiveComponent />)

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await user.click(page.getByTestId("activate-btn"))

    expect(trigger).not.toHaveAttribute("aria-activedescendant")
  })

  test("ArrowDown when open without active descendant selects first item", async () => {
    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await waitFor(() => {
      expect(page.getByTestId("item-one")).toBeInTheDocument()
    })

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })
  })

  test("ArrowUp when open without active descendant selects last item", async () => {
    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await waitFor(() => {
      expect(page.getByTestId("item-two")).toBeInTheDocument()
    })

    await pressTrigger("{ArrowUp}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })
  })

  test("Space key does nothing when open with no active descendant", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )
    await pressTrigger(" ")

    expect(onChange).not.toHaveBeenCalled()
  })

  test("initialFocusValue falls back to default when value not found", async () => {
    await setup(
      <ComboboxTestComponent
        initialFocusValue="nonexistent"
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })
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

    await setup(<SelectComponent />)

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

    await setup(<ReadOnlyComponent />)

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

    await setup(<NoCloseComponent />)

    await user.click(page.getByTestId("select-btn"))

    expect(onChange).toHaveBeenCalledWith("test-value")
  })

  test("End key sets active descendant when open", async () => {
    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await waitFor(() => {
      expect(page.getByTestId("item-three")).toBeInTheDocument()
    })

    await pressTrigger("{End}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })
  })

  test("Home key sets active descendant when open", async () => {
    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await waitFor(() => {
      expect(page.getByTestId("item-one")).toBeInTheDocument()
    })

    await pressTrigger("{Home}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })
  })

  test("Enter key selects and closes with active descendant", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await waitFor(() => {
      expect(page.getByTestId("item-one")).toBeInTheDocument()
    })

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger("{Enter}")

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })
  })

  test("Space key selects with active descendant when selectOnSpace is true", async () => {
    const onChange = vi.fn()

    await setup(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = page.getByTestId("trigger").element() as HTMLElement

    await waitFor(() => {
      expect(page.getByTestId("item-one")).toBeInTheDocument()
    })

    await pressTrigger("{ArrowDown}")

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    await pressTrigger(" ")

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })
  })
})
