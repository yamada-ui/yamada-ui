import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PawPrint } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PawPrintIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PawPrintIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PawPrint} className={cx("ui-lucide-icon", className)} {...rest} />
)
