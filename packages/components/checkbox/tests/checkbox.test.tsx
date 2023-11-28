import { a11y, render, screen } from "@yamada-ui/test"
import { Checkbox, CheckboxGroup } from "../src"
import type { CheckboxItem } from "../src"

describe("<Checkbox />", () => {
  test("Checkbox renders correctly", async () => {
    const { container } = render(<Checkbox>Yes</Checkbox>)
    await a11y(container)
  })

  test("should be checked", () => {
    render(
      <Checkbox data-testid="Checkbox" defaultIsChecked>
        Yes
      </Checkbox>,
    )
    expect(screen.getByTestId("Checkbox")).toHaveAttribute("data-checked")
  })

  test("should be disabled", () => {
    render(
      <Checkbox data-testid="Checkbox" isDisabled>
        Yes
      </Checkbox>,
    )
    expect(screen.getByTestId("Checkbox")).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })

  test("should render CheckboxGroup with default value", () => {
    render(
      <CheckboxGroup data-testid="CheckboxGroup" defaultValue={["Yes"]}>
        <Checkbox data-testid="Checkbox" value="Yes">
          Yes
        </Checkbox>
      </CheckboxGroup>,
    )
    expect(screen.getByTestId("CheckboxGroup")).toBeInTheDocument()
    expect(screen.getByTestId("Checkbox")).toHaveAttribute("data-checked")
  })

  test("should be read only", () => {
    render(
      <Checkbox data-testid="Checkbox" isReadOnly>
        Yes
      </Checkbox>,
    )
    expect(screen.getByTestId("Checkbox")).toHaveAttribute(
      "aria-readonly",
      "true",
    )
  })

  test("should be invalid", () => {
    render(
      <Checkbox data-testid="Checkbox" isInvalid value="No">
        No
      </Checkbox>,
    )

    expect(screen.getByTestId("Checkbox")).toHaveAttribute(
      "aria-invalid",
      "true",
    )
  })

  test("should render Checkbox with direction", () => {
    const items: CheckboxItem[] = [
      { label: "Complete", value: "complete" },
      { label: "Incomplete", value: "incomplete" },
    ]

    render(
      <>
        <CheckboxGroup
          data-testid="CheckboxGroup1"
          direction="row"
          defaultValue={["No"]}
        >
          <Checkbox value="yes">Yes</Checkbox>
          <Checkbox value="no">No</Checkbox>
        </CheckboxGroup>

        <CheckboxGroup
          data-testid="CheckboxGroup2"
          defaultValue={["No"]}
          items={items}
        />
      </>,
    )

    expect(screen.getByTestId("CheckboxGroup1")).toHaveStyle({
      "flex-direction": "row",
    })
    expect(screen.getByTestId("CheckboxGroup2")).toHaveStyle({
      "flex-direction": "column",
    })
  })

  test("should render Checkbox with indeterminate", () => {
    const values = [false, true]

    const allChecked = values.every(Boolean)
    const isIndeterminate = values.some(Boolean) && !allChecked

    render(
      <>
        <Checkbox
          data-testid="Checkbox1"
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
        >
          Decision Tree
        </Checkbox>

        <Checkbox data-testid="Checkbox2" isChecked={values[0]}>
          Yes
        </Checkbox>

        <Checkbox data-testid="Checkbox3" isChecked={values[1]}>
          No
        </Checkbox>
      </>,
    )

    expect(
      screen.getByTestId("Checkbox1").getElementsByTagName("span")[0],
    ).toHaveAttribute("data-indeterminate")
  })
})
