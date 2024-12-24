import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import { mergeVars, omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"

interface IconOptions {
  /**
   * The CSS `font-size` property.
   *
   * @deprecated Use `fontSize` instead.
   */
  size?: CSSUIProps["fontSize"]
}

export interface IconProps
  extends HTMLUIProps<"svg">,
    Omit<ThemeProps<"Icon">, "size">,
    IconOptions {}

/**
 * `Icon` is a general icon component that can be used in your projects.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/icon
 */
export const Icon: FC<IconProps> = (props) => {
  const [styles, { size, ...mergedProps }] = useComponentStyle("Icon", props)
  const {
    as: element,
    className,
    fontSize = size,
    viewBox,
    __css,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
    ...__css,
    vars: mergeVars(styles.vars, __css?.vars),
  }

  if (fontSize) {
    css.vars = mergeVars(css.vars, [
      { name: "boxSize", token: "fontSizes", value: fontSize },
    ])
    css.boxSize = "$boxSize"
  }

  if (element && typeof element !== "string")
    return (
      <ui.svg
        as={element}
        className={cx("ui-icon", className)}
        aria-hidden
        role="img"
        __css={css}
        {...rest}
      />
    )

  return (
    <ui.svg
      className={cx("ui-icon", className)}
      aria-hidden
      role="img"
      verticalAlign="middle"
      viewBox={viewBox}
      __css={css}
      {...rest}
    />
  )
}

Icon.__ui__ = "Icon"
