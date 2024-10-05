import type {
  CSSUIObject,
  CSSUIProps,
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { Merge } from "@yamada-ui/utils"
import type { CSSProperties, KeyboardEvent, KeyboardEventHandler } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useLatestRef } from "@yamada-ui/use-latest-ref"
import { usePanEvent } from "@yamada-ui/use-pan-event"
import { useSizes } from "@yamada-ui/use-size"
import {
  clampNumber,
  createContext,
  cx,
  dataAttr,
  findChild,
  getValidChildren,
  handlerAll,
  includesChildren,
  isArray,
  isEmpty,
  mergeRefs,
  omitChildren,
  percentToValue,
  pickObject,
  roundNumberToStep,
  useCallbackRef,
  useUpdateEffect,
  valueToPercent,
} from "@yamada-ui/utils"
import { useCallback, useId, useRef, useState } from "react"
import { getThumbSize } from "./slider"

export interface UseRangeSliderOptions {
  /**
   * The base `id` to use for the slider.
   */
  id?: string
  /**
   * The name attribute of the hidden `input` field.
   * This is particularly useful in forms.
   */
  name?: [string, string] | string
  /**
   * The minimum distance between slider thumbs.
   * Useful for preventing the thumbs from being too close together.
   *
   * @default 0
   */
  betweenThumbs?: number
  /**
   * The initial value of the slider.
   */
  defaultValue?: [number, number]
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
  value?: [number, number]
  /**
   * Function called whenever the slider value changes.
   */
  onChange?: (value: [number, number]) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: [number, number]) => void
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: [number, number]) => void
}
export interface UseRangeSliderProps
  extends Merge<HTMLUIProps, FormControlOptions & UseRangeSliderOptions> {}

