import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ghost } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GhostIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GhostIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ghost} className={cx("ui-lucide-icon", className)} {...rest} />
)
