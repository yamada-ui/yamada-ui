import type { CSSUIProps, HTMLUIProps, UIPropGetter } from "@yamada-ui/core"
import {
  useFormControlProps,
  type FormControlOptions,
  formControlProperties,
  getFormControlProperties,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useLatestRef } from "@yamada-ui/use-latest-ref"
import { usePanEvent } from "@yamada-ui/use-pan-event"
import { useSize } from "@yamada-ui/use-size"
import {
  omitObject,
  dataAttr,
  handlerAll,
  mergeRefs,
  valueToPercent,
  clampNumber,
  useCallbackRef,
  roundNumberToStep,
  useUpdateEffect,
  percentToValue,
  pickObject,
} from "@yamada-ui/utils"
import type { CSSProperties, KeyboardEvent, KeyboardEventHandler } from "react"
import { useCallback, useRef, useState } from "react"

type UseColorSliderOptions = {
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

export type UseColorSliderProps = Omit<
  HTMLUIProps<"div">,
  "defaultValue" | "onChange"
> &
  UseColorSliderOptions &
  FormControlOptions

export const useColorSlider = ({
  focusThumbOnChange = true,
  ...props
}: UseColorSliderProps) => {
  if (!focusThumbOnChange) props.isReadOnly = true

  let {
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
    required,
    disabled,
    readOnly,
    ...rest
  } = useFormControlProps(props)

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

      const actions: Record<string, KeyboardEventHandler> = {
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

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => {
      const { width: w } = thumbSize ?? { width: 0 }

      const style: CSSProperties = {
        ...props.style,
        ...rest.style,
        paddingInline: `${w / 2}px`,
      }

      return {
        ...props,
        ...omitObject(rest, ["aria-readonly"]),
        ref: mergeRefs(ref, containerRef),
        tabIndex: -1,
        style,
      }
    },
    [rest, thumbSize],
  )

  const getInputProps: UIPropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ...pickObject(rest, formControlProperties),
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
    [disabled, id, name, readOnly, required, rest, value],
  )

  const getTrackProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...pickObject(
        rest,
        getFormControlProperties({ omit: ["aria-readonly"] }),
      ),
      ...props,
      ref: mergeRefs(ref, trackRef),
    }),
    [rest],
  )

  const getThumbProps: UIPropGetter = useCallback(
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
        ...pickObject(rest, formControlProperties),
        ...props,
        ref: mergeRefs(ref, thumbRef),
        tabIndex: isInteractive && focusThumbOnChange ? 0 : undefined,
        role: "slider",
        "aria-valuenow": value,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "data-active": dataAttr(isDragging && focusThumbOnChange),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
        onFocus: handlerAll(props.onFocus, rest.onFocus),
        onBlur: handlerAll(props.onBlur, rest.onBlur),
        style,
      }
    },
    [
      thumbColor,
      focusThumbOnChange,
      isDragging,
      isInteractive,
      min,
      max,
      onKeyDown,
      rest,
      thumbPercent,
      thumbSize,
      value,
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
