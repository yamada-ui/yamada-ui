import type { CSSProperties, KeyboardEvent, KeyboardEventHandler } from "react"
import type {
  CSSObject,
  CSSProps,
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
  ThemeProps,
} from "../../core"
import type { Merge } from "../../utils"
import type { FormControlProps } from "../form-control"
import type { SliderStyle } from "./slider.style"
import { useCallback, useRef, useState } from "react"
import {
  formControlProperties,
  useFormControlProps,
} from "../../components/form-control"
import { mergeVars, ui, createSlotComponent } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useLatestRef } from "../../hooks/use-latest-ref"
import { usePanEvent } from "../../hooks/use-pan-event"
import { useSize } from "../../hooks/use-size"
import {
  clampNumber,
  cx,
  dataAttr,
  findChild,
  getValidChildren,
  handlerAll,
  includesChildren,
  isEmpty,
  isNumber,
  mergeRefs,
  omitChildren,
  percentToValue,
  pickObject,
  roundNumberToStep,
  useCallbackRef,
  useUpdateEffect,
  valueToPercent,
} from "../../utils"
import { sliderStyle } from "./slider.style"

export const getThumbSize = (
  thumbSize: CSSProps["boxSize"] | undefined,
  styles: { [key: string]: CSSObject | undefined },
) =>
  (thumbSize ??
    styles.thumb?.boxSize ??
    styles.thumb?.minBoxSize ??
    styles.thumb?.width ??
    styles.thumb?.w ??
    styles.thumb?.minWidth ??
    styles.thumb?.minW ??
    styles.thumb?.height ??
    styles.thumb?.h ??
    styles.thumb?.minHeight ??
    styles.thumb?.minH ??
    "3.5") as CSSProps["boxSize"] | undefined

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
   * This is used to format the value so that screen readers
   * can speak out a more human-friendly value.
   *
   * It is used to set the `aria-valuetext` property of the input.
   */
  getAriaValueText?: (value: number) => string | undefined
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
   * If `true`, the value will be incremented or decremented in reverse.
   */
  reversed?: boolean
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
  thumbSize?: CSSProps["boxSize"]
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
  extends Merge<HTMLUIProps, FormControlProps & UseSliderOptions> {}

