import { forwardRef, ui } from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import type { ColorPickerEyeDropperProps } from "./color-picker-eye-dropper"
import { ColorPickerEyeDropper } from "./color-picker-eye-dropper"
import type { ColorPickerSlidersProps } from "./color-picker-sliders"
import { ColorPickerSliders } from "./color-picker-sliders"
import { ColorSwatch } from "./color-swatch"
import { useColorPickerContext } from "./use-color-picker"

type ColorPickerBodyOptions = {
  /**
   * If `true`, display the result component.
   *
   * @default true
   */
  withResult?: boolean
  /**
   * If `true` display the eye dropper component.
   *
   * @default true
   */
  withEyeDropper?: boolean
  /**
   * Ref for the eye dropper component.
   */
  eyeDropperRef?: ForwardedRef<HTMLButtonElement>
  /**
   * Props for the eye dropper component.
   */
  eyeDropperProps?: ColorPickerEyeDropperProps
}

export type ColorPickerBodyProps = Omit<HTMLUIProps<"div">, "children"> &
  ColorPickerBodyOptions &
  Pick<
    ColorPickerSlidersProps,
    "hueSliderRef" | "hueSliderProps" | "alphaSliderRef" | "alphaSliderProps"
  >

export const ColorPickerBody = forwardRef<ColorPickerBodyProps, "div">(
  (
    {
      className,
      withEyeDropper = true,
      withResult,
      eyeDropperRef,
      eyeDropperProps,
      hueSliderRef,
      hueSliderProps,
      alphaSliderRef,
      alphaSliderProps,
      ...rest
    },
    ref,
  ) => {
    const { value, eyeDropperSupported, styles } = useColorPickerContext()

    const css: CSSUIObject = {
      display: "flex",
      w: "full",
      ...styles.body,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-color-picker__body", className)}
        __css={css}
        {...rest}
      >
        <ColorPickerSliders
          {...{
            hueSliderRef,
            hueSliderProps,
            alphaSliderRef,
            alphaSliderProps,
          }}
        />

        {withEyeDropper && eyeDropperSupported ? (
          <ColorPickerEyeDropper ref={eyeDropperRef} {...eyeDropperProps} />
        ) : null}

        {withResult ? (
          <ColorSwatch
            className="ui-color-picker__result"
            color={value}
            __css={{ ...styles.result }}
          />
        ) : null}
      </ui.div>
    )
  },
)
