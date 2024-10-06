import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { PortalProps } from "@yamada-ui/portal"
import type { FC, ReactNode } from "react"
import type { ColorSelectorProps } from "./color-selector"
import type { ColorSwatchProps } from "./color-swatch"
import type { UseColorPickerProps } from "./use-color-picker"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Popover, PopoverContent, PopoverTrigger } from "@yamada-ui/popover"
import { Portal } from "@yamada-ui/portal"
import {
  cx,
  getValidChildren,
  isValidElement,
  runIfFunc,
} from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"
import { cloneElement, useId } from "react"
import type { ColorSelectorProps } from "./color-selector"

import { ColorSelector } from "./color-selector"
import { EyeDropperIcon } from "./color-selector-eye-dropper"
import { ColorSwatch } from "./color-swatch"
import {
  ColorPickerProvider,
  useColorPicker,
  useColorPickerContext,
} from "./use-color-picker"

interface ColorPickerOptions {
  children?: FC<{ value: string; onClose: () => void }> | ReactNode
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * If `true`, display the eye dropper component.
   *
   * @default true
   */
  withEyeDropper?: boolean
  /**
   * If `true`, display the color swatch component.
   *
   * @default true
   */
  withSwatch?: boolean
  /**
   * Props for color picker container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for color eye dropper component.
   */
  eyeDropperProps?: ColorPickerEyeDropperProps
  /**
   * Props for color picker element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   */
  portalProps?: Omit<PortalProps, "children">
  /**
   * Props for color swatch component.
   */
  swatchProps?: ColorPickerSwatchProps
}

export interface ColorPickerProps
  extends ThemeProps<"ColorPicker">,
    UseColorPickerProps,
    ColorPickerOptions,
    Pick<
      ColorSelectorProps,
      | "alphaSliderProps"
      | "alphaSliderRef"
      | "channelProps"
      | "channelsProps"
      | "hueSliderProps"
      | "hueSliderRef"
      | "saturationSliderProps"
      | "saturationSliderRef"
      | "swatchesProps"
    > {}

/**
 * `ColorPicker` is a component used by the user to select a color or enter an arbitrary color value.
 *
 * @see Docs https://yamada-ui.com/components/forms/color-picker
 */
export const ColorPicker = forwardRef<ColorPickerProps, "input">(
  ({ withSwatch = true, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("ColorPicker", {
      withSwatch,
      ...props,
    })
    const id = useId()
    let {
      className,
      alphaSliderRef,
      children,
      color,
      h,
      height,
      hueSliderRef,
      minH,
      minHeight,
      saturationSliderRef,
      withEyeDropper = true,
      alphaSliderProps,
      channelProps,
      channelsProps,
      containerProps,
      eyeDropperProps,
      hueSliderProps,
      inputProps,
      portalProps = { isDisabled: true },
      saturationSliderProps,
      swatchesProps,
      swatchProps,
      ...computedProps
    } = omitThemeProps(mergedProps, ["withSwatch"])
    const {
      allowInput,
      eyeDropperSupported,
      value,
      getContainerProps,
      getEyeDropperProps,
      getFieldProps,
      getPopoverProps,
      getSelectorProps,
      onClose,
      ...rest
    } = useColorPicker(computedProps)

    h ??= height
    minH ??= minHeight

    const css: CSSUIObject = {
      color,
      h: "fit-content",
      w: "100%",
      ...styles.container,
    }

    return (
      <ColorPickerProvider value={{ styles, value, ...rest }}>
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx("ui-color-picker", className)}
            __css={css}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-color-picker__inner"
              __css={{
                cursor: !allowInput ? "pointer" : undefined,
                position: "relative",
                ...styles.inner,
              }}
            >
              {withSwatch ? <ColorPickerSwatch {...swatchProps} /> : null}
              <PopoverTrigger>
                <ColorPickerField
                  h={h}
                  minH={minH}
                  role="textbox"
                  aria-controls={id}
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
                containerProps={{
                  id,
                }}
                className="ui-color-picker__content"
                __css={{ ...styles.content }}
              >
                <ColorSelector
                  className="ui-color-picker__picker"
                  {...getSelectorProps({
                    alphaSliderRef,
                    hueSliderRef,
                    saturationSliderRef,
                    alphaSliderProps,
                    channelProps,
                    channelsProps,
                    hueSliderProps,
                    saturationSliderProps,
                    swatchesProps,
                  })}
                >
                  {runIfFunc(children, { value, onClose })}
                </ColorSelector>
              </PopoverContent>
            </Portal>
          </ui.div>
        </Popover>
      </ColorPickerProvider>
    )
  },
)

ColorPicker.displayName = "ColorPicker"
ColorPicker.__ui__ = "ColorPicker"

type ColorPickerFieldProps = HTMLUIProps<"input">

const ColorPickerField = forwardRef<ColorPickerFieldProps, "input">(
  ({ className, h, minH, ...rest }, ref) => {
    const { styles } = useColorPickerContext()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      h,
      minH,
      pe: "2rem",
      ps: "2rem",
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

ColorPickerField.displayName = "ColorPickerField"
ColorPickerField.__ui__ = "ColorPickerField"

type ColorPickerSwatchProps = ColorSwatchProps

const ColorPickerSwatch = forwardRef<ColorPickerSwatchProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles, value } = useColorPickerContext()

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
        color={value}
        isRounded
        __css={css}
        {...rest}
      />
    )
  },
)

ColorPickerSwatch.displayName = "ColorPickerSwatch"
ColorPickerSwatch.__ui__ = "ColorPickerSwatch"

type ColorPickerEyeDropperProps = HTMLUIProps<"button">

const ColorPickerEyeDropper = forwardRef<ColorPickerEyeDropperProps, "button">(
  ({ className, children, ...rest }, ref) => {
    const { styles } = useColorPickerContext()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      ...styles.eyeDropper,
    }

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        style: {
          color: "currentColor",
          maxHeight: "1em",
          maxWidth: "1em",
        },
        focusable: false,
        "aria-hidden": true,
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
          <EyeDropperIcon className="ui-color-picker__eye-dropper__icon" />
        )}
      </ui.button>
    )
  },
)

ColorPickerEyeDropper.displayName = "ColorPickerEyeDropper"
ColorPickerEyeDropper.__ui__ = "ColorPickerEyeDropper"
