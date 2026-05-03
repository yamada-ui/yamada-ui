import { act, fireEvent, screen } from "@testing-library/react"
import { useState } from "react"
import { a11y, render, renderHook } from "#test/browser"
import { Reorder, ReorderContext, useReorder, useReorderItem } from "./"

describe("<Reorder />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Reorder.Root>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )
  })

  test("render items correctly", async () => {
    await render(
      <Reorder.Root>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("render items of props correctly", async () => {
    const items: Reorder.Item[] = [
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
    ]

    await render(<Reorder.Root items={items} />)

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("renders trigger correctly inside of an item", async () => {
    await render(
      <Reorder.Root orientation="vertical">
        <Reorder.Item value="Item 1">
          <Reorder.Trigger data-testid="ReorderTrigger" />
        </Reorder.Item>
      </Reorder.Root>,
    )

    expect(screen.getByTestId("ReorderTrigger")).toBeInTheDocument()
  })

  test("warns about duplicate", async () => {
    const warnSpy = vi.spyOn(globalThis.console, "warn")

    await render(
      <Reorder.Root orientation="vertical">
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
      </Reorder.Root>,
    )

    expect(warnSpy).toHaveBeenCalledExactlyOnceWith(
      "Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is 'Item 1' ",
    )
    expect(warnSpy).toHaveBeenCalledTimes(1)
  })

  test("updates items correctly when props change", async () => {
    const initialItems: Reorder.Item[] = [
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
    ]

    const updatedItems: Reorder.Item[] = [
      { label: "Item 3", value: "Item 3" },
      { label: "Item 4", value: "Item 4" },
    ]

    const Component = () => {
      const [items, setItems] = useState(initialItems)

      return (
        <>
          <button onClick={() => setItems(updatedItems)}>Update Items</button>

          <Reorder.Root items={items} />
        </>
      )
    }

    const { user } = await render(<Component />)

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()

    await user.click(screen.getByText("Update Items"))

    expect(screen.getByText("Item 3")).toBeInTheDocument()
    expect(screen.getByText("Item 4")).toBeInTheDocument()
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument()
    expect(screen.queryByText("Item 2")).not.toBeInTheDocument()
  })

  test("calls onChange and onCompleteChange correctly", async () => {
    const onChange = vi.fn()
    const onCompleteChange = vi.fn()

    const TestComponent = () => {
      const [items, setItems] = useState<Reorder.Item[]>([
        { label: "Item 1", value: "Item 1" },
        { label: "Item 2", value: "Item 2" },
      ])

      const handleChange = (newItems: string[]) => {
        onChange(newItems)
        const reorderedItems = newItems.map((value) => ({
          label: value,
          value,
        }))
        setItems(reorderedItems)
      }

      const handleCompleteChange = (newItems: string[]) => {
        onCompleteChange(newItems)
      }

      return (
        <>
          <button
            onClick={() => {
              const newOrder = ["Item 2", "Item 1"]
              handleChange(newOrder)
              handleCompleteChange(newOrder)
            }}
          >
            Test Reorder
          </button>
          <Reorder.Root
            items={items}
            onChange={handleChange}
            onCompleteChange={handleCompleteChange}
          />
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()

    // Simulate drag operation with button click
    await user.click(screen.getByRole("button", { name: "Test Reorder" }))

    expect(onChange).toHaveBeenCalledExactlyOnceWith(["Item 2", "Item 1"])
    expect(onCompleteChange).toHaveBeenCalledExactlyOnceWith([
      "Item 2",
      "Item 1",
    ])

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onCompleteChange).toHaveBeenCalledTimes(1)
  })

  test("renders children without explicit value using label fallback", async () => {
    await render(
      <Reorder.Root>
        <Reorder.Item label="Label A">Label A</Reorder.Item>
        <Reorder.Item label="Label B">Label B</Reorder.Item>
      </Reorder.Root>,
    )

    expect(screen.getByText("Label A")).toBeInTheDocument()
    expect(screen.getByText("Label B")).toBeInTheDocument()
  })

  test("renders items without explicit value using label fallback", async () => {
    const items: Reorder.Item[] = [
      { label: "Fallback A" },
      { label: "Fallback B" },
    ]

    await render(<Reorder.Root items={items} />)

    expect(screen.getByText("Fallback A")).toBeInTheDocument()
    expect(screen.getByText("Fallback B")).toBeInTheDocument()
  })

  test("calls onCompleteChange on mouseUp when values have changed", async () => {
    const onCompleteChange = vi.fn()
    const onChange = vi.fn()

    await render(
      <Reorder.Root onChange={onChange} onCompleteChange={onCompleteChange}>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    const list = screen.getByRole("list")

    fireEvent.mouseUp(list)

    expect(onCompleteChange).not.toHaveBeenCalled()
  })

  test("calls onCompleteChange on touchEnd", async () => {
    const onCompleteChange = vi.fn()

    await render(
      <Reorder.Root onCompleteChange={onCompleteChange}>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    const list = screen.getByRole("list")

    fireEvent.touchEnd(list)

    expect(onCompleteChange).not.toHaveBeenCalled()
  })

  test("trigger fires pointerDown event", async () => {
    await render(
      <Reorder.Root>
        <Reorder.Item data-testid="item" value="Item 1">
          <Reorder.Trigger data-testid="trigger" />
        </Reorder.Item>
      </Reorder.Root>,
    )

    const trigger = screen.getByTestId("trigger")

    fireEvent.pointerDown(trigger)

    const item = screen.getByTestId("item")

    expect(item).toHaveAttribute("data-has-trigger", "")
  })

  test("renders with horizontal orientation", async () => {
    await render(
      <Reorder.Root orientation="horizontal">
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("does not update items when props remain the same", async () => {
    const items: Reorder.Item[] = [
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
    ]

    const Component = () => {
      const [, setCount] = useState(0)

      return (
        <>
          <button onClick={() => setCount((c) => c + 1)}>Rerender</button>

          <Reorder.Root items={items} />
        </>
      )
    }

    const { user } = await render(<Component />)

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()

    await user.click(screen.getByText("Rerender"))

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("item has data-has-trigger attribute when trigger is present", async () => {
    await render(
      <Reorder.Root>
        <Reorder.Item data-testid="item" value="Item 1">
          <Reorder.Trigger data-testid="trigger" />
        </Reorder.Item>
      </Reorder.Root>,
    )

    const item = screen.getByTestId("item")

    expect(item).toHaveAttribute("data-has-trigger", "")
  })

  test("calls onReorder without onChange without errors", async () => {
    const { result } = await renderHook(() =>
      useReorder({
        items: [
          { label: "Item 1", value: "Item 1" },
          { label: "Item 2", value: "Item 2" },
        ],
      }),
    )

    const rootProps = result.current.getRootProps()

    expect(() =>
      act(() => rootProps.onReorder(["Item 2", "Item 1"])),
    ).not.toThrow()
  })

  test("calls onCompleteChange on mouseUp after onReorder changes values", async () => {
    const onCompleteChange = vi.fn()

    const { result } = await renderHook(() =>
      useReorder({
        items: [
          { label: "Item 1", value: "Item 1" },
          { label: "Item 2", value: "Item 2" },
        ],
        onCompleteChange,
      }),
    )

    const rootProps = result.current.getRootProps()

    act(() => rootProps.onReorder(["Item 2", "Item 1"]))

    act(() =>
      result.current.getRootProps().onMouseUp?.({ type: "mouseup" } as any),
    )

    expect(onCompleteChange).toHaveBeenCalledExactlyOnceWith([
      "Item 2",
      "Item 1",
    ])
  })

  test("calls onCompleteChange on touchEnd after onReorder changes values", async () => {
    const onCompleteChange = vi.fn()

    const { result } = await renderHook(() =>
      useReorder({
        items: [
          { label: "Item 1", value: "Item 1" },
          { label: "Item 2", value: "Item 2" },
        ],
        onCompleteChange,
      }),
    )

    const rootProps = result.current.getRootProps()

    act(() => rootProps.onReorder(["Item 2", "Item 1"]))

    act(() =>
      result.current.getRootProps().onTouchEnd?.({ type: "touchend" } as any),
    )

    expect(onCompleteChange).toHaveBeenCalledExactlyOnceWith([
      "Item 2",
      "Item 1",
    ])
  })

  test("does not call onCompleteChange again on consecutive mouseUp without reorder", async () => {
    const onCompleteChange = vi.fn()

    const { result } = await renderHook(() =>
      useReorder({
        items: [
          { label: "Item 1", value: "Item 1" },
          { label: "Item 2", value: "Item 2" },
        ],
        onCompleteChange,
      }),
    )

    const rootProps = result.current.getRootProps()

    act(() => rootProps.onReorder(["Item 2", "Item 1"]))

    act(() =>
      result.current.getRootProps().onMouseUp?.({ type: "mouseup" } as any),
    )
    expect(onCompleteChange).toHaveBeenCalledTimes(1)

    // prevValues.current は更新済みなので2回目は呼ばれない
    act(() =>
      result.current.getRootProps().onMouseUp?.({ type: "mouseup" } as any),
    )
    expect(onCompleteChange).toHaveBeenCalledTimes(1)
  })

  test("does not throw on mouseUp after onReorder when onCompleteChange is not provided", async () => {
    const { result } = await renderHook(() =>
      useReorder({
        items: [
          { label: "Item 1", value: "Item 1" },
          { label: "Item 2", value: "Item 2" },
        ],
      }),
    )

    const rootProps = result.current.getRootProps()

    act(() => rootProps.onReorder(["Item 2", "Item 1"]))

    expect(() =>
      act(() => rootProps.onMouseUp?.({ type: "mouseup" } as any)),
    ).not.toThrow()
  })

  test("getRootProps keeps caller precedence and merges refs and events once", async () => {
    const hookRef = vi.fn()
    const callerRef = vi.fn()
    const onChange = vi.fn<(values: string[]) => void>()
    const onCompleteChange = vi.fn<(values: string[]) => void>()
    const hookMouseUp = vi.fn(() => "hookMouseUp")
    const callerMouseUp = vi.fn(() => "callerMouseUp")
    const hookTouchEnd = vi.fn(() => "hookTouchEnd")
    const callerTouchEnd = vi.fn(() => "callerTouchEnd")
    const hookReorder = vi.fn<(values: string[]) => void>()
    const callerReorder = vi.fn<(values: string[]) => void>()

    const { result } = await renderHook(() =>
      useReorder({
        id: "hook-id",
        ref: (...args) => {
          hookRef(...args)
        },
        className: "a",
        items: [
          { label: "Item 1", value: "Item 1" },
          { label: "Item 2", value: "Item 2" },
        ],
        onChange,
        onCompleteChange,
        onMouseUp: () => {
          hookMouseUp()
        },
        onReorder: hookReorder,
        onTouchEnd: () => {
          hookTouchEnd()
        },
      }),
    )

    const rootProps = result.current.getRootProps({
      id: "caller-id",
      ref: (...args) => {
        callerRef(...args)
      },
      className: "b",
      onMouseUp: () => {
        callerMouseUp()
      },
      onReorder: callerReorder,
      onTouchEnd: () => {
        callerTouchEnd()
      },
    })

    expect(rootProps.className).toBe("a b")
    expect(rootProps.id).toBe("caller-id")

    const node = document.createElement("ul")
    const rootRef = rootProps.ref as (node: HTMLUListElement | null) => void
    rootRef(node)

    expect(hookRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)

    act(() => rootProps.onReorder(["Item 2", "Item 1"]))

    expect(hookReorder).toHaveBeenCalledTimes(1)
    expect(callerReorder).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledTimes(1)
    const hookReorderOrder = hookReorder.mock.invocationCallOrder[0]
    const callerReorderOrder = callerReorder.mock.invocationCallOrder[0]
    const onChangeOrder = onChange.mock.invocationCallOrder[0]
    expect(hookReorderOrder).toBeDefined()
    expect(callerReorderOrder).toBeDefined()
    expect(onChangeOrder).toBeDefined()
    expect(hookReorderOrder!).toBeLessThan(callerReorderOrder!)
    expect(callerReorderOrder!).toBeLessThan(onChangeOrder!)

    act(() =>
      result.current
        .getRootProps({
          onMouseUp: () => {
            callerMouseUp()
          },
        })
        .onMouseUp?.({ type: "mouseup" } as any),
    )

    expect(hookMouseUp).toHaveBeenCalledTimes(1)
    expect(callerMouseUp).toHaveBeenCalledTimes(1)
    expect(onCompleteChange).toHaveBeenCalledTimes(1)
    const hookMouseUpOrder = hookMouseUp.mock.invocationCallOrder[0]
    const callerMouseUpOrder = callerMouseUp.mock.invocationCallOrder[0]
    const onCompleteMouseUpOrder = onCompleteChange.mock.invocationCallOrder[0]
    expect(hookMouseUpOrder).toBeDefined()
    expect(callerMouseUpOrder).toBeDefined()
    expect(onCompleteMouseUpOrder).toBeDefined()
    expect(hookMouseUpOrder!).toBeLessThan(callerMouseUpOrder!)
    expect(callerMouseUpOrder!).toBeLessThan(onCompleteMouseUpOrder!)

    act(() => rootProps.onReorder(["Item 1", "Item 2"]))

    act(() =>
      result.current
        .getRootProps({
          onTouchEnd: () => {
            callerTouchEnd()
          },
        })
        .onTouchEnd?.({ type: "touchend" } as any),
    )

    expect(hookTouchEnd).toHaveBeenCalledTimes(1)
    expect(callerTouchEnd).toHaveBeenCalledTimes(1)
    expect(onCompleteChange).toHaveBeenCalledTimes(2)
    const hookTouchEndOrder = hookTouchEnd.mock.invocationCallOrder[0]
    const callerTouchEndOrder = callerTouchEnd.mock.invocationCallOrder[0]
    const onCompleteTouchEndOrder = onCompleteChange.mock.invocationCallOrder[1]
    expect(hookTouchEndOrder).toBeDefined()
    expect(callerTouchEndOrder).toBeDefined()
    expect(onCompleteTouchEndOrder).toBeDefined()
    expect(hookTouchEndOrder!).toBeLessThan(callerTouchEndOrder!)
    expect(callerTouchEndOrder!).toBeLessThan(onCompleteTouchEndOrder!)
  })

  test("getItemProps merges refs once and keeps hook precedence", async () => {
    const hookRef = vi.fn()
    const callerRef = vi.fn()

    const wrapper = ({ children }: any) => (
      <ReorderContext value={{ orientation: "vertical" }}>
        {children}
      </ReorderContext>
    )

    const { result } = await renderHook(
      () =>
        useReorderItem({
          id: "hook-id",
          ref: (...args) => {
            hookRef(...args)
          },
          className: "a",
          style: { color: "red" },
          label: "Hook Label",
          value: "item-1",
        }),
      { wrapper },
    )

    const itemProps = result.current.getItemProps({
      id: "caller-id",
      ref: (...args) => {
        callerRef(...args)
      },
      className: "b",
      style: { background: "blue" },
    })

    expect(itemProps.className).toBe("b a")
    expect(itemProps.id).toBe("hook-id")
    expect(itemProps.style).toMatchObject({
      background: "blue",
      color: "red",
    })

    const node = document.createElement("li")
    const itemRef = itemProps.ref as (node: HTMLLIElement | null) => void
    itemRef(node)

    expect(hookRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)
  })
})