export const useRangeSlider = ({
  focusThumbOnChange = true,
  ...props
}: UseRangeSliderProps) => {
  if (!focusThumbOnChange) props.isReadOnly = true

  let {
    id,
    name,
    betweenThumbs = 0,
    defaultValue,
    isReversed,
    max = 100,
    min = 0,
    orientation = "horizontal",
    step = 1,
    thumbSize: thumbSizeProp,
    value: valueProp,
    "aria-valuetext": ariaValueText,
    onChange,
    onChangeEnd: onChangeEndProp,
    onChangeStart: onChangeStartProp,
    ...rest
  } = useFormControlProps(props)
  const {
    disabled,
    readOnly,
    required,
    "aria-readonly": ariaReadonly,
    onBlur,
    onFocus,
    ...formControlProps
  } = pickObject(rest, formControlProperties)

  defaultValue = defaultValue ?? [min + (max - min) / 4, max - (max - min) / 4]

  if (max < min)
    throw new Error("Do not assign a number less than 'min' to 'max'")

  const onChangeStart = useCallbackRef(onChangeStartProp)
  const onChangeEnd = useCallbackRef(onChangeEndProp)

  const [computedValues, setValues] = useControllableState({
    defaultValue,
    value: valueProp,
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
  const [startValue, endValue] = values
  const reversedValues = values.map((value) => max - value + min) as [
    number,
    number,
  ]
  const thumbValues = isReversed ? reversedValues : values
  const thumbPercents = thumbValues.map((value) =>
    valueToPercent(value, min, max),
  ) as [number, number]
  const valueBounds = [
    { max: endValue - spacing, min },
    { max, min: startValue + spacing },
  ]

  const isVertical = orientation === "vertical"

  const latestRef = useLatestRef({
    betweenThumbs,
    disabled,
    focusThumbOnChange,
    isInteractive,
    isReversed,
    isVertical,
    max,
    min,
    orientation,
    step,
    valueBounds,
    values,
  })
  const eventSourceRef = useRef<"keyboard" | "pointer" | null>(null)
  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const thumbSizes = useSizes({
    getNodes: () => {
      const nodes =
        containerRef.current?.querySelectorAll<HTMLElement>("[role=slider]")

      return nodes ? Array.from(nodes) : []
    },
  })
  const uuid = useId()

  id ??= uuid
  name ??= id

  const getThumbId = useCallback((i: number) => `slider-thumb-${id}-${i}`, [id])
  const getInputId = useCallback((i: number) => `slider-input-${id}-${i}`, [id])
  const getMarkerId = useCallback(
    (i: number) => `slider-marker-${id}-${i}`,
    [id],
  )

  usePanEvent(containerRef, {
    onMove: (ev) => {
      const { isInteractive } = latestRef.current

      if (!isInteractive || activeIndex == -1) return

      const pointValue = getValueFromPointer(ev) || 0

      setActiveIndex(activeIndex)

      constrain(activeIndex, pointValue)

      focusThumb(activeIndex)
    },
    onSessionEnd: () => {
      const { isInteractive, values } = latestRef.current

      if (!isInteractive) return

      setDragging(false)
      onChangeEnd(values)
    },
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

      if (isThumbStacked && pointValue > values[i]!)
        i = i + thumbsPosition.length - 1

      setActiveIndex(i)
      constrain(i, pointValue)
      focusThumb(i)

      onChangeStart(values)
    },
  })

  const getValueFromPointer = useCallback(
    (ev: any) => {
      if (!trackRef.current) return

      const { max, min } = latestRef.current

      eventSourceRef.current = "pointer"

      const { bottom, height, left, width } =
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

      const { max = 100, min = 0 } = valueBounds[i] ?? {}

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

      const value = values[i]!

      constrain(i, isReversed ? value - step : value + step)
    },
    [constrain, isReversed, latestRef, oneStep],
  )

  const stepDown = useCallback(
    (i: number, step = oneStep) => {
      const { values } = latestRef.current

      const value = values[i]!

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
      const { max = 100, min = 0 } = valueBounds[activeIndex] ?? {}

      const actions: { [key: string]: KeyboardEventHandler } = {
        ArrowDown: () => stepDown(activeIndex),
        ArrowLeft: () => stepDown(activeIndex),
        ArrowRight: () => stepUp(activeIndex),
        ArrowUp: () => stepUp(activeIndex),
        End: () => constrain(activeIndex, max),
        Home: () => constrain(activeIndex, min),
        PageDown: () => stepDown(activeIndex, tenStep),
        PageUp: () => stepUp(activeIndex, tenStep),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)

      eventSourceRef.current = "keyboard"
    },
    [activeIndex, constrain, latestRef, stepDown, stepUp, tenStep],
  )

  useUpdateEffect(() => {
    const { values } = latestRef.current

    if (eventSourceRef.current === "keyboard") onChangeEnd(values)
  }, [startValue, endValue, onChangeEnd])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      let w: number | string = "$thumbSize"
      let h: number | string = "$thumbSize"

      if (thumbSizes.length) {
        const p = isVertical ? "height" : "width"
        const z = { height: 0, width: 0 }
        const { height, width } =
          thumbSizes.reduce((a = z, b = z) => (a[p] > b[p] ? a : b), z) ?? {}

        if (width) w = width
        if (height) h = height
      }

      const padding = isVertical
        ? { paddingLeft: `calc(${w} / 2)`, paddingRight: `calc(${w} / 2)` }
        : { paddingBottom: `calc(${h} / 2)`, paddingTop: `calc(${h} / 2)` }

      const style: CSSProperties = {
        ...props.style,
        outline: 0,
        position: "relative",
        touchAction: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        ...padding,
      }

      return {
        ...rest,
        ...props,
        id: `slider-container-${id}`,
        ref: mergeRefs(ref, containerRef),
        style,
        tabIndex: -1,
        vars: [
          {
            name: "thumbSize",
            token: "sizes",
            value: thumbSizeProp,
          },
        ],
      }
    },
    [id, isVertical, rest, thumbSizeProp, thumbSizes],
  )

  const getInputProps: RequiredPropGetter<
    { index: number } & HTMLProps<"input">,
    HTMLProps<"input">
  > = useCallback(
    ({ index: i, ...props }, ref = null) => ({
      "aria-readonly": ariaReadonly,
      ...formControlProps,
      ...props,
      id: getInputId(i),
      ref,
      type: "hidden",
      name: isArray(name) ? name[i] : `${name}-${i}`,
      disabled,
      readOnly,
      required,
      value: values[i],
    }),
    [
      ariaReadonly,
      disabled,
      getInputId,
      name,
      readOnly,
      required,
      formControlProps,
      values,
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
        id: `slider-track-${id}`,
        ref: mergeRefs(ref, trackRef),
        style,
      }
    },
    [id, isVertical, formControlProps],
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
              height: `${n}%`,
              left: "50%",
              transform: "translateX(-50%)",
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
        ...formControlProps,
        ...props,
        id: `slider-filled-track-${id}`,
        ref,
        style,
      }
    },
    [id, isReversed, isVertical, formControlProps, thumbPercents],
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
        id: getMarkerId(props.value),
        ref,
        style,
        "aria-hidden": true,
        "data-highlighted": dataAttr(
          values[0] <= props.value && props.value <= values[1],
        ),
        "data-invalid": dataAttr(props.value < min || max < props.value),
      }
    },
    [getMarkerId, isReversed, isVertical, max, min, formControlProps, values],
  )

  const getThumbProps: RequiredPropGetter<
    { index: number } & HTMLUIProps,
    HTMLUIProps
  > = useCallback(
    ({ index: i, ...props }, ref = null) => {
      const n = thumbPercents[i]
      let w: number | string = "$thumbSize"
      let h: number | string = "$thumbSize"

      if (thumbSizes[i]) {
        w = `${thumbSizes[i]?.width}px`
        h = `${thumbSizes[i]?.height}px`
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

      const value = values[i]

      if (value == null)
        throw new Error(
          `Cannot find value at index '${i}'. The 'value' or 'defaultValue'`,
        )

      return {
        "aria-label": "Slider thumb",
        "aria-readonly": ariaReadonly,
        ...formControlProps,
        ...props,
        id: getThumbId(i),
        ref,
        style,
        role: "slider",
        tabIndex: isInteractive && focusThumbOnChange ? 0 : undefined,
        "aria-orientation": orientation,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        "aria-valuetext": ariaValueText ?? value.toString(),
        "data-active": dataAttr(
          isDragging && focusThumbOnChange && activeIndex === i,
        ),
        onBlur: handlerAll(props.onBlur, onBlur, () => {
          setFocused(false)
          setActiveIndex(-1)
        }),
        onFocus: handlerAll(props.onFocus, onFocus, () => {
          setFocused(true)
          setActiveIndex(i)
        }),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }
    },
    [
      thumbPercents,
      thumbSizes,
      isVertical,
      values,
      ariaReadonly,
      formControlProps,
      getThumbId,
      isInteractive,
      focusThumbOnChange,
      min,
      max,
      isDragging,
      activeIndex,
      orientation,
      ariaValueText,
      onKeyDown,
      onFocus,
      onBlur,
    ],
  )

  return {
    getInputId,
    getMarkerId,
    getThumbId,
    isDragging,
    isFocused,
    isVertical,
    reset,
    setActiveIndex,
    stepDown,
    stepUp,
    values,
    getContainerProps,
    getFilledTrackProps,
    getInputProps,
    getMarkProps,
    getThumbProps,
    getTrackProps,
  }
}

