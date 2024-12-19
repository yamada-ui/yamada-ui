import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Torus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TorusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TorusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Torus} className={cx("ui-lucide-icon", className)} {...rest} />
)
