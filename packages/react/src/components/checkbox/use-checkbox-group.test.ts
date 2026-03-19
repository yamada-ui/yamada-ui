import { act, renderHook } from "#test"
import { useCheckboxGroup } from "./use-checkbox-group"

describe("useCheckboxGroup", () => {
  test("returns expected getRootProps", () => {
    const { result } = renderHook(() => useCheckboxGroup())
    expect(result.current.getRootProps()).toHaveProperty("role", "group")
  })

  test("returns expected getInputProps and handles disabled with max", () => {
    const { result } = renderHook(() => useCheckboxGroup({ max: 2, defaultValue: ["1", "2"] }))
    
    // Test that the 3rd item would be disabled
    const inputProps = result.current.getInputProps({ value: "3" })
    expect(inputProps.disabled).toBeTruthy()

    // Test that already checked items are not disabled
    const checkedInputProps = result.current.getInputProps({ value: "1" })
    expect(checkedInputProps.disabled).toBeFalsy()
  })

  test("handles onChange", () => {
    const { result } = renderHook(() => useCheckboxGroup())

    act(() => {
      result.current.onChange("1")
    })
    expect(result.current.value).toEqual(["1"])

    act(() => {
      result.current.onChange("1")
    })
    expect(result.current.value).toEqual([])
  })

  test("respects max property", () => {
    const { result } = renderHook(() => useCheckboxGroup({ max: 1 }))

    act(() => {
      result.current.onChange("1")
    })
    expect(result.current.value).toEqual(["1"])

    act(() => {
      result.current.onChange("2")
    })
    expect(result.current.value).toEqual(["1"]) // Shouldn't add since max is 1
  })

  test("handles object events in onChange", () => {
    const { result } = renderHook(() => useCheckboxGroup())
    
    act(() => {
      result.current.onChange({ target: { value: "test" } } as any)
    })
    
    expect(result.current.value).toEqual(["test"])
  })

  test("getLabelProps returns correct props", () => {
    const { result } = renderHook(() => useCheckboxGroup())
    const labelProps = result.current.getLabelProps({ "data-testid": "label" })
    expect(labelProps).toHaveProperty("data-testid", "label")
  })
})
