import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Feather } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FeatherIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FeatherIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Feather} className={cx("ui-lucide-icon", className)} {...rest} />
)
