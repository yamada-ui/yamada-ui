import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScanLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScanLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ScanLine} className={cx("ui-lucide-icon", className)} {...rest} />
)
