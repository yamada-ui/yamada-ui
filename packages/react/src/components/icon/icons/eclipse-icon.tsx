import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Eclipse } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EclipseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EclipseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Eclipse} className={cx("ui-lucide-icon", className)} {...rest} />
)
