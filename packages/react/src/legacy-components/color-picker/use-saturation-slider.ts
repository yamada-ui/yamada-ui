import type { CSSProperties, KeyboardEvent, KeyboardEventHandler } from "react"
import type { CSSUIProps, HTMLUIProps, PropGetter } from "../../core"
import type { FormControlOptions } from "../form-control"
import { useCallback, useMemo, useRef, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useLatestRef } from "../../hooks/use-latest-ref"
import { usePanEvent } from "../../hooks/use-pan-event"
import { useSize } from "../../hooks/use-size"
import {
  clampNumber,
  dataAttr,
  handlerAll,
  hsvTo,
  mergeRefs,
  roundNumberToStep,
  runIfFunc,
  splitObject,
  useCallbackRef,
  useUpdateEffect,
} from "../../utils"
import { formControlProperties, useFormControlProps } from "../form-control"

export type Hsv = [number, number, number]
type Overlay = ((value: Hsv) => HTMLUIProps) | HTMLUIProps

const defaultOverlays = (withShadow: boolean): Overlay[] => {
  let overlays: Overlay[] = [
    ([h]) => ({
      bg: `hsl(${h}, 100%, 50%)`,
      bgImage:
        "linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, transparent)",
    }),
  ]

  if (withShadow)
    overlays = [
      ...overlays,
      {
        boxShadow: `rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset`,
      },
    ]

  return overlays
}

interface UseSaturationSliderOptions {
  /**
   * The base `id` to use for the saturation slider.
   */
  id?: string
  /**
   * The name attribute of the hidden `input` field.
   * This is particularly useful in forms.
   */
  name?: string
  /**
   * The initial value of the saturation slider.
   *
   * @default "[0, 0, 1]"
   */
  defaultValue?: Hsv
  /**
   * If `false`, the saturation slider handle will not capture focus when value changes.
   *
   * @default true
   */
  focusThumbOnChange?: boolean
  /**
   * The overlay used for the saturation slider.
   */
  overlays?: Overlay[]
  /**
   * The step in which increments or decrements have to be made.
   *
   * @default 0.01
   */
  step?: number
  /**
   * The CSS `background` property. Used in `background` of thumb element.
   */
  thumbColor?: CSSUIProps["bg"]
  /**
   * The value of the saturation slider.
   */
  value?: Hsv
  /**
   * If `true`, the slider has an inner `box-shadow`.
   *
   * @default true
   */
  withShadow?: boolean
  /**
   * Function called whenever the saturation slider value changes.
   */
  onChange?: (value: Hsv) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: Hsv) => void
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: Hsv) => void
}

export interface UseSaturationSliderProps
  extends Omit<HTMLUIProps, "defaultValue" | "onChange">,
    UseSaturationSliderOptions,
    FormControlOptions {}

