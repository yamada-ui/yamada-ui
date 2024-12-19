import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Triangle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TriangleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TriangleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Triangle} className={cx("ui-lucide-icon", className)} {...rest} />
)
