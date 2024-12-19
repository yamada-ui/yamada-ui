import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Gavel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GavelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GavelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Gavel} className={cx("ui-lucide-icon", className)} {...rest} />
)
