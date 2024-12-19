import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HeartPulse } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeartPulseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartPulseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HeartPulse} className={cx("ui-lucide-icon", className)} {...rest} />
)
