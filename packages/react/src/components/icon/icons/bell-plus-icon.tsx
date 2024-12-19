import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BellPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BellPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BellPlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
