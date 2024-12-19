import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { History } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HistoryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HistoryIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={History} className={cx("ui-lucide-icon", className)} {...rest} />
)
