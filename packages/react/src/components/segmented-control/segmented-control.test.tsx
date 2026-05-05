import type { FC, PropsWithChildren } from "react"
import { a11y, act, render, renderHook, screen } from "#test"
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

  test("merges root prop getter values with caller props", () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const rootElement = document.createElement("div")
    const { result } = renderHook(() =>
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

  test("merges item label prop getter values with caller props", () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const labelElement = document.createElement("label")
    const { result } = renderHook(
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
