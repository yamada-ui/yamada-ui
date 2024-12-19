import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinned } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MapPinnedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinnedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MapPinned} className={cx("ui-lucide-icon", className)} {...rest} />
)
