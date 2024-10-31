import type {
  CSSUIObject,
  CSSUIProps,
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { Merge } from "@yamada-ui/utils"
import type { CSSProperties, KeyboardEvent, KeyboardEventHandler } from "react"
import { mergeVars } from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useLatestRef } from "@yamada-ui/use-latest-ref"
import { usePanEvent } from "@yamada-ui/use-pan-event"
import { useSize } from "@yamada-ui/use-size"
import {
  clampNumber,
  createContext,
  dataAttr,
  handlerAll,
  isNumber,
  mergeRefs,
  percentToValue,
  pickObject,
  roundNumberToStep,
  useCallbackRef,
  useUpdateEffect,
  valueToPercent,
} from "@yamada-ui/utils"
import { useCallback, useRef, useState } from "react"
import { SliderOptions } from "./slider"

interface SliderContext
  extends Pick<
      ReturnUseSlider,
      | "getFilledTrackProps"
      | "getMarkProps"
      | "getThumbProps"
      | "getTrackProps"
      | "isVertical"
    >,
    Omit<SliderOptions, "input"> {
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [SliderProvider, useSliderContext] = createContext<SliderContext>({
  name: "SliderContext",
  errorMessage: `useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `,
})

export interface UseSliderOptions {
  /**
   * The base `id` to use for the slider.
   */
  id?: string
  /**
   * The name attribute of the hidden `input` field.
   * This is particularly useful in forms.
   */
  name?: string
  /**
   * The initial value of the slider.
   */
  defaultValue?: number
  /**
   * If `false`, the slider handle will not capture focus when value changes.
   *
   * @default true
   */
  focusThumbOnChange?: boolean
  /**
   * If `true`, the value will be incremented or decremented in reverse.
   */
  isReversed?: boolean
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   *
   * @default 100
   */
  max?: number
  /**
   * The minimum allowed value of the slider. Cannot be greater than max.
   *
   * @default 0
   */
  min?: number
  /**
   * The orientation of the slider.
   *
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical"
  /**
   * The step in which increments or decrements have to be made.
   *
   * @default 1
   */
  step?: number
  /**
   * The CSS `box-size` property.
   * Used for calculating the width, height, and percentage of the container element.
   */
  thumbSize?: CSSUIProps["boxSize"]
  /**
   * The value of the slider.
   */
  value?: number
  /**
   * Function called whenever the slider value changes.
   */
  onChange?: (value: number) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: number) => void
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: number) => void
}

export interface UseSliderProps
  extends Merge<HTMLUIProps, FormControlOptions & UseSliderOptions> {}

