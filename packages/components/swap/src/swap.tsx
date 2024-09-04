import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

type SwapOptions = {}

export type SwapProps = HTMLUIProps<"div"> & ThemeProps<"Swap"> & SwapOptions

/**
 * `Swap` is component.
 *
 * @see Docs https://yamada-ui.com/components/motion/swap
 */
export const Swap = forwardRef<SwapProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Swap", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-swap", className)}
      __css={css}
      {...rest}
    />
  )
})
