import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TentTree } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TentTreeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TentTreeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TentTree} className={cx("ui-lucide-icon", className)} {...rest} />
)