export type ReturnUseRangeSliderProps = ReturnType<typeof useRangeSlider>

interface RangeSliderContext
  extends Pick<
      ReturnUseRangeSliderProps,
      | "getFilledTrackProps"
      | "getInputProps"
      | "getMarkProps"
      | "getThumbProps"
      | "getTrackProps"
      | "isVertical"
    >,
    RangeSliderOptions {
  styles: { [key: string]: CSSUIObject | undefined }
}

const [RangeSliderProvider, useRangeSliderContext] =
  createContext<RangeSliderContext>({
    name: "RangeSliderContext",
    errorMessage: `useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `,
  })

interface RangeSliderOptions {
  /**
   * The CSS `color` property. Used in `color` of filled track element.
   */
  filledTrackColor?: CSSUIProps["color"]
  /**
   * The CSS `background` property. Used in `background` of thumb element.
   */
  thumbColor?: CSSUIProps["bg"]
  /**
   * The CSS `box-size` property. Used in `box-size` of thumb element.
   */
  thumbSize?: CSSUIProps["boxSize"]
  /**
   * The CSS `color` property. Used in `color` of track element.
   */
  trackColor?: CSSUIProps["color"]
  /**
   * The CSS `height` property. Used in `height` of track element.
   */
  trackSize?: CSSUIProps["h"]
  /**
   * Props for range slider filled track element.
   */
  filledTrackProps?: RangeSliderFilledTrackProps
  /**
   * Props for range slider input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for range slider thumb element.
   */
  thumbProps?: RangeSliderThumbProps
  /**
   * Props for range slider track element.
   */
  trackProps?: RangeSliderTrackProps
}

export interface RangeSliderProps
  extends ThemeProps<"RangeSlider">,
    UseRangeSliderProps,
    RangeSliderOptions {}

