import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronsDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronsDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
