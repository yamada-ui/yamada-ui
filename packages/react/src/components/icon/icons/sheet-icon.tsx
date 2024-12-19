import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sheet } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SheetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SheetIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sheet} className={cx("ui-lucide-icon", className)} {...rest} />
)
