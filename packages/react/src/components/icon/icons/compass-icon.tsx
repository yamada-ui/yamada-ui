import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Compass } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CompassIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CompassIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Compass} className={cx("ui-lucide-icon", className)} {...rest} />
)
