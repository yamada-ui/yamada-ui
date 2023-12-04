import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  CSSUIProps,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  useFormControlProps,
  formControlProperties,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useLatestRef } from "@yamada-ui/use-latest-ref"
import { usePanEvent } from "@yamada-ui/use-pan-event"
import { useSizes } from "@yamada-ui/use-size"
import type { PropGetter, RequiredPropGetter } from "@yamada-ui/utils"
import {
  clampNumber,
  createContext,
  cx,
  dataAttr,
  omitChildren,
  findChildren,
  getValidChildren,
  handlerAll,
  isArray,
  isEmpty,
  mergeRefs,
  omitObject,
  percentToValue,
  pickObject,
  roundNumberToStep,
  useCallbackRef,
  useUpdateEffect,
  valueToPercent,
  includesChildren,
} from "@yamada-ui/utils"
import type { CSSProperties, KeyboardEvent } from "react"
import { useCallback, useId, useRef, useState } from "react"

export type UseRangeSliderProps = FormControlOptions & {
  /**
   * The base `id` to use for the slider.
   */
  id?: string
  /**
   * The name attribute of the hidden `input` field.
   * This is particularly useful in forms.
   */
  name?: string | [string, string]
  /**
   * The minimum allowed value of the slider. Cannot be greater than max.
   *
   * @default 0
   */
  min?: number
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   *
   * @default 100
   */
  max?: number
  /**
   * The step in which increments or decrements have to be made.
   *
   * @default 1
   */
  step?: number
  /**
   * The value of the slider.
   */
  value?: [number, number]
  /**
   * The initial value of the slider.
   */
  defaultValue?: [number, number]
  /**
   * The orientation of the slider.
   *
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical"
  /**
   * If `true`, the value will be incremented or decremented in reverse.
   */
  isReversed?: boolean
  /**
   * If `false`, the slider handle will not capture focus when value changes.
   *
   * @default true
   */
  focusThumbOnChange?: boolean
  /**
   * The minimum distance between slider thumbs.
   * Useful for preventing the thumbs from being too close together.
   *
   * @default 0
   */
  betweenThumbs?: number
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: [number, number]) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: [number, number]) => void
  /**
   * Function called whenever the slider value changes.
   */
  onChange?: (value: [number, number]) => void
}

