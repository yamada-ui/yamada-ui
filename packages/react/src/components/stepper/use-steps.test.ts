import { act, renderHook } from "../../../test"
import { useStepperSteps } from "./use-stepper"

describe("useSteps", () => {
  test("Correctly set in initial state", () => {
    const { result } = renderHook(() => useStepperSteps({ count: 3, index: 1 }))
    expect(result.current.activeStep).toBe(1)
    expect(result.current.activeStepPercent).toBe(1 / 2)
  })

  test("Does isActiveStep function correctly?", () => {
    const { result } = renderHook(() => useStepperSteps({ count: 3, index: 1 }))
    expect(result.current.isActiveStep(1)).toBeTruthy()
    expect(result.current.isActiveStep(0)).toBeFalsy()
  })

  test("Does isCompleteStep function correctly?", () => {
    const { result } = renderHook(() => useStepperSteps({ count: 3, index: 1 }))
    expect(result.current.isCompleteStep(0)).toBeTruthy()
    expect(result.current.isCompleteStep(1)).toBeFalsy()
  })

  test("Does isIncompleteStep function correctly?", () => {
    const { result } = renderHook(() => useStepperSteps({ count: 3, index: 1 }))
    expect(result.current.isIncompleteStep(2)).toBeTruthy()
    expect(result.current.isIncompleteStep(1)).toBeFalsy()
  })

  test("Does getStepStatus return the correct status?", () => {
    const { result } = renderHook(() => useStepperSteps({ count: 3, index: 1 }))
    expect(result.current.getStepStatus(0)).toBe("complete")
    expect(result.current.getStepStatus(1)).toBe("active")
    expect(result.current.getStepStatus(2)).toBe("incomplete")
  })

  test("Does onStepNext move to the next step?", () => {
    const { result } = renderHook(() => useStepperSteps({ count: 3, index: 0 }))
    act(() => {
      result.current.onStepNext()
    })
    expect(result.current.activeStep).toBe(1)
  })

  test("Does onStepPrev move to the previous step?", () => {
    const { result } = renderHook(() => useStepperSteps({ count: 3, index: 1 }))
    act(() => {
      result.current.onStepPrev()
    })
    expect(result.current.activeStep).toBe(0)
  })
})
