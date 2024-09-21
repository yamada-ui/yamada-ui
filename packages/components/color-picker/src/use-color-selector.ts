import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  PropGetter,
  RequiredPropGetter,
} from "@yamada-ui/core"
import {
  useFormControlProps,
  formControlProperties,
} from "@yamada-ui/form-control"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { InputProps } from "@yamada-ui/input"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useEyeDropper } from "@yamada-ui/use-eye-dropper"
import type { ColorFormat, Dict } from "@yamada-ui/utils"
import {
  calcFormat,
  convertColor,
  createContext,
  handlerAll,
  hsvTo,
  isString,
  parseToHsv,
  useCallbackRef,
  useUpdateEffect,
  parseToRgba,
  parseToHsla,
  rgbaTo,
  hslaTo,
  splitObject,
} from "@yamada-ui/utils"
import type { ChangeEvent } from "react"
import { useCallback, useMemo, useRef, useState } from "react"
import type { AlphaSliderProps } from "./alpha-slider"
import type { ColorSwatchProps } from "./color-swatch"
import type { HueSliderProps } from "./hue-slider"
import type { SaturationSliderProps } from "./saturation-slider"

type Space = keyof Hsla | keyof Rgba
interface Hsla {
  h: number
  s: number
  l: number
  a: number
}
interface Rgba {
  r: number
  g: number
  b: number
  a: number
}
interface Hsva {
  h: number
  s: number
  v: number
  a: number
}
interface Channel {
  label: string
  space: Space
  value: number
  min: number
  max: number
}

const convertHsla = (value: string, fallback?: string): Hsla => {
  let [h, s, l, a] = parseToHsla(value, fallback) ?? [0, 0, 1, 1]

  if (a > 1) a = 1

  return { h, s, l, a }
}

const convertRgba = (value: string, fallback?: string): Rgba => {
  let [r, g, b, a] = parseToRgba(value, fallback) ?? [255, 255, 255, 1]

  if (r > 255) r = 255
  if (g > 255) g = 255
  if (b > 255) b = 255
  if (a > 1) a = 1

  return { r, g, b, a }
}

const convertHsva = (value: string, fallback?: string): Hsva => {
  const [h, s, v, a] = parseToHsv(value, fallback)

  return { h, s, v, a }
}

interface ColorSelectorContext {
  value: string
  onChange: (value: string | Partial<Hsva>) => void
  eyeDropperSupported: boolean
  withAlpha: boolean
  isInteractive: boolean
  disabled?: boolean
  readOnly?: boolean
  channels: Channel[]
  size?: ThemeProps<"ColorSelector">["size"]
  getHueSliderProps: PropGetter<HueSliderProps>
  getAlphaSliderProps: PropGetter<AlphaSliderProps>
  getEyeDropperProps: PropGetter<"button">
  getChannelProps: RequiredPropGetter<InputProps & { space: Space }, InputProps>
  getSwatchProps: PropGetter<ColorSwatchProps>
  styles: { [key: string]: CSSUIObject }
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
   * The value of the color selector.
   */
  value?: string
  /**
   * The initial value of the color selector.
   */
  defaultValue?: string
  /**
   * The fallback value returned when color determination fails.
   */
  fallbackValue?: string
  /**
   * Function called whenever the color selector value changes.
   */
  onChange?: (value: string) => void
  /**
   * Function called when the user starts selecting a new value.
   */
  onChangeStart?: (value: string) => void
  /**
   * Function called when the user is done selecting a new value.
   */
  onChangeEnd?: (value: string) => void
  /**
   * Color format. For example, `hex`, `rgba`, etc.
   *
   * @default "hexa"
   */
  format?: ColorFormat
  /**
   * Function called whenever the color swatch click.
   */
  onSwatchClick?: (value: string) => void
}

export interface UseColorSelectorBaseProps
  extends UseColorSelectorOptions,
    FormControlOptions {}

export interface UseColorSelectorProps
  extends Omit<HTMLUIProps, "defaultValue" | "onChange" | "children">,
    UseColorSelectorBaseProps {}

