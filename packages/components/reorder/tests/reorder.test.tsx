import { a11y, render, screen } from "@yamada-ui/test"
import { Reorder, ReorderItem, ReorderTrigger } from "../src"

describe("<Reorder />", () => {
  test("renders with no errors", async () => {
    await a11y(
      <Reorder>
        <ReorderItem label="Item 1">Item 1</ReorderItem>
        <ReorderItem label="Item 2">Item 2</ReorderItem>
      </Reorder>,
    )
  })

  test("render items correctly", () => {
    render(
      <Reorder>
        <ReorderItem label="Item 1">Item 1</ReorderItem>
        <ReorderItem label="Item 2">Item 2</ReorderItem>
      </Reorder>,
    )

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  test("handles orientation correctly", () => {
    render(
      <Reorder data-testid="Reorder" orientation="horizontal">
        <ReorderItem label="Item 1">Item 1</ReorderItem>
        <ReorderItem label="Item 2">Item 2</ReorderItem>
      </Reorder>,
    )

    const reorderList = screen.getByTestId("Reorder")

    expect(reorderList).toHaveStyle(`flex-direction: row;`)
  })

  test("applies correct styles for vertical orientation", () => {
    render(
      <Reorder data-testid="Reorder" orientation="vertical">
        <ReorderItem label="Item 1">Item 1</ReorderItem>
        <ReorderItem label="Item 2">Item 2</ReorderItem>
      </Reorder>,
    )

    const reorderList = screen.getByTestId("Reorder")

    expect(reorderList).toHaveStyle(`flex-direction: column;`)
  })

  test("renders trigger correctly inside of an item", () => {
    render(
      <Reorder orientation="vertical">
        <ReorderItem label="Item 1">
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
        <ReorderItem label="Item 1">Item 1</ReorderItem>
        <ReorderItem label="Item 1">Item 1</ReorderItem>
      </Reorder>,
    )

    expect(warnSpy).toHaveBeenCalledWith(
      "Reorder: 'label' of 'ReorderItem' must not be duplicated. duplicate 'label' is 'Item 1' ",
    )
    expect(warnSpy).toHaveBeenCalledTimes(1)
  })
})
