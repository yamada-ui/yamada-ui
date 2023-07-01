import { CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { createDescendant } from '@yamada-ui/use-descendant'
import { createContext, PropGetter, mergeRefs } from '@yamada-ui/utils'
import { useCallback } from 'react'

type StepperContext = Omit<UseStepperReturn, 'descendants' | 'getContainerProps'> & {
  styles: Record<string, CSSUIObject>
}

export const {
  DescendantsContextProvider: StepperDescendantsContextProvider,
  useDescendants: useStepperDescendants,
  useDescendant: useStepperDescendant,
} = createDescendant<HTMLDivElement>()

export const [StepperProvider, useStepperContext] = createContext<StepperContext>({
  name: 'StepperContext',
  errorMessage: `useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`,
})

export type UseStepperProps = HTMLUIProps<'div'> & {
  /**
   * The active step index.
   */
  index: number
  /**
   * The orientation of the stepper.
   *
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Whether to show or not the last separator while in vertical orientation.
   *
   * @default false
   */
  showLastSeparator?: boolean
}

export const useStepper = ({
  index,
  orientation = 'horizontal',
  showLastSeparator = false,
  ...rest
}: UseStepperProps) => {
  const descendants = useStepperDescendants()

  const getStepStatus = useCallback(
    (step: number): 'complete' | 'active' | 'incomplete' => {
      if (step < index) return 'complete'
      if (step > index) return 'incomplete'

      return 'active'
    },
    [index],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...rest,
      ...props,
      ref,
      'data-orientation': orientation,
    }),
    [orientation, rest],
  )

  return { descendants, index, orientation, showLastSeparator, getStepStatus, getContainerProps }
}

export type UseStepperReturn = ReturnType<typeof useStepper>

export const useStep = () => {
  const { orientation, getStepStatus } = useStepperContext()

  const { index, register, descendants } = useStepperDescendant()

  const isFirst = index === 0
  const isLast = index === descendants.lastValue()?.index

  const status = getStepStatus(index)

  const getStepProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(ref, register),
      'data-status': status,
      'data-orientation': orientation,
    }),
    [orientation, register, status],
  )

  return { index, status, isFirst, isLast, getStepProps }
}

export type UseStepReturn = ReturnType<typeof useStep>
