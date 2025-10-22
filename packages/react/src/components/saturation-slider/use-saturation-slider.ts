"use client"

import type { KeyboardEvent } from "react"
import type { HTMLProps, HTMLRefAttributes, PropGetter } from "../../core"
import type { Point } from "../../utils"
import type { FieldProps } from "../field"
import { useCallback } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { usePanEvent } from "../../hooks/use-pan-event"
import { useI18n } from "../../providers/i18n-provider"
import {
  clampNumber,
  cx,
  handlerAll,
  mergeRefs,
  roundNumberToStep,
  visuallyHiddenAttributes,
} from "../../utils"
import { runKeyAction } from "../../utils/dom"
import { useFieldProps } from "../field"

function clampValue(value: [number, number, number]) {
  return [
    clampNumber(value[0], 0, 360),
    clampNumber(value[1], 0, 1),
    clampNumber(value[2], 0, 1),
  ] as [number, number, number]
}

export interface UseSaturationSliderProps
  extends Omit<HTMLProps, "defaultValue" | "onChange" | "ref">,
    HTMLRefAttributes<"input">,
    FieldProps {
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
   * The initial value of the saturation slider.
   *
   * @default [0, 0, 1]
   */
  defaultValue?: [number, number, number]
  /**
   * This is used to format the value so that screen readers
   * can speak out a more human-friendly value.
   *
   * It is used to set the `aria-valuetext` property of the input.
   */
  getAriaValueText?: (value: [number, number, number]) => string | undefined
  /**
   * The step in which increments or decrements have to be made.
   *
   * @default 0.01
   */
  step?: number
  /**
   * The value of the saturation slider.
   */
  value?: [number, number, number]
  /**
   * Function called whenever the saturation slider value changes.
   */
  onChange?: (value: [number, number, number]) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: [number, number, number]) => void
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: [number, number, number]) => void
}

export const useSaturationSlider = (props: UseSaturationSliderProps = {}) => {
  const {
    props: {
      id,
      ref,
      name,
      "aria-labelledby": ariaLabelledBy,
      "aria-valuetext": ariaValueText,
      defaultValue = [0, 0, 1],
      disabled,
      getAriaValueText,
      readOnly,
      required,
      step = 0.01,
      value: valueProp,
      onChange: onChangeProp,
      onChangeEnd,
      onChangeStart,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const { t } = useI18n("saturationSlider")
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [h, s, v] = clampValue(value)
  const interactive = !(disabled || readOnly)
  const [_, getPanEventProps] = usePanEvent<HTMLDivElement>({
    onEnd: (_, point, rect) => {
      if (!interactive) return

      const panValue = getPanValue(point, rect)

      onChangeEnd?.(panValue)
    },
    onMove: (_, point, rect) => {
      if (!interactive) return

      const panValue = getPanValue(point, rect)

      setValue(panValue)
    },
    onStart: (_, point, rect) => {
      if (!interactive) return

      const panValue = getPanValue(point, rect)

      onChangeStart?.(value)
      setValue(panValue)
    },
  })

  const onChange = useCallback(
    ([h, s, v]: [number, number, number]) => {
      if (!interactive) return

      s = clampNumber(s, 0, 1)
      v = clampNumber(v, 0, 1)

      setValue([h, s, v])
    },
    [interactive, setValue],
  )

  const getPanValue = useCallback(
    (
      { x, y }: Point,
      { bottom, height, left, width }: DOMRect,
    ): [number, number, number] => {
      const diff = { x: x - left, y: bottom - y }
      const percent = { x: diff.x / width, y: diff.y / height }
      const clamp = {
        x: clampNumber(percent.x, 0, 1),
        y: clampNumber(percent.y, 0, 1),
      }
      const s = roundNumberToStep(clamp.x, 0, step)
      const v = roundNumberToStep(clamp.y, 0, step)

      return [h, parseFloat(s), parseFloat(v)]
    },
    [h, step],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      runKeyAction(ev, {
        ArrowDown: () => onChange([h, s, v - step]),
        ArrowLeft: () => onChange([h, s - step, v]),
        ArrowRight: () => onChange([h, s + step, v]),
        ArrowUp: () => onChange([h, s, v + step]),
      })
    },
    [h, onChange, s, step, v],
  )

  const getRootProps: PropGetter = useCallback(
    (props = {}) => ({
      ...dataProps,
      ...rest,
      ...props,
      style: {
        ...rest.style,
        ...props.style,
        "--x": `${Math.abs(s * 100)}%`,
        "--y": `${Math.abs(100 - v * 100)}%`,
        backgroundColor: `hsl(${h}, 100%, 50%)`,
        backgroundImage:
          "linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, transparent)",
      },
      onBlur: handlerAll(props.onBlur, eventProps.onBlur),
      onFocus: handlerAll(props.onFocus, eventProps.onFocus),
    }),
    [dataProps, eventProps, h, rest, s, v],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      ...visuallyHiddenAttributes,
      ...dataProps,
      ...ariaProps,
      id,
      type: "hidden",
      name,
      disabled,
      readOnly,
      required,
      value: [h, s, v].toString(),
      ...props,
      ref: mergeRefs(props.ref, ref),
    }),
    [
      ariaProps,
      dataProps,
      disabled,
      h,
      id,
      name,
      readOnly,
      ref,
      required,
      s,
      v,
    ],
  )

  const getTrackProps: PropGetter = useCallback(
    (props = {}) => getPanEventProps({ ...dataProps, ...props }),
    [dataProps, getPanEventProps],
  )

  const getThumbProps: PropGetter = useCallback(
    (props = {}) => ({
      ...dataProps,
      ...ariaProps,
      "aria-label": t("Saturation and brightness thumb"),
      "aria-roledescription": "2D slider",
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": s * 100,
      "aria-valuetext":
        ariaValueText ??
        getAriaValueText?.(value) ??
        t("Saturation {saturation}%, Brightness {brightness}%", {
          brightness: v * 100,
          saturation: s * 100,
        }),
      role: "slider",
      tabIndex: interactive ? 0 : -1,
      ...props,
      "aria-labelledby": cx(props["aria-labelledby"], ariaLabelledBy),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [
      ariaLabelledBy,
      ariaProps,
      ariaValueText,
      dataProps,
      getAriaValueText,
      interactive,
      onKeyDown,
      s,
      t,
      v,
      value,
    ],
  )

  return {
    setValue,
    value,
    getInputProps,
    getRootProps,
    getThumbProps,
    getTrackProps,
    onChange,
  }
}

export type UseSaturationSliderReturn = ReturnType<typeof useSaturationSlider>
