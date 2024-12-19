import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HandPlatter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HandPlatterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandPlatterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={HandPlatter}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
