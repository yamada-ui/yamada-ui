import type { ChangeEvent } from "react"
import type { CheckboxItem } from "./"
import { a11y, act, render, renderHook, screen } from "@/test"
import { FormControl } from "../form-control"
import { Checkbox, CheckboxGroup, useCheckboxGroup } from "./"

describe("<Checkbox />", () => {
  test("Checkbox renders correctly", async () => {
    await a11y(<Checkbox>Yes</Checkbox>)
  })

  test("should be checked", () => {
    render(
      <Checkbox data-testid="Checkbox" defaultChecked>
        Yes
      </Checkbox>,
    )
    expect(screen.getByTestId("Checkbox")).toHaveAttribute("data-checked")
  })

  test("should be disabled", () => {
    render(
      <Checkbox data-testid="Checkbox" disabled>
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
      <Checkbox data-testid="Checkbox" readOnly>
        Yes
      </Checkbox>,
    )
    expect(
      screen.getByTestId("Checkbox").querySelector("input"),
    ).not.toHaveAttribute("aria-readonly", "true")
    expect(
      screen.getByTestId("Checkbox").querySelector("input"),
    ).not.toHaveAttribute("readonly", "true")
  })

  test("should be invalid", () => {
    render(
      <Checkbox data-testid="Checkbox" invalid value="No">
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
          defaultValue={["No"]}
          direction="row"
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
    const indeterminate = values.some(Boolean) && !allChecked

    render(
      <>
        <Checkbox
          data-testid="Checkbox1"
          checked={allChecked}
          indeterminate={indeterminate}
        >
          Decision Tree
        </Checkbox>

        <Checkbox data-testid="Checkbox2" checked={values[0]}>
          Yes
        </Checkbox>

        <Checkbox data-testid="Checkbox3" checked={values[1]}>
          No
        </Checkbox>
      </>,
    )

    expect(
      screen.getByTestId("Checkbox1").getElementsByTagName("div")[0],
    ).toHaveAttribute("data-indeterminate")
  })

  test("should use the specified id when provided", () => {
    const customId = "custom-checkbox-id"
    render(<Checkbox id={customId}>Checkbox</Checkbox>)

    expect(screen.getByRole("checkbox")).toHaveAttribute("id", customId)
  })

  test("should have a unique id for each input element", () => {
    render(
      <>
        <Checkbox>First Checkbox</Checkbox>
        <Checkbox>Second Checkbox</Checkbox>
      </>,
    )

    const [id1, id2] = screen
      .getAllByRole("checkbox")
      .map((checkbox) => checkbox.id)
    expect(id1).not.toBe(id2)
  })

  test("should have a unique id for each input element when using FormControl and CheckboxGroup", () => {
    render(
      <FormControl>
        <CheckboxGroup>
          <Checkbox>First Checkbox</Checkbox>
          <Checkbox>Second Checkbox</Checkbox>
        </CheckboxGroup>
      </FormControl>,
    )

    const [id1, id2] = screen
      .getAllByRole("checkbox")
      .map((checkbox) => checkbox.id)
    expect(id1).not.toBe(id2)
  })

  test("should add value when checkbox is checked", () => {
    const { result } = renderHook(() => useCheckboxGroup({ defaultValue: [] }))
    const event = {
      target: {
        checked: true,
        value: "Yes",
      },
    }

    act(() => {
      result.current.onChange(event as ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.value).toStrictEqual(["Yes"])
  })

  test("should remove value when checkbox is unchecked", () => {
    const { result } = renderHook(() =>
      useCheckboxGroup({ defaultValue: ["Yes"] }),
    )

    act(() => {
      result.current.onChange("Yes")
    })

    expect(result.current.value).toStrictEqual([])
  })

  test("should return checked attribute", () => {
    const { result } = renderHook(() =>
      useCheckboxGroup({ defaultValue: ["Yes"] }),
    )
    const props = result.current.getCheckboxProps({ value: "Yes" })

    expect(props.checked).toBeTruthy()
  })
})
