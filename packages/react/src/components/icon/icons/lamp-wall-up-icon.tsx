import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LampWallUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LampWallUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampWallUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LampWallUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
