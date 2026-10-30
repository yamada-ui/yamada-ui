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

  test("merges shared and individual item props", () => {
    render(
      <SegmentedControl.Root
        itemProps={{
          className: "shared-item",
          style: { color: "red", marginTop: 4 },
          title: "Shared item",
        }}
      >
        <SegmentedControl.Item
          className="individual-item"
          style={{ color: "blue", marginBottom: 8 }}
          title="Individual item"
          value="one"
        >
          One
        </SegmentedControl.Item>
      </SegmentedControl.Root>,
    )

    const item = screen.getByTitle("Individual item")

    expect(item).toHaveClass("shared-item", "individual-item")
    expect(item).toHaveStyle({
      color: "rgb(0, 0, 255)",
      marginBottom: "8px",
      marginTop: "4px",
    })
  })

  test("merges indicator props from all three sources", () => {
    render(
      <SegmentedControl.Root
        defaultValue="one"
        indicatorProps={{
          className: "root-indicator",
          style: { marginTop: 4, opacity: 0.2 },
          title: "Root indicator",
        }}
        itemProps={{
          indicatorProps: {
            className: "shared-indicator",
            style: { marginBottom: 8, opacity: 0.4 },
            title: "Shared indicator",
          },
        }}
      >
        <SegmentedControl.Item
          value="one"
          indicatorProps={{
            className: "individual-indicator",
            style: { opacity: 0.6 },
            title: "Individual indicator",
          }}
        >
          One
        </SegmentedControl.Item>
      </SegmentedControl.Root>,
    )

    const indicator = screen.getByTitle("Individual indicator")

    expect(indicator).toHaveClass(
      "root-indicator",
      "shared-indicator",
      "individual-indicator",
    )
    expect(indicator).toHaveStyle({
      marginBottom: "8px",
      marginTop: "4px",
      opacity: "0.6",
    })
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
