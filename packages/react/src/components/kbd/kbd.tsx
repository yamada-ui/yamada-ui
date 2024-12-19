import type { HTMLUIProps, ThemeProps } from "../../core"
import { forwardRef, omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"

export interface KbdProps extends HTMLUIProps<"kbd">, ThemeProps<"Kbd"> {}

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

Kbd.displayName = "Kbd"
Kbd.__ui__ = "Kbd"
