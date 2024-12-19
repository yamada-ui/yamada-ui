import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Orbit } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `OrbitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OrbitIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Orbit} className={cx("ui-lucide-icon", className)} {...rest} />
)
