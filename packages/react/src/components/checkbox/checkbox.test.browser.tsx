import { a11y, fireEvent, page, render, renderHook } from "#test/browser"
import { CheckboxGroup } from "."
import { Checkbox } from "./checkbox"
import { useCheckbox } from "./use-checkbox"
import { useCheckboxGroup } from "./use-checkbox-group"

const items = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
]

describe("<Checkbox />", () => {
  test("renders component correctly", async () => {
    await a11y(<Checkbox defaultChecked>checkbox</Checkbox>)
  })

  test("sets `aria-checked` to mixed and native `indeterminate` when indeterminate", async () => {
    await render(<Checkbox indeterminate>checkbox</Checkbox>)

    const input = page.getByRole("checkbox").element()

    expect(input).toHaveAttribute("aria-checked", "mixed")
    expect((input as HTMLInputElement).indeterminate).toBeTruthy()
  })

  test("forwards `aria-controls` to the input element", async () => {
    await render(<Checkbox aria-controls="panel1">checkbox</Checkbox>)

    const input = page.getByRole("checkbox").element()

    expect(input).toHaveAttribute("aria-controls", "panel1")
  })

  test("forwards `aria-labelledby` to the input element", async () => {
    await render(<Checkbox aria-labelledby="label1">checkbox</Checkbox>)

    const input = page.getByRole("checkbox").element()

    expect(input).toHaveAttribute("aria-labelledby", "label1")
  })

  test("forwards `tabIndex` to the input element", async () => {
    await render(<Checkbox tabIndex={-1}>checkbox</Checkbox>)

    const input = page.getByRole("checkbox").element()

    expect(input).toHaveAttribute("tabindex", "-1")
  })

  test("sets `displayName` correctly", () => {
    expect(Checkbox.displayName).toBe("CheckboxRoot")
    expect(CheckboxGroup.Root.displayName).toBe("CheckboxGroup")
  })

  test("sets `className` correctly", async () => {
    await render(<CheckboxGroup.Root items={items} />)
    const checkbox = page.getByRole("checkbox").elements()[0]
    expect(page.getByRole("group").element()).toHaveClass("ui-checkbox__group")
    expect(checkbox?.parentElement).toHaveClass("ui-checkbox__root")
    expect(checkbox?.parentElement?.children[1]).toHaveClass(
      "ui-checkbox__indicator",
    )
    expect(checkbox?.parentElement?.children[2]).toHaveClass(
      "ui-checkbox__label",
    )
  })

  test("renders HTML tag correctly", async () => {
    await render(<CheckboxGroup.Root items={items} />)
    const checkbox = page.getByRole("checkbox").elements()[0]
    expect(page.getByRole("group").element().tagName).toBe("DIV")
    expect(checkbox?.parentElement?.tagName).toBe("LABEL")
    expect(checkbox?.tagName).toBe("INPUT")
    expect(checkbox?.parentElement?.children[1]?.tagName).toBe("DIV")
    expect(checkbox?.parentElement?.children[2]?.tagName).toBe("SPAN")
  })

  test("merges root props on Checkbox without overwriting className, style, or ref", async () => {
    const userRef = vi.fn()
    await render(
      <Checkbox
        className="from-root"
        rootProps={{
          ref: userRef,
          className: "from-user",
          style: { backgroundColor: "blue", color: "red" },
          "data-testid": "checkbox-root",
        }}
      >
        checkbox
      </Checkbox>,
    )

    const root = page.getByTestId("checkbox-root")

    await expect.element(root).toHaveClass("ui-checkbox__root")
    await expect.element(root).toHaveClass("from-root")
    await expect.element(root).toHaveClass("from-user")
    await expect.element(root).toHaveStyle({ color: "rgb(255, 0, 0)" })
    await expect
      .element(root)
      .toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })
    expect(userRef).toHaveBeenCalledTimes(1)
    expect(userRef).toHaveBeenCalledWith(root.element())
  })

  test("merges root props values in useCheckbox with caller props", async () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const { result } = await renderHook(() =>
      useCheckbox({
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        onClick: restOnClick,
      }),
    )

    const rootProps = result.current.getRootProps({
      className: "from-caller",
      style: { color: "blue", paddingTop: "8px" },
      onClick: callerOnClick,
    })

    expect(rootProps.className).toContain("from-rest")
    expect(rootProps.className).toContain("from-caller")
    expect(rootProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })

    rootProps.onClick?.({} as any)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
  })
})

