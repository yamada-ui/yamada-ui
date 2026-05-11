import type { FC } from "react"
import { a11y, render, screen } from "#test"
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

  test("sets `tag` correctly", () => {
    render(<TestComponent />)

    expect(screen.getByRole("radiogroup").tagName).toBe("DIV")
    expect(screen.getByText("One").closest("label")?.tagName).toBe("LABEL")
  })

  test("should disable segmented control", () => {
    render(<TestComponent disabled />)

    expect(screen.getByRole("radio", { name: "One" })).toBeDisabled()
    expect(screen.getByRole("radio", { name: "Two" })).toBeDisabled()
    expect(screen.getByRole("radio", { name: "Three" })).toBeDisabled()
  })

  test("should apply readOnly attributes", () => {
    render(<TestComponent readOnly />)

    expect(screen.getByRole("radiogroup")).toHaveAttribute("data-readonly")
    expect(screen.getByRole("radio", { name: "One" })).toHaveAttribute(
      "data-readonly",
    )
    expect(screen.getByRole("radio", { name: "Two" })).toHaveAttribute(
      "data-readonly",
    )
    expect(screen.getByRole("radio", { name: "Three" })).toHaveAttribute(
      "data-readonly",
    )
  })
})
