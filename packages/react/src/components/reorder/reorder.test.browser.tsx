import type {
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react"
import { act } from "react"
import { page, render, renderHook } from "#test/browser"
import { Reorder, useReorder } from "./"

const mouseUpEvent = {
  type: "mouseup",
} as unknown as ReactMouseEvent<HTMLUListElement>

const touchEndEvent = {
  type: "touchend",
} as unknown as ReactTouchEvent<HTMLUListElement>

describe("<Reorder />", () => {
  test("trigger fires pointerDown event and item has data-has-trigger attribute", async () => {
    const { user } = await render(
      <Reorder.Root>
        <Reorder.Item data-testid="item" value="Item 1">
          <Reorder.Trigger data-testid="trigger" />
        </Reorder.Item>
      </Reorder.Root>,
    )

    await user.click(page.getByTestId("trigger"))

    await expect
      .element(page.getByTestId("item"))
      .toHaveAttribute("data-has-trigger", "")
  })

  test("does not call onCompleteChange on mouseUp when values have not changed", async () => {
    const onCompleteChange = vi.fn()

    const { user } = await render(
      <Reorder.Root onCompleteChange={onCompleteChange}>
        <Reorder.Item value="Item 1">Item 1</Reorder.Item>
        <Reorder.Item value="Item 2">Item 2</Reorder.Item>
      </Reorder.Root>,
    )

    await user.click(page.getByRole("list"))

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
