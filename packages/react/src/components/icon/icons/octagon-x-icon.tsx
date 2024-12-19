import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { OctagonX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `OctagonXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={OctagonX} className={cx("ui-lucide-icon", className)} {...rest} />
)
