import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Milestone } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MilestoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MilestoneIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Milestone} className={cx("ui-lucide-icon", className)} {...rest} />
)
