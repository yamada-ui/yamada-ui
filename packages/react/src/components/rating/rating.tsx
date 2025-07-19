"use client"

import type { Dispatch, ReactNode, SetStateAction } from "react"
import type {
  HTMLStyledProps,
  RequiredPropGetter,
  ThemeProps,
} from "../../core"
import type { Dict, Merge } from "../../utils"
import type { HTMLMotionProps } from "../motion"
import type { RatingStyle } from "./rating.style"
import type {
  GroupProps,
  InputProps,
  ItemProps,
  UseRatingProps,
} from "./use-rating"
import type { UseRatingItemProps } from "./use-rating-item"
import { cloneElement } from "react"
import { createSlotComponent, styled } from "../../core"
import { getValidChildren, isString, runIfFn } from "../../utils"
import { StarIcon } from "../icon"
import { motion } from "../motion"
import { getRoundedValue } from "./rating-utils"
import { ratingStyle } from "./rating.style"
import { useRating } from "./use-rating"
import { useRatingItem } from "./use-rating-item"

export interface RatingProps
  extends ThemeProps<RatingStyle>,
    Merge<HTMLStyledProps, UseRatingProps> {}

interface RatingContext {
  id: string
  name: string
  decimal: number
  disabled: boolean | undefined
  emptyIcon: ((value: number) => ReactNode) | ReactNode | undefined
  filledIcon: ((value: number) => ReactNode) | ReactNode | undefined
  highlightSelectedOnly: boolean
  hoveredValue: number
  outside: boolean
  readOnly: boolean | undefined
  resolvedValue: number
  roundedValue: number
  setHoveredValue: Dispatch<SetStateAction<number>>
  setValue: Dispatch<SetStateAction<number>>
  value: number
  formControlProps: Dict
  getGroupProps: RequiredPropGetter<
    HTMLMotionProps,
    { value: number },
    HTMLMotionProps
  >
  groupProps: GroupProps | undefined
  inputProps: InputProps | undefined
  itemProps: ItemProps | undefined
}

export const {
  ComponentContext: RatingContext,
  PropsContext: RatingPropsContext,
  useComponentContext: useRatingContext,
  usePropsContext: useRatingPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<RatingProps, RatingStyle, RatingContext>(
  "rating",
  ratingStyle,
)

/**
 * `Rating` is a component used to allow users to provide ratings.
 *
 * @see https://yamada-ui.com/components/rating
 */
export const Rating = withProvider<"div", RatingProps>((props) => {
  const { children, getContainerProps, ...rest } = useRating(props)

  return (
    <RatingContext value={{ ...rest }}>
      <styled.div {...getContainerProps()}>{children}</styled.div>
    </RatingContext>
  )
}, "root")()

export interface RatingGroupProps extends HTMLMotionProps {
  items: number
  value: number
}

export const RatingGroup = withContext<"div", RatingGroupProps>(
  ({ color, items, value: groupValue, ...rest }) => {
    const { decimal, getGroupProps, groupProps } = useRatingContext()
    const computedGroupProps = runIfFn(groupProps, groupValue)

    return (
      <motion.div
        {...getGroupProps({
          value: groupValue,
          ...computedGroupProps,
          ...rest,
        })}
      >
        {Array(items)
          .fill(0)
          .map((_, index) => {
            const fractionValue =
              decimal * (groupValue === 1 ? index : index + 1)
            const value = getRoundedValue(
              groupValue - 1 + fractionValue,
              decimal,
            )

            return (
              <RatingItem
                key={`${groupValue}-${fractionValue}`}
                color={color}
                fractionValue={fractionValue}
                groupValue={groupValue}
                value={value}
              />
            )
          })}
      </motion.div>
    )
  },
  "group",
)()

export interface RatingItemProps
  extends Merge<HTMLStyledProps<"label">, UseRatingItemProps> {}

export const RatingItem = withContext<"input", RatingItemProps>(
  ({ color, fractionValue, groupValue, value, ...rest }) => {
    const {
      emptyIcon = <StarIcon fill="currentColor" />,
      filledIcon = <StarIcon fill="currentColor" />,
      inputProps,
      itemProps,
    } = useRatingContext()
    const { active, filled, getInputProps, getItemProps } = useRatingItem({
      fractionValue,
      groupValue,
      value,
      ...rest,
    })
    const computedItemProps = runIfFn(itemProps, value)
    const computedInputProps = runIfFn(inputProps, value)
    const customColor = color
      ? {
          "--filled-color": isString(color)
            ? [`colors.${color}`, `colors.${color}`]
            : color,
        }
      : {}

    return (
      <>
        <styled.input {...getInputProps({ ...computedInputProps })} />

        <styled.label
          {...getItemProps({ ...computedItemProps, ...customColor })}
        >
          <RatingIcon
            clipPath={
              fractionValue !== 1
                ? `inset(0 ${active ? 100 - fractionValue * 100 : 100}% 0 0)`
                : undefined
            }
          >
            {filled
              ? runIfFn(filledIcon, groupValue)
              : runIfFn(emptyIcon, groupValue)}
          </RatingIcon>
        </styled.label>
      </>
    )
  },
  "item",
)()

interface RatingIconProps extends HTMLStyledProps {}

const RatingIcon = withContext<"div", RatingIconProps>(
  ({ children, ...rest }) => {
    const validChildren = getValidChildren(children)
    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        style: {
          maxHeight: "1em",
          maxWidth: "1em",
        },
        "aria-hidden": true,
        focusable: false,
      }),
    )

    return <styled.div {...rest}>{cloneChildren}</styled.div>
  },
  "icon",
)()
