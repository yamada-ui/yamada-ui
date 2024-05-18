import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverContent, PopoverTrigger } from "@yamada-ui/popover"
import { Portal, type PortalProps } from "@yamada-ui/portal"
import { cx, getValidChildren, isValidElement } from "@yamada-ui/utils"
import { cloneElement } from "react"
import type { ColorSelectorProps } from "./color-selector"
import { ColorSelector } from "./color-selector"
import { EyeDropperIcon } from "./color-selector-eye-dropper"
import type { ColorSwatchProps } from "./color-swatch"
import { ColorSwatch } from "./color-swatch"
import type { UseColorPickerProps } from "./use-color-picker"
import {
  ColorPickerProvider,
  useColorPicker,
  useColorPickerContext,
} from "./use-color-picker"

type ColorPickerOptions = {
  /**
   * If `true`, display the color swatch component.
   *
   * @default true
   */
  withSwatch?: boolean
  /**
   * If `true`, display the eye dropper component.
   *
   * @default true
   */
  withEyeDropper?: boolean
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * Props for color picker container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for color picker element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for color swatch component.
   */
  swatchProps?: ColorPickerSwatchProps
  /**
   * Props for color eye dropper component.
   */
  eyeDropperProps?: ColorPickerEyeDropperProps
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   */
  portalProps?: Omit<PortalProps, "children">
}

export type ColorPickerProps = ThemeProps<"ColorPicker"> &
  UseColorPickerProps &
  ColorPickerOptions &
  Pick<
    ColorSelectorProps,
    | "saturationSliderRef"
    | "saturationSliderProps"
    | "swatchesProps"
    | "hueSliderRef"
    | "hueSliderProps"
    | "alphaSliderRef"
    | "alphaSliderProps"
    | "channelsProps"
    | "channelProps"
    | "children"
  >

/**
 * `ColorPicker` is a component used by the user to select a color or enter an arbitrary color value.
 *
 * @see Docs https://yamada-ui.com/components/forms/color-picker
 */
export const ColorPicker = forwardRef<ColorPickerProps, "input">(
  ({ withSwatch = true, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("ColorPicker", {
      withSwatch,
      ...props,
    })
    let {
      className,
      children,
      withEyeDropper = true,
      color,
      h,
      height,
      minH,
      minHeight,
      containerProps,
      inputProps,
      swatchProps,
      eyeDropperProps,
      saturationSliderRef,
      saturationSliderProps,
      swatchesProps,
      hueSliderRef,
      hueSliderProps,
      alphaSliderRef,
      alphaSliderProps,
      channelsProps,
      channelProps,
      portalProps = { isDisabled: true },
      ...computedProps
    } = omitThemeProps(mergedProps, ["withSwatch"])
    const {
      allowInput,
      eyeDropperSupported,
      getPopoverProps,
      getContainerProps,
      getFieldProps,
      getSelectorProps,
      getEyeDropperProps,
      ...rest
    } = useColorPicker(computedProps)

    h ??= height
    minH ??= minHeight

    const css: CSSUIObject = {
      w: "100%",
      h: "fit-content",
      color,
      ...styles.container,
    }

    return (
      <ColorPickerProvider value={{ styles, ...rest }}>
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx("ui-color-picker", className)}
            __css={css}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-color-picker__inner"
              __css={{
                position: "relative",
                cursor: !allowInput ? "pointer" : undefined,
                ...styles.inner,
              }}
            >
              {withSwatch ? <ColorPickerSwatch {...swatchProps} /> : null}

              <PopoverTrigger>
                <ColorPickerField
                  h={h}
                  minH={minH}
                  {...getFieldProps(inputProps, ref)}
                />
              </PopoverTrigger>

              {eyeDropperSupported && withEyeDropper ? (
                <ColorPickerEyeDropper
                  {...getEyeDropperProps(eyeDropperProps)}
                />
              ) : null}
            </ui.div>

            <Portal {...portalProps}>
              <PopoverContent
                className="ui-color-picker__popover"
                __css={{ ...styles.list }}
              >
                <ColorSelector
                  className="ui-color-picker__picker"
                  {...getSelectorProps({
                    saturationSliderRef,
                    saturationSliderProps,
                    swatchesProps,
                    hueSliderRef,
                    hueSliderProps,
                    alphaSliderRef,
                    alphaSliderProps,
                    channelsProps,
                    channelProps,
                  })}
                >
                  {children}
                </ColorSelector>
              </PopoverContent>
            </Portal>
          </ui.div>
        </Popover>
      </ColorPickerProvider>
    )
  },
)

type ColorPickerFieldProps = HTMLUIProps<"input">

const ColorPickerField = forwardRef<ColorPickerFieldProps, "input">(
  ({ className, h, minH, ...rest }, ref) => {
    const { styles } = useColorPickerContext()

    const css: CSSUIObject = {
      ps: "2rem",
      pe: "2rem",
      h,
      minH,
      display: "flex",
      alignItems: "center",
      ...styles.field,
    }

    return (
      <ui.input
        ref={ref}
        className={cx("ui-color-picker__field", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

type ColorPickerSwatchProps = ColorSwatchProps

const ColorPickerSwatch = forwardRef<ColorPickerSwatchProps, "div">(
  ({ className, ...rest }, ref) => {
    const { value, styles } = useColorPickerContext()

    const css: CSSUIObject = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      ...styles.swatch,
    }

    return (
      <ColorSwatch
        ref={ref}
        className={cx("ui-color-picker__swatch", className)}
        __css={css}
        color={value}
        isRounded
        {...rest}
      />
    )
  },
)

type ColorPickerEyeDropperProps = HTMLUIProps<"button">

const ColorPickerEyeDropper = forwardRef<ColorPickerEyeDropperProps, "button">(
  ({ className, children, ...rest }, ref) => {
    const { styles } = useColorPickerContext()

    const css: CSSUIObject = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
      ...styles.eyeDropper,
    }

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        focusable: false,
        "aria-hidden": true,
        style: {
          maxWidth: "1em",
          maxHeight: "1em",
          color: "currentColor",
        },
      }),
    )

    return (
      <ui.button
        ref={ref}
        className={cx("ui-color-picker__eye-dropper", className)}
        __css={css}
        {...rest}
      >
        {isValidElement(children) ? (
          cloneChildren
        ) : (
          <EyeDropperIcon className="ui-color-picker__eye-dropper-icon" />
        )}
      </ui.button>
    )
  },
)
