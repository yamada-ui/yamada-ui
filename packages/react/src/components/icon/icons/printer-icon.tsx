import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Printer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PrinterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PrinterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Printer} className={cx("ui-lucide-icon", className)} {...rest} />
)
