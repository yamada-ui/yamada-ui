import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { DnaOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DnaOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DnaOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={DnaOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
