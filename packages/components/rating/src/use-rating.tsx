import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  UIPropGetter,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import type { RequiredMotionUIPropGetter } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import type { Dict } from "@yamada-ui/utils"
import {
  clampNumber,
  createContext,
  dataAttr,
  handlerAll,
  mergeRefs,
  pickObject,
  runIfFunc,
} from "@yamada-ui/utils"
import type {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  TouchEvent,
} from "react"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import type { RatingGroupProps } from "./rating-group"
import { RatingGroup } from "./rating-group"
import type { RatingItemProps } from "./rating-item"

export const getRoundedValue = (value: number, to: number) => {
  const rounded = Math.round(value / to) * to

  const precision = `${to}`.split(".")[1]?.length || 0

  return Number(rounded.toFixed(precision))
}

type OmittedGroupProps = Omit<RatingGroupProps, "value" | "items" | "children">
type OmittedItemProps = Omit<
  RatingItemProps,
  "value" | "groupValue" | "fractionValue" | "children"
>
type OmittedInputProps = Omit<
  HTMLUIProps<"input">,
  "value" | "defaultValue" | "checked"
>

type GroupProps = OmittedGroupProps | ((value: number) => OmittedGroupProps)
type ItemProps = OmittedItemProps | ((value: number) => OmittedItemProps)
type InputProps = OmittedInputProps | ((value: number) => OmittedInputProps)

type RatingContext = {
  getGroupProps: RequiredMotionUIPropGetter<"div", { value: number }>
  id: string
  name: string
  value: number
  roundedValue: number
  hoveredValue: number
  resolvedValue: number
  isOutside: boolean
  setValue: Dispatch<SetStateAction<number>>
  setHoveredValue: Dispatch<SetStateAction<number>>
  decimal: number
  highlightSelectedOnly: boolean
  formControlProps: Dict
  groupProps: GroupProps | undefined
  itemProps: ItemProps | undefined
  inputProps: InputProps | undefined
  emptyIcon: ReactNode | ((value: number) => ReactNode) | undefined
  filledIcon: ReactNode | ((value: number) => ReactNode) | undefined
  styles: Record<string, CSSUIObject>
}

export const [RatingProvider, useRatingContext] = createContext<RatingContext>({
  name: "RatingContext",
  errorMessage: `useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`,
})

type UseRatingOptions = {
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
  HTMLUIProps<"div">,
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

  id ??= useId()
  name ??= `rating-${id}`

  const formControlProps = pickObject(rest, formControlProperties)
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

  const getContainerProps: UIPropGetter = useCallback(
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

  const getGroupProps: RequiredMotionUIPropGetter<
    "div",
    {
      value: number
    }
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

export type UseRatingItemProps = {
  groupValue: number
  fractionValue: number
  value: number
}

export const useRatingItem = ({
  groupValue,
  fractionValue,
  value,
}: UseRatingItemProps) => {
  const {
    id,
    name,
    formControlProps,
    isOutside,
    highlightSelectedOnly,
    roundedValue,
    resolvedValue,
    setValue,
    setHoveredValue,
  } = useRatingContext()
  const { readOnly, disabled } = formControlProps
  const [isFocused, setFocused] = useState<boolean>(false)
  const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
  const isActive = value === resolvedValue
  const isChecked = value === roundedValue
  const isFilled = highlightSelectedOnly
    ? value === resolvedValue
    : value <= resolvedValue

  const onBlur = useCallback(() => {
    setFocused(false)

    if (isOutside) setHoveredValue(-1)
  }, [isOutside, setHoveredValue])

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) return

      const value = parseFloat(ev.target.value)

      setHoveredValue(value)
    },
    [disabled, readOnly, setHoveredValue],
  )

  const onChange = useCallback(
    (value: number) => {
      if (readOnly || disabled) return

      setValue(value)
    },
    [disabled, readOnly, setValue],
  )

  const onClick = useCallback(() => {
    if (readOnly || disabled) return

    onChange(value)
  }, [disabled, onChange, readOnly, value])

  const getItemProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => {
      const zIndex = isActive ? 1 : -1

      return {
        ref,
        htmlFor: `${id}-${groupValue}-${value}`,
        ...formControlProps,
        ...props,
        zIndex: fractionValue !== 1 ? zIndex : undefined,
        onClick: handlerAll(onClick, props.onClick),
        "data-active": dataAttr(isActive),
        "data-filled": dataAttr(isFilled),
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocused && isFocusVisible),
      }
    },
    [
      formControlProps,
      fractionValue,
      groupValue,
      id,
      isActive,
      isFilled,
      isFocusVisible,
      isFocused,
      onClick,
      value,
    ],
  )

  const getInputProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => {
      return {
        ref,
        "aria-label": `${value}`,
        ...formControlProps,
        ...props,
        style: {
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
        },
        type: "radio",
        id: `${id}-${groupValue}-${value}`,
        name,
        value,
        checked: isChecked,
        onChange: handlerAll(onInputChange, props.onChange),
        onFocus: handlerAll(() => setFocused(true), props.onFocus),
        onBlur: handlerAll(onBlur, props.onBlur),
        onKeyDown: handlerAll(
          (ev) => (ev.key === " " ? onChange(value) : void 0),
          props.onKeyDown,
        ),
        "data-active": dataAttr(isActive),
        "data-checked": dataAttr(isChecked),
      }
    },
    [
      value,
      formControlProps,
      id,
      groupValue,
      name,
      isChecked,
      onInputChange,
      onBlur,
      isActive,
      onChange,
    ],
  )

  useEffect(() => {
    return trackFocusVisible(setIsFocusVisible)
  }, [])

  return {
    isActive,
    isChecked,
    isFilled,
    getItemProps,
    getInputProps,
  }
}

export type UseRatingItemReturn = ReturnType<typeof useRatingItem>
