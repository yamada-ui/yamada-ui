import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bath } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BathIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BathIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bath} className={cx("ui-lucide-icon", className)} {...rest} />
)
