import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsUpDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronsUpDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsUpDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronsUpDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
