import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BugPlay } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BugPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BugPlayIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BugPlay} className={cx("ui-lucide-icon", className)} {...rest} />
)
