import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverContent, PopoverTrigger } from "@yamada-ui/popover"
import { Portal, type PortalProps } from "@yamada-ui/portal"
import {
  cx,
  getValidChildren,
  isValidElement,
  omitObject,
} from "@yamada-ui/utils"
import { cloneElement } from "react"
import { ColorPicker } from "./color-picker"
import { EyeDropperIcon } from "./color-picker-eye-dropper"
import type { ColorSwatchProps } from "./color-swatch"
import { ColorSwatch } from "./color-swatch"
import type { UseColorInputProps } from "./use-color-input"
import {
  ColorInputProvider,
  useColorInput,
  useColorInputContext,
} from "./use-color-input"

type ColorInputOptions = {
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
   * Props for color input container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for color input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for color swatch component.
   */
  swatchProps?: ColorInputSwatchProps
  /**
   * Props for color eye dropper component.
   */
  eyeDropperProps?: ColorInputEyeDropperProps
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   */
  portalProps?: Omit<PortalProps, "children">
}

export type ColorInputProps = ThemeProps<"ColorInput"> &
  UseColorInputProps &
  ColorInputOptions

/**
 * `ColorInput` is a component used by the user to select a color or enter an arbitrary color value.
 *
 * @see Docs https://yamada-ui.com/components/forms/color-input
 */
export const ColorInput = forwardRef<ColorInputProps, "input">(
  ({ withSwatch = true, ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("ColorInput", {
      withSwatch,
      ...props,
    })
    let {
      className,
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
      portalProps = { isDisabled: true },
      ...computedProps
    } = omitThemeProps(omitObject(mergedProps, ["withSwatch"]))
    const {
      allowInput,
      getPopoverProps,
      getContainerProps,
      getFieldProps,
      getPickerProps,
      getEyeDropperProps,
      ...rest
    } = useColorInput(computedProps)

    h ??= height
    minH ??= minHeight

    const css: CSSUIObject = {
      w: "100%",
      h: "fit-content",
      color,
      ...styles.container,
    }

    return (
      <ColorInputProvider value={{ styles, ...rest }}>
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx("ui-color-input", className)}
            __css={css}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-color-input__inner"
              __css={{
                position: "relative",
                cursor: !allowInput ? "pointer" : undefined,
                ...styles.inner,
              }}
            >
              {withSwatch ? <ColorInputSwatch {...swatchProps} /> : null}

              <PopoverTrigger>
                <ColorInputField
                  h={h}
                  minH={minH}
                  {...getFieldProps(inputProps, ref)}
                />
              </PopoverTrigger>

              {withEyeDropper ? (
                <ColorInputEyeDropper
                  {...getEyeDropperProps(eyeDropperProps)}
                />
              ) : null}
            </ui.div>

            <Portal {...portalProps}>
              <PopoverContent
                className="ui-color-input__popover"
                __css={{ ...styles.list }}
              >
                <ColorPicker
                  className="ui-color-input__picker"
                  {...getPickerProps()}
                />
              </PopoverContent>
            </Portal>
          </ui.div>
        </Popover>
      </ColorInputProvider>
    )
  },
)

type ColorInputFieldProps = HTMLUIProps<"input">

const ColorInputField = forwardRef<ColorInputFieldProps, "input">(
  ({ className, h, minH, ...rest }, ref) => {
    const { styles } = useColorInputContext()

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
        className={cx("ui-color-input__field", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

type ColorInputSwatchProps = ColorSwatchProps

const ColorInputSwatch = forwardRef<ColorInputSwatchProps, "div">(
  ({ className, ...rest }, ref) => {
    const { value, styles } = useColorInputContext()

    const css: CSSUIObject = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      ...styles.swatch,
    }

    return (
      <ColorSwatch
        ref={ref}
        className={cx("ui-color-input__swatch", className)}
        __css={css}
        color={value}
        isRounded
        {...rest}
      />
    )
  },
)

type ColorInputEyeDropperProps = HTMLUIProps<"button">

const ColorInputEyeDropper = forwardRef<ColorInputEyeDropperProps, "button">(
  ({ className, children, ...rest }, ref) => {
    const { styles } = useColorInputContext()

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
        className={cx("ui-color-input__eye-dropper", className)}
        __css={css}
        {...rest}
      >
        {isValidElement(children) ? (
          cloneChildren
        ) : (
          <EyeDropperIcon className="ui-color-input__eye-dropper__icon" />
        )}
      </ui.button>
    )
  },
)
