import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Building } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BuildingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BuildingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Building} className={cx("ui-lucide-icon", className)} {...rest} />
)
