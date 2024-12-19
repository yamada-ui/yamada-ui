import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileScan } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileScanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileScanIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileScan} className={cx("ui-lucide-icon", className)} {...rest} />
)
