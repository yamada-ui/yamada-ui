import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScanSearch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScanSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanSearchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ScanSearch} className={cx("ui-lucide-icon", className)} {...rest} />
)
