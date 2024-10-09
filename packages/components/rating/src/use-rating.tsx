import type {
  CSSUIProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { MotionProps } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import type { MouseEvent, ReactNode, TouchEvent } from "react"
import type { RatingGroupProps } from "./rating-group"
import type { RatingItemProps } from "./rating-item"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  clampNumber,
  dataAttr,
  handlerAll,
  mergeRefs,
  pickObject,
  runIfFunc,
} from "@yamada-ui/utils"
import { useCallback, useId, useRef, useState } from "react"
import { RatingGroup } from "./rating-group"
import { getRoundedValue } from "./rating-utils"

type OmittedGroupProps = Omit<RatingGroupProps, "children" | "items" | "value">
type OmittedItemProps = Omit<
  RatingItemProps,
  "children" | "fractionValue" | "groupValue" | "value"
>
type OmittedInputProps = Omit<
  HTMLUIProps<"input">,
  "checked" | "defaultValue" | "value"
>

export type GroupProps =
  | ((value: number) => OmittedGroupProps)
  | OmittedGroupProps
export type ItemProps = ((value: number) => OmittedItemProps) | OmittedItemProps
export type InputProps =
  | ((value: number) => OmittedInputProps)
  | OmittedInputProps

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
   * The color of the filled icons.
   */
  color?: ((value: number) => CSSUIProps["color"]) | CSSUIProps["color"]
  /**
   * The initial value of the rating.
   *
   * @default 0
   */
  defaultValue?: number
  /**
   * The empty icon for the rating.
   */
  emptyIcon?: ((value: number) => ReactNode) | ReactNode
  /**
   * The filled icon for the rating.
   */
  filledIcon?: ((value: number) => ReactNode) | ReactNode
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
   * Number of controls that should be rendered.
   *
   * @default 5
   */
  items?: number
  /**
   * The value of the rating.
   */
  value?: number
  /**
   * Props for the rating group.
   */
  groupProps?: GroupProps
  /**
   * Props for the input element.
   */
  inputProps?: InputProps
  /**
   * Props for the rating item.
   */
  itemProps?: ItemProps
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: number) => void
  /**
   * The callback invoked when hovering over the rating.
   */
  onHover?: (value: number) => void
}

export type UseRatingProps = FormControlOptions &
  Omit<HTMLUIProps, "color" | "defaultValue" | "id" | "onChange"> &
  UseRatingOptions

export const useRating = ({
  name,
  color,
  defaultValue = 0,
  emptyIcon,
  filledIcon,
  fractions = 1,
  highlightSelectedOnly = false,
  items = 5,
  value: valueProp,
  groupProps,
  inputProps,
  itemProps,
  onChange: onChangeProp,
  onHover,
  ...props
}: UseRatingProps) => {
  let { id, ...rest } = useFormControlProps(props)
  const { disabled, readOnly } = rest

  const containerRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
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
      onMouseLeave: handlerAll(
        onMouseLeave,
        props.onMouseLeave,
        rest.onMouseLeave,
      ),
      onMouseMove: handlerAll(onMouseMove, props.onMouseMove, rest.onMouseMove),
      onTouchEnd: handlerAll(onTouchEnd, props.onTouchEnd, rest.onTouchEnd),
      onTouchStart: handlerAll(
        onTouchStart,
        props.onTouchStart,
        rest.onTouchStart,
      ),
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
        "data-active": dataAttr(isActive),
        tabIndex: -1,
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
          color={runIfFunc(color, value)}
          items={index === 0 ? resolvedFractions + 1 : resolvedFractions}
          value={value}
        />
      )
    })

  return {
    id,
    name,
    children,
    decimal,
    emptyIcon,
    filledIcon,
    highlightSelectedOnly,
    hoveredValue,
    isOutside,
    resolvedValue,
    roundedValue,
    setHoveredValue,
    setValue,
    value,
    formControlProps,
    getContainerProps,
    getGroupProps,
    groupProps,
    inputProps,
    itemProps,
  }
}

export type UseRatingReturn = ReturnType<typeof useRating>
