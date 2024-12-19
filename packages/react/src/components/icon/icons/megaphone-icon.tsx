import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Megaphone } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MegaphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MegaphoneIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Megaphone} className={cx("ui-lucide-icon", className)} {...rest} />
)
