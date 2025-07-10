import type { ChangeEvent } from "react"
import type {
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
  ThemeProps,
} from "../../core"
import type { ColorFormat, Dict } from "../../utils"
import type { FormControlOptions } from "../form-control"
import type { InputProps } from "../input"
import type { AlphaSliderProps } from "./alpha-slider"
import type { ColorSwatchProps } from "./color-swatch"
import type { HueSliderProps } from "./hue-slider"
import type { SaturationSliderProps } from "./saturation-slider"
import { useCallback, useMemo, useRef, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useEyeDropper } from "../../hooks/use-eye-dropper"
import {
  calcFormat,
  convertColor,
  createContext,
  handlerAll,
  hslaTo,
  hsvTo,
  isString,
  parseToHsla,
  parseToHsv,
  parseToRgba,
  rgbaTo,
  splitObject,
  useCallbackRef,
  useUpdateEffect,
} from "../../utils"
import { formControlProperties, useFormControlProps } from "../form-control"

type Space = keyof Hsla | keyof Rgba
interface Hsla {
  a: number
  h: number
  l: number
  s: number
}
interface Rgba {
  a: number
  b: number
  g: number
  r: number
}
interface Hsva {
  a: number
  h: number
  s: number
  v: number
}
interface Channel {
  label: string
  max: number
  min: number
  space: Space
  value: number
}

const convertHsla = (value: string, fallback?: string): Hsla => {
  let [h, s, l, a] = parseToHsla(value, fallback) ?? [0, 0, 1, 1]

  if (a > 1) a = 1

  return { a, h, l, s }
}

const convertRgba = (value: string, fallback?: string): Rgba => {
  let [r, g, b, a] = parseToRgba(value, fallback) ?? [255, 255, 255, 1]

  if (r > 255) r = 255
  if (g > 255) g = 255
  if (b > 255) b = 255
  if (a > 1) a = 1

  return { a, b, g, r }
}

const convertHsva = (value: string, fallback?: string): Hsva => {
  const [h, s, v, a] = parseToHsv(value, fallback)

  return { a, h, s, v }
}

interface ColorSelectorContext {
  channels: Channel[]
  eyeDropperSupported: boolean
  interactive: boolean
  styles: { [key: string]: CSSUIObject | undefined }
  value: string
  withAlpha: boolean
  getAlphaSliderProps: PropGetter<AlphaSliderProps>
  getChannelProps: RequiredPropGetter<{ space: Space } & InputProps, InputProps>
  getEyeDropperProps: PropGetter<"button">
  getHueSliderProps: PropGetter<HueSliderProps>
  getSwatchProps: PropGetter<ColorSwatchProps>
  onChange: (value: Partial<Hsva> | string) => void
  size?: ThemeProps<"ColorSelector">["size"]
  disabled?: boolean
  readOnly?: boolean
}

export const [ColorSelectorProvider, useColorSelectorContext] =
  createContext<ColorSelectorContext>({
    name: "ColorSelectorContext",
    errorMessage: `useColorSelectorContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorSelector />"`,
  })

interface UseColorSelectorOptions {
  /**
   * The base `id` to use for the color selector.
   */
  id?: string
  /**
   * The name attribute of the hidden `input` field.
   * This is particularly useful in forms.
   */
  name?: string
  /**
   * The initial value of the color selector.
   */
  defaultValue?: string
  /**
   * The fallback value returned when color determination fails.
   */
  fallbackValue?: string
  /**
   * Color format. For example, `hex`, `rgba`, etc.
   *
   * @default "hexa"
   */
  format?: ColorFormat
  /**
   * The value of the color selector.
   */
  value?: string
  /**
   * Function called whenever the color selector value changes.
   */
  onChange?: (value: string) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: string) => void
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: string) => void
  /**
   * Function called whenever the color swatch click.
   */
  onSwatchClick?: (value: string) => void
}

export interface UseColorSelectorBaseProps
  extends UseColorSelectorOptions,
    FormControlOptions {}

export interface UseColorSelectorProps
  extends Omit<HTMLUIProps, "children" | "defaultValue" | "onChange">,
    UseColorSelectorBaseProps {}

