import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { PortalProps } from "@yamada-ui/portal"
import type { FC, ReactNode, RefAttributes } from "react"
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
  mergeRefs,
  runIfFunc,
} from "@yamada-ui/utils"
import { cloneElement } from "react"
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
   * Props for color picker field element.
   */
  fieldProps?: Omit<ColorPickerFieldProps, "children" | "inputProps">
  /**
   * Props for color picker input element.
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
      fieldProps,
      hueSliderProps,
      inputProps,
      portalProps = { isDisabled: true },
      saturationSliderProps,
      swatchesProps,
      swatchProps,
      ...computedProps
    } = omitThemeProps(mergedProps, ["withSwatch"])
    const {
      eyeDropperSupported,
      value,
      getContainerProps,
      getEyeDropperProps,
      getFieldProps,
      getInputProps,
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
                position: "relative",
                ...styles.inner,
              }}
            >
              {withSwatch ? <ColorPickerSwatch {...swatchProps} /> : null}

              <ColorPickerField
                h={h}
                minH={minH}
                {...getFieldProps(fieldProps, ref)}
                inputProps={getInputProps(inputProps)}
              />

              {eyeDropperSupported && withEyeDropper ? (
                <ColorPickerEyeDropper
                  {...getEyeDropperProps(eyeDropperProps)}
                />
              ) : null}
            </ui.div>

            <Portal {...portalProps}>
              <PopoverContent
                as="div"
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

interface ColorPickerFieldOptions {
  inputProps?: HTMLUIProps<"input"> & RefAttributes<HTMLInputElement>
}

interface ColorPickerFieldProps extends HTMLUIProps, ColorPickerFieldOptions {}

const ColorPickerField = forwardRef<ColorPickerFieldProps, "input">(
  ({ className, h, minH, inputProps, ...rest }, ref) => {
    const { styles } = useColorPickerContext()
    const { ref: inputRef, ...computedInputProps } = inputProps ?? {}

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
      <PopoverTrigger>
        <ui.div
          className={cx("ui-color-picker__field", className)}
          __css={css}
          {...rest}
        >
          <ui.input
            ref={mergeRefs(ref, inputRef)}
            className="ui-color-picker-picker__field__input"
            display="inline-block"
            w="100%"
            {...computedInputProps}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)

ColorPickerField.displayName = "ColorPickerField"
ColorPickerField.__ui__ = "ColorPickerField"

interface ColorPickerSwatchProps extends ColorSwatchProps {}

const ColorPickerSwatch = forwardRef<ColorPickerSwatchProps, "div">(
  ({ className, ...rest }, ref) => {
    const { styles, value } = useColorPickerContext()

    const css: CSSUIObject = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
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

interface ColorPickerEyeDropperProps extends HTMLUIProps<"button"> {}

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
        "aria-hidden": true,
        focusable: false,
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
