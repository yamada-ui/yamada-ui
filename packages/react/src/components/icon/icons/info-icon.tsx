import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Info } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `InfoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InfoIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Info} className={cx("ui-lucide-icon", className)} {...rest} />
)
