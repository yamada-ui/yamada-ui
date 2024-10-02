import type { CSSUIObject, HTMLUIProps, PropGetter } from "@yamada-ui/core"
import { createDescendant } from "@yamada-ui/use-descendant"
import { createContext, mergeRefs } from "@yamada-ui/utils"
import { useCallback } from "react"

type StepperContext = {
  styles: { [key: string]: CSSUIObject }
} & Omit<UseStepperReturn, "descendants" | "getContainerProps">

export const {
  DescendantsContextProvider: StepperDescendantsContextProvider,
  useDescendant: useStepperDescendant,
  useDescendants: useStepperDescendants,
} = createDescendant<HTMLDivElement>()

export const [StepperProvider, useStepperContext] =
  createContext<StepperContext>({
    name: "StepperContext",
    errorMessage: `useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`,
  })

export interface UseStepperProps extends HTMLUIProps {
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

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...rest,
      ...props,
      ref,
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
    getContainerProps,
  }
}

export type UseStepperReturn = ReturnType<typeof useStepper>

export const useStep = () => {
  const { getStepStatus, orientation } = useStepperContext()

  const { descendants, index, register } = useStepperDescendant()

  const isFirst = index === 0
  const isLast = index === descendants.lastValue()?.index

  const status = getStepStatus(index)

  const getStepProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(ref, register),
      "data-orientation": orientation,
      "data-status": status,
    }),
    [orientation, register, status],
  )

  return { index, isFirst, isLast, status, getStepProps }
}

export type UseStepReturn = ReturnType<typeof useStep>
