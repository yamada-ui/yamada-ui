import { useState } from "react"
import { a11y, drag, render, screen, waitFor } from "../../../test"
import { Reorder } from "./"

describe("<Reorder />", () => {
  test("renders with no errors", async () => {
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
    const items: Reorder.RootProps["items"] = [
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

    expect(warnSpy).toHaveBeenCalledWith(
      "Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is 'Item 1' ",
    )
    expect(warnSpy).toHaveBeenCalledTimes(1)
  })

  test("updates items correctly when props change", async () => {
    const initialItems: Reorder.RootProps["items"] = [
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
    ]

    const updatedItems: Reorder.RootProps["items"] = [
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

  test.skip("calls onChange and onCompleteChange correctly", async () => {
    const onChange = vi.fn()
    const onCompleteChange = vi.fn()

    const items: Reorder.RootProps["items"] = [
      { label: "Item 1", value: "Item 1" },
      { label: "Item 2", value: "Item 2" },
    ]

    const { user } = render(
      <Reorder.Root
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
