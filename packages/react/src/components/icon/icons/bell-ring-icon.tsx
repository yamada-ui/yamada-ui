import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BellRing } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BellRingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellRingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BellRing} className={cx("ui-lucide-icon", className)} {...rest} />
)