/**
 * `RangeSlider` is a component used for users to select a range of related values.
 *
 * @see Docs https://yamada-ui.com/components/forms/range-slider
 */
export const RangeSlider = forwardRef<RangeSliderProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("RangeSlider", props)
  const {
    className,
    children,
    filledTrackColor,
    thumbColor,
    thumbSize,
    trackColor,
    trackSize,
    filledTrackProps,
    inputProps,
    thumbProps,
    trackProps,
    ...rest
  } = omitThemeProps(mergedProps)
  const {
    isVertical,
    getContainerProps,
    getFilledTrackProps,
    getInputProps,
    getMarkProps,
    getThumbProps,
    getTrackProps,
  } = useRangeSlider({ ...rest, thumbSize: getThumbSize(thumbSize, styles) })

  const css: CSSUIObject = { ...styles.container }

  const validChildren = getValidChildren(children)

  const customRangeSliderTrack = findChild(validChildren, RangeSliderTrack)
  const customRangeSliderStartThumb = findChild(
    validChildren,
    RangeSliderStartThumb,
  )
  const customRangeSliderEndThumb = findChild(
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
        filledTrackColor,
        isVertical,
        styles,
        thumbColor,
        thumbSize,
        trackColor,
        trackSize,
        filledTrackProps,
        getFilledTrackProps,
        getInputProps,
        getMarkProps,
        getThumbProps,
        getTrackProps,
        inputProps,
        thumbProps,
        trackProps,
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

RangeSlider.displayName = "RangeSlider"
RangeSlider.__ui__ = "RangeSlider"

export interface RangeSliderTrackProps
  extends HTMLUIProps,
    Pick<RangeSliderOptions, "filledTrackProps"> {}

export const RangeSliderTrack = forwardRef<RangeSliderTrackProps, "div">(
  ({ className, children, filledTrackProps, ...rest }, ref) => {
    const {
      isVertical,
      styles,
      trackColor,
      trackSize,
      getTrackProps,
      trackProps,
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

RangeSliderTrack.displayName = "RangeSliderTrack"
RangeSliderTrack.__ui__ = "RangeSliderTrack"

export interface RangeSliderFilledTrackProps extends HTMLUIProps {}

export const RangeSliderFilledTrack = forwardRef<
  RangeSliderFilledTrackProps,
  "div"
>(({ className, ...rest }, ref) => {
  const { filledTrackColor, styles, filledTrackProps, getFilledTrackProps } =
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

RangeSliderFilledTrack.displayName = "RangeSliderFilledTrack"
RangeSliderFilledTrack.__ui__ = "RangeSliderFilledTrack"

export interface RangeSliderMarkProps extends HTMLUIProps {
  value: number
}

export const RangeSliderMark = forwardRef<RangeSliderMarkProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles, getMarkProps } = useRangeSliderContext()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",
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

RangeSliderMark.displayName = "RangeSliderMark"
RangeSliderMark.__ui__ = "RangeSliderMark"

export interface RangeSliderThumbProps extends HTMLUIProps {}

const RangeSliderThumb = forwardRef<
  { index: number } & RangeSliderThumbProps,
  "div"
>(({ className, children, index, ...rest }, ref) => {
  const {
    styles,
    thumbColor,
    thumbSize,
    getInputProps,
    getThumbProps,
    inputProps,
    thumbProps,
  } = useRangeSliderContext()

  const css: CSSUIObject = { ...styles.thumb }

  const { children: propChildren } = thumbProps ?? {}

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
      {children ?? propChildren}
    </ui.div>
  )
})

RangeSliderThumb.displayName = "RangeSliderThumb"
RangeSliderThumb.__ui__ = "RangeSliderThumb"

export const RangeSliderStartThumb = forwardRef<RangeSliderThumbProps, "div">(
  (rest, ref) => {
    return <RangeSliderThumb ref={ref} index={0} {...rest} />
  },
)

RangeSliderStartThumb.displayName = "RangeSliderStartThumb"
RangeSliderStartThumb.__ui__ = "RangeSliderStartThumb"

export const RangeSliderEndThumb = forwardRef<RangeSliderThumbProps, "div">(
  (rest, ref) => {
    return <RangeSliderThumb ref={ref} index={1} {...rest} />
  },
)

RangeSliderEndThumb.displayName = "RangeSliderEndThumb"
RangeSliderEndThumb.__ui__ = "RangeSliderEndThumb"
