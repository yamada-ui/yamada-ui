import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

type RotateOptions = {}

export type RotateProps = HTMLUIProps<"div"> &
  ThemeProps<"Rotate"> &
  RotateOptions

/**
 * `Rotate` is component.
 *
 * @see Docs https://yamada-ui.com/components/transitions/rotate
 */
export const Rotate = forwardRef<RotateProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Rotate", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-rotate", className)}
      __css={css}
      {...rest}
    />
  )
})
