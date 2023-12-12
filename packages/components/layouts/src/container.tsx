import type { HTMLUIProps, ThemeProps, CSSUIObject } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"

type ContainerOptions = {
  /**
   * If `true`, container will center its children regardless of their width.
   *
   * @default false
   */
  centerContent?: boolean
}

export type ContainerProps = HTMLUIProps<"section"> &
  ThemeProps<"Container"> &
  ContainerOptions

/**
 * `Container` is a component used as a general division element. By default, it renders the `section` element.
 *
 * @see Docs https://yamada-ui.com/components/layouts/container
 */
export const Container = forwardRef<ContainerProps, "section">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Container", props)
  const { className, centerContent, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = useMemo(
    () => ({
      alignItems: centerContent ? "center" : undefined,
      ...styles,
    }),
    [centerContent, styles],
  )

  return (
    <ui.section
      ref={ref}
      className={cx("ui-container", className)}
      __css={css}
      {...rest}
    />
  )
})
