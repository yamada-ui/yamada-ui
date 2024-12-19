import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PackageSearch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PackageSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageSearchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PackageSearch}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
