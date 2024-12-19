import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScanEye } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScanEyeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanEyeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ScanEye} className={cx("ui-lucide-icon", className)} {...rest} />
)
