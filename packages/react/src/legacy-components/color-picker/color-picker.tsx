import type { FC, ReactNode, RefAttributes } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { PortalProps } from "../portal"
import type { ColorSelectorProps } from "./color-selector"
import type { ColorSwatchProps } from "./color-swatch"
import type { UseColorPickerProps } from "./use-color-picker"
import { cloneElement } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import {
  cx,
  getValidChildren,
  isValidElement,
  mergeRefs,
  runIfFunc,
} from "../../utils"
import { PipetteIcon } from "../icon"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"
import { Portal } from "../portal"
import { ColorSelector } from "./color-selector"
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
   * @default '{ disabled: true }'
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
    const {
      className,
      alphaSliderRef,
      children,
      color,
      h,
      height = h,
      hueSliderRef,
      minH,
      minHeight = minH,
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
      portalProps = { disabled: true },
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

    return (
      <ColorPickerProvider value={{ styles, value, ...rest }}>
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx("ui-color-picker", className)}
            __css={{
              color,
              ...styles.container,
            }}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-color-picker__inner"
              __css={{
                ...styles.inner,
              }}
            >
              {withSwatch ? <ColorPickerSwatch {...swatchProps} /> : null}

              <ColorPickerField
                height={height}
                minHeight={minHeight}
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
  ({ className, inputProps, ...rest }, ref) => {
    const { styles } = useColorPickerContext()
    const { ref: inputRef, ...computedInputProps } = inputProps ?? {}

    return (
      <PopoverTrigger>
        <ui.div
          className={cx("ui-color-picker__field", className)}
          __css={styles.field}
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

    return (
      <ColorSwatch
        ref={ref}
        className={cx("ui-color-picker__swatch", className)}
        color={value}
        fullRounded
        __css={styles.swatch}
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
        __css={styles.eyeDropper}
        {...rest}
      >
        {isValidElement(children) ? (
          cloneChildren
        ) : (
          <PipetteIcon className="ui-color-picker__eye-dropper__icon" />
        )}
      </ui.button>
    )
  },
)

ColorPickerEyeDropper.displayName = "ColorPickerEyeDropper"
ColorPickerEyeDropper.__ui__ = "ColorPickerEyeDropper"
