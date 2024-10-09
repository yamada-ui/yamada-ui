import type { ReorderGenerateItem } from "../src"
import { a11y, act, drag, render, screen, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import { Reorder, ReorderItem, ReorderTrigger } from "../src"

describe("<Reorder />", () => {
  beforeAll(() => {
    Object.defineProperties(MouseEvent.prototype, {
      pageX: {
        configurable: true,
        get() {
          return this.clientX
        },
      },
      pageY: {
        configurable: true,
        get() {
          return this.clientY
        },
      },
    })
  })

  afterAll(() => {
    Object.defineProperty(MouseEvent.prototype, "pageX", {
      configurable: true,
      value: undefined,
    })
    Object.defineProperty(MouseEvent.prototype, "pageY", {
      configurable: true,
      value: undefined,
    })
  })

  test("renders with no errors", async () => {
    await a11y(
      <Reorder>
        <ReorderItem value="Item 1">Item 1</ReorderItem>
        <ReorderItem value="Item 2">Item 2</ReorderItem>
      </Reorder>,
    )
  })

  test("render items correctly", () => {
    render(
      <Reorder>
        <ReorderItem value="Item 1">Item 1</ReorderItem>
        <ReorderItem value="Item 2">Item 2</ReorderItem>
      </Reorder>,
    )

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("render items of props correctly", () => {
    const items: ReorderGenerateItem[] = [
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
    ]

    render(<Reorder items={items} />)

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("handles orientation correctly", () => {
    render(
      <Reorder data-testid="Reorder" orientation="horizontal">
        <ReorderItem value="Item 1">Item 1</ReorderItem>
        <ReorderItem value="Item 2">Item 2</ReorderItem>
      </Reorder>,
    )

    const reorderList = screen.getByTestId("Reorder")

    expect(reorderList).toHaveStyle(`flex-direction: row;`)
  })

  test("applies correct styles for vertical orientation", () => {
    render(
      <Reorder data-testid="Reorder" orientation="vertical">
        <ReorderItem value="Item 1">Item 1</ReorderItem>
        <ReorderItem value="Item 2">Item 2</ReorderItem>
      </Reorder>,
    )

    const reorderList = screen.getByTestId("Reorder")

    expect(reorderList).toHaveStyle(`flex-direction: column;`)
  })

  test("renders trigger correctly inside of an item", () => {
    render(
      <Reorder orientation="vertical">
        <ReorderItem value="Item 1">
          <ReorderTrigger data-testid="ReorderTrigger" />
        </ReorderItem>
      </Reorder>,
    )

    expect(screen.getByTestId("ReorderTrigger")).toBeInTheDocument()
  })

  test("warns about duplicate", () => {
    const warnSpy = vi.spyOn(global.console, "warn")

    render(
      <Reorder orientation="vertical">
        <ReorderItem value="Item 1">Item 1</ReorderItem>
        <ReorderItem value="Item 1">Item 1</ReorderItem>
      </Reorder>,
    )

    expect(warnSpy).toHaveBeenCalledWith(
      "Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is 'Item 1' ",
    )
    expect(warnSpy).toHaveBeenCalledTimes(1)
  })

  test("updates items correctly when props change", () => {
    const initialItems: ReorderGenerateItem[] = [
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
    ]

    const updatedItems: ReorderGenerateItem[] = [
      { label: "Item 3", value: "Item 3" },
      { label: "Item 4", value: "Item 4" },
    ]

    const Component = () => {
      const [items, setItems] = useState(initialItems)

      return (
        <>
          <button onClick={() => setItems(updatedItems)}>Update Items</button>

          <Reorder items={items} />
        </>
      )
    }

    render(<Component />)

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()

    act(() => {
      screen.getByText("Update Items").click()
    })

    expect(screen.getByText("Item 3")).toBeInTheDocument()
    expect(screen.getByText("Item 4")).toBeInTheDocument()
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument()
    expect(screen.queryByText("Item 2")).not.toBeInTheDocument()
  })

  test("calls onChange and onCompleteChange correctly", async () => {
    const onChange = vi.fn()
    const onCompleteChange = vi.fn()

    const items: ReorderGenerateItem[] = [
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
    ]

    const { user } = render(
      <Reorder
        items={items}
        onChange={onChange}
        onCompleteChange={onCompleteChange}
      />,
    )

    const el = screen.getByText("Item 1")

    await drag(user)({ target: el, coords: (i) => ({ x: 0, y: i * 100 }) })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(["Item 2", "Item 1"])
    })
    await waitFor(() => {
      expect(onCompleteChange).toHaveBeenCalledWith(["Item 2", "Item 1"])
    })
  })
})
