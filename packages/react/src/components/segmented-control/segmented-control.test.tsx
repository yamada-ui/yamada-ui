import type { FC, PropsWithChildren } from "react"
import { a11y, act, page, render, renderHook } from "#test/browser"
import {
  SegmentedControl,
  SegmentedControlContext,
  SegmentedControlDescendantsContext,
  useSegmentedControl,
  useSegmentedControlItem,
} from "./"

const items: Required<SegmentedControl.RootProps>["items"] = [
  { label: "One", value: "one" },
  { label: "Two", value: "two" },
  { label: "Three", value: "three" },
]

interface TestComponentProps extends SegmentedControl.RootProps {}

const TestComponent: FC<TestComponentProps> = (props) => {
  return <SegmentedControl.Root defaultValue="one" items={items} {...props} />
}

const SegmentedControlItemHookWrapper: FC<PropsWithChildren> = ({
  children,
}) => {
  const {
    descendants,
    getRootProps: _getRootProps,
    ...context
  } = useSegmentedControl<string>({ defaultValue: "one" })

  return (
    <SegmentedControlContext value={context}>
      <SegmentedControlDescendantsContext value={descendants}>
        {children}
      </SegmentedControlDescendantsContext>
    </SegmentedControlContext>
  )
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

  test("merges root prop getter values with caller props", async () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const rootElement = document.createElement("div")
    const { result } = await renderHook(() =>
      useSegmentedControl({
        ref: restRef,
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        "data-testid": "rest-root",
        onClick: restOnClick,
      }),
    )

    const rootProps = result.current.getRootProps({
      ref: callerRef,
      className: "from-caller",
      style: { color: "blue", paddingTop: "8px" },
      "data-testid": "caller-root",
      onClick: callerOnClick,
    })

    expect(rootProps.className).toContain("from-rest")
    expect(rootProps.className).toContain("from-caller")
    expect(rootProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })
    expect(rootProps["data-testid"]).toBe("caller-root")
    expect(rootProps.role).toBe("radiogroup")

    act(() => {
      rootProps.onClick?.({} as any)

      if (typeof rootProps.ref === "function") rootProps.ref(rootElement)
    })

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledWith(rootElement)
    expect(callerRef).toHaveBeenCalledWith(rootElement)
  })

  test("merges item label prop getter values with caller props", async () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const labelElement = document.createElement("label")
    const { result } = await renderHook(
      () =>
        useSegmentedControlItem({
          ref: restRef,
          className: "from-rest",
          style: { backgroundColor: "red", paddingTop: "4px" },
          "data-testid": "rest-item",
          value: "one",
          onClick: restOnClick,
        }),
      { wrapper: SegmentedControlItemHookWrapper },
    )

    const labelProps = result.current.getLabelProps({
      ref: callerRef,
      className: "from-caller",
      style: { color: "blue", paddingTop: "8px" },
      "data-testid": "caller-item",
      onClick: callerOnClick,
    })

    expect(labelProps.className).toContain("from-rest")
    expect(labelProps.className).toContain("from-caller")
    expect(labelProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })
    expect(labelProps["data-testid"]).toBe("caller-item")
    expect(labelProps["data-checked"]).toBe("")

    act(() => {
      labelProps.onClick?.({} as any)

      if (typeof labelProps.ref === "function") labelProps.ref(labelElement)
    })

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledWith(labelElement)
    expect(callerRef).toHaveBeenCalledWith(labelElement)
  })
})
