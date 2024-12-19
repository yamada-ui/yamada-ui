import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MapPinPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MapPinPlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
