"use client"

import type { HTMLProps, PropGetter, RequiredPropGetter } from "../../core"
import type { ColorFormat } from "../../utils"
import type { UseSaturationSliderProps } from "../saturation-slider"
import type { UseSliderProps } from "../slider"
import { useCallback, useId, useRef, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useEyeDropper } from "../../hooks/use-eye-dropper"
import { useI18n } from "../../providers/i18n-provider"
import {
  ariaAttr,
  calcFormat,
  convertColor,
  cx,
  dataAttr,
  handlerAll,
  hsvTo,
  isString,
  parseToHsv,
  runKeyAction,
  sameColor,
  useUpdateEffect,
} from "../../utils"

type Hsva = [number, number, number, number]

export interface UseColorSelectorProps extends Omit<HTMLProps, "onChange"> {
  /**
   * The initial value of the color selector.
   *
   * @default fallbackValue
   */
  defaultValue?: string
  /**
   * If `true`, the color selector will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The fallback value of the color selector.
   *
   * @default '#FFFFFF'
   */
  fallbackValue?: string
  /**
   * The format of the color selector.
   * Automatically determines the format of `value` or `defaultValue`.
   *
   * @default 'hex'
   */
  format?: ColorFormat
  /**
   * If `true`, the color selector will be read only.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * The value of the color selector.
   */
  value?: string
  /**
   * The callback invoked when the value changes.
   */
  onChange?: (value: string) => void
  /**
   * The callback invoked when the value changes ends.
   */
  onChangeEnd?: (value: string) => void
  /**
   * The callback invoked when the value changes starts.
   */
  onChangeStart?: (value: string) => void
}

