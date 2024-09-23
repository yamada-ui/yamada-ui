import { forwardRef, ui } from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import type { ColorSelectorEyeDropperProps } from "./color-selector-eye-dropper"
import { ColorSelectorEyeDropper } from "./color-selector-eye-dropper"
import type { ColorSelectorSlidersProps } from "./color-selector-sliders"
import { ColorSelectorSliders } from "./color-selector-sliders"
import { ColorSwatch } from "./color-swatch"
import { useColorSelectorContext } from "./use-color-selector"

interface ColorSelectorBodyOptions {
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
  eyeDropperProps?: ColorSelectorEyeDropperProps
}

export interface ColorSelectorBodyProps
  extends Omit<HTMLUIProps, "children">,
    ColorSelectorBodyOptions,
    Pick<
      ColorSelectorSlidersProps,
      "hueSliderRef" | "hueSliderProps" | "alphaSliderRef" | "alphaSliderProps"
    > {}

export const ColorSelectorBody = forwardRef<ColorSelectorBodyProps, "div">(
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
    const { value, eyeDropperSupported, styles } = useColorSelectorContext()

    const css: CSSUIObject = {
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
            hueSliderRef,
            hueSliderProps,
            alphaSliderRef,
            alphaSliderProps,
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