export const useRangeSlider = (props: UseRangeSliderProps) => {
  let {
    id,
    name,
    min = 0,
    max = 100,
    step = 1,
    defaultValue,
    orientation = "horizontal",
    isReversed,
    focusThumbOnChange = true,
    betweenThumbs = 0,
    required,
    disabled,
    readOnly,
    onChange,
    ...rest
  } = useFormControlProps(props)

  defaultValue = defaultValue ?? [min + (max - min) / 4, max - (max - min) / 4]

  if (max < min)
    throw new Error("Do not assign a number less than 'min' to 'max'")

  const onChangeStart = useCallbackRef(rest.onChangeStart)
  const onChangeEnd = useCallbackRef(rest.onChangeEnd)

  const [computedValues, setValues] = useControllableState({
    value: rest.value,
    defaultValue,
    onChange,
  })

  const [isDragging, setDragging] = useState(false)
  const [isFocused, setFocused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const isInteractive = !(disabled || readOnly)

  const tenStep = (max - min) / 10
  const oneStep = step || (max - min) / 100
  const spacing = betweenThumbs * step

  const values = computedValues.map((value) =>
    clampNumber(value, min, max),
  ) as [number, number]
  const reversedValues = values.map((value) => max - value + min) as [
    number,
    number,
  ]
  const thumbValues = isReversed ? reversedValues : values
  const thumbPercents = thumbValues.map((value) =>
    valueToPercent(value, min, max),
  ) as [number, number]
  const valueBounds = [
    { min, max: values[1] - spacing },
    { min: values[0] + spacing, max },
  ]

  const isVertical = orientation === "vertical"

  const latestRef = useLatestRef({
    min,
    max,
    step,
    disabled,
    values,
    valueBounds,
    isInteractive,
    isReversed,
    isVertical,
    eventSource: null as "pointer" | "keyboard" | null,
    focusThumbOnChange,
    betweenThumbs,
    orientation,
  })

  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLElement>(null)

  const thumbSizes = useSizes({
    getNodes: () => {
      const nodes =
        containerRef.current?.querySelectorAll<HTMLElement>("[role=slider]")

      return nodes ? Array.from(nodes) : []
    },
  })

  id ??= useId()
  name ??= id

  const getThumbId = useCallback((i: number) => `slider-thumb-${id}-${i}`, [id])
  const getInputId = useCallback((i: number) => `slider-input-${id}-${i}`, [id])
  const getMarkerId = useCallback(
    (i: number) => `slider-marker-${id}-${i}`,
    [id],
  )

  usePanEvent(containerRef, {
    onSessionStart: (ev) => {
      const { isInteractive, values } = latestRef.current

      if (!isInteractive) return

      setDragging(true)

      const pointValue = getValueFromPointer(ev) || 0
      const distances = values.map((value) => Math.abs(value - pointValue)) as [
        number,
        number,
      ]
      const closest = Math.min(...distances)

      let i = distances.indexOf(closest)

      const thumbsPosition = distances.filter(
        (distance) => distance === closest,
      )
      const isThumbStacked = thumbsPosition.length > 1

      if (isThumbStacked && pointValue > values[i])
        i = i + thumbsPosition.length - 1

      setActiveIndex(i)
      constrain(i, pointValue)
      focusThumb(i)

      onChangeStart(values)
    },
    onSessionEnd: () => {
      const { isInteractive, values } = latestRef.current

      if (!isInteractive) return

      setDragging(false)
      onChangeEnd(values)
    },
    onMove: (ev) => {
      const { isInteractive } = latestRef.current

      if (!isInteractive || activeIndex == -1) return

      const pointValue = getValueFromPointer(ev) || 0

      setActiveIndex(activeIndex)

      constrain(activeIndex, pointValue)

      focusThumb(activeIndex)
    },
  })

  const getValueFromPointer = useCallback(
    (ev: any) => {
      if (!trackRef.current) return

      const { min, max } = latestRef.current

      latestRef.current.eventSource = "pointer"

      const { bottom, left, height, width } =
        trackRef.current.getBoundingClientRect()
      const { clientX, clientY } = ev.touches?.[0] ?? ev

      const diff = isVertical ? bottom - clientY : clientX - left

      const length = isVertical ? height : width

      let percent = diff / length

      if (isReversed) percent = 1 - percent

      let nextValue = percentToValue(percent, min, max)

      return nextValue
    },
    [latestRef, isVertical, isReversed],
  )

  const focusThumb = useCallback(
    (i?: number) => {
      i ??= activeIndex

      if (i === -1 || !focusThumbOnChange) return

      const id = getThumbId(i)

      const el = containerRef.current?.ownerDocument.getElementById(id)

      if (el) setTimeout(() => el.focus())
    },
    [activeIndex, focusThumbOnChange, getThumbId],
  )

  const constrain = useCallback(
    (i: number, value: number) => {
      const { isInteractive, valueBounds, values } = latestRef.current

      if (!isInteractive) return

      const { min, max } = valueBounds[i]

      value = parseFloat(roundNumberToStep(value, min, oneStep))
      value = clampNumber(value, min, max)

      const nextValues = [...values] as [number, number]

      nextValues[i] = value

      setValues(nextValues)
    },
    [latestRef, oneStep, setValues],
  )

  const stepUp = useCallback(
    (i: number, step = oneStep) => {
      const { values } = latestRef.current

      const value = values[i]

      constrain(i, isReversed ? value - step : value + step)
    },
    [constrain, isReversed, latestRef, oneStep],
  )

  const stepDown = useCallback(
    (i: number, step = oneStep) => {
      const { values } = latestRef.current

      const value = values[i]

      constrain(i, isReversed ? value + step : value - step)
    },
    [constrain, isReversed, latestRef, oneStep],
  )

  const reset = useCallback(
    () => setValues(defaultValue as [number, number]),
    [defaultValue, setValues],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLElement>) => {
      const { valueBounds } = latestRef.current
      const { min, max } = valueBounds[activeIndex]

      const actions: Record<string, React.KeyboardEventHandler> = {
        ArrowRight: () => stepUp(activeIndex),
        ArrowUp: () => stepUp(activeIndex),
        ArrowLeft: () => stepDown(activeIndex),
        ArrowDown: () => stepDown(activeIndex),
        PageUp: () => stepUp(activeIndex, tenStep),
        PageDown: () => stepDown(activeIndex, tenStep),
        Home: () => constrain(activeIndex, min),
        End: () => constrain(activeIndex, max),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)

      latestRef.current.eventSource = "keyboard"
    },
    [activeIndex, constrain, latestRef, stepDown, stepUp, tenStep],
  )

  useUpdateEffect(() => {
    const { eventSource, values } = latestRef.current

    if (eventSource === "keyboard") onChangeEnd(values)
  }, [values, onChangeEnd])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const z = { width: 0, height: 0 }
      const p = isVertical ? "height" : "width"
      const { width: w, height: h } =
        thumbSizes.reduce((a = z, b = z) => (a[p] > b[p] ? a : b), z) ?? {}

      const style: CSSProperties = {
        ...props.style,
        position: "relative",
        userSelect: "none",
        touchAction: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        outline: 0,
        ...(isVertical
          ? w
            ? { paddingLeft: w / 2, paddingRight: w / 2 }
            : {}
          : h
            ? { paddingTop: h / 2, paddingBottom: h / 2 }
            : {}),
      }

      return {
        ...omitObject(rest, ["value", "onChangeStart", "onChangeEnd"]),
        ...props,
        id: `slider-container-${id}`,
        ref: mergeRefs(ref, containerRef),
        tabIndex: -1,
        style,
      }
    },
    [id, isVertical, rest, thumbSizes],
  )

  const getInputProps: RequiredPropGetter<{ index: number }> = useCallback(
    ({ index: i, ...props } = {}, ref = null) => ({
      ...pickObject(rest, formControlProperties),
      ...props,
      ref,
      id: getInputId(i),
      type: "hidden",
      name: isArray(name) ? name[i] : `${name}-${i}`,
      value: values[i],
      required,
      disabled,
      readOnly,
    }),
    [disabled, getInputId, name, readOnly, required, rest, values],
  )

  const getTrackProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        ...props.style,
        position: "absolute",
        ...(isVertical
          ? {
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
            }
          : {
              top: "50%",
              transform: "translateY(-50%)",
              width: "100%",
            }),
      }

      return {
        ...pickObject(rest, formControlProperties),
        ...props,
        id: `slider-track-${id}`,
        ref: mergeRefs(ref, trackRef),
        style,
      }
    },
    [id, isVertical, rest],
  )

  const getFilledTrackProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const n = Math.abs(thumbPercents[1] - thumbPercents[0])
      const s = isReversed ? 100 - thumbPercents[0] : thumbPercents[0]

      const style: CSSProperties = {
        ...props.style,
        position: "absolute",
        ...(isVertical
          ? {
              left: "50%",
              transform: "translateX(-50%)",
              height: `${n}%`,
              ...(isReversed ? { top: `${s}%` } : { bottom: `${s}%` }),
            }
          : {
              top: "50%",
              transform: "translateY(-50%)",
              width: `${n}%`,
              ...(isReversed ? { right: `${s}%` } : { left: `${s}%` }),
            }),
      }

      return {
        ...pickObject(rest, formControlProperties),
        ...props,
        id: `slider-filled-track-${id}`,
        ref,
        style,
      }
    },
    [id, isReversed, isVertical, rest, thumbPercents],
  )

  const getMarkProps: RequiredPropGetter<{ value: number }> = useCallback(
    (props = {}, ref = null) => {
      let n = valueToPercent(props.value, min, max)
      n = isReversed ? 100 - n : n

      const style: CSSProperties = {
        ...props.style,
        position: "absolute",
        pointerEvents: "none",
        ...(isVertical ? { bottom: `${n}%` } : { left: `${n}%` }),
      }

      return {
        ...pickObject(rest, formControlProperties),
        ...props,
        ref,
        id: getMarkerId(props.value),
        "aria-hidden": true,
        "data-invalid": dataAttr(props.value < min || max < props.value),
        "data-highlighted": dataAttr(
          values[0] <= props.value && props.value <= values[1],
        ),
        style,
      }
    },
    [getMarkerId, isReversed, isVertical, max, min, rest, values],
  )

  const getThumbProps: RequiredPropGetter<{ index: number }> = useCallback(
    ({ index: i, ...props } = {}, ref = null) => {
      const n = thumbPercents[i]
      const { width: w, height: h } = thumbSizes[i] ?? { width: 0, height: 0 }

      const style: CSSProperties = {
        ...props.style,
        position: "absolute",
        userSelect: "none",
        touchAction: "none",
        ...(isVertical
          ? { bottom: `calc(${n}% - ${h / 2}px)` }
          : { left: `calc(${n}% - ${w / 2}px)` }),
      }

      const value = values[i]

      if (value == null)
        throw new Error(
          `Cannot find value at index '${i}'. The 'value' or 'defaultValue'`,
        )

      return {
        ...pickObject(rest, formControlProperties),
        ...props,
        ref,
        id: getThumbId(i),
        tabIndex: isInteractive ? 0 : undefined,
        role: "slider",
        "data-active": dataAttr(isDragging && activeIndex === i),
        "aria-orientation": orientation,
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
        onFocus: handlerAll(props.onFocus, rest.onFocus, () => {
          setFocused(true)
          setActiveIndex(i)
        }),
        onBlur: handlerAll(props.onBlur, rest.onBlur, () => {
          setFocused(false)
          setActiveIndex(-1)
        }),
        style,
      }
    },
    [
      activeIndex,
      getThumbId,
      isDragging,
      isInteractive,
      isVertical,
      onKeyDown,
      orientation,
      rest,
      thumbPercents,
      thumbSizes,
      values,
    ],
  )

  return {
    values,
    isFocused,
    isDragging,
    isVertical,
    stepUp,
    stepDown,
    reset,
    setActiveIndex,
    getThumbId,
    getInputId,
    getMarkerId,
    getContainerProps,
    getInputProps,
    getTrackProps,
    getFilledTrackProps,
    getMarkProps,
    getThumbProps,
  }
}

