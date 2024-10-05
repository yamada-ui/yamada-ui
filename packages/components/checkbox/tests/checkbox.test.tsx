import type { ChangeEvent } from "react"
import type { CheckboxItem } from "../src"
import { FormControl } from "@yamada-ui/form-control"
import { a11y, act, render, renderHook, screen } from "@yamada-ui/test"
import { Checkbox, CheckboxGroup, useCheckboxGroup } from "../src"

describe("<Checkbox />", () => {
  test("Checkbox renders correctly", async () => {
    await a11y(<Checkbox>Yes</Checkbox>)
  })

  test("should be checked", () => {
    render(
      <Checkbox defaultIsChecked data-testid="Checkbox">
        Yes
      </Checkbox>,
    )
    expect(screen.getByTestId("Checkbox")).toHaveAttribute("data-checked")
  })

  test("should be disabled", () => {
    render(
      <Checkbox isDisabled data-testid="Checkbox">
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
      <CheckboxGroup defaultValue={["Yes"]} data-testid="CheckboxGroup">
        <Checkbox value="Yes" data-testid="Checkbox">
          Yes
        </Checkbox>
      </CheckboxGroup>,
    )
    expect(screen.getByTestId("CheckboxGroup")).toBeInTheDocument()
    expect(screen.getByTestId("Checkbox")).toHaveAttribute("data-checked")
  })

  test("should be read only", () => {
    render(
      <Checkbox isReadOnly data-testid="Checkbox">
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
      <Checkbox isInvalid value="No" data-testid="Checkbox">
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
          defaultValue={["No"]}
          direction="row"
          data-testid="CheckboxGroup1"
        >
          <Checkbox value="yes">Yes</Checkbox>
          <Checkbox value="no">No</Checkbox>
        </CheckboxGroup>

        <CheckboxGroup
          defaultValue={["No"]}
          items={items}
          data-testid="CheckboxGroup2"
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
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          data-testid="Checkbox1"
        >
          Decision Tree
        </Checkbox>

        <Checkbox isChecked={values[0]} data-testid="Checkbox2">
          Yes
        </Checkbox>

        <Checkbox isChecked={values[1]} data-testid="Checkbox3">
          No
        </Checkbox>
      </>,
    )

    expect(
      screen.getByTestId("Checkbox1").getElementsByTagName("span")[0],
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

  test("should return checked attribute when isNative is true", () => {
    const { result } = renderHook(() =>
      useCheckboxGroup({ defaultValue: ["Yes"], isNative: true }),
    )
    const props = result.current.getCheckboxProps({ value: "Yes" })

    expect(props.checked).toBeTruthy()
  })

  test("should return isChecked attribute when isNative is false", () => {
    const { result } = renderHook(() =>
      useCheckboxGroup({ defaultValue: ["Yes"], isNative: false }),
    )
    const props = result.current.getCheckboxProps({ value: "Yes" })

    expect(props.isChecked).toBeTruthy()
  })
})
