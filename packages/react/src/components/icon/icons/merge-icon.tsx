import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Merge } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MergeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MergeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Merge} className={cx("ui-lucide-icon", className)} {...rest} />
)
