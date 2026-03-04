import type { FC } from "react"
import { a11y, fireEvent, render, screen } from "#test"
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

  test("should call onChange when a different item is selected", () => {
    const onChange = vi.fn()
    render(<TestComponent onChange={onChange} />)

    const radios = screen.getAllByRole("radio")
    fireEvent.click(radios[1]!)
    expect(onChange).toHaveBeenCalledWith("two")
  })

  test("should update selected item when clicked", () => {
    render(<TestComponent />)

    const radios = screen.getAllByRole("radio")
    expect(radios[0]).toBeChecked()

    fireEvent.click(radios[1]!)
    expect(radios[1]).toBeChecked()
  })

  test("should apply readOnly attributes", () => {
    render(<TestComponent readOnly />)

    const root = screen.getByRole("radiogroup")
    expect(root).toHaveAttribute("data-readonly")

    const radios = screen.getAllByRole("radio")
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute("data-readonly")
    })
  })
})