export type ReturnUseRangeSliderProps = ReturnType<typeof useRangeSlider>

type RangeSliderContext = Pick<
  ReturnUseRangeSliderProps,
  | "isVertical"
  | "getTrackProps"
  | "getFilledTrackProps"
  | "getMarkProps"
  | "getThumbProps"
  | "getInputProps"
> &
  RangeSliderOptions & {
    styles: Record<string, CSSUIObject>
  }

const [RangeSliderProvider, useRangeSliderContext] =
  createContext<RangeSliderContext>({
    name: "RangeSliderContext",
    errorMessage: `useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `,
  })

type RangeSliderOptions = {
  /**
   * Props for range slider input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for range slider track element.
   */
  trackProps?: RangeSliderTrackProps
  /**
   * Props for range slider filled track element.
   */
  filledTrackProps?: RangeSliderFilledTrackProps
  /**
   * Props for range slider thumb element.
   */
  thumbProps?: RangeSliderThumbProps
  /**
   * The CSS `color` property. Used in `color` of track element.
   */
  trackColor?: CSSUIProps["color"]
  /**
   * The CSS `color` property. Used in `color` of filled track element.
   */
  filledTrackColor?: CSSUIProps["color"]
  /**
   * The CSS `height` property. Used in `height` of track element.
   */
  trackSize?: CSSUIProps["h"]
  /**
   * The CSS `background` property. Used in `background` of thumb element.
   */
  thumbColor?: CSSUIProps["bg"]
  /**
   * The CSS `box-size` property. Used in `box-size` of thumb element.
   */
  thumbSize?: CSSUIProps["boxSize"]
}

