import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronsLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronsLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