export const useColorSelector = ({
  fallbackValue = "#FFFFFF",
  defaultValue = fallbackValue,
  disabled = false,
  format: formatProp,
  readOnly = false,
  value: valueProp,
  onChange: onChangeProp,
  onChangeEnd: onChangeEndProp,
  onChangeStart: onChangeStartProp,
  ...rest
}: UseColorSelectorProps) => {
  const { t } = useI18n("colorSelector")
  const format = formatProp ?? calcFormat(valueProp ?? defaultValue)
  const alpha = format.endsWith("a")
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [hsva, setHsva] = useState(parseToHsv(value, fallbackValue))
  const [h, s, v, a] = hsva
  const interactive = !(disabled || readOnly)
  const swatchGroupLabelId = useId()
  const activeRef = useRef(false)
  const { supported: supportedEyeDropper, onOpen: onOpenEyeDropper } =
    useEyeDropper()
  const color = hsvTo([h, s, v, 1], fallbackValue)("hex")

  const onChange = useCallback(
    (value: Hsva | string) => {
      if (!interactive) return

      if (isString(value)) {
        setValue(convertColor(value, fallbackValue)(format))
        setHsva(parseToHsv(value, fallbackValue))
      } else {
        setHsva(value)
        setValue(hsvTo(value, fallbackValue)(format))
      }
    },
    [fallbackValue, format, interactive, setValue],
  )

  const onChangeStart = useCallback(
    ([h, s, v, a]: Hsva) => {
      if (!interactive) return

      activeRef.current = true

      const value = hsvTo([h, s, v, a], fallbackValue)(format)

      onChangeStartProp?.(value)
    },
    [interactive, fallbackValue, format, onChangeStartProp],
  )

  const onChangeEnd = useCallback(
    ([h, s, v, a]: Hsva) => {
      if (!interactive) return

      activeRef.current = false

      const value = hsvTo([h, s, v, a], fallbackValue)(format)

      onChangeEndProp?.(value)
    },
    [interactive, fallbackValue, format, onChangeEndProp],
  )

  const onEyeDropperClick = useCallback(async () => {
    if (!interactive) return

    const result = await onOpenEyeDropper()

    if (result?.sRGBHex) onChange(result.sRGBHex)
  }, [interactive, onChange, onOpenEyeDropper])

  useUpdateEffect(() => {
    if (activeRef.current) return

    if (valueProp) setHsva(parseToHsv(valueProp, fallbackValue))
  }, [valueProp])

  const getRootProps: PropGetter = useCallback(
    (props = {}) => ({
      "data-disabled": dataAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      ...rest,
      ...props,
    }),
    [disabled, readOnly, rest],
  )

  const getSaturationSliderProps: PropGetter<UseSaturationSliderProps> =
    useCallback(
      (props = {}) => ({
        disabled,
        readOnly,
        value: [h, s, v],
        ...props,
        onChange: handlerAll(props.onChange, ([h, s, v]) =>
          onChange([h, s, v, a]),
        ),
        onChangeEnd: handlerAll(props.onChangeEnd, ([h, s, v]) =>
          onChangeEnd([h, s, v, a]),
        ),
        onChangeStart: handlerAll(props.onChangeStart, ([h, s, v]) =>
          onChangeStart([h, s, v, a]),
        ),
      }),
      [disabled, readOnly, h, s, v, onChange, a, onChangeEnd, onChangeStart],
    )

  const getHueSliderProps: PropGetter<
    Omit<UseSliderProps, "betweenThumbs" | "orientation">
  > = useCallback(
    (props = {}) => ({
      disabled,
      readOnly,
      value: h,
      ...props,
      onChange: handlerAll(props.onChange, (h) => onChange([h, s, v, a])),
      onChangeEnd: handlerAll(props.onChangeEnd, (h) =>
        onChangeEnd([h, s, v, a]),
      ),
      onChangeStart: handlerAll(props.onChangeStart, (h) =>
        onChangeStart([h, s, v, a]),
      ),
    }),
    [disabled, readOnly, h, onChange, s, v, a, onChangeEnd, onChangeStart],
  )

  const getAlphaSliderProps: PropGetter<
    Omit<UseSliderProps, "betweenThumbs" | "orientation">,
    undefined,
    Omit<UseSliderProps, "betweenThumbs" | "orientation"> & { color: string }
  > = useCallback(
    (props = {}) => ({
      color,
      disabled,
      readOnly,
      value: a,
      ...props,
      onChange: handlerAll(props.onChange, (a) => onChange([h, s, v, a])),
      onChangeEnd: handlerAll(props.onChangeEnd, (a) =>
        onChangeEnd([h, s, v, a]),
      ),
      onChangeStart: handlerAll(props.onChangeStart, (a) =>
        onChangeStart([h, s, v, a]),
      ),
    }),
    [
      color,
      disabled,
      readOnly,
      a,
      onChange,
      h,
      s,
      v,
      onChangeEnd,
      onChangeStart,
    ],
  )

  const getEyeDropperProps: PropGetter = useCallback(
    (props = {}) => ({
      "aria-disabled": ariaAttr(!interactive),
      "aria-label": t("Pick a color"),
      "data-disabled": dataAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      hidden: !supportedEyeDropper,
      role: "button",
      tabIndex: interactive ? 0 : -1,
      ...props,
      onClick: handlerAll(props.onClick, onEyeDropperClick),
      onKeyDown: handlerAll(props.onKeyDown, (ev) =>
        runKeyAction(ev, {
          Enter: onEyeDropperClick,
          Space: onEyeDropperClick,
        }),
      ),
    }),
    [
      disabled,
      interactive,
      onEyeDropperClick,
      readOnly,
      supportedEyeDropper,
      t,
    ],
  )

  const getColorSwatchGroupLabelProps: PropGetter<"span"> = useCallback(
    (props) => ({
      id: swatchGroupLabelId,
      "data-disabled": dataAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      ...props,
    }),
    [swatchGroupLabelId, disabled, readOnly],
  )

  const getColorSwatchGroupProps: PropGetter = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      "aria-labelledby": cx(ariaLabelledby, swatchGroupLabelId),
      "data-disabled": dataAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      role: "listbox",
      ...props,
    }),
    [swatchGroupLabelId, disabled, readOnly],
  )

  const getColorSwatchItemProps: RequiredPropGetter<
    "div",
    { value: string },
    HTMLProps & { color: string }
  > = useCallback(
    ({ value, ...props }) => ({
      "aria-disabled": ariaAttr(!interactive),
      "aria-selected": sameColor(value, color),
      "data-disabled": dataAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      role: "option",
      tabIndex: interactive ? 0 : -1,
      ...props,
      color: value,
      onClick: handlerAll(props.onClick, () => onChange(value)),
      onKeyDown: handlerAll(props.onKeyDown, (ev) =>
        runKeyAction(ev, {
          Enter: () => onChange(value),
          Space: () => onChange(value),
        }),
      ),
    }),
    [disabled, color, interactive, onChange, readOnly],
  )

  return {
    alpha,
    format,
    setValue,
    value,
    getAlphaSliderProps,
    getColorSwatchGroupLabelProps,
    getColorSwatchGroupProps,
    getColorSwatchItemProps,
    getEyeDropperProps,
    getHueSliderProps,
    getRootProps,
    getSaturationSliderProps,
    onChange,
  }
}

export type UseColorSelectorReturn = ReturnType<typeof useColorSelector>
