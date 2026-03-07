import type { FC } from "react"
import type { ComboboxItem, UseComboboxProps } from "./"
import { act, fireEvent, render, screen, waitFor } from "#test"
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

    const { getByTestId } = render(<div>{result}</div>)

    expect(getByTestId("empty")).toHaveTextContent("No results")
  })

  test("renders grouped items", () => {
    const items: ComboboxItem[] = [
      {
        items: [{ label: "Option 1", value: "one" }],
        label: "Group 1",
      },
    ]

    const result = createComboboxChildren(items, { Group, Option })

    const { getByText } = render(<div>{result}</div>)

    expect(getByText("Group 1")).toBeInTheDocument()
    expect(getByText("Option 1")).toBeInTheDocument()
  })

  test("renders plain option items", () => {
    const items: ComboboxItem[] = [{ label: "Option 1", value: "one" }]

    const result = createComboboxChildren(items, { Group, Option })

    const { getByText } = render(<div>{result}</div>)

    expect(getByText("Option 1")).toBeInTheDocument()
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
  test("returns trigger props with combobox role", () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    expect(trigger).toHaveAttribute("role", "combobox")
    expect(trigger).toHaveAttribute("aria-haspopup", "listbox")
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(trigger).toHaveAttribute("tabindex", "0")
  })

  test("opens on click and shows content", async () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.click(trigger)
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  test("does not open on click when disabled", () => {
    render(
      <ComboboxTestComponent
        disabled
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.click(trigger)
    })

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("does not open on click when openOnClick is false", () => {
    render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        openOnClick={false}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.click(trigger)
    })

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("closes on second click", async () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.click(trigger)
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    act(() => {
      fireEvent.click(trigger)
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "false")
    })
  })

  test("opens on ArrowDown key and sets active descendant", async () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })
  })

  test("opens on ArrowUp key", async () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowUp" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })
  })

  test("opens on Enter key when openOnEnter is true", async () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "Enter" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })
  })

  test("does not open on Enter key when openOnEnter is false", () => {
    render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        openOnEnter={false}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "Enter" })
    })

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("opens on Space key when openOnSpace is true", async () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: " ", code: "Space" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })
  })

  test("does not open on Space key when openOnSpace is false", () => {
    render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        openOnSpace={false}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: " ", code: "Space" })
    })

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("does not respond to key events when disabled", () => {
    render(
      <ComboboxTestComponent
        disabled
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("does not respond to key events during composition", () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, {
        key: "ArrowDown",
        keyCode: 229,
      })
    })

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("navigates items with ArrowDown when open", async () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      const activeId = trigger.getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("navigates items with ArrowUp when open", async () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowUp" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowUp" })
    })

    await waitFor(() => {
      const activeId = trigger.getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("Home key sets active descendant to first item", async () => {
    render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.keyDown(trigger, { key: "Home" })
    })

    await waitFor(() => {
      const activeId = trigger.getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("End key sets active descendant to last item", async () => {
    render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.keyDown(trigger, { key: "End" })
    })

    await waitFor(() => {
      const activeId = trigger.getAttribute("aria-activedescendant")

      expect(activeId).toBeTruthy()
    })
  })

  test("Home key does nothing when closed", () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "Home" })
    })

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("End key does nothing when closed", () => {
    render(
      <ComboboxTestComponent items={[{ value: "one" }, { value: "two" }]} />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "End" })
    })

    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  test("Enter key selects active descendant and calls onChange", async () => {
    const onChange = vi.fn()

    render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.keyDown(trigger, { key: "Enter" })
    })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })
  })

  test("Enter key does nothing when no active descendant", () => {
    const onChange = vi.fn()

    render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    expect(trigger).toHaveAttribute("aria-expanded", "true")

    act(() => {
      fireEvent.keyDown(trigger, { key: "Enter" })
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("Space key selects active descendant", async () => {
    const onChange = vi.fn()

    render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.keyDown(trigger, { key: " ", code: "Space" })
    })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })
  })

  test("Space key does nothing when selectOnSpace is false", async () => {
    const onChange = vi.fn()

    render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        selectOnSpace={false}
        onChange={onChange}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.keyDown(trigger, { key: " ", code: "Space" })
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("selecting with closeOnSelect closes the combobox", async () => {
    const onChange = vi.fn()

    render(
      <ComboboxTestComponent
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.keyDown(trigger, { key: "Enter" })
    })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "false")
    })
  })

  test("selecting with closeOnSelect=false keeps the combobox open", async () => {
    const onChange = vi.fn()

    render(
      <ComboboxTestComponent
        closeOnSelect={false}
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.keyDown(trigger, { key: "Enter" })
    })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })

    expect(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("clicking an item selects it", async () => {
    const onChange = vi.fn()

    render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    await waitFor(() => {
      expect(screen.getByTestId("item-one")).toBeInTheDocument()
    })

    act(() => {
      fireEvent.click(screen.getByTestId("item-one"))
    })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })
  })

  test("mouse move on item activates it", async () => {
    render(
      <ComboboxTestComponent
        defaultOpen
        items={[{ value: "one" }, { value: "two" }]}
      />,
    )

    await waitFor(() => {
      expect(screen.getByTestId("item-one")).toBeInTheDocument()
    })

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.mouseMove(screen.getByTestId("item-two"))
    })

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

    render(<DisabledItemComponent />)

    await waitFor(() => {
      expect(screen.getByTestId("item-disabled-item")).toBeInTheDocument()
    })

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.mouseMove(screen.getByTestId("item-disabled-item"))
    })

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

    render(<DisabledItemComponent />)

    await waitFor(() => {
      expect(screen.getByTestId("item-disabled-item")).toBeInTheDocument()
    })

    act(() => {
      fireEvent.click(screen.getByTestId("item-disabled-item"))
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("trigger has correct aria attributes when disabled", () => {
    render(<ComboboxTestComponent disabled items={[{ value: "one" }]} />)

    const trigger = screen.getByTestId("trigger")

    expect(trigger).toHaveAttribute("aria-disabled", "true")
    expect(trigger).toHaveAttribute("data-disabled", "")
    expect(trigger).toHaveAttribute("tabindex", "-1")
  })

  test("trigger has correct aria attributes when readOnly", () => {
    render(<ComboboxTestComponent items={[{ value: "one" }]} readOnly />)

    const trigger = screen.getByTestId("trigger")

    expect(trigger).toHaveAttribute("aria-disabled", "true")
    expect(trigger).toHaveAttribute("data-readonly", "")
    expect(trigger).toHaveAttribute("tabindex", "-1")
  })

  test("onSelect with selectFocusRef focuses the ref element", () => {
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

    render(<SelectFocusRefComponent />)

    act(() => {
      fireEvent.click(screen.getByTestId("select-btn"))
    })
  })

  test("onSelect with undefined value does not call onChange", () => {
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

    render(<UndefinedSelectComponent />)

    act(() => {
      fireEvent.click(screen.getByTestId("select-btn"))
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("opens with initialFocusValue", async () => {
    render(
      <ComboboxTestComponent
        initialFocusValue="two"
        items={[{ value: "one" }, { value: "two" }, { value: "three" }]}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })
  })

  test("item closeOnSelect overrides combobox closeOnSelect", async () => {
    const onChange = vi.fn()

    render(
      <ComboboxTestComponent
        items={[{ closeOnSelect: false, value: "one" }, { value: "two" }]}
        onChange={onChange}
      />,
    )

    const trigger = screen.getByTestId("trigger")

    act(() => {
      fireEvent.keyDown(trigger, { key: "ArrowDown" })
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-activedescendant")
    })

    act(() => {
      fireEvent.click(screen.getByTestId("item-one"))
    })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith("one")
    })

    expect(trigger).toHaveAttribute("aria-expanded", "true")
  })
})
