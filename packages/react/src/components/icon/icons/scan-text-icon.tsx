import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScanText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScanTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanTextIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ScanText} className={cx("ui-lucide-icon", className)} {...rest} />
)
