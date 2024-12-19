import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Package } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PackageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Package} className={cx("ui-lucide-icon", className)} {...rest} />
)
