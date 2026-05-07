import type {
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react"
import { act, fireEvent, screen } from "@testing-library/react"
import { a11y, render, renderHook } from "#test/browser"
import { Reorder, useReorder } from "./"

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

  test("trigger fires pointerDown event and item has data-has-trigger attribute", async () => {
    await render(
      <Reorder.Root>
        <Reorder.Item data-testid="item" value="Item 1">
          <Reorder.Trigger data-testid="trigger" />
        </Reorder.Item>
      </Reorder.Root>,
    )

    const trigger = screen.getByTestId("trigger")

    fireEvent.pointerDown(trigger)

    expect(screen.getByTestId("item")).toHaveAttribute("data-has-trigger", "")
  })

  test("does not call onCompleteChange on mouseUp when values have not changed", async () => {
    const onCompleteChange = vi.fn()

    await render(
      <Reorder.Root onCompleteChange={onCompleteChange}>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    fireEvent.mouseUp(screen.getByRole("list"))

    expect(onCompleteChange).not.toHaveBeenCalled()
  })

  test("does not call onCompleteChange on touchEnd when values have not changed", async () => {
    const onCompleteChange = vi.fn()

    await render(
      <Reorder.Root onCompleteChange={onCompleteChange}>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    fireEvent.touchEnd(screen.getByRole("list"))

    expect(onCompleteChange).not.toHaveBeenCalled()
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

    act(() => result.current.getRootProps().onMouseUp?.(mouseUpEvent))

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

    act(() => result.current.getRootProps().onTouchEnd?.(touchEndEvent))

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

    act(() => result.current.getRootProps().onMouseUp?.(mouseUpEvent))
    expect(onCompleteChange).toHaveBeenCalledTimes(1)

    act(() => result.current.getRootProps().onMouseUp?.(mouseUpEvent))
    expect(onCompleteChange).toHaveBeenCalledTimes(1)
  })
})
