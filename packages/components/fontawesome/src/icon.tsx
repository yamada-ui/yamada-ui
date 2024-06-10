import type {
  IconDefinition,
  IconProp,
} from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forwardRef } from "@yamada-ui/core"
import type { IconProps as UIIconProps } from "@yamada-ui/icon"
import { Icon as UIIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"

type IconOptions = {
  /**
   * The icon of the [Font Awesome](https://fontawesome.com).
   * Check the docs to see the icon of possible modifiers you can pass.
   *
   * @see Docs https://fontawesome.com/v5/docs/web/use-with/react
   */
  icon: IconDefinition | IconProp
}

export type IconProps = UIIconProps & IconOptions

/**
 * `Icon` is a useful component for using [Font Awesome](https://fontawesome.com).
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/fontawesome
 */
export const Icon = forwardRef<IconProps, "svg">(
  ({ className, icon, size: fontSize, __css, ...rest }, ref) => {
    const css = useMemo(
      () => ({
        display: "inline-block",
        flexShrink: 0,
        fontSize,
        color: "currentcolor",
        ...__css,
      }),
      [__css, fontSize],
    )

    return (
      <UIIcon
        ref={ref}
        as={FontAwesomeIcon}
        icon={icon}
        className={cx("ui-fontawesome-icon", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
