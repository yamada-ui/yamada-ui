import type { HTMLStyledProps, PropGetter } from "../../core"
import { useCallback, useState } from "react"
import { createDescendant } from "../../hooks/use-descendant"
import { createContext, dataAttr, mergeRefs } from "../../utils"

export const {
  DescendantsContext: StepperDescendantsContext,
  useDescendant: useStepperDescendant,
  useDescendants: useStepperDescendants,
} = createDescendant<HTMLDivElement>()

interface StepperContext
  extends Omit<UseStepperReturn, "descendants" | "getRootProps"> {}

export const [StepperContext, useStepperContext] =
  createContext<StepperContext>({
    name: "StepperContext",
  })

export interface StepperStepContextValue
  extends Omit<UseStepperStepReturn, "getStepProps"> {}

export const [StepperStepContext, useStepperStepContext] =
  createContext<StepperStepContextValue>({
    name: "StepperStepContext",
  })

export interface UseStepperProps extends HTMLStyledProps {
  /**
   * The active step index.
   */
  index: number
  /**
   * The orientation of the stepper.
   *
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical"
  /**
   * Whether to show or not the last separator while in vertical orientation.
   *
   * @default false
   */
  showLastSeparator?: boolean
}

export const useStepper = ({
  index,
  orientation = "horizontal",
  showLastSeparator = false,
  ...rest
}: UseStepperProps) => {
  const descendants = useStepperDescendants()

  const getStepStatus = useCallback(
    (step: number): "active" | "complete" | "incomplete" => {
      if (step < index) return "complete"
      if (step > index) return "incomplete"

      return "active"
    },
    [index],
  )

  const getRootProps: PropGetter = useCallback(
    (props = {}) => ({
      ...rest,
      ...props,
      "data-orientation": orientation,
    }),
    [orientation, rest],
  )

  return {
    descendants,
    getStepStatus,
    index,
    orientation,
    showLastSeparator,
    getRootProps,
  }
}

export type UseStepperReturn = ReturnType<typeof useStepper>

export const useStepperStep = () => {
  const { getStepStatus, orientation, showLastSeparator } = useStepperContext()

  const { descendants, index, register } = useStepperDescendant()

  const isFirst = index === 0
  const isLast = index === descendants.lastValue()?.index

  const status = getStepStatus(index)

  const getStepProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      ...props,
      ref: mergeRefs(ref, register),
      "data-orientation": orientation,
      "data-status": status,
      "data-stretch": dataAttr(showLastSeparator),
    }),
    [orientation, register, showLastSeparator, status],
  )

  return { index, isFirst, isLast, status, getStepProps }
}

export type UseStepperStepReturn = ReturnType<typeof useStepperStep>

export interface UseStepperStepsProps {
  count?: number
  index?: number
}

export const useStepperSteps = ({ count, index = 0 }: UseStepperStepsProps) => {
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

export type UseStepperStepsReturn = ReturnType<typeof useStepperSteps>
