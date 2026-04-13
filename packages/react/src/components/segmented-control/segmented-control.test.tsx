import type { FC } from "react"
import { a11y, page, render } from "#test/browser"
import { SegmentedControl } from "./"

const items: Required<SegmentedControl.RootProps>["items"] = [
  { label: "One", value: "one" },
  { label: "Two", value: "two" },
  { label: "Three", value: "three" },
]

interface TestComponentProps extends SegmentedControl.RootProps {}

const TestComponent: FC<TestComponentProps> = (props) => {
  return <SegmentedControl.Root defaultValue="one" items={items} {...props} />
}

describe("<SegmentedControl />", () => {
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(SegmentedControl.Root.displayName).toBe("SegmentedControlRoot")
    expect(SegmentedControl.Item.displayName).toBe("SegmentedControlItem")
  })

  test("sets `className` correctly", async () => {
    await render(<TestComponent />)

    await expect
      .element(page.getByRole("radiogroup"))
      .toHaveClass("ui-segmented-control__root")
    expect(
      page.getByRole("radio", { name: "One" }).element().parentElement,
    ).toHaveClass("ui-segmented-control__item")
  })

  test("renders HTML tag correctly", async () => {
    await render(<TestComponent />)

    expect(page.getByRole("radiogroup").element().tagName).toBe("DIV")
    expect(
      page.getByRole("radio", { name: "One" }).element().parentElement?.tagName,
    ).toBe("LABEL")
  })

  test("should disable segmented control", async () => {
    await render(<TestComponent disabled />)

    await expect
      .element(page.getByRole("radio", { name: "One" }))
      .toBeDisabled()
    await expect
      .element(page.getByRole("radio", { name: "Two" }))
      .toBeDisabled()
    await expect
      .element(page.getByRole("radio", { name: "Three" }))
      .toBeDisabled()
  })

  test("should call onChange when a different item is selected", async () => {
    const onChange = vi.fn()
    await render(<TestComponent onChange={onChange} />)

    page.getByRole("radio", { name: "Two" }).element().click()
    expect(onChange).toHaveBeenCalledWith("two")
  })

  test("should update selected item when clicked", async () => {
    await render(<TestComponent />)

    const one = page.getByRole("radio", { name: "One" })
    const two = page.getByRole("radio", { name: "Two" })

    await expect.element(one).toBeChecked()

    two.element().click()
    await expect.element(two).toBeChecked()
  })

  test("should apply readOnly attributes", async () => {
    await render(<TestComponent readOnly />)

    await expect
      .element(page.getByRole("radiogroup"))
      .toHaveAttribute("data-readonly")

    await expect
      .element(page.getByRole("radio", { name: "One" }))
      .toHaveAttribute("data-readonly")
    await expect
      .element(page.getByRole("radio", { name: "Two" }))
      .toHaveAttribute("data-readonly")
    await expect
      .element(page.getByRole("radio", { name: "Three" }))
      .toHaveAttribute("data-readonly")
  })
})
