import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LampDesk } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LampDeskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampDeskIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LampDesk} className={cx("ui-lucide-icon", className)} {...rest} />
)
