import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tangent } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TangentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TangentIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tangent} className={cx("ui-lucide-icon", className)} {...rest} />
)
