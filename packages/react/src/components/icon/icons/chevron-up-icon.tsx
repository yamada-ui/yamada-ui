import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ChevronUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
