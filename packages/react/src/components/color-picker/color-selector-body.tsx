import type { ForwardedRef } from "react"
import type { CSSUIObject, HTMLUIProps } from "../../core"
import type { ColorSelectorEyeDropperProps } from "./color-selector-eye-dropper"
import type { ColorSelectorSlidersProps } from "./color-selector-sliders"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { ColorSelectorEyeDropper } from "./color-selector-eye-dropper"
import { ColorSelectorSliders } from "./color-selector-sliders"
import { ColorSwatch } from "./color-swatch"
import { useColorSelectorContext } from "./use-color-selector"

interface ColorSelectorBodyOptions {
  /**
   * Ref for the eye dropper component.
   */
  eyeDropperRef?: ForwardedRef<HTMLButtonElement>
  /**
   * If `true` display the eye dropper component.
   *
   * @default true
   */
  withEyeDropper?: boolean
  /**
   * If `true`, display the result component.
   *
   * @default true
   */
  withResult?: boolean
  /**
   * Props for the eye dropper component.
   */
  eyeDropperProps?: ColorSelectorEyeDropperProps
}

export interface ColorSelectorBodyProps
  extends Omit<HTMLUIProps, "children">,
    ColorSelectorBodyOptions,
    Pick<
      ColorSelectorSlidersProps,
      "alphaSliderProps" | "alphaSliderRef" | "hueSliderProps" | "hueSliderRef"
    > {}

export const ColorSelectorBody = forwardRef<ColorSelectorBodyProps, "div">(
  (
    {
      className,
      alphaSliderRef,
      eyeDropperRef,
      hueSliderRef,
      withEyeDropper = true,
      withResult,
      alphaSliderProps,
      eyeDropperProps,
      hueSliderProps,
      ...rest
    },
    ref,
  ) => {
    const { eyeDropperSupported, styles, value } = useColorSelectorContext()

    const css: CSSUIObject = {
      display: "flex",
      w: "100%",
      ...styles.body,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-color-selector__body", className)}
        __css={css}
        {...rest}
      >
        <ColorSelectorSliders
          {...{
            alphaSliderRef,
            hueSliderRef,
            alphaSliderProps,
            hueSliderProps,
          }}
        />

        {withEyeDropper && eyeDropperSupported ? (
          <ColorSelectorEyeDropper ref={eyeDropperRef} {...eyeDropperProps} />
        ) : null}

        {withResult ? (
          <ColorSwatch
            className="ui-color-selector__result"
            color={value}
            __css={{ ...styles.result }}
          />
        ) : null}
      </ui.div>
    )
  },
)

ColorSelectorBody.displayName = "ColorSelectorBody"
ColorSelectorBody.__ui__ = "ColorSelectorBody"