export type RangeSliderProps = Omit<
  HTMLUIProps<"div">,
  keyof UseRangeSliderProps
> &
  ThemeProps<"Slider"> &
  UseRangeSliderProps &
  RangeSliderOptions

export const RangeSlider = forwardRef<RangeSliderProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("RangeSlider", props)
  const {
    className,
    children,
    inputProps,
    trackProps,
    filledTrackProps,
    thumbProps,
    trackColor,
    filledTrackColor,
    trackSize,
    thumbColor,
    thumbSize,
    ...rest
  } = omitThemeProps(mergedProps)
  const {
    isVertical,
    getContainerProps,
    getInputProps,
    getTrackProps,
    getFilledTrackProps,
    getMarkProps,
    getThumbProps,
  } = useRangeSlider(rest)

  const css: CSSUIObject = { ...styles.container }

  const validChildren = getValidChildren(children)

  const [customRangeSliderTrack] = findChildren(validChildren, RangeSliderTrack)
  const [customRangeSliderStartThumb] = findChildren(
    validChildren,
    RangeSliderStartThumb,
  )
  const [customRangeSliderEndThumb] = findChildren(
    validChildren,
    RangeSliderEndThumb,
  )

  const hasRangeSliderStartThumb = includesChildren(
    validChildren,
    RangeSliderStartThumb,
  )
  const hasRangeSliderEndThumb = includesChildren(
    validChildren,
    RangeSliderEndThumb,
  )

  const cloneChildren = !isEmpty(validChildren)
    ? omitChildren(
        validChildren,
        RangeSliderTrack,
        RangeSliderStartThumb,
        RangeSliderEndThumb,
      )
    : children

  return (
    <RangeSliderProvider
      value={{
        isVertical,
        getTrackProps,
        getFilledTrackProps,
        getMarkProps,
        getThumbProps,
        getInputProps,
        trackProps,
        trackColor,
        trackSize,
        filledTrackProps,
        filledTrackColor,
        thumbProps,
        thumbColor,
        thumbSize,
        inputProps,
        styles,
      }}
    >
      <ui.div
        className={cx("ui-slider", className)}
        __css={css}
        {...getContainerProps({}, ref)}
      >
        {customRangeSliderTrack ?? <RangeSliderTrack />}

        {cloneChildren}

        {customRangeSliderStartThumb ??
          (!hasRangeSliderStartThumb ? <RangeSliderStartThumb /> : null)}
        {customRangeSliderEndThumb ??
          (!hasRangeSliderEndThumb ? <RangeSliderEndThumb /> : null)}
      </ui.div>
    </RangeSliderProvider>
  )
})

