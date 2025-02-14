import type { CSSProperties, KeyboardEvent, KeyboardEventHandler } from "react"
import type { CSSUIProps, HTMLUIProps, PropGetter } from "../../core"
import type { FormControlOptions } from "../form-control"
import { useCallback, useRef, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useLatestRef } from "../../hooks/use-latest-ref"
import { usePanEvent } from "../../hooks/use-pan-event"
import { useSize } from "../../hooks/use-size"
import {
  clampNumber,
  dataAttr,
  handlerAll,
  mergeRefs,
  percentToValue,
  roundNumberToStep,
  splitObject,
  useCallbackRef,
  useUpdateEffect,
  valueToPercent,
} from "../../utils"
import { formControlProperties, useFormControlProps } from "../form-control"

type ColorSliderChannel = "alpha" | "hue"

interface UseColorSliderOptions {
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   */
  max: number
  /**
   * The minimum allowed value of the slider. Cannot be greater than max.
   */
  min: number
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
   * The channel of the slider.
   */
  channel?: ColorSliderChannel
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
   * The step in which increments or decrements have to be made.
   *
   * @default 1
   */
  step?: number
  /**
   * The CSS `background` property. Used in `background` of thumb element.
   */
  thumbColor?: CSSUIProps["bg"]
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

export interface UseColorSliderProps
  extends Omit<HTMLUIProps, "defaultValue" | "onChange">,
    UseColorSliderOptions,
    FormControlOptions {}

export const useColorSlider = ({
  focusThumbOnChange = true,
  ...props
}: UseColorSliderProps) => {
  if (!focusThumbOnChange) props.readOnly = true

  const {
    id,
    name,
    style: styleProp,
    channel = "hue",
    defaultValue,
    max,
    min = 0,
    step = 1,
    thumbColor,
    value: valueProp,
    onChange: onChangeProp,
    onChangeEnd: onChangeEndProp,
    onChangeStart: onChangeStartProp,
    ...rest
  } = useFormControlProps(props)
  const [
    {
      "aria-readonly": ariaReadonly,
      disabled,
      readOnly,
      required,
      onBlur: onBlurProp,
      onFocus: onFocusProp,
      ...formControlProps
    },
    containerProps,
  ] = splitObject(rest, formControlProperties)

  const onChangeStart = useCallbackRef(onChangeStartProp)
  const onChangeEnd = useCallbackRef(onChangeEndProp)

  const [computedValue, setValue] = useControllableState({
    defaultValue: defaultValue ?? min + (max - min) / 2,
    value: valueProp,
    onChange: onChangeProp,
  })
  const value = clampNumber(computedValue, min, max)
  const thumbPercent = valueToPercent(value, min, max)
  const [dragging, setDragging] = useState(false)
  const interactive = !(disabled || readOnly)

  const oneStep = step || (max - min) / 100
  const tenStep = (max - min) / 10

  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const thumbRef = useRef<HTMLElement>(null)
  const latestRef = useLatestRef({
    eventSource: null as "keyboard" | "pointer" | null,
    focusThumbOnChange,
    interactive,
    max,
    min,
    step,
    value,
  })

  const thumbSize = useSize(thumbRef)

  const getValueFromPointer = useCallback(
    (ev: any) => {
      if (!trackRef.current) return

      const { max, min, step } = latestRef.current

      latestRef.current.eventSource = "pointer"

      const { left, width } = trackRef.current.getBoundingClientRect()
      const { clientX } = ev.touches?.[0] ?? ev
      const percent = (clientX - left) / width

      let nextValue = percentToValue(percent, min, max)

      if (step) nextValue = parseFloat(roundNumberToStep(nextValue, min, step))

      nextValue = clampNumber(nextValue, min, max)

      return nextValue
    },
    [latestRef],
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
      const { interactive, max, min } = latestRef.current

      if (!interactive) return

      value = parseFloat(roundNumberToStep(value, min, oneStep))
      value = clampNumber(value, min, max)

      setValue(value)
    },
    [setValue, latestRef, oneStep],
  )

  const stepUp = useCallback(
    (step = oneStep) => constrain(value + step),
    [constrain, value, oneStep],
  )

  const stepDown = useCallback(
    (step = oneStep) => constrain(value - step),
    [constrain, value, oneStep],
  )

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

      latestRef.current.eventSource = "keyboard"
    },
    [constrain, latestRef, stepDown, stepUp, tenStep],
  )

  usePanEvent(containerRef, {
    onMove: (ev) => {
      const { interactive: interactive } = latestRef.current

      if (!interactive) return

      setValueFromPointer(ev)
    },
    onSessionEnd: () => {
      const { interactive, value } = latestRef.current

      if (!interactive) return

      setDragging(false)
      onChangeEnd(value)
    },
    onSessionStart: (ev) => {
      const { interactive, value } = latestRef.current

      if (!interactive) return

      setDragging(true)
      focusThumb()
      setValueFromPointer(ev)
      onChangeStart(value)
    },
  })

  useUpdateEffect(() => {
    const { eventSource, value } = latestRef.current

    if (eventSource === "keyboard") onChangeEnd(value)
  }, [value, onChangeEnd])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const { width: w } = thumbSize ?? { width: 0 }

      const style: CSSProperties = {
        ...props.style,
        ...styleProp,
        paddingInline: `${w / 2}px`,
      }

      return {
        ...props,
        ...formControlProps,
        ...containerProps,
        ref: mergeRefs(ref, containerRef),
        style,
        tabIndex: -1,
      }
    },
    [containerProps, formControlProps, styleProp, thumbSize],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      "aria-readonly": ariaReadonly,
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
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref: mergeRefs(ref, trackRef),
    }),
    [formControlProps],
  )

  const getThumbProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const n = thumbPercent
      const { width: w } = thumbSize ?? { width: 0 }

      const style: CSSProperties = {
        ...props.style,
        left: `calc(${n}% - ${w / 2}px)`,
        position: "absolute",
        touchAction: "none",
        userSelect: "none",
      }

      return {
        "aria-label": "Slider thumb",
        bg: thumbColor ?? `hsl(${value}, 100%, 50%)`,
        ...formControlProps,
        "aria-readonly": ariaReadonly,
        ...props,
        ref: mergeRefs(ref, thumbRef),
        style,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        "aria-valuetext": getAriaValueText(channel, value),
        "data-active": dataAttr(dragging && focusThumbOnChange),
        role: "slider",
        tabIndex: interactive && focusThumbOnChange ? 0 : undefined,
        onBlur: handlerAll(props.onBlur, onBlurProp),
        onFocus: handlerAll(props.onFocus, onFocusProp),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }
    },
    [
      thumbPercent,
      thumbSize,
      thumbColor,
      value,
      formControlProps,
      ariaReadonly,
      max,
      min,
      channel,
      dragging,
      focusThumbOnChange,
      interactive,
      onBlurProp,
      onFocusProp,
      onKeyDown,
    ],
  )

  return {
    value,
    getContainerProps,
    getInputProps,
    getThumbProps,
    getTrackProps,
  }
}

export type UseColorSliderReturn = ReturnType<typeof useColorSlider>

export const getAriaValueText = (
  channel: ColorSliderChannel,
  value: number,
) => {
  if (channel === "hue") {
    return `${value}°, ${getColorName(value)}`
  } else {
    return `${value * 100}%`
  }
}

const getColorName = (hue: number): string => {
  if (hue < 30 || hue >= 330) return "Red"
  if (hue < 90) return "Yellow"
  if (hue < 150) return "Green"
  if (hue < 210) return "Cyan"
  if (hue < 270) return "Blue"
  return "Magenta"
}
