import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cylinder } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CylinderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CylinderIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cylinder} className={cx("ui-lucide-icon", className)} {...rest} />
)
