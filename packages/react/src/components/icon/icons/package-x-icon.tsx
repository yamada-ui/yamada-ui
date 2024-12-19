import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PackageX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PackageXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PackageX} className={cx("ui-lucide-icon", className)} {...rest} />
)
