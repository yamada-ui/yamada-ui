import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Scan } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Scan} className={cx("ui-lucide-icon", className)} {...rest} />
)