export const useColorSelector = ({
  invalid,
  ...props
}: UseColorSelectorProps) => {
  const {
    id,
    name,
    defaultValue,
    fallbackValue,
    format: formatProp,
    value: valueProp,
    onChange: onChangeProp,
    onChangeEnd: onChangeEndProp,
    onChangeStart: onChangeStartProp,
    onSwatchClick,
    ...rest
  } = useFormControlProps({ invalid, ...props })
  const [
    {
      "aria-readonly": ariaReadonly,
      disabled,
      readOnly,
      required,
      ...formControlProps
    },
    containerProps,
  ] = splitObject(rest, formControlProperties)

  const onChangeStartRef = useCallbackRef(onChangeStartProp)
  const onChangeEndRef = useCallbackRef(onChangeEndProp)
  const { supported: eyeDropperSupported, onOpen } = useEyeDropper()
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue ?? fallbackValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const format = useMemo(
    () => formatProp ?? calcFormat(value || "#ffffff"),
    [value, formatProp],
  )
  const resolvedValue = convertColor(value, "#ffffff")(format) as string
  const timeoutId = useRef<any>(undefined)
  const draggingRef = useRef<boolean>(false)
  const [parsedValue, setParsedValue] = useState<Hsva>(
    convertHsva(resolvedValue, fallbackValue),
  )
  const { a, h, s, v } = parsedValue
  const withAlpha = format.endsWith("a")
  const interactive = !(disabled || readOnly)

  const channels: Channel[] = useMemo(() => {
    if (resolvedValue.startsWith("hsl")) {
      const { a, h, l, s } = convertHsla(resolvedValue, fallbackValue)

      const channels: Channel[] = [
        { label: "H", max: 360, min: 0, space: "h", value: Math.round(h) },
        {
          label: "S(%)",
          max: 100,
          min: 0,
          space: "s",
          value: Math.round(s * 100),
        },
        {
          label: "L(%)",
          max: 100,
          min: 0,
          space: "l",
          value: Math.round(l * 100),
        },
      ]

      if (withAlpha) {
        channels.push({
          label: "A(%)",
          max: 100,
          min: 0,
          space: "a",
          value: Math.round(a * 100),
        })
      }

      return channels
    } else {
      const { a, b, g, r } = convertRgba(resolvedValue, fallbackValue)

      const channels: Channel[] = [
        { label: "R", max: 255, min: 0, space: "r", value: Math.round(r) },
        { label: "G", max: 255, min: 0, space: "g", value: Math.round(g) },
        { label: "B", max: 255, min: 0, space: "b", value: Math.round(b) },
      ]

      if (withAlpha) {
        channels.push({
          label: "A(%)",
          max: 100,
          min: 0,
          space: "a",
          value: Math.round(a * 100),
        })
      }

      return channels
    }
  }, [resolvedValue, withAlpha, fallbackValue])

  const onChange = useCallback(
    (value: Partial<Hsva> | string) => {
      if (isString(value)) {
        setParsedValue(convertHsva(value, fallbackValue))
      } else {
        setParsedValue((prev) => ({ ...prev, ...value }))
      }
    },
    [fallbackValue],
  )

  const onChangeStart = useCallback(
    (value: Partial<Hsva>) => {
      window.clearTimeout(timeoutId.current)

      draggingRef.current = true

      const { a, h, s, v } = { ...parsedValue, ...value }

      const nextValue = hsvTo([h, s, v, a], fallbackValue)(format)

      if (nextValue) onChangeStartRef(nextValue)
    },
    [onChangeStartRef, fallbackValue, parsedValue, format],
  )

  const onChangeEnd = useCallback(
    (value: Partial<Hsva> | string) => {
      window.clearTimeout(timeoutId.current)

      timeoutId.current = window.setTimeout(() => {
        draggingRef.current = false
      }, 200)

      let nextValue: string | undefined

      if (isString(value)) {
        nextValue = convertColor(value, fallbackValue)(format)
      } else {
        const { a, h, s, v } = { ...parsedValue, ...value }

        nextValue = hsvTo([h, s, v, a], fallbackValue)(format)
      }

      if (nextValue) onChangeEndRef(nextValue)
    },
    [onChangeEndRef, fallbackValue, parsedValue, format],
  )

  const onChannelChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>, space: Space) => {
      let n = Math.floor(parseFloat(ev.target.value))

      if (isNaN(n)) n = 0

      if (["a", "l", "s"].includes(space)) n = n / 100

      let nextValue: string | undefined

      if (resolvedValue.startsWith("hsl")) {
        const { a, h, l, s } = Object.assign(
          convertHsla(resolvedValue, fallbackValue),
          { [space]: n },
        )

        nextValue = hslaTo([h, s, l, a], fallbackValue)(format)
      } else {
        const { a, b, g, r } = Object.assign(
          convertRgba(resolvedValue, fallbackValue),
          { [space]: n },
        )

        nextValue = rgbaTo([r, g, b, a], fallbackValue)(format)
      }

      if (!nextValue) return

      onChange(nextValue)
      onChangeEnd(nextValue)
    },
    [resolvedValue, onChange, onChangeEnd, fallbackValue, format],
  )

  const onEyeDropperClick = useCallback(async () => {
    try {
      const { sRGBHex } = (await onOpen()) ?? {}

      if (!sRGBHex) return

      onChange(sRGBHex)
      onChangeEnd(sRGBHex)
    } catch {}
  }, [onOpen, onChange, onChangeEnd])

  useUpdateEffect(() => {
    const nextValue = hsvTo([h, s, v, a], fallbackValue)(format)

    if (nextValue) setValue(nextValue)
  }, [h, s, v, a])

  useUpdateEffect(() => {
    if (draggingRef.current) return

    if (valueProp) setParsedValue(convertHsva(valueProp, fallbackValue))
  }, [valueProp])

  useUpdateEffect(() => {
    if (!value) return

    const nextValue = convertColor(value, fallbackValue)(format)

    if (nextValue) setValue(nextValue)
  }, [format])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      ...formControlProps,
      ...containerProps,
    }),
    [containerProps, formControlProps],
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
      value: resolvedValue,
    }),
    [
      formControlProps,
      ariaReadonly,
      id,
      name,
      resolvedValue,
      required,
      disabled,
      readOnly,
    ],
  )

  const getSaturationSliderProps: PropGetter<SaturationSliderProps> =
    useCallback(
      (props = {}, ref = null) => ({
        disabled,
        invalid,
        readOnly,
        required,
        ...props,
        ref,
        value: [h, s, v],
        onChange: handlerAll(props.onChange, ([, s, v]) => onChange({ s, v })),
        onChangeEnd: handlerAll(props.onChangeEnd, ([, s, v]) =>
          onChangeEnd({ s, v }),
        ),
        onChangeStart: handlerAll(props.onChangeStart, ([, s, v]) =>
          onChangeStart({ s, v }),
        ),
      }),
      [
        required,
        disabled,
        readOnly,
        invalid,
        h,
        s,
        v,
        onChange,
        onChangeStart,
        onChangeEnd,
      ],
    )

  const getHueSliderProps: PropGetter<HueSliderProps> = useCallback(
    (props = {}, ref = null) => ({
      disabled,
      invalid,
      readOnly,
      required,
      ...props,
      ref,
      value: h,
      onChange: handlerAll(props.onChange, (h) => onChange({ h })),
      onChangeEnd: handlerAll(props.onChangeEnd, (h) => onChangeEnd({ h })),
      onChangeStart: handlerAll(props.onChangeStart, (h) =>
        onChangeStart({ h }),
      ),
    }),
    [
      required,
      disabled,
      readOnly,
      invalid,
      h,
      onChange,
      onChangeStart,
      onChangeEnd,
    ],
  )

  const getAlphaSliderProps: PropGetter<AlphaSliderProps> = useCallback(
    (props = {}, ref = null) => ({
      disabled,
      invalid,
      readOnly,
      required,
      ...props,
      ref,
      color: hsvTo([h, s, v, a], fallbackValue)(format),
      value: a,
      onChange: handlerAll(props.onChange, (a) => onChange({ a })),
      onChangeEnd: handlerAll(props.onChangeEnd, (a) => onChangeEnd({ a })),
      onChangeStart: handlerAll(props.onChangeStart, (a) =>
        onChangeStart({ a }),
      ),
    }),
    [
      fallbackValue,
      required,
      disabled,
      readOnly,
      invalid,
      format,
      h,
      s,
      v,
      a,
      onChange,
      onChangeStart,
      onChangeEnd,
    ],
  )

  const getChannelProps: RequiredPropGetter<
    { space: Space } & InputProps,
    InputProps
  > = useCallback(
    ({ space, ...props }, ref = null) => {
      return {
        disabled,
        invalid,
        readOnly,
        required,
        ...props,
        ref,
        type: "number",
        step: 1,
        onChange: handlerAll(props.onChange, (ev) =>
          onChannelChange(ev, space),
        ),
      } as Dict
    },
    [required, disabled, readOnly, invalid, onChannelChange],
  )

  const getEyeDropperProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      "aria-label": "Pick a color",
      disabled,
      ...props,
      ref,
      onClick: handlerAll(props.onClick, onEyeDropperClick),
    }),
    [disabled, onEyeDropperClick],
  )

  const getSwatchProps: PropGetter<ColorSwatchProps> = useCallback(
    ({ color, ...props } = {}, ref = null) => ({
      "aria-label": `Select ${color} as the color`,
      disabled,
      readOnly,
      role: "button",
      ...props,
      ref,
      color,
      onClick: handlerAll(props.onClick, () => {
        if (!isString(color)) return

        onSwatchClick?.(color)
        onChange(color)
        onChangeEnd(color)
      }),
    }),
    [disabled, readOnly, onSwatchClick, onChange, onChangeEnd],
  )

  return {
    channels,
    disabled,
    eyeDropperSupported,
    interactive,
    readOnly,
    value: resolvedValue,
    withAlpha,
    getAlphaSliderProps,
    getChannelProps,
    getContainerProps,
    getEyeDropperProps,
    getHueSliderProps,
    getInputProps,
    getSaturationSliderProps,
    getSwatchProps,
    onChange,
  }
}

export type UseColorSelectorReturn = ReturnType<typeof useColorSelector>
