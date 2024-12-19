import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pill } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PillIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PillIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pill} className={cx("ui-lucide-icon", className)} {...rest} />
)
