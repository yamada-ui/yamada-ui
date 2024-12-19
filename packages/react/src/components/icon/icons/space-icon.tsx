import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Space } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SpaceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpaceIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Space} className={cx("ui-lucide-icon", className)} {...rest} />
)
