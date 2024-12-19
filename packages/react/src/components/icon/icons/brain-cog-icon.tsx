import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BrainCog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BrainCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrainCogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BrainCog} className={cx("ui-lucide-icon", className)} {...rest} />
)
