import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import type { Dict, PropGetter, RequiredPropGetter } from "@yamada-ui/utils"
import {
  clampNumber,
  createContext,
  dataAttr,
  handlerAll,
  mergeRefs,
  pickObject,
} from "@yamada-ui/utils"
import type {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  TouchEvent,
} from "react"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { RatingGroup } from "./rating-group"

export const getRoundedValue = (value: number, to: number) => {
  const rounded = Math.round(value / to) * to

  const precision = `${to}`.split(".")[1]?.length || 0

  return Number(rounded.toFixed(precision))
}

type RatingContext = {
  getGroupProps: RequiredPropGetter<{ value: number }>
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
  formControlProps: Dict
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
   * The name of the input field in a rating input.
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
   * The callback invoked when hovering over the rating.
   */
  onHover?: (value: number) => void
}

export type UseRatingProps = Omit<
  HTMLUIProps<"div">,
  "id" | "defaultValue" | "onChange"
> &
  UseRatingOptions &
  FormControlOptions

export const useRating = ({
  name,
  value: valueProp,
  defaultValue = 0,
  onChange: onChangeProp,
  items = 5,
  fractions = 1,
  onHover,
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

      return clampNumber(
        getRoundedValue(hoveredValue + decimal / 2, decimal),
        decimal,
        resolvedItems,
      )
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

  const getGroupProps: RequiredPropGetter<{
    value: number
  }> = useCallback(
    ({ value, ...props }, ref = null) => {
      const isActive = !readOnly && Math.ceil(hoveredValue) === value

      return {
        ref,
        ...props,
        "data-active": dataAttr(isActive),
      }
    },
    [hoveredValue, readOnly],
  )

  const children = Array(resolvedItems)
    .fill(0)
    .map((_, index) => {
      const value = index + 1

      return (
        <RatingGroup
          key={value}
          value={value}
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
    formControlProps,
    children,
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
    roundedValue,
    resolvedValue,
    setValue,
    setHoveredValue,
  } = useRatingContext()
  const { readOnly, disabled } = formControlProps

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

  const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
  const [isFocused, setFocused] = useState<boolean>(false)

  const getItemProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const isActive = value === resolvedValue
      const isFilled = value <= resolvedValue
      const clipPath = `inset(0 ${
        isActive ? 100 - fractionValue * 100 : 100
      }% 0 0)`

      return {
        ref,
        htmlFor: `${id}-${groupValue}-${value}`,
        ...formControlProps,
        ...props,
        clipPath: fractionValue !== 1 ? clipPath : undefined,
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
      isFocusVisible,
      isFocused,
      onClick,
      resolvedValue,
      value,
    ],
  )

  const getInputProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const isActive = value === resolvedValue
      const checked = value === roundedValue

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
        checked,
        onChange: handlerAll(onInputChange, props.onChange),
        onFocus: handlerAll(() => setFocused(true), props.onFocus),
        onBlur: handlerAll(onBlur, props.onBlur),
        onKeyDown: handlerAll(
          (ev) => (ev.key === " " ? onChange(value) : void 0),
          props.onKeyDown,
        ),
        "data-active": dataAttr(isActive),
        "data-checked": dataAttr(checked),
      }
    },
    [
      name,
      value,
      formControlProps,
      resolvedValue,
      roundedValue,
      id,
      groupValue,
      onInputChange,
      onBlur,
      onChange,
    ],
  )

  useEffect(() => {
    return trackFocusVisible(setIsFocusVisible)
  }, [])

  return {
    getItemProps,
    getInputProps,
  }
}

export type UseRatingItemReturn = ReturnType<typeof useRatingItem>
