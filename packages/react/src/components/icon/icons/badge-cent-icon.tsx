import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeCent } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeCentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeCentIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BadgeCent} className={cx("ui-lucide-icon", className)} {...rest} />
)
