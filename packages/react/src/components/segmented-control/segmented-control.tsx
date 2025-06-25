"use client"

import type { ReactElement, ReactNode } from "react"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { SegmentedControlStyle } from "./segmented-control.style"
import type {
  UseSegmentedControlItemProps,
  UseSegmentedControlProps,
} from "./use-segmented-control"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { segmentedControlStyle } from "./segmented-control.style"
import {
  DescendantsContext,
  SegmentedControlContext,
  useSegmentedControl,
  useSegmentedControlItem,
} from "./use-segmented-control"

interface SegmentedControlItem extends SegmentedControlItemProps {
  label?: ReactNode
}

export interface SegmentedControlRootProps<Y extends string = string>
  extends Omit<HTMLStyledProps, "defaultValue" | "onChange">,
    ThemeProps<SegmentedControlStyle>,
    Omit<UseSegmentedControlProps<Y>, "orientation"> {
  /**
   * If provided, generate segmented control buttons but based on items.
   *
   * @default '[]'
   */
  items?: SegmentedControlItem[]
}

export const {
  PropsContext: SegmentedControlPropsContext,
  usePropsContext: useSegmentedControlPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<SegmentedControlRootProps, SegmentedControlStyle>(
  "segmented-control",
  segmentedControlStyle,
)

/**
 * `SegmentedControl` is a component used for allowing users to select one option from multiple choices.
 *
 * @see https://yamada-ui.com/components/segmented-control
 */
export const SegmentedControlRoot = withProvider(
  ({ children, items = [], orientation: orientationProp, ...rest }) => {
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

    return (
      <SegmentedControlContext value={context}>
        <DescendantsContext value={descendants}>
          <styled.div {...getRootProps()}>{cloneChildren}</styled.div>
        </DescendantsContext>
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
    UseSegmentedControlItemProps<Y> {}

export const SegmentedControlItem = withContext<
  "label",
  SegmentedControlItemProps
>(({ children, ...rest }) => {
  const { getInputProps, getLabelProps } = useSegmentedControlItem(rest)

  return (
    <styled.label {...getLabelProps()}>
      <styled.input {...getInputProps()} />

      <styled.span>{children}</styled.span>
    </styled.label>
  )
}, "item")() as GenericsComponent<{
  <Y extends string = string>(props: SegmentedControlItemProps<Y>): ReactElement
}>
