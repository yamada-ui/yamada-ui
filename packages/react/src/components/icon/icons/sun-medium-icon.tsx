import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SunMedium } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SunMediumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunMediumIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SunMedium} className={cx("ui-lucide-icon", className)} {...rest} />
)
