"use client"

import type { ReactElement, ReactNode } from "react"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { HTMLMotionProps } from "../motion"
import type { SegmentedControlStyle } from "./segmented-control.style"
import type {
  UseSegmentedControlItemProps,
  UseSegmentedControlProps,
} from "./use-segmented-control"
import { LayoutGroup } from "motion/react"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { motion } from "../motion"
import { segmentedControlStyle } from "./segmented-control.style"
import {
  SegmentedControlContext,
  SegmentedControlDescendantsContext,
  useSegmentedControl,
  useSegmentedControlItem,
} from "./use-segmented-control"

export interface SegmentedControlItem extends SegmentedControlItemProps {
  label?: ReactNode
}

interface ComponentContext
  extends Pick<SegmentedControlRootProps, "indicatorProps" | "itemProps"> {}

export interface SegmentedControlRootProps<Y extends string = string>
  extends Omit<HTMLStyledProps, "defaultValue" | "onChange">,
    ThemeProps<SegmentedControlStyle>,
    Omit<UseSegmentedControlProps<Y>, "orientation"> {
  /**
   * If provided, generate segmented control buttons but based on items.
   *
   * @default []
   */
  items?: SegmentedControlItem[]
  /**
   * Props for the indicator component.
   */
  indicatorProps?: SegmentedControlIndicatorProps
  /**
   * Props for the item component.
   */
  itemProps?: SegmentedControlItemProps
}

const {
  ComponentContext,
  PropsContext: SegmentedControlPropsContext,
  useComponentContext,
  usePropsContext: useSegmentedControlPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  SegmentedControlRootProps,
  SegmentedControlStyle,
  ComponentContext
>("segmented-control", segmentedControlStyle)

export { SegmentedControlPropsContext, useSegmentedControlPropsContext }

/**
 * `SegmentedControl` is a component used for allowing users to select one option from multiple choices.
 *
 * @see https://yamada-ui.com/docs/components/segmented-control
 */
export const SegmentedControlRoot = withProvider(
  ({
    children,
    items = [],
    orientation: orientationProp,
    indicatorProps,
    itemProps,
    ...rest
  }) => {
    const computedOrientation = useValue(orientationProp)
    const {
      id,
      name,
      descendants,
      disabled,
      orientation,
      readOnly,
      setValue,
      value,
      getRootProps,
    } = useSegmentedControl({ orientation: computedOrientation, ...rest })
    const cloneChildren = useMemo(() => {
      if (children) {
        return children
      } else {
        return items.map(({ label, ...rest }, index) => (
          <SegmentedControlItem key={index} {...rest}>
            {label}
          </SegmentedControlItem>
        ))
      }
    }, [children, items])
    const context = useMemo(
      () => ({ id, name, disabled, orientation, readOnly, setValue, value }),
      [id, name, disabled, readOnly, orientation, setValue, value],
    )
    const componentContext = useMemo(
      () => ({ indicatorProps, itemProps }),
      [itemProps, indicatorProps],
    )

    return (
      <SegmentedControlContext value={context}>
        <ComponentContext value={componentContext}>
          <SegmentedControlDescendantsContext value={descendants}>
            <LayoutGroup id={id}>
              <styled.div {...getRootProps()}>{cloneChildren}</styled.div>
            </LayoutGroup>
          </SegmentedControlDescendantsContext>
        </ComponentContext>
      </SegmentedControlContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)() as GenericsComponent<{
  <Y extends string = string>(props: SegmentedControlRootProps<Y>): ReactElement
}>

export interface SegmentedControlItemProps<Y extends string = string>
  extends HTMLStyledProps<"label">,
    UseSegmentedControlItemProps<Y> {
  /**
   * Props for the indicator component.
   */
  indicatorProps?: SegmentedControlIndicatorProps
}

export const SegmentedControlItem = withContext<
  "label",
  SegmentedControlItemProps
>(({ children, indicatorProps, ...rest }) => {
  const { checked, getInputProps, getLabelProps } =
    useSegmentedControlItem(rest)

  return (
    <styled.label {...getLabelProps()}>
      <styled.input {...getInputProps()} />

      <styled.span>{children}</styled.span>

      {checked ? <SegmentedControlIndicator {...indicatorProps} /> : null}
    </styled.label>
  )
}, "item")((props) => {
  const { indicatorProps, itemProps } = useComponentContext()

  return {
    ...itemProps,
    ...props,
    indicatorProps: {
      ...indicatorProps,
      ...itemProps?.indicatorProps,
      ...props.indicatorProps,
    },
  }
}) as GenericsComponent<{
  <Y extends string = string>(props: SegmentedControlItemProps<Y>): ReactElement
}>

interface SegmentedControlIndicatorProps extends HTMLMotionProps {}

const SegmentedControlIndicator = withContext<
  "div",
  SegmentedControlIndicatorProps
>(({ transition, ...props }) => {
  return (
    <motion.div
      layoutDependency={false}
      layoutId="indicator"
      transition={{ duration: 0.2, ...transition }}
      {...props}
    />
  )
}, "indicator")()
