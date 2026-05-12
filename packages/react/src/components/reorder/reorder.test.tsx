import { a11y, render, screen } from "#test"
import { useState } from "react"
import { Reorder } from "./"

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
})
