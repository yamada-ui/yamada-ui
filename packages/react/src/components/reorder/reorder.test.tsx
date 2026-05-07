import type {
  MouseEvent as ReactMouseEvent,
  ReactNode,
  TouchEvent as ReactTouchEvent,
} from "react"
import { useState } from "react"
import { a11y, act, render, renderHook, screen } from "#test"
import { Reorder, ReorderContext, useReorder, useReorderItem } from "./"

const mouseUpEvent = {
  type: "mouseup",
} as unknown as ReactMouseEvent<HTMLUListElement>

const touchEndEvent = {
  type: "touchend",
} as unknown as ReactTouchEvent<HTMLUListElement>

describe("<Reorder />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Reorder.Root>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )
  })

  test("warns about duplicate", () => {
    const warnSpy = vi.spyOn(globalThis.console, "warn")

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

    expect(screen.getByTestId("item")).toHaveAttribute("data-has-trigger", "")
  })

  test("getRootProps keeps caller precedence and merges refs and events once", () => {
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

    const { result } = renderHook(() =>
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
    const rootRef = rootProps.ref
    if (typeof rootRef === "function") rootRef(node)

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
        .onMouseUp?.(mouseUpEvent),
    )

    expect(hookMouseUp).toHaveBeenCalledTimes(1)
    expect(callerMouseUp).toHaveBeenCalledTimes(1)
    expect(onCompleteChange).toHaveBeenCalledTimes(1)
    expect(onCompleteChange).toHaveBeenCalledExactlyOnceWith([
      "Item 2",
      "Item 1",
    ])
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
        .onTouchEnd?.(touchEndEvent),
    )

    expect(hookTouchEnd).toHaveBeenCalledTimes(1)
    expect(callerTouchEnd).toHaveBeenCalledTimes(1)
    expect(onCompleteChange).toHaveBeenCalledTimes(2)
    expect(onCompleteChange).toHaveBeenNthCalledWith(2, ["Item 1", "Item 2"])
    const hookTouchEndOrder = hookTouchEnd.mock.invocationCallOrder[0]
    const callerTouchEndOrder = callerTouchEnd.mock.invocationCallOrder[0]
    const onCompleteTouchEndOrder = onCompleteChange.mock.invocationCallOrder[1]
    expect(hookTouchEndOrder).toBeDefined()
    expect(callerTouchEndOrder).toBeDefined()
    expect(onCompleteTouchEndOrder).toBeDefined()
    expect(hookTouchEndOrder!).toBeLessThan(callerTouchEndOrder!)
    expect(callerTouchEndOrder!).toBeLessThan(onCompleteTouchEndOrder!)
  })

  test("getItemProps merges refs once and keeps hook precedence", () => {
    const hookRef = vi.fn()
    const callerRef = vi.fn()

    const wrapper = ({ children }: { children?: ReactNode }) => (
      <ReorderContext value={{ orientation: "vertical" }}>
        {children}
      </ReorderContext>
    )

    const { result } = renderHook(
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
    const itemRef = itemProps.ref
    if (typeof itemRef === "function") itemRef(node)

    expect(hookRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)
  })
})
