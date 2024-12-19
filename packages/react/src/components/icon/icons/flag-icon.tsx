import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Flag } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FlagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Flag} className={cx("ui-lucide-icon", className)} {...rest} />
)
