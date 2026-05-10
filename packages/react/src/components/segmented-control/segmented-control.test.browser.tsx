import type { FC } from "react"
import { page, render } from "#test/browser"
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
  test("should call onChange when a different item is selected", async () => {
    const onChange = vi.fn()
    const { user } = await render(<TestComponent onChange={onChange} />)
    await user.click(page.getByText("Two"))
    expect(onChange).toHaveBeenCalledWith("two")
  })

  test("should update selected item when clicked", async () => {
    const { user } = await render(<TestComponent />)
    await expect.element(page.getByRole("radio", { name: "One" })).toBeChecked()
    await user.click(page.getByText("Two"))
    await expect.element(page.getByRole("radio", { name: "Two" })).toBeChecked()
  })
})
