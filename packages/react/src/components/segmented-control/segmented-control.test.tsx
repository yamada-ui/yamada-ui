import type { FC } from "react"
import { a11y, render, screen } from "../../../test"
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
  test("SegmentedControl renders correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(SegmentedControl.Root.displayName).toBe("SegmentedControlRoot")
    expect(SegmentedControl.Item.displayName).toBe("SegmentedControlItem")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent />)
    expect(screen.getByRole("radiogroup")).toHaveClass(
      "ui-segmented-control__root",
    )
    expect(screen.getAllByRole("radio")[0]?.parentElement).toHaveClass(
      "ui-segmented-control__item",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)
    expect(screen.getByRole("radiogroup").tagName).toBe("DIV")
    expect(screen.getAllByRole("radio")[0]?.parentElement?.tagName).toBe(
      "LABEL",
    )
  })

  test("should disable segmented control", () => {
    render(<TestComponent disabled />)
    Array.from(
      screen.getByRole("radiogroup").getElementsByTagName("input"),
    ).forEach((input) => {
      expect(input).toBeDisabled()
    })
  })
})