export const useSaturationSlider = ({
  focusThumbOnChange = true,
  ...props
}: UseSaturationSliderProps) => {
  if (!focusThumbOnChange) props.readOnly = true

  const {
    id,
    name,
    defaultValue = [0, 0, 1],
    withShadow = true,
    overlays: overlaysProp = defaultOverlays(withShadow),
    step = 0.01,
    thumbColor,
    value: valueProp,
    onChange: onChangeProp,
    onChangeEnd: onChangeEndProp,
    onChangeStart: onChangeStartProp,
    ...rest
  } = useFormControlProps(props)
  const [
    {
      "aria-readonly": _ariaReadonly,
      disabled,
      readOnly,
      required,
      ...formControlProps
    },
    containerProps,
  ] = splitObject(rest, formControlProperties)

  const onChangeStart = useCallbackRef(onChangeStartProp)
  const onChangeEnd = useCallbackRef(onChangeEndProp)

  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [dragging, setDragging] = useState(false)
  const interactive = !(disabled || readOnly)
  let [h, s, v] = value

  s = clampNumber(s, 0, 1)
  v = clampNumber(v, 0, 1)

  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const thumbRef = useRef<HTMLElement>(null)
  const latestRef = useLatestRef({
    eventSource: null as "keyboard" | "pointer" | null,
    focusThumbOnChange,
    interactive,
    step,
    value,
  })

  const thumbSize = useSize(thumbRef)

  const overlays = useMemo(
    () => overlaysProp.map((propsOrFunc) => runIfFunc(propsOrFunc, [h, s, v])),
    [overlaysProp, h, s, v],
  )

  const getValueFromPointer = useCallback(
    (ev: any) => {
      if (!trackRef.current) return []

      const { step } = latestRef.current

      latestRef.current.eventSource = "pointer"

      const { bottom, height, left, width } =
        trackRef.current.getBoundingClientRect()
      const { clientX, clientY } = ev.touches?.[0] ?? ev

      let s = clampNumber((clientX - left) / width, 0, 1)
      let v = clampNumber((bottom - clientY) / height, 0, 1)

      if (step) {
        s = parseFloat(roundNumberToStep(s, 0, step))
        v = parseFloat(roundNumberToStep(v, 0, step))
      }

      return [s, v]
    },
    [latestRef],
  )

  const setValueFromPointer = (ev: MouseEvent | PointerEvent | TouchEvent) => {
    const { value } = latestRef.current
    const [nextS, nextV] = getValueFromPointer(ev)

    if (nextS == null || nextV == null) return

    const [, s, v] = value

    if (nextS !== s || nextV !== v) setValue(([h]) => [h, nextS, nextV])
  }

  const focusThumb = useCallback(() => {
    const { focusThumbOnChange } = latestRef.current

    if (focusThumbOnChange) setTimeout(() => thumbRef.current?.focus())
  }, [latestRef])

  const constrain = useCallback(
    ([s, v]: [number, number]) => {
      const { interactive } = latestRef.current

      if (!interactive) return

      s = clampNumber(s, 0, 1)
      v = clampNumber(v, 0, 1)

      setValue(([h]) => [h, s, v])
    },
    [latestRef, setValue],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLElement>) => {
      const actions: { [key: string]: KeyboardEventHandler } = {
        ArrowDown: () => constrain([s, v - step]),
        ArrowLeft: () => constrain([s - step, v]),
        ArrowRight: () => constrain([s + step, v]),
        ArrowUp: () => constrain([s, v + step]),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)

      latestRef.current.eventSource = "keyboard"
    },
    [latestRef, constrain, s, v, step],
  )

  usePanEvent(containerRef, {
    onMove: (ev) => {
      const { interactive } = latestRef.current

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
    (props = {}, ref = null) => ({
      ...props,
      ...containerProps,
      ...formControlProps,
      ref: mergeRefs(ref, containerRef),
      tabIndex: -1,
    }),
    [containerProps, formControlProps],
  )

  const getInnerProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const { width: w } = thumbSize ?? { width: 0 }

      const style: CSSProperties = {
        ...props.style,
        ...rest.style,
        padding: `${w / 2}px`,
      }

      return {
        ...props,
        ref,
        style,
      }
    },
    [rest, thumbSize],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      id,
      ref,
      type: "hidden",
      name,
      disabled,
      readOnly,
      required,
      value: [h, s, v].toString(),
    }),
    [formControlProps, id, name, h, s, v, required, disabled, readOnly],
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
      const { height, width } = thumbSize ?? { height: 0, width: 0 }
      const x = s * 100
      const y = v * 100

      const style: CSSProperties = {
        ...props.style,
        bottom: `calc(${y}% - ${height / 2}px)`,
        left: `calc(${x}% - ${width / 2}px)`,
        position: "absolute",
        touchAction: "none",
        userSelect: "none",
      }

      return {
        "aria-label": "Saturation and brightness thumb",
        "aria-roledescription": "2D slider",
        bg: thumbColor ?? hsvTo([h, s, v])(),
        ...formControlProps,
        ...props,
        ref: mergeRefs(ref, thumbRef),
        style,
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": s * 100,
        "aria-valuetext": `Saturation ${s * 100}%, Brightness ${v * 100}%`,
        "data-active": dataAttr(dragging && focusThumbOnChange),
        role: "slider",
        tabIndex: interactive && focusThumbOnChange ? 0 : undefined,
        onBlur: handlerAll(props.onBlur, rest.onBlur),
        onFocus: handlerAll(props.onFocus, rest.onFocus),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }
    },
    [
      thumbSize,
      s,
      v,
      thumbColor,
      h,
      formControlProps,
      interactive,
      focusThumbOnChange,
      dragging,
      onKeyDown,
      rest,
    ],
  )

  return {
    overlays,
    value,
    getContainerProps,
    getInnerProps,
    getInputProps,
    getThumbProps,
    getTrackProps,
  }
}

export type UseSaturationSliderReturn = ReturnType<typeof useSaturationSlider>
