import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

type FlipOptions = {}

export type FlipProps = HTMLUIProps<"div"> & ThemeProps<"Flip"> & FlipOptions

/**
 * `Flip` is component.
 *
 * @see Docs https://yamada-ui.com/components/transitions/flip
 */
export const Flip = forwardRef<FlipProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Flip", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-flip", className)}
      __css={css}
      {...rest}
    />
  )
})
