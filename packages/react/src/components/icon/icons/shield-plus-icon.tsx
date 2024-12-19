import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShieldPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ShieldPlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
