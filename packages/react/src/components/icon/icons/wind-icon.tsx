import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Wind } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WindIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WindIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Wind} className={cx("ui-lucide-icon", className)} {...rest} />
)
