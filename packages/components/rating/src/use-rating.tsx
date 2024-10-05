import type {
  CSSUIProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import type { MotionProps } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { Merge } from "@yamada-ui/utils"
import {
  clampNumber,
  dataAttr,
  handlerAll,
  mergeRefs,
  pickObject,
  runIfFunc,
} from "@yamada-ui/utils"
import type { MouseEvent, ReactNode, TouchEvent } from "react"
import { useCallback, useId, useRef, useState } from "react"
import { RatingGroup } from "./rating-group"
import type { RatingGroupProps } from "./rating-group"
import type { RatingItemProps } from "./rating-item"
import { getRoundedValue } from "./rating-utils"

type OmittedGroupProps = Omit<RatingGroupProps, "value" | "items" | "children">
type OmittedItemProps = Omit<
  RatingItemProps,
  "value" | "groupValue" | "fractionValue" | "children"
>
type OmittedInputProps = Omit<
  HTMLUIProps<"input">,
  "value" | "defaultValue" | "checked"
>

export type GroupProps =
  | OmittedGroupProps
  | ((value: number) => OmittedGroupProps)
export type ItemProps = OmittedItemProps | ((value: number) => OmittedItemProps)
export type InputProps =
  | OmittedInputProps
  | ((value: number) => OmittedInputProps)

interface UseRatingOptions {
  /**
   * The top-level id string that will be applied to the rating.
   * The index of the rating item will be appended to this top-level id.
   */
  id?: string
  /**
   * The name of the input element.
   */
  name?: string
  /**
   * The value of the rating.
   */
  value?: number
  /**
   * The initial value of the rating.
   *
   * @default 0
   */
  defaultValue?: number
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: number) => void
  /**
   * The callback invoked when hovering over the rating.
   */
  onHover?: (value: number) => void
  /**
   * Number of controls that should be rendered.
   *
   * @default 5
   */
  items?: number
  /**
   * Number of fractions each item can be divided into,
   *
   * @default 1
   */
  fractions?: number
  /**
   * If `true`, only the selected icons will be filled.
   *
   * @default false
   */
  highlightSelectedOnly?: boolean
  /**
   * The color of the filled icons.
   */
  color?: CSSUIProps["color"] | ((value: number) => CSSUIProps["color"])
  /**
   * The empty icon for the rating.
   */
  emptyIcon?: ReactNode | ((value: number) => ReactNode)
  /**
   * The filled icon for the rating.
   */
  filledIcon?: ReactNode | ((value: number) => ReactNode)
  /**
   * Props for the rating group.
   */
  groupProps?: GroupProps
  /**
   * Props for the rating item.
   */
  itemProps?: ItemProps
  /**
   * Props for the input element.
   */
  inputProps?: InputProps
}

export type UseRatingProps = Omit<
  HTMLUIProps,
  "color" | "id" | "defaultValue" | "onChange"
> &
  UseRatingOptions &
  FormControlOptions

export const useRating = ({
  name,
  color,
  value: valueProp,
  defaultValue = 0,
  onChange: onChangeProp,
  items = 5,
  fractions = 1,
  highlightSelectedOnly = false,
  onHover,
  groupProps,
  itemProps,
  inputProps,
  emptyIcon,
  filledIcon,
  ...props
}: UseRatingProps) => {
  let { id, ...rest } = useFormControlProps(props)
  const { disabled, readOnly } = rest

  const containerRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
  })
  const [hoveredValue, setHoveredValue] = useState<number>(-1)
  const [isOutside, setIsOutside] = useState(true)
  const uuid = useId()

  id ??= uuid
  name ??= `rating-${id}`

  const { "aria-readonly": _isReadOnly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )

  const resolvedFractions = Math.floor(fractions)
  const resolvedItems = Math.floor(items)
  const decimal = 1 / resolvedFractions
  const roundedValue = getRoundedValue(value, decimal)
  const resolvedValue = hoveredValue !== -1 ? hoveredValue : roundedValue

  const getHoveredValue = useCallback(
    (x: number) => {
      const { left, width } = containerRef.current!.getBoundingClientRect()
      const itemWidth = width / resolvedItems

      const hoveredValue = (x - left) / itemWidth

      const value = clampNumber(
        getRoundedValue(hoveredValue + decimal / 2, decimal),
        decimal,
        resolvedItems,
      )

      return value
    },
    [decimal, resolvedItems],
  )

  const onMouseEnter = useCallback(() => {
    if (!disabled && !readOnly) setIsOutside(false)
  }, [disabled, readOnly])

  const onMouseLeave = useCallback(() => {
    if (disabled || readOnly) return

    setHoveredValue(-1)
    setIsOutside(true)

    if (hoveredValue !== -1) onHover?.(-1)
  }, [disabled, hoveredValue, onHover, readOnly, setHoveredValue])

  const onTouchStart = useCallback(
    (ev: TouchEvent<HTMLDivElement>) => {
      ev.preventDefault()

      const el = ev.touches[0]

      if (!el) return

      const value = getHoveredValue(el.clientX)

      setValue(value)
    },
    [getHoveredValue, setValue],
  )

  const onTouchEnd = useCallback((ev: TouchEvent<HTMLDivElement>) => {
    ev.preventDefault()
  }, [])

  const onMouseMove = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (disabled || readOnly) return

      const roundedValue = getHoveredValue(ev.clientX)

      setHoveredValue(roundedValue)

      if (roundedValue !== hoveredValue) onHover?.(roundedValue)
    },
    [disabled, getHoveredValue, hoveredValue, readOnly, onHover],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(ref, containerRef),
      ...rest,
      ...props,
      id,
      onMouseEnter: handlerAll(
        onMouseEnter,
        props.onMouseEnter,
        rest.onMouseEnter,
      ),
      onMouseMove: handlerAll(onMouseMove, props.onMouseMove, rest.onMouseMove),
      onMouseLeave: handlerAll(
        onMouseLeave,
        props.onMouseLeave,
        rest.onMouseLeave,
      ),
      onTouchStart: handlerAll(
        onTouchStart,
        props.onTouchStart,
        rest.onTouchStart,
      ),
      onTouchEnd: handlerAll(onTouchEnd, props.onTouchEnd, rest.onTouchEnd),
    }),
    [
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onTouchEnd,
      onTouchStart,
      id,
      rest,
    ],
  )

  const getGroupProps: RequiredPropGetter<
    Merge<MotionProps, { value: number }>,
    MotionProps
  > = useCallback(
    ({ value, ...props }, ref = null) => {
      const isActive = !readOnly && Math.ceil(hoveredValue) === value

      return {
        ref,
        whileTap: !disabled && !readOnly ? { y: -4 } : undefined,
        ...props,
        tabIndex: -1,
        "data-active": dataAttr(isActive),
      }
    },
    [disabled, hoveredValue, readOnly],
  )

  const children = Array(resolvedItems)
    .fill(0)
    .map((_, index) => {
      const value = index + 1

      return (
        <RatingGroup
          key={value}
          value={value}
          color={runIfFunc(color, value)}
          items={index === 0 ? resolvedFractions + 1 : resolvedFractions}
        />
      )
    })

  return {
    getContainerProps,
    getGroupProps,
    id,
    name,
    value,
    roundedValue,
    hoveredValue,
    resolvedValue,
    isOutside,
    setValue,
    setHoveredValue,
    decimal,
    highlightSelectedOnly,
    formControlProps,
    groupProps,
    itemProps,
    inputProps,
    children,
    emptyIcon,
    filledIcon,
  }
}

export type UseRatingReturn = ReturnType<typeof useRating>