export const useColorSelector = ({
  isInvalid,
  ...props
}: UseColorSelectorProps) => {
  const {
    id,
    name,
    value: valueProp,
    defaultValue,
    fallbackValue,
    onChange: onChangeProp,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    format: formatProp,
    onSwatchClick,
    ...rest
  } = useFormControlProps({ isInvalid, ...props })
  const [
    {
      "aria-readonly": ariaReadonly,
      required,
      disabled,
      readOnly,
      ...formControlProps
    },
    containerProps,
  ] = splitObject(rest, formControlProperties)

  const onChangeStartRef = useCallbackRef(onChangeStartProp)
  const onChangeEndRef = useCallbackRef(onChangeEndProp)
  const { supported: eyeDropperSupported, onOpen } = useEyeDropper()
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue ?? fallbackValue,
    onChange: onChangeProp,
  })
  const format = useMemo(
    () => formatProp ?? calcFormat(value ?? "#ffffff"),
    [value, formatProp],
  )
  const resolvedValue = convertColor(value, "#ffffff")(format) as string
  const timeoutId = useRef<any>(undefined)
  const isDraggingRef = useRef<boolean>(false)
  const [parsedValue, setParsedValue] = useState<Hsva>(
    convertHsva(resolvedValue, fallbackValue),
  )
  const { h, s, v, a } = parsedValue
  const withAlpha = format.endsWith("a")
  const isInteractive = !(disabled || readOnly)

  const channels: Channel[] = useMemo(() => {
    if (resolvedValue.startsWith("hsl")) {
      const { h, s, l, a } = convertHsla(resolvedValue, fallbackValue)

      let channels: Channel[] = [
        { label: "H", space: "h", value: Math.round(h), min: 0, max: 360 },
        {
          label: "S(%)",
          space: "s",
          value: Math.round(s * 100),
          min: 0,
          max: 100,
        },
        {
          label: "L(%)",
          space: "l",
          value: Math.round(l * 100),
          min: 0,
          max: 100,
        },
      ]

      if (withAlpha) {
        channels = [
          ...channels,
          {
            label: "A(%)",
            space: "a",
            value: Math.round(a * 100),
            min: 0,
            max: 100,
          },
        ]
      }

      return channels
    } else {
      const { r, g, b, a } = convertRgba(resolvedValue, fallbackValue)

      let channels: Channel[] = [
        { label: "R", space: "r", value: Math.round(r), min: 0, max: 255 },
        { label: "G", space: "g", value: Math.round(g), min: 0, max: 255 },
        { label: "B", space: "b", value: Math.round(b), min: 0, max: 255 },
      ]

      if (withAlpha) {
        channels = [
          ...channels,
          {
            label: "A(%)",
            space: "a",
            value: Math.round(a * 100),
            min: 0,
            max: 100,
          },
        ]
      }

      return channels
    }
  }, [resolvedValue, withAlpha, fallbackValue])

  const onChange = useCallback(
    (value: string | Partial<Hsva>) => {
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

      isDraggingRef.current = true

      const { h, s, v, a } = { ...parsedValue, ...value }

      const nextValue = hsvTo([h, s, v, a], fallbackValue)(format)

      if (nextValue) onChangeStartRef(nextValue)
    },
    [onChangeStartRef, fallbackValue, parsedValue, format],
  )

  const onChangeEnd = useCallback(
    (value: string | Partial<Hsva>) => {
      window.clearTimeout(timeoutId.current)

      timeoutId.current = window.setTimeout(() => {
        isDraggingRef.current = false
      }, 200)

      let nextValue: string | undefined

      if (isString(value)) {
        nextValue = convertColor(value, fallbackValue)(format)
      } else {
        const { h, s, v, a } = { ...parsedValue, ...value }

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

      if (["s", "l", "a"].includes(space)) n = n / 100

      let nextValue: string | undefined

      if (resolvedValue.startsWith("hsl")) {
        const { h, s, l, a } = Object.assign(
          convertHsla(resolvedValue, fallbackValue),
          { [space]: n },
        )

        nextValue = hslaTo([h, s, l, a], fallbackValue)(format)
      } else {
        const { r, g, b, a } = Object.assign(
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
    if (isDraggingRef.current) return

    if (valueProp) setParsedValue(convertHsva(valueProp, fallbackValue))
  }, [valueProp])

  useUpdateEffect(() => {
    if (!format || !value) return

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
      value: resolvedValue,
      required,
      disabled,
      readOnly,
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
        required,
        disabled,
        readOnly,
        isInvalid,
        ...props,
        ref,
        value: [h, s, v],
        onChange: handlerAll(props.onChange, ([, s, v]) => onChange({ s, v })),
        onChangeStart: handlerAll(props.onChangeStart, ([, s, v]) =>
          onChangeStart({ s, v }),
        ),
        onChangeEnd: handlerAll(props.onChangeEnd, ([, s, v]) =>
          onChangeEnd({ s, v }),
        ),
      }),
      [
        required,
        disabled,
        readOnly,
        isInvalid,
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
      required,
      disabled,
      readOnly,
      isInvalid,
      ...props,
      ref,
      value: h,
      onChange: handlerAll(props.onChange, (h) => onChange({ h })),
      onChangeStart: handlerAll(props.onChangeStart, (h) =>
        onChangeStart({ h }),
      ),
      onChangeEnd: handlerAll(props.onChangeEnd, (h) => onChangeEnd({ h })),
    }),
    [
      required,
      disabled,
      readOnly,
      isInvalid,
      h,
      onChange,
      onChangeStart,
      onChangeEnd,
    ],
  )

  const getAlphaSliderProps: PropGetter<AlphaSliderProps> = useCallback(
    (props = {}, ref = null) => ({
      required,
      disabled,
      readOnly,
      isInvalid,
      ...props,
      ref,
      value: a,
      color: hsvTo([h, s, v, a], fallbackValue)(format),
      onChange: handlerAll(props.onChange, (a) => onChange({ a })),
      onChangeStart: handlerAll(props.onChangeStart, (a) =>
        onChangeStart({ a }),
      ),
      onChangeEnd: handlerAll(props.onChangeEnd, (a) => onChangeEnd({ a })),
    }),
    [
      fallbackValue,
      required,
      disabled,
      readOnly,
      isInvalid,
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
    InputProps & { space: Space },
    InputProps
  > = useCallback(
    ({ space, ...props }, ref = null) => {
      return {
        required,
        disabled,
        readOnly,
        isInvalid,
        ...props,
        ref,
        type: "number",
        step: 1,
        onChange: handlerAll(props.onChange, (ev) =>
          onChannelChange(ev, space),
        ),
      } as Dict
    },
    [required, disabled, readOnly, isInvalid, onChannelChange],
  )

  const getEyeDropperProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      disabled,
      "aria-label": "Pick a color",
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
    value: resolvedValue,
    onChange,
    eyeDropperSupported,
    withAlpha,
    isInteractive,
    disabled,
    readOnly,
    channels,
    getContainerProps,
    getInputProps,
    getSaturationSliderProps,
    getHueSliderProps,
    getAlphaSliderProps,
    getEyeDropperProps,
    getChannelProps,
    getSwatchProps,
  }
}

export type UseColorSelectorReturn = ReturnType<typeof useColorSelector>
