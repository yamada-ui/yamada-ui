import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Landmark } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LandmarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LandmarkIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Landmark} className={cx("ui-lucide-icon", className)} {...rest} />
)
