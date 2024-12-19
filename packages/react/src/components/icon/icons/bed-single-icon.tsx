import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BedSingle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BedSingleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BedSingleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BedSingle} className={cx("ui-lucide-icon", className)} {...rest} />
)
