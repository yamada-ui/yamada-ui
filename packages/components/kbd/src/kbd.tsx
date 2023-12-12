import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

export type KbdProps = HTMLUIProps<"kbd"> & ThemeProps<"Kbd">

/**
 * `Kbd` is a component that represents keyboard input.
 *
 * @see Docs https://yamada-ui.com/components/data-display/kbd
 */
export const Kbd = forwardRef<KbdProps, "kbd">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Kbd", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  return (
    <ui.kbd
      ref={ref}
      className={cx("ui-kbd", className)}
      __css={css}
      {...rest}
    />
  )
})
