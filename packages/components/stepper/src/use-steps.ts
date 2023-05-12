import { useCallback, useState } from 'react'
import { StepStatus } from './use-stepper'

export type UseStepsProps = {
  index?: number
  count?: number
}

export const useSteps = ({ index = 0, count }: UseStepsProps) => {
  const [activeStep, setActiveStep] = useState(index)

  const maxStep = typeof count === 'number' ? count - 1 : 0
  const activeStepPercent = activeStep / maxStep

  const isActiveStep = useCallback((step: number) => step === activeStep, [activeStep])

  const isCompleteStep = useCallback((step: number) => step < activeStep, [activeStep])

  const isIncompleteStep = useCallback((step: number) => step > activeStep, [activeStep])

  const getStepStatus = useCallback(
    (step: number): StepStatus => {
      if (step < activeStep) return 'complete'
      if (step > activeStep) return 'incomplete'

      return 'active'
    },
    [activeStep],
  )

  const onStepNext = useCallback(
    () =>
      setActiveStep((step) => (typeof count === 'number' ? Math.min(count, step + 1) : step + 1)),
    [count],
  )

  const onStepPrev = useCallback(() => setActiveStep((step) => Math.max(0, step - 1)), [])

  return {
    activeStep,
    setActiveStep,
    activeStepPercent,
    isActiveStep,
    isCompleteStep,
    isIncompleteStep,
    getStepStatus,
    onStepNext,
    onStepPrev,
  }
}

export type UseStepsReturn = ReturnType<typeof useSteps>
