import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SunMoon } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SunMoonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunMoonIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SunMoon} className={cx("ui-lucide-icon", className)} {...rest} />
)
