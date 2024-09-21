import type { CSSUIProps, HTMLUIProps, PropGetter } from "@yamada-ui/core"
import {
  useFormControlProps,
  formControlProperties,
} from "@yamada-ui/form-control"
import type { FormControlOptions } from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useLatestRef } from "@yamada-ui/use-latest-ref"
import { usePanEvent } from "@yamada-ui/use-pan-event"
import { useSize } from "@yamada-ui/use-size"
import {
  dataAttr,
  handlerAll,
  mergeRefs,
  valueToPercent,
  clampNumber,
  useCallbackRef,
  roundNumberToStep,
  useUpdateEffect,
  percentToValue,
  splitObject,
} from "@yamada-ui/utils"
import type { CSSProperties, KeyboardEvent, KeyboardEventHandler } from "react"
import { useCallback, useRef, useState } from "react"

interface UseColorSliderOptions {
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
   * The value of the slider.
   */
  value?: number
  /**
   * The initial value of the slider.
   */
  defaultValue?: number
  /**
   * The minimum allowed value of the slider. Cannot be greater than max.
   */
  min: number
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   */
  max: number
  /**
   * The step in which increments or decrements have to be made.
   *
   * @default 1
   */
  step?: number
  /**
   * Function called whenever the slider value changes.
   */
  onChange?: (value: number) => void
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: number) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: number) => void
  /**
   * If `false`, the slider handle will not capture focus when value changes.
   *
   * @default true
   */
  focusThumbOnChange?: boolean
  /**
   * The CSS `background` property. Used in `background` of thumb element.
   */
  thumbColor?: CSSUIProps["bg"]
}

export interface UseColorSliderProps
  extends Omit<HTMLUIProps, "defaultValue" | "onChange">,
    UseColorSliderOptions,
    FormControlOptions {}

export const useColorSlider = ({
  focusThumbOnChange = true,
  ...props
}: UseColorSliderProps) => {
  if (!focusThumbOnChange) props.isReadOnly = true

  const {
    id,
    name,
    value: valueProp,
    defaultValue,
    min = 0,
    max,
    step = 1,
    onChange: onChangeProp,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    thumbColor,
    style: styleProp,
    ...rest
  } = useFormControlProps(props)
  const [
    {
      "aria-readonly": ariaReadonly,
      required,
      disabled,
      readOnly,
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      ...formControlProps
    },
    containerProps,
  ] = splitObject(rest, formControlProperties)

  const onChangeStart = useCallbackRef(onChangeStartProp)
  const onChangeEnd = useCallbackRef(onChangeEndProp)

  const [computedValue, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue ?? min + (max - min) / 2,
    onChange: onChangeProp,
  })
  const value = clampNumber(computedValue, min, max)
  const thumbPercent = valueToPercent(value, min, max)
  const [isDragging, setDragging] = useState(false)
  const isInteractive = !(disabled || readOnly)

  const oneStep = step || (max - min) / 100
  const tenStep = (max - min) / 10

  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const thumbRef = useRef<HTMLElement>(null)
  const latestRef = useLatestRef({
    value,
    min,
    max,
    step,
    isInteractive,
    eventSource: null as "pointer" | "keyboard" | null,
    focusThumbOnChange,
  })

  const thumbSize = useSize(thumbRef)

  const getValueFromPointer = useCallback(
    (ev: any) => {
      if (!trackRef.current) return

      const { min, max, step } = latestRef.current

      latestRef.current.eventSource = "pointer"

      const { left, width } = trackRef.current.getBoundingClientRect()
      const { clientX } = ev.touches?.[0] ?? ev

      let percent = (clientX - left) / width

      let nextValue = percentToValue(percent, min, max)

      if (step) nextValue = parseFloat(roundNumberToStep(nextValue, min, step))

      nextValue = clampNumber(nextValue, min, max)

      return nextValue
    },
    [latestRef],
  )

  const setValueFromPointer = (ev: MouseEvent | TouchEvent | PointerEvent) => {
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
      const { isInteractive, min, max } = latestRef.current

      if (!isInteractive) return

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
      const { min, max } = latestRef.current

      const actions: { [key: string]: KeyboardEventHandler } = {
        ArrowRight: () => stepUp(),
        ArrowUp: () => stepUp(),
        ArrowLeft: () => stepDown(),
        ArrowDown: () => stepDown(),
        PageUp: () => stepUp(tenStep),
        PageDown: () => stepDown(tenStep),
        Home: () => constrain(min),
        End: () => constrain(max),
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
    onSessionStart: (ev) => {
      const { isInteractive, value } = latestRef.current

      if (!isInteractive) return

      setDragging(true)
      focusThumb()
      setValueFromPointer(ev)
      onChangeStart(value)
    },
    onSessionEnd: () => {
      const { isInteractive, value } = latestRef.current

      if (!isInteractive) return

      setDragging(false)
      onChangeEnd(value)
    },
    onMove: (ev) => {
      const { isInteractive } = latestRef.current

      if (!isInteractive) return

      setValueFromPointer(ev)
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
        tabIndex: -1,
        style,
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
      value,
      required,
      disabled,
      readOnly,
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
        position: "absolute",
        userSelect: "none",
        touchAction: "none",
        left: `calc(${n}% - ${w / 2}px)`,
      }

      return {
        "aria-label": "Slider thumb",
        bg: thumbColor ?? `hsl(${value}, 100%, 50%)`,
        ...formControlProps,
        "aria-readonly": ariaReadonly,
        ...props,
        ref: mergeRefs(ref, thumbRef),
        tabIndex: isInteractive && focusThumbOnChange ? 0 : undefined,
        role: "slider",
        "aria-valuenow": value,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "data-active": dataAttr(isDragging && focusThumbOnChange),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
        onFocus: handlerAll(props.onFocus, onFocusProp),
        onBlur: handlerAll(props.onBlur, onBlurProp),
        style,
      }
    },
    [
      thumbPercent,
      thumbSize,
      thumbColor,
      value,
      formControlProps,
      ariaReadonly,
      isInteractive,
      focusThumbOnChange,
      min,
      max,
      isDragging,
      onKeyDown,
      onFocusProp,
      onBlurProp,
    ],
  )

  return {
    value,
    getContainerProps,
    getTrackProps,
    getInputProps,
    getThumbProps,
  }
}

export type UseColorSliderReturn = ReturnType<typeof useColorSlider>
