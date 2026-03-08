import { a11y, act, fireEvent, render, renderHook, screen } from "#test"
import { useState } from "react"
import { Reorder, useReorder } from "./"

describe("<Reorder />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Reorder.Root>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )
  })

  test("render items correctly", () => {
    render(
      <Reorder.Root>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("render items of props correctly", () => {
    const items: Reorder.Item[] = [
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
    ]

    render(<Reorder.Root items={items} />)

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("renders trigger correctly inside of an item", () => {
    render(
      <Reorder.Root orientation="vertical">
        <Reorder.Item value="Item 1">
          <Reorder.Trigger data-testid="ReorderTrigger" />
        </Reorder.Item>
      </Reorder.Root>,
    )

    expect(screen.getByTestId("ReorderTrigger")).toBeInTheDocument()
  })

  test("warns about duplicate", () => {
    const warnSpy = vi.spyOn(global.console, "warn")

    render(
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

    const { user } = render(<Component />)

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

    const { user } = render(<TestComponent />)

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

  test("renders children without explicit value using label fallback", () => {
    render(
      <Reorder.Root>
        <Reorder.Item label="Label A">Label A</Reorder.Item>
        <Reorder.Item label="Label B">Label B</Reorder.Item>
      </Reorder.Root>,
    )

    expect(screen.getByText("Label A")).toBeInTheDocument()
    expect(screen.getByText("Label B")).toBeInTheDocument()
  })

  test("renders items without explicit value using label fallback", () => {
    const items: Reorder.Item[] = [
      { label: "Fallback A" },
      { label: "Fallback B" },
    ]

    render(<Reorder.Root items={items} />)

    expect(screen.getByText("Fallback A")).toBeInTheDocument()
    expect(screen.getByText("Fallback B")).toBeInTheDocument()
  })

  test("calls onCompleteChange on mouseUp when values have changed", () => {
    const onCompleteChange = vi.fn()
    const onChange = vi.fn()

    render(
      <Reorder.Root onChange={onChange} onCompleteChange={onCompleteChange}>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    const list = screen.getByRole("list")

    fireEvent.mouseUp(list)

    expect(onCompleteChange).not.toHaveBeenCalled()
  })

  test("calls onCompleteChange on touchEnd", () => {
    const onCompleteChange = vi.fn()

    render(
      <Reorder.Root onCompleteChange={onCompleteChange}>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    const list = screen.getByRole("list")

    fireEvent.touchEnd(list)

    expect(onCompleteChange).not.toHaveBeenCalled()
  })

  test("trigger fires pointerDown event", () => {
    render(
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

  test("renders with horizontal orientation", () => {
    render(
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

    const { user } = render(<Component />)

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()

    await user.click(screen.getByText("Rerender"))

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("item has data-has-trigger attribute when trigger is present", () => {
    render(
      <Reorder.Root>
        <Reorder.Item data-testid="item" value="Item 1">
          <Reorder.Trigger data-testid="trigger" />
        </Reorder.Item>
      </Reorder.Root>,
    )

    const item = screen.getByTestId("item")

    expect(item).toHaveAttribute("data-has-trigger", "")
  })

  test("calls onReorder without onChange without errors", () => {
    const { result } = renderHook(() =>
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
    ).not.toThrowError()
  })

  test("calls onCompleteChange on mouseUp after onReorder changes values", () => {
    const onCompleteChange = vi.fn()

    const { result } = renderHook(() =>
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

  test("calls onCompleteChange on touchEnd after onReorder changes values", () => {
    const onCompleteChange = vi.fn()

    const { result } = renderHook(() =>
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

  test("does not call onCompleteChange again on consecutive mouseUp without reorder", () => {
    const onCompleteChange = vi.fn()

    const { result } = renderHook(() =>
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

  test("does not throw on mouseUp after onReorder when onCompleteChange is not provided", () => {
    const { result } = renderHook(() =>
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
    ).not.toThrowError()
  })
})
