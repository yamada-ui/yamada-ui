import type { CSSUIProps, HTMLUIProps, UIPropGetter } from "@yamada-ui/core"
import {
  useFormControlProps,
  type FormControlOptions,
  formControlProperties,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useLatestRef } from "@yamada-ui/use-latest-ref"
import { usePanEvent } from "@yamada-ui/use-pan-event"
import { useSize } from "@yamada-ui/use-size"
import {
  dataAttr,
  handlerAll,
  mergeRefs,
  useCallbackRef,
  runIfFunc,
  clampNumber,
  hsvTo,
  roundNumberToStep,
  useUpdateEffect,
  splitObject,
} from "@yamada-ui/utils"
import type { CSSProperties, KeyboardEvent, KeyboardEventHandler } from "react"
import { useCallback, useMemo, useRef, useState } from "react"

export type Hsv = [number, number, number]
type Overlay = HTMLUIProps<"div"> | ((value: Hsv) => HTMLUIProps<"div">)

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

type UseSaturationSliderOptions = {
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
   * The value of the saturation slider.
   */
  value?: Hsv
  /**
   * The initial value of the saturation slider.
   *
   * @default "[0, 0, 1]"
   */
  defaultValue?: Hsv
  /**
   * Function called whenever the saturation slider value changes.
   */
  onChange?: (value: Hsv) => void
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: Hsv) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: Hsv) => void
  /**
   * The step in which increments or decrements have to be made.
   *
   * @default 0.01
   */
  step?: number
  /**
   * If `false`, the saturation slider handle will not capture focus when value changes.
   *
   * @default true
   */
  focusThumbOnChange?: boolean
  /**
   * The CSS `background` property. Used in `background` of thumb element.
   */
  thumbColor?: CSSUIProps["bg"]
  /**
   * If `true`, the slider has an inner `box-shadow`.
   *
   * @default true
   */
  withShadow?: boolean
  /**
   * The overlay used for the saturation slider.
   */
  overlays?: Overlay[]
}

export type UseSaturationSliderProps = Omit<
  HTMLUIProps<"div">,
  "defaultValue" | "onChange"
> &
  UseSaturationSliderOptions &
  FormControlOptions

export const useSaturationSlider = ({
  focusThumbOnChange = true,
  ...props
}: UseSaturationSliderProps) => {
  if (!focusThumbOnChange) props.isReadOnly = true

  let {
    id,
    name,
    value: valueProp,
    defaultValue = [0, 0, 1],
    onChange: onChangeProp,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 0.01,
    thumbColor,
    withShadow = true,
    overlays: overlaysProp = defaultOverlays(withShadow),
    ...rest
  } = useFormControlProps(props)
  const [
    {
      "aria-readonly": _ariaReadonly,
      required,
      disabled,
      readOnly,
      ...formControlProps
    },
    containerProps,
  ] = splitObject(rest, formControlProperties)

  const onChangeStart = useCallbackRef(onChangeStartProp)
  const onChangeEnd = useCallbackRef(onChangeEndProp)

  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
  })
  const [isDragging, setDragging] = useState(false)
  const isInteractive = !(disabled || readOnly)
  let [h, s, v] = value

  s = clampNumber(s, 0, 1)
  v = clampNumber(v, 0, 1)

  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const thumbRef = useRef<HTMLElement>(null)
  const latestRef = useLatestRef({
    value,
    step,
    isInteractive,
    eventSource: null as "pointer" | "keyboard" | null,
    focusThumbOnChange,
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

      const { bottom, left, height, width } =
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

  const setValueFromPointer = (ev: MouseEvent | TouchEvent | PointerEvent) => {
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
      const { isInteractive } = latestRef.current

      if (!isInteractive) return

      s = clampNumber(s, 0, 1)
      v = clampNumber(v, 0, 1)

      setValue(([h]) => [h, s, v])
    },
    [latestRef, setValue],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLElement>) => {
      const actions: Record<string, KeyboardEventHandler> = {
        ArrowRight: () => constrain([s + step, v]),
        ArrowUp: () => constrain([s, v + step]),
        ArrowLeft: () => constrain([s - step, v]),
        ArrowDown: () => constrain([s, v - step]),
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
    (props = {}, ref = null) => ({
      ...props,
      ...containerProps,
      ...formControlProps,
      ref: mergeRefs(ref, containerRef),
      tabIndex: -1,
    }),
    [containerProps, formControlProps],
  )

  const getInnerProps: UIPropGetter = useCallback(
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

  const getInputProps: UIPropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      id,
      ref,
      type: "hidden",
      name,
      value: [h, s, v].toString(),
      required,
      disabled,
      readOnly,
    }),
    [formControlProps, id, name, h, s, v, required, disabled, readOnly],
  )

  const getTrackProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref: mergeRefs(ref, trackRef),
    }),
    [formControlProps],
  )

  const getThumbProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => {
      const { width, height } = thumbSize ?? { width: 0, height: 0 }
      const x = s * 100
      const y = v * 100

      const style: CSSProperties = {
        ...props.style,
        position: "absolute",
        userSelect: "none",
        touchAction: "none",
        left: `calc(${x}% - ${width / 2}px)`,
        bottom: `calc(${y}% - ${height / 2}px)`,
      }

      return {
        "aria-label": "Saturation and brightness thumb",
        bg: thumbColor ?? hsvTo([h, s, v])(),
        ...formControlProps,
        ...props,
        ref: mergeRefs(ref, thumbRef),
        tabIndex: isInteractive && focusThumbOnChange ? 0 : undefined,
        role: "slider",
        "aria-valuenow": s,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": `saturation ${s}, brightness ${v}`,
        "data-active": dataAttr(isDragging && focusThumbOnChange),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
        onFocus: handlerAll(props.onFocus, rest.onFocus),
        onBlur: handlerAll(props.onBlur, rest.onBlur),
        style,
      }
    },
    [
      thumbSize,
      s,
      v,
      thumbColor,
      h,
      formControlProps,
      isInteractive,
      focusThumbOnChange,
      isDragging,
      onKeyDown,
      rest,
    ],
  )

  return {
    value,
    overlays,
    getContainerProps,
    getInnerProps,
    getTrackProps,
    getInputProps,
    getThumbProps,
  }
}

export type UseSaturationSliderReturn = ReturnType<typeof useSaturationSlider>
