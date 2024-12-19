import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TreePine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TreePineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreePineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TreePine} className={cx("ui-lucide-icon", className)} {...rest} />
)
