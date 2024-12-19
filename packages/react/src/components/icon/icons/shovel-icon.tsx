import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Shovel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShovelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShovelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Shovel} className={cx("ui-lucide-icon", className)} {...rest} />
)
