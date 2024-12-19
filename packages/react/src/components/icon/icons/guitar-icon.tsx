import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Guitar } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GuitarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GuitarIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Guitar} className={cx("ui-lucide-icon", className)} {...rest} />
)
