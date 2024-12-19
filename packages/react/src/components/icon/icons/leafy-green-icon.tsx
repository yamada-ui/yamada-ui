import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LeafyGreen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LeafyGreenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LeafyGreenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LeafyGreen} className={cx("ui-lucide-icon", className)} {...rest} />
)
