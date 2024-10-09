import type { CSSUIProps, HTMLUIProps, PropGetter } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { CSSProperties, KeyboardEvent, KeyboardEventHandler } from "react"
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
  dataAttr,
  handlerAll,
  mergeRefs,
  percentToValue,
  roundNumberToStep,
  splitObject,
  useCallbackRef,
  useUpdateEffect,
  valueToPercent,
} from "@yamada-ui/utils"
import { useCallback, useRef, useState } from "react"

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
  if (!focusThumbOnChange) props.isReadOnly = true

  const {
    id,
    name,
    style: styleProp,
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
  const [isDragging, setDragging] = useState(false)
  const isInteractive = !(disabled || readOnly)

  const oneStep = step || (max - min) / 100
  const tenStep = (max - min) / 10

  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const thumbRef = useRef<HTMLElement>(null)
  const latestRef = useLatestRef({
    eventSource: null as "keyboard" | "pointer" | null,
    focusThumbOnChange,
    isInteractive,
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

      let percent = (clientX - left) / width

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
      const { isInteractive, max, min } = latestRef.current

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
        "data-active": dataAttr(isDragging && focusThumbOnChange),
        role: "slider",
        tabIndex: isInteractive && focusThumbOnChange ? 0 : undefined,
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
    getInputProps,
    getThumbProps,
    getTrackProps,
  }
}

export type UseColorSliderReturn = ReturnType<typeof useColorSlider>
