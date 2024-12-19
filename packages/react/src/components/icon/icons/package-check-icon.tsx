import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PackageCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PackageCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackageCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PackageCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
