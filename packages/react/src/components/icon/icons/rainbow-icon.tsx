import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Rainbow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RainbowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RainbowIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Rainbow} className={cx("ui-lucide-icon", className)} {...rest} />
)
