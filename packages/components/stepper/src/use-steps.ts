import { useCallback, useState } from "react"

export interface UseStepsProps {
  count?: number
  index?: number
}

export const useSteps = ({ count, index = 0 }: UseStepsProps) => {
  const [activeStep, setActiveStep] = useState(index)

  const maxStep = typeof count === "number" ? count - 1 : 0
  const activeStepPercent = activeStep / maxStep

  const isActiveStep = useCallback(
    (step: number) => step === activeStep,
    [activeStep],
  )

  const isCompleteStep = useCallback(
    (step: number) => step < activeStep,
    [activeStep],
  )

  const isIncompleteStep = useCallback(
    (step: number) => step > activeStep,
    [activeStep],
  )

  const getStepStatus = useCallback(
    (step: number): "active" | "complete" | "incomplete" => {
      if (step < activeStep) return "complete"
      if (step > activeStep) return "incomplete"

      return "active"
    },
    [activeStep],
  )

  const onStepNext = useCallback(
    () =>
      setActiveStep((step) =>
        typeof count === "number" ? Math.min(count, step + 1) : step + 1,
      ),
    [count],
  )

  const onStepPrev = useCallback(
    () => setActiveStep((step) => Math.max(0, step - 1)),
    [],
  )

  return {
    activeStep,
    activeStepPercent,
    getStepStatus,
    isActiveStep,
    isCompleteStep,
    isIncompleteStep,
    setActiveStep,
    onStepNext,
    onStepPrev,
  }
}

export type UseStepsReturn = ReturnType<typeof useSteps>
