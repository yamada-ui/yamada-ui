import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SmilePlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SmilePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmilePlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SmilePlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