export type RangeSliderTrackProps = HTMLUIProps<"div"> &
  Pick<RangeSliderOptions, "filledTrackProps">

export const RangeSliderTrack = forwardRef<RangeSliderTrackProps, "div">(
  ({ className, children, filledTrackProps, ...rest }, ref) => {
    const {
      styles,
      trackProps,
      trackColor,
      trackSize,
      isVertical,
      getTrackProps,
    } = useRangeSliderContext()

    const css: CSSUIObject = { ...styles.track }

    return (
      <ui.div
        className={cx("ui-slider__track", className)}
        __css={css}
        {...getTrackProps(
          {
            ...(trackColor ? { bg: trackColor } : {}),
            ...(trackSize
              ? isVertical
                ? { w: trackSize }
                : { h: trackSize }
              : {}),
            ...trackProps,
            ...rest,
          },
          ref,
        )}
      >
        {children ?? <RangeSliderFilledTrack {...filledTrackProps} />}
      </ui.div>
    )
  },
)

export type RangeSliderFilledTrackProps = HTMLUIProps<"div">

export const RangeSliderFilledTrack = forwardRef<
  RangeSliderFilledTrackProps,
  "div"
>(({ className, ...rest }, ref) => {
  const { styles, filledTrackProps, filledTrackColor, getFilledTrackProps } =
    useRangeSliderContext()

  const css: CSSUIObject = { ...styles.filledTrack }

  return (
    <ui.div
      className={cx("ui-slider__track-filled", className)}
      __css={css}
      {...getFilledTrackProps(
        {
          ...(filledTrackColor ? { bg: filledTrackColor } : {}),
          ...filledTrackProps,
          ...rest,
        },
        ref,
      )}
    />
  )
})

export type RangeSliderMarkProps = HTMLUIProps<"div"> & { value: number }

export const RangeSliderMark = forwardRef<RangeSliderMarkProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles, getMarkProps } = useRangeSliderContext()

    const css: CSSUIObject = {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      ...styles.mark,
    }

    return (
      <ui.div
        className={cx("ui-slider__mark", className)}
        __css={css}
        {...getMarkProps(rest, ref)}
      />
    )
  },
)

export type RangeSliderThumbProps = HTMLUIProps<"div">

const RangeSliderThumb = forwardRef<
  RangeSliderThumbProps & { index?: number },
  "div"
>(({ className, index, children, ...rest }, ref) => {
  const {
    styles,
    thumbProps,
    thumbColor,
    thumbSize,
    inputProps,
    getThumbProps,
    getInputProps,
  } = useRangeSliderContext()

  const css: CSSUIObject = { ...styles.thumb }

  return (
    <ui.div
      className={cx("ui-slider__thumb", className)}
      __css={css}
      {...getThumbProps(
        {
          index,
          ...(thumbColor ? { bg: thumbColor } : {}),
          ...(thumbSize ? { boxSize: thumbSize } : {}),
          ...thumbProps,
          ...rest,
        },
        ref,
      )}
    >
      <ui.input {...getInputProps({ ...inputProps, index }, ref)} />
      {children}
    </ui.div>
  )
})

export const RangeSliderStartThumb = forwardRef<RangeSliderThumbProps, "div">(
  (rest, ref) => {
    return <RangeSliderThumb ref={ref} index={0} {...rest} />
  },
)

export const RangeSliderEndThumb = forwardRef<RangeSliderThumbProps, "div">(
  (rest, ref) => {
    return <RangeSliderThumb ref={ref} index={1} {...rest} />
  },
)
