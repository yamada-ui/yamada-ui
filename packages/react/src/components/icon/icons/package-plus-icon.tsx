import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PackagePlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PackagePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PackagePlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PackagePlus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
