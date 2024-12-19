import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Grid2x2Plus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Grid2x2PlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2PlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Grid2x2Plus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
