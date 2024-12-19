import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeRussianRuble } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeRussianRubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeRussianRubleIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={BadgeRussianRuble}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
