import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import { useMemo } from "react"
import { omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"

interface ContainerOptions {
  /**
   * If `true`, container will center its children regardless of their width.
   *
   * @default false
   */
  centerContent?: boolean
}

export interface ContainerProps
  extends HTMLUIProps<"section">,
    ThemeProps<"Container">,
    ContainerOptions {}

/**
 * `Container` is a component used as a general division element. By default, it renders the `section` element.
 *
 * @see Docs https://yamada-ui.com/components/layouts/container
 */
export const Container: FC<ContainerProps> = (props) => {
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
      className={cx("ui-container", className)}
      __css={css}
      {...rest}
    />
  )
}

Container.__ui__ = "Container"