export const useSlider = ({
  focusThumbOnChange = true,
  ...props
}: UseSliderProps) => {
  if (!focusThumbOnChange) props.readOnly = true

  const rest = useFormControlProps(props)
  const { context, props: formProps, ariaProps, eventProps } = rest

  const {
    name,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
    defaultValue,
    getAriaValueText: getAriaValueTextProp,
    max = 100,
    min = 0,
    orientation = "horizontal",
    reversed,
    step = 1,
    thumbSize: thumbSizeProp,
    value: valueProp,
    vars,
    onChange,
    onChangeEnd: onChangeEndProp,
    onChangeStart: onChangeStartProp,
  } = formProps

  const { id, disabled, readOnly, required } = context

  const { onBlur, onFocus } = eventProps

  const { ...formControlProps } = pickObject(rest, formControlProperties)

  if (max < min)
    throw new Error("Do not assign a number less than 'min' to 'max'")

  const [computedValue, setValue] = useControllableState({
    defaultValue: defaultValue ?? min + (max - min) / 2,
    value: valueProp,
    onChange,
  })
  const [dragging, setDragging] = useState(false)
  const [focused, setFocused] = useState(false)
  const interactive = !(disabled || readOnly)
  const tenStep = (max - min) / 10
  const oneStep = step || (max - min) / 100
  const value = clampNumber(computedValue, min, max)
  const reversedValue = max - value + min
  const thumbValue = reversed ? reversedValue : value
  const thumbPercent = valueToPercent(thumbValue, min, max)
  const vertical = orientation === "vertical"
  const latestRef = useLatestRef({
    focusThumbOnChange,
    interactive,
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
  const onChangeStart = useCallbackRef(onChangeStartProp)
  const onChangeEnd = useCallbackRef(onChangeEndProp)
  const getAriaValueText = useCallbackRef(getAriaValueTextProp)

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

  const getValueFromPointer = useCallback(
    (ev: any) => {
      if (!trackRef.current) return

      const { max, min, step } = latestRef.current

      eventSourceRef.current = "pointer"

      const { bottom, height, left, width } =
        trackRef.current.getBoundingClientRect()
      const { clientX, clientY } = ev.touches?.[0] ?? ev

      const diff = vertical ? bottom - clientY : clientX - left

      const length = vertical ? height : width

      let percent = diff / length

      if (reversed) percent = 1 - percent

      let nextValue = percentToValue(percent, min, max)

      if (step) nextValue = parseFloat(roundNumberToStep(nextValue, min, step))

      nextValue = clampNumber(nextValue, min, max)

      return nextValue
    },
    [vertical, reversed, latestRef],
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
    [oneStep, setValue, latestRef],
  )

  const stepUp = useCallback(
    (step = oneStep) => constrain(reversed ? value - step : value + step),
    [constrain, reversed, oneStep, value],
  )

  const stepDown = useCallback(
    (step = oneStep) => constrain(reversed ? value + step : value - step),
    [constrain, reversed, oneStep, value],
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

      const paddingStyle = vertical
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
        vars: mergeVars(vars, [
          {
            name: "thumb-size",
            token: "sizes",
            value: thumbSizeProp,
          },
        ]),
      }
    },
    [thumbSize, vertical, rest, vars, thumbSizeProp],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      "aria-readonly": ariaProps["aria-readonly"],
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
      ariaProps,
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
        ...(vertical
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
    [vertical, formControlProps],
  )

  const getFilledTrackProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const n = Math.abs(reversed ? 100 - thumbPercent : thumbPercent)

      const style: CSSProperties = {
        ...props.style,
        position: "absolute",
        ...(vertical
          ? {
              height: `${n}%`,
              left: "50%",
              transform: "translateX(-50%)",
              ...(reversed ? { top: "0%" } : { bottom: "0%" }),
            }
          : {
              top: "50%",
              transform: "translateY(-50%)",
              width: `${n}%`,
              ...(reversed ? { right: "0%" } : { left: "0%" }),
            }),
      }

      return {
        ...formControlProps,
        ...props,
        ref,
        style,
      }
    },
    [reversed, vertical, formControlProps, thumbPercent],
  )

  const getMarkProps: RequiredPropGetter<
    { value: number } & HTMLProps,
    HTMLProps
  > = useCallback(
    (props, ref = null) => {
      let n = valueToPercent(props.value, min, max)
      n = reversed ? 100 - n : n

      const style: CSSProperties = {
        ...props.style,
        pointerEvents: "none",
        position: "absolute",
        ...(vertical ? { bottom: `${n}%` } : { left: `${n}%` }),
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
    [reversed, vertical, max, min, formControlProps, value],
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
        ...(vertical ? { bottom } : { left }),
      }

      return {
        "aria-label": ariaLabel ?? "Slider thumb",
        "aria-labelledby": ariaLabelledBy,
        "aria-readonly": ariaProps["aria-readonly"],
        ...formControlProps,
        ...props,
        ref: mergeRefs(ref, thumbRef),
        style,
        "aria-orientation": orientation,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        "aria-valuetext":
          ariaValueText ?? getAriaValueText(value) ?? value.toString(),
        "data-active": dataAttr(dragging && focusThumbOnChange),
        role: "slider",
        tabIndex: interactive && focusThumbOnChange ? 0 : undefined,
        onBlur: handlerAll(props.onBlur, onBlur, () => setFocused(false)),
        onFocus: handlerAll(props.onFocus, onFocus, () => setFocused(true)),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }
    },
    [
      thumbPercent,
      thumbSize,
      vertical,
      ariaLabel,
      ariaLabelledBy,
      ariaProps,
      formControlProps,
      orientation,
      max,
      min,
      value,
      ariaValueText,
      getAriaValueText,
      dragging,
      focusThumbOnChange,
      interactive,
      onBlur,
      onFocus,
      onKeyDown,
    ],
  )

  return {
    dragging,
    focused,
    reset,
    stepDown,
    stepTo,
    stepUp,
    value,
    vertical,
    getContainerProps,
    getFilledTrackProps,
    getInputProps,
    getMarkProps,
    getThumbProps,
    getTrackProps,
  }
}

export type ReturnUseSlider = ReturnType<typeof useSlider>

interface SliderContext
  extends Pick<
      ReturnUseSlider,
      | "getFilledTrackProps"
      | "getMarkProps"
      | "getThumbProps"
      | "getTrackProps"
      | "vertical"
    >,
    Omit<SliderOptions, "input"> {
  styles: { [key: string]: CSSObject | undefined }
}

interface SliderOptions {
  /**
   * The CSS `color` property. Used in `color` of filled track element.
   */
  filledTrackColor?: CSSProps["color"]
  /**
   * The CSS `background` property. Used in `background` of thumb element.
   */
  thumbColor?: CSSProps["bg"]
  /**
   * The CSS `box-size` property. Used in `box-size` of thumb element.
   */
  thumbSize?: CSSProps["boxSize"]
  /**
   * The CSS `color` property. Used in `color` of track element.
   */
  trackColor?: CSSProps["color"]
  /**
   * The CSS `height` property. Used in `height` of track element.
   */
  trackSize?: CSSProps["h"]
  /**
   * Props for slider filled track element.
   */
  filledTrackProps?: SliderFilledTrackProps
  /**
   * Props for slider input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for slider thumb element.
   */
  thumbProps?: SliderThumbProps
  /**
   * Props for slider track element.
   */
  trackProps?: SliderTrackProps
}

