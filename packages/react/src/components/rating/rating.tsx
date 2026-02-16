"use client"

import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { FunctionOrValue, Merge, ReactNodeOrFunction } from "../../utils"
import type { RatingStyle } from "./rating.style"
import type { UseRatingItemProps, UseRatingProps } from "./use-rating"
import { useMemo } from "react"
import { createSlotComponent, styled, varAttr } from "../../core"
import { runIfFn } from "../../utils"
import { StarIcon } from "../icon"
import { ratingStyle } from "./rating.style"
import {
  RatingContext,
  useRating,
  useRatingContext,
  useRatingItem,
} from "./use-rating"

interface ComponentContext extends Pick<
  RatingProps,
  | "color"
  | "emptyIcon"
  | "filledIcon"
  | "groupProps"
  | "iconProps"
  | "inputProps"
  | "itemProps"
> {}

export interface RatingProps
  extends
    Merge<Omit<HTMLStyledProps, "children" | "color">, UseRatingProps>,
    ThemeProps<RatingStyle> {
  /**
   * The color of the filled icons.
   */
  color?: FunctionOrValue<number, CSSProps["color"]>
  /**
   * The empty icon for the rating.
   */
  emptyIcon?: ReactNodeOrFunction<number>
  /**
   * The filled icon for the rating.
   */
  filledIcon?: ReactNodeOrFunction<number>
  /**
   * Props for the rating group.
   */
  groupProps?: FunctionOrValue<number, RatingGroupProps>
  /**
   * Props for the rating item.
   */
  iconProps?: FunctionOrValue<number, RatingIconProps>
  /**
   * Props for the input element.
   */
  inputProps?: FunctionOrValue<number, HTMLStyledProps<"input">>
  /**
   * Props for the rating item.
   */
  itemProps?: FunctionOrValue<number, RatingItemProps>
}

const {
  ComponentContext,
  PropsContext: RatingPropsContext,
  useComponentContext,
  usePropsContext: useRatingPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<RatingProps, RatingStyle, ComponentContext>(
  "rating",
  ratingStyle,
)

export { RatingPropsContext, useRatingPropsContext }

/**
 * `Rating` is a component used to allow users to provide ratings.
 *
 * @see https://yamada-ui.com/docs/components/rating
 */
export const Rating = withProvider<"div", RatingProps>(
  ({
    color,
    emptyIcon,
    filledIcon,
    groupProps,
    iconProps,
    inputProps,
    itemProps,
    ...rest
  }) => {
    const {
      id,
      name,
      count,
      decimal,
      disabled,
      displayValue,
      fractions,
      highlightSelectedOnly,
      hoveredValue,
      interactive,
      outsideRef,
      readOnly,
      required,
      roundedValue,
      setHoveredValue,
      setValue,
      value,
      ariaProps,
      dataProps,
      eventProps,
      getRootProps,
    } = useRating(rest)
    const ratingContext = useMemo(
      () => ({
        id,
        name,
        count,
        decimal,
        disabled,
        displayValue,
        fractions,
        highlightSelectedOnly,
        hoveredValue,
        interactive,
        outsideRef,
        readOnly,
        required,
        roundedValue,
        setHoveredValue,
        setValue,
        value,
        ariaProps,
        dataProps,
        eventProps,
      }),
      [
        id,
        name,
        count,
        decimal,
        disabled,
        fractions,
        highlightSelectedOnly,
        hoveredValue,
        interactive,
        displayValue,
        outsideRef,
        readOnly,
        required,
        roundedValue,
        setHoveredValue,
        setValue,
        value,
        ariaProps,
        dataProps,
        eventProps,
      ],
    )
    const componentContext = useMemo(
      () => ({
        color,
        emptyIcon,
        filledIcon,
        groupProps,
        iconProps,
        inputProps,
        itemProps,
      }),
      [
        color,
        emptyIcon,
        filledIcon,
        groupProps,
        iconProps,
        inputProps,
        itemProps,
      ],
    )

    return (
      <RatingContext value={ratingContext}>
        <ComponentContext value={componentContext}>
          <styled.div {...getRootProps()}>
            {Array.from({ length: count }).map((_, index) => (
              <RatingGroup key={index} value={index + 1} />
            ))}
          </styled.div>
        </ComponentContext>
      </RatingContext>
    )
  },
  "root",
)()

interface RatingGroupProps extends HTMLStyledProps {
  value: number
}

const RatingGroup = withContext<"div", RatingGroupProps>(
  ({ value, ...rest }) => {
    const { fractions } = useRatingContext()
    const { groupProps } = useComponentContext()
    const count = useMemo(
      () => (value === 1 ? fractions + 1 : fractions),
      [value, fractions],
    )

    return (
      <styled.div {...runIfFn(groupProps, value)} {...rest}>
        {Array.from({ length: count }).map((_, index) => (
          <RatingItem key={index} groupValue={value} index={index} />
        ))}
      </styled.div>
    )
  },
  "group",
)()

interface RatingItemProps
  extends HTMLStyledProps<"label">, UseRatingItemProps {}

const RatingItem = withContext<"label", RatingItemProps>((props) => {
  const {
    active,
    filled,
    fractionValue,
    groupValue,
    getInputProps,
    getLabelProps,
  } = useRatingItem(props)
  const {
    emptyIcon = <StarIcon fill="currentColor" strokeColor="currentColor" />,
    filledIcon = <StarIcon fill="currentColor" strokeColor="currentColor" />,
    iconProps,
    inputProps,
    itemProps,
  } = useComponentContext()
  const clipPath =
    fractionValue !== 1
      ? `inset(0 ${active ? 100 - fractionValue * 100 : 100}% 0 0)`
      : undefined

  return (
    <styled.label {...getLabelProps(runIfFn(itemProps, groupValue))}>
      <styled.input {...getInputProps(runIfFn(inputProps, groupValue))} />

      <RatingIcon
        {...{ "--clip-path": clipPath }}
        {...runIfFn(iconProps, groupValue)}
      >
        {filled
          ? runIfFn(filledIcon, groupValue)
          : runIfFn(emptyIcon, groupValue)}
      </RatingIcon>
    </styled.label>
  )
}, "item")(undefined, ({ groupValue, ...rest }) => {
  const { color } = useComponentContext()

  return {
    "--filled-color": varAttr(runIfFn(color, groupValue), "colors"),
    groupValue,
    ...rest,
  }
})

interface RatingIconProps extends HTMLStyledProps {}

const RatingIcon = withContext<"div", RatingIconProps>("div", "icon")()
