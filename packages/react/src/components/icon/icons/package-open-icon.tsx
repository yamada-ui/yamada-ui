import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PackageOpen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PackageOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageOpenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PackageOpen}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