export interface SliderProps
  extends ThemeProps<"Slider">,
    UseSliderProps,
    SliderOptions {}

export const {
  ComponentContext: SliderContext,
  PropsContext: SliderPropsContext,
  useComponentContext: useSliderContext,
  usePropsContext: useSliderPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<SliderProps, SliderStyle>("slider", sliderStyle)

/**
 * `Slider` is a component used for allowing users to select a value from a range.
 *
 * @see Docs https://yamada-ui.com/components/forms/slider
 */
export const Slider = withProvider<"input", SliderProps>(
  ({
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
  }) => {
    const styles = {}
    const {
      vertical,
      getContainerProps,
      getFilledTrackProps,
      getInputProps,
      getMarkProps,
      getThumbProps,
      getTrackProps,
    } = useSlider({ ...rest, thumbSize: getThumbSize(thumbSize, styles) })

    const validChildren = getValidChildren(children)

    const customSliderTrack = findChild(validChildren, SliderTrack)
    const customSliderThumb = findChild(validChildren, SliderThumb)

    const hasSliderThumb = includesChildren(validChildren, SliderThumb)

    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, SliderTrack, SliderThumb)
      : children

    return (
      <SliderContext.Provider
        value={{
          filledTrackColor,
          thumbColor,
          thumbSize,
          trackColor,
          trackSize,
          vertical,
          filledTrackProps,
          getFilledTrackProps,
          getMarkProps,
          getThumbProps,
          getTrackProps,
          thumbProps,
          trackProps,
        }}
      >
        <ui.div className={cx("ui-slider", className)} {...getContainerProps()}>
          <ui.input {...getInputProps(inputProps)} />

          {customSliderTrack ?? <SliderTrack />}

          {cloneChildren}

          {customSliderThumb ?? (!hasSliderThumb ? <SliderThumb /> : null)}
        </ui.div>
      </SliderContext.Provider>
    )
  },
  "container",
)()

export interface SliderTrackProps
  extends HTMLUIProps,
    Pick<SliderOptions, "filledTrackProps"> {}

export const SliderTrack = withContext<"div", SliderTrackProps>(
  ({ className, children, filledTrackProps, ...rest }) => {
    const { trackColor, trackSize, vertical, getTrackProps, trackProps } =
      useSliderContext()

    return (
      <ui.div
        className={cx("ui-slider__track", className)}
        {...getTrackProps({
          ...(trackColor ? { bg: trackColor } : {}),
          ...(trackSize
            ? vertical
              ? { w: trackSize }
              : { h: trackSize }
            : {}),
          ...trackProps,
          ...rest,
        })}
      >
        {children ?? <SliderFilledTrack {...filledTrackProps} />}
      </ui.div>
    )
  },
  "track",
)()

export interface SliderFilledTrackProps extends HTMLUIProps {}

export const SliderFilledTrack = withProvider<"div", SliderFilledTrackProps>(
  ({ ...rest }) => {
    const { filledTrackColor, filledTrackProps, getFilledTrackProps } =
      useSliderContext()

    return (
      <ui.div
        className={cx("ui-slider__track-filled")}
        {...getFilledTrackProps({
          ...(filledTrackColor ? { bg: filledTrackColor } : {}),
          ...filledTrackProps,
          ...rest,
        })}
      />
    )
  },
  "filledTrack",
)()

export interface SliderMarkProps extends HTMLUIProps {
  value: number
}

export const SliderMark = withContext<"div", SliderMarkProps>(
  ({ className, ...rest }) => {
    const { styles, getMarkProps } = useSliderContext()

    return (
      <ui.div
        className={cx("ui-slider__mark", className)}
        __css={styles.mark}
        {...getMarkProps(rest)}
      />
    )
  },
  "mark",
)()

export interface SliderThumbProps extends HTMLUIProps {}

export const SliderThumb = withContext<"div", SliderThumbProps>(
  ({ className, ...rest }) => {
    const { thumbColor, thumbSize, getThumbProps, thumbProps } =
      useSliderContext()

    return (
      <ui.div
        className={cx("ui-slider__thumb", className)}
        {...getThumbProps({
          ...(thumbColor ? { bg: thumbColor } : {}),
          ...(thumbSize ? { boxSize: thumbSize } : {}),
          ...thumbProps,
          ...rest,
        })}
      />
    )
  },
  "thumb",
)()