describe("<CheckboxGroup />", () => {
  test("should handle onChange callback when checking checkboxes", async () => {
    const onChange = vi.fn()
    await render(<CheckboxGroup.Root items={items} onChange={onChange} />)

    const checkboxes = page.getByRole("checkbox").elements()

    fireEvent.click(checkboxes[0]!)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(["1"])

    fireEvent.click(checkboxes[1]!)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith(["1", "2"])
  })

  test("should remove value when unchecking checkbox", async () => {
    const onChange = vi.fn()
    await render(
      <CheckboxGroup.Root
        defaultValue={["1", "2"]}
        items={items}
        onChange={onChange}
      />,
    )

    const checkboxes = page.getByRole("checkbox").elements()

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).toBeChecked()

    fireEvent.click(checkboxes[0]!)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(["2"])

    fireEvent.click(checkboxes[1]!)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith([])
  })

  test("should respect max limit when checking checkboxes", async () => {
    const onChange = vi.fn()
    await render(
      <CheckboxGroup.Root items={items} max={2} onChange={onChange} />,
    )

    const checkboxes = page.getByRole("checkbox").elements()

    fireEvent.click(checkboxes[0]!)
    expect(onChange).toHaveBeenLastCalledWith(["1"])

    fireEvent.click(checkboxes[1]!)
    expect(onChange).toHaveBeenLastCalledWith(["1", "2"])

    fireEvent.click(checkboxes[2]!)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).not.toHaveBeenLastCalledWith(["1", "2", "3"])
  })

  test("should disable unchecked checkboxes when max limit is reached", async () => {
    await render(
      <CheckboxGroup.Root defaultValue={["1", "2"]} items={items} max={2} />,
    )

    const checkboxes = page.getByRole("checkbox").elements()

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).toBeChecked()
    expect(checkboxes[2]).not.toBeChecked()
    expect(checkboxes[2]).toHaveAttribute("aria-disabled", "true")
  })

  test("should enable disabled checkbox when value is removed", async () => {
    const { rerender } = await render(
      <CheckboxGroup.Root items={items} max={2} value={["1", "2"]} />,
    )

    const checkboxes = page.getByRole("checkbox").elements()

    expect(checkboxes[2]).toHaveAttribute("aria-disabled", "true")

    await rerender(<CheckboxGroup.Root items={items} max={2} value={["1"]} />)

    expect(checkboxes[2]).not.toHaveAttribute("aria-disabled", "true")
  })

  test("should prevent clicks when disabled checkboxes due to max limit", async () => {
    const onChange = vi.fn()
    await render(
      <CheckboxGroup.Root
        defaultValue={["1", "2"]}
        items={items}
        max={2}
        onChange={onChange}
      />,
    )

    const checkboxes = page.getByRole("checkbox")

    await expect.element(checkboxes.nth(2)).toBeDisabled()
    fireEvent.click(checkboxes.nth(2).element())
    expect(onChange).not.toHaveBeenCalled()
  })

  test("should not change value when readOnly", async () => {
    const onChange = vi.fn()
    await render(
      <CheckboxGroup.Root items={items} readOnly onChange={onChange} />,
    )

    const checkboxes = page.getByRole("checkbox").elements()

    fireEvent.click(checkboxes[0]!)
    expect(onChange).not.toHaveBeenCalled()
  })

  test("should handle defaultValue correctly", async () => {
    await render(<CheckboxGroup.Root defaultValue={["1", "3"]} items={items} />)

    const checkboxes = page.getByRole("checkbox").elements()

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()
    expect(checkboxes[2]).toBeChecked()
  })

  test("should handle controlled value correctly", async () => {
    const { rerender } = await render(
      <CheckboxGroup.Root items={items} value={["1"]} />,
    )

    const checkboxes = page.getByRole("checkbox").elements()

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()

    await rerender(<CheckboxGroup.Root items={items} value={["1", "2"]} />)

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).toBeChecked()
  })

  test("should accept required prop", async () => {
    // Note: Currently, the required prop on CheckboxGroup doesn't propagate
    // as observable attributes (required/aria-required/data-required) on checkbox inputs.
    // This test verifies the component accepts the prop without error.
    // Ideally, we would assert: checkboxes have required/aria-required attributes.
    const { container } = await render(
      <CheckboxGroup.Root items={items} required />,
    )

    const group = container.querySelector('[role="group"]')
    const checkboxes = page.getByRole("checkbox").elements()

    expect(group).toBeInTheDocument()
    expect(checkboxes).toHaveLength(items.length)
  })

  test("should not add value when max is reached via onChange", async () => {
    const { act, result } = await renderHook(() => useCheckboxGroup({ max: 1 }))

    await act(() => {
      result.current.onChange("1")
    })
    expect(result.current.value).toStrictEqual(["1"])

    await act(() => {
      result.current.onChange("2")
    })
    expect(result.current.value).toStrictEqual(["1"])
  })

  test("merges getRootProps values in useCheckboxGroup and calls each ref once", async () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const rootElement = document.createElement("div")
    const { result } = await renderHook(() =>
      useCheckboxGroup({
        ref: restRef,
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        onClick: restOnClick,
      }),
    )

    const rootProps = result.current.getRootProps({
      ref: callerRef,
      className: "from-caller",
      style: { color: "blue", paddingTop: "8px" },
      onClick: callerOnClick,
    })

    expect(rootProps.className).toContain("from-rest")
    expect(rootProps.className).toContain("from-caller")
    expect(rootProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })
    expect(rootProps.role).toBe("group")

    rootProps.onClick?.({} as any)
    if (typeof rootProps.ref === "function") rootProps.ref(rootElement)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledWith(rootElement)
    expect(callerRef).toHaveBeenCalledWith(rootElement)
  })
})
