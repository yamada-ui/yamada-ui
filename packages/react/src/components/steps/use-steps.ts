"use client"

import type { HTMLProps, Orientation, PropGetter } from "../../core"
import { useCallback, useId } from "react"
import { useEnvironment } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendants } from "../../hooks/use-descendants"
import {
  createContext,
  cx,
  dataAttr,
  handlerAll,
  mergeRefs,
  setAttribute,
  useSafeLayoutEffect,
} from "../../utils"

export type StepStatusScheme = "complete" | "current" | "incomplete"

const {
  DescendantsContext: StepsDescendantsContext,
  useDescendant: useStepsDescendant,
  useDescendants: useStepsDescendants,
} = createDescendants<HTMLLIElement>()

export { StepsDescendantsContext, useStepsDescendant, useStepsDescendants }

interface StepsContext extends Omit<
  UseStepsReturn,
  "descendants" | "getRootProps"
> {}

const [StepsContext, useStepsContext] = createContext<StepsContext>({
  name: "StepsContext",
})

export { StepsContext, useStepsContext }

interface StepsItemContext extends Omit<UseStepsItemReturn, "getRootProps"> {}

const [StepsItemContext, useStepsItemContext] = createContext<StepsItemContext>(
  {
    name: "StepsItemContext",
  },
)

export { StepsItemContext, useStepsItemContext }

export interface UseStepsProps extends Omit<HTMLProps, "onChange"> {
  /**
   * The total number of steps.
   */
  count?: number
  /**
   * The initial index of the active step.
   *
   * @default 0
   */
  defaultIndex?: number
  /**
   * The index of the active step.
   */
  index?: number
  /**
   * The orientation of the steps.
   *
   * @default 'horizontal'
   */
  orientation?: Orientation
  /**
   * The callback function that is called when the active step index is changed.
   */
  onChange?: (index: number) => void
}

export const useSteps = ({
  count = 0,
  defaultIndex = 0,
  index: indexProp,
  orientation = "horizontal",
  onChange,
  ...rest
}: UseStepsProps = {}) => {
  const descendants = useStepsDescendants()
  const [index, setIndex] = useControllableState({
    defaultValue: defaultIndex,
    value: indexProp,
    onChange,
  })
  const id = useId()

  const getStatus = useCallback(
    (indexProp: number): StepStatusScheme => {
      if (indexProp < index) {
        return "complete"
      } else if (indexProp > index) {
        return "incomplete"
      } else {
        return "current"
      }
    },
    [index],
  )

  const onPrev = useCallback(
    () => setIndex((index) => Math.max(0, index - 1)),
    [setIndex],
  )

  const onNext = useCallback(() => {
    setIndex((index) => Math.min(count, index + 1))
  }, [count, setIndex])

  const getRootProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref),
    }),
    [rest],
  )

  const getListProps: PropGetter<"ol"> = useCallback(
    (props) => {
      return {
        "data-orientation": orientation,
        ...props,
      }
    },
    [orientation],
  )

  const getContentProps: PropGetter<"div", { index?: number }> = useCallback(
    ({ index: indexProp = count, ...props } = {}) => ({
      id: `${id}-${indexProp}`,
      hidden: indexProp !== index,
      tabIndex: 0,
      ...props,
    }),
    [count, id, index],
  )

  const getPrevTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      disabled: index === 0,
      ...props,
      onClick: handlerAll(props.onClick, onPrev),
    }),
    [onPrev, index],
  )

  const getNextTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => {
      return {
        disabled: count <= index,
        ...props,
        onClick: handlerAll(props.onClick, onNext),
      }
    },
    [count, index, onNext],
  )

  return {
    id,
    count,
    descendants,
    getStatus,
    index,
    orientation,
    setIndex,
    getContentProps,
    getListProps,
    getNextTriggerProps,
    getPrevTriggerProps,
    getRootProps,
    onNext,
    onPrev,
  }
}

export type UseStepsReturn = ReturnType<typeof useSteps>

export interface UseStepsItemProps extends HTMLProps<"li"> {
  /**
   * The index of the step.
   */
  index: number
}

export const useStepsItem = ({
  "aria-labelledby": ariaLabelledbyProp,
  index,
  ...rest
}: UseStepsItemProps) => {
  const { descendants, register } = useStepsDescendant()
  const { id, getStatus, orientation } = useStepsContext()
  const status = getStatus(index)
  const current = status === "current"
  const first = index === 0
  const last = index === descendants.lastValue()?.index
  const statusDataAttr = `data-${status}`
  const { getDocument } = useEnvironment()

  useSafeLayoutEffect(() => {
    const el = descendants.value(index)?.node
    const hasContent = !!getDocument()?.getElementById(`${id}-${index}`)

    if (el && hasContent) setAttribute(el, "aria-labelledby", `${id}-${index}`)
  }, [descendants, getDocument, id, index])

  const getRootProps: PropGetter<"li"> = useCallback(
    ({ ref, "aria-labelledby": ariaLabelledby, ...props } = {}) => {
      return {
        "aria-current": current ? "step" : undefined,
        "aria-labelledby": cx(ariaLabelledbyProp, ariaLabelledby),
        "data-orientation": orientation,
        [statusDataAttr]: dataAttr(true),
        ...rest,
        ...props,
        ref: mergeRefs(ref, register),
      }
    },
    [ariaLabelledbyProp, current, orientation, statusDataAttr, rest, register],
  )

  const getTitleProps: PropGetter<"h3"> = useCallback(
    (props) => ({
      [statusDataAttr]: dataAttr(true),
      ...props,
    }),
    [statusDataAttr],
  )

  const getDescriptionProps: PropGetter<"p"> = useCallback(
    (props) => ({
      [statusDataAttr]: dataAttr(true),
      ...props,
    }),
    [statusDataAttr],
  )

  const getIndicatorProps: PropGetter = useCallback(
    (props) => ({
      [statusDataAttr]: dataAttr(true),
      ...props,
    }),
    [statusDataAttr],
  )

  const getSeparatorProps: PropGetter = useCallback(
    (props) => ({
      "data-orientation": orientation,
      role: "separator",
      [statusDataAttr]: dataAttr(true),
      ...props,
    }),
    [orientation, statusDataAttr],
  )

  return {
    first,
    index,
    last,
    status,
    getDescriptionProps,
    getIndicatorProps,
    getRootProps,
    getSeparatorProps,
    getTitleProps,
  }
}

export type UseStepsItemReturn = ReturnType<typeof useStepsItem>