export const useSlider = ({
  focusThumbOnChange = true,
  ...props
}: UseSliderProps) => {
  if (!focusThumbOnChange) props.isReadOnly = true

  let {
    id,
    name,
    "aria-valuetext": ariaValueText,
    defaultValue,
    isReversed,
    max = 100,
    min = 0,
    orientation = "horizontal",
    step = 1,
    thumbSize: thumbSizeProp,
    value: valueProp,
    onChange,
    onChangeEnd: onChangeEndProp,
    onChangeStart: onChangeStartProp,
    ...rest
  } = useFormControlProps(props)
  const {
    "aria-readonly": ariaReadonly,
    disabled,
    readOnly,
    required,
    onBlur,
    onFocus,
    ...formControlProps
  } = pickObject(rest, formControlProperties)

  if (max < min)
    throw new Error("Do not assign a number less than 'min' to 'max'")

  const onChangeStart = useCallbackRef(onChangeStartProp)
  const onChangeEnd = useCallbackRef(onChangeEndProp)

  const [computedValue, setValue] = useControllableState({
    defaultValue: defaultValue ?? min + (max - min) / 2,
    value: valueProp,
    onChange,
  })

  const [isDragging, setDragging] = useState(false)
  const [isFocused, setFocused] = useState(false)
  const isInteractive = !(disabled || readOnly)

  const tenStep = (max - min) / 10
  const oneStep = step || (max - min) / 100

  const value = clampNumber(computedValue, min, max)
  const reversedValue = max - value + min
  const thumbValue = isReversed ? reversedValue : value
  const thumbPercent = valueToPercent(thumbValue, min, max)

  const isVertical = orientation === "vertical"

  const latestRef = useLatestRef({
    focusThumbOnChange,
    isInteractive,
    max,
    min,
    step,
    value,
  })

  const eventSourceRef = useRef<"keyboard" | "pointer" | null>(null)
  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const thumbRef = useRef<HTMLElement>(null)

  const thumbSize = useSize(thumbRef)

  usePanEvent(containerRef, {
    onMove: (ev) => {
      const { isInteractive } = latestRef.current

      if (!isInteractive) return

      setValueFromPointer(ev)
    },
    onSessionEnd: () => {
      const { isInteractive, value } = latestRef.current

      if (!isInteractive) return

      setDragging(false)
      onChangeEnd(value)
    },
    onSessionStart: (ev) => {
      const { isInteractive, value } = latestRef.current

      if (!isInteractive) return

      setDragging(true)
      focusThumb()
      setValueFromPointer(ev)
      onChangeStart(value)
    },
  })

  const getValueFromPointer = useCallback(
    (ev: any) => {
      if (!trackRef.current) return

      const { max, min, step } = latestRef.current

      eventSourceRef.current = "pointer"

      const { bottom, height, left, width } =
        trackRef.current.getBoundingClientRect()
      const { clientX, clientY } = ev.touches?.[0] ?? ev

      const diff = isVertical ? bottom - clientY : clientX - left

      const length = isVertical ? height : width

      let percent = diff / length

      if (isReversed) percent = 1 - percent

      let nextValue = percentToValue(percent, min, max)

      if (step) nextValue = parseFloat(roundNumberToStep(nextValue, min, step))

      nextValue = clampNumber(nextValue, min, max)

      return nextValue
    },
    [isVertical, isReversed, latestRef],
  )

  const setValueFromPointer = (ev: MouseEvent | PointerEvent | TouchEvent) => {
    const { value } = latestRef.current
    const nextValue = getValueFromPointer(ev)

    if (nextValue != null && nextValue !== value) setValue(nextValue)
  }

  const focusThumb = useCallback(() => {
    const { focusThumbOnChange } = latestRef.current

    if (focusThumbOnChange) setTimeout(() => thumbRef.current?.focus())
  }, [latestRef])

  const constrain = useCallback(
    (value: number) => {
      const { isInteractive, max, min } = latestRef.current

      if (!isInteractive) return

      value = parseFloat(roundNumberToStep(value, min, oneStep))
      value = clampNumber(value, min, max)

      setValue(value)
    },
    [oneStep, setValue, latestRef],
  )

  const stepUp = useCallback(
    (step = oneStep) => constrain(isReversed ? value - step : value + step),
    [constrain, isReversed, oneStep, value],
  )

  const stepDown = useCallback(
    (step = oneStep) => constrain(isReversed ? value + step : value - step),
    [constrain, isReversed, oneStep, value],
  )

  const reset = useCallback(
    () => constrain(defaultValue || 0),
    [constrain, defaultValue],
  )

  const stepTo = useCallback((value: number) => constrain(value), [constrain])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLElement>) => {
      const { max, min } = latestRef.current

      const actions: { [key: string]: KeyboardEventHandler } = {
        ArrowDown: () => stepDown(),
        ArrowLeft: () => stepDown(),
        ArrowRight: () => stepUp(),
        ArrowUp: () => stepUp(),
        End: () => constrain(max),
        Home: () => constrain(min),
        PageDown: () => stepDown(tenStep),
        PageUp: () => stepUp(tenStep),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)

      eventSourceRef.current = "keyboard"
    },
    [constrain, latestRef, stepDown, stepUp, tenStep],
  )

  useUpdateEffect(() => {
    const { value } = latestRef.current

    focusThumb()

    if (eventSourceRef.current === "keyboard") onChangeEnd(value)
  }, [value, onChangeEnd])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      let { height: h, width: w } = thumbSize ?? {
        height: "var(--ui-thumb-size)",
        width: "var(--ui-thumb-size)",
      }

      if (isNumber(w)) w = `${w}px`
      if (isNumber(h)) h = `${h}px`

      const paddingStyle = isVertical
        ? { paddingLeft: `calc(${w} / 2)`, paddingRight: `calc(${w} / 2)` }
        : { paddingBottom: `calc(${h} / 2)`, paddingTop: `calc(${h} / 2)` }

      const style: CSSProperties = {
        ...props.style,
        outline: 0,
        position: "relative",
        touchAction: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        ...paddingStyle,
      }

      return {
        ...rest,
        ...props,
        ref: mergeRefs(ref, containerRef),
        style,
        tabIndex: -1,
        vars: mergeVars(rest.vars, [
          {
            name: "thumb-size",
            token: "sizes",
            value: thumbSizeProp,
            __prefix: "ui",
          },
        ]),
      }
    },
    [isVertical, rest, thumbSize, thumbSizeProp],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      "aria-readonly": ariaReadonly,
      ...formControlProps,
      ...props,
      id,
      ref,
      type: "hidden",
      name,
      disabled,
      readOnly,
      required,
      value,
    }),
    [
      ariaReadonly,
      disabled,
      formControlProps,
      id,
      name,
      readOnly,
      required,
      value,
    ],
  )

  const getTrackProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        ...props.style,
        position: "absolute",
        ...(isVertical
          ? {
              height: "100%",
              left: "50%",
              transform: "translateX(-50%)",
            }
          : {
              top: "50%",
              transform: "translateY(-50%)",
              width: "100%",
            }),
      }

      return {
        ...formControlProps,
        ...props,
        ref: mergeRefs(ref, trackRef),
        style,
      }
    },
    [isVertical, formControlProps],
  )

  const getFilledTrackProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const n = Math.abs(isReversed ? 100 - thumbPercent : thumbPercent)

      const style: CSSProperties = {
        ...props.style,
        position: "absolute",
        ...(isVertical
          ? {
              height: `${n}%`,
              left: "50%",
              transform: "translateX(-50%)",
              ...(isReversed ? { top: "0%" } : { bottom: "0%" }),
            }
          : {
              top: "50%",
              transform: "translateY(-50%)",
              width: `${n}%`,
              ...(isReversed ? { right: "0%" } : { left: "0%" }),
            }),
      }

      return {
        ...formControlProps,
        ...props,
        ref,
        style,
      }
    },
    [isReversed, isVertical, formControlProps, thumbPercent],
  )

  const getMarkProps: RequiredPropGetter<
    { value: number } & HTMLProps,
    HTMLProps
  > = useCallback(
    (props, ref = null) => {
      let n = valueToPercent(props.value, min, max)
      n = isReversed ? 100 - n : n

      const style: CSSProperties = {
        ...props.style,
        pointerEvents: "none",
        position: "absolute",
        ...(isVertical ? { bottom: `${n}%` } : { left: `${n}%` }),
      }

      return {
        ...formControlProps,
        ...props,
        ref,
        style,
        "aria-hidden": true,
        "data-highlighted": dataAttr(props.value <= value),
        "data-invalid": dataAttr(props.value < min || max < props.value),
      }
    },
    [isReversed, isVertical, max, min, formControlProps, value],
  )

  const getThumbProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const n = thumbPercent
      let w: number | string = "var(--ui-thumb-size)"
      let h: number | string = "var(--ui-thumb-size)"

      if (thumbSize) {
        w = `${thumbSize.width}px`
        h = `${thumbSize.height}px`
      }

      const bottom = `calc(${n}% - (${h} / 2))`
      const left = `calc(${n}% - (${w} / 2))`

      const style: CSSProperties = {
        ...props.style,
        position: "absolute",
        touchAction: "none",
        userSelect: "none",
        ...(isVertical ? { bottom } : { left }),
      }

      return {
        "aria-label": "Slider thumb",
        "aria-readonly": ariaReadonly,
        ...formControlProps,
        ...props,
        ref: mergeRefs(ref, thumbRef),
        style,
        "aria-orientation": orientation,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        "aria-valuetext": ariaValueText ?? value.toString(),
        "data-active": dataAttr(isDragging && focusThumbOnChange),
        role: "slider",
        tabIndex: isInteractive && focusThumbOnChange ? 0 : undefined,
        onBlur: handlerAll(props.onBlur, onBlur, () => setFocused(false)),
        onFocus: handlerAll(props.onFocus, onFocus, () => setFocused(true)),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }
    },
    [
      thumbPercent,
      thumbSize,
      isVertical,
      ariaReadonly,
      formControlProps,
      isInteractive,
      focusThumbOnChange,
      min,
      max,
      value,
      isDragging,
      orientation,
      onKeyDown,
      onFocus,
      onBlur,
      ariaValueText,
    ],
  )

  return {
    isDragging,
    isFocused,
    isVertical,
    reset,
    stepDown,
    stepTo,
    stepUp,
    value,
    getContainerProps,
    getFilledTrackProps,
    getInputProps,
    getMarkProps,
    getThumbProps,
    getTrackProps,
  }
}

export type ReturnUseSlider = ReturnType<typeof useSlider>
