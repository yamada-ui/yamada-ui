import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PackageMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PackageMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PackageMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
