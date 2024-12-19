import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WrapText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WrapTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WrapTextIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={WrapText} className={cx("ui-lucide-icon", className)} {...rest} />
)
