import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Heater } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeaterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeaterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Heater} className={cx("ui-lucide-icon", className)} {...rest} />
)
