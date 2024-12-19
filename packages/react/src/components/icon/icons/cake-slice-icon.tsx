import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CakeSlice } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CakeSliceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CakeSliceIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CakeSlice} className={cx("ui-lucide-icon", className)} {...rest} />
)
