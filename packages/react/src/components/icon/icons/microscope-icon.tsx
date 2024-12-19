import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Microscope } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MicroscopeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicroscopeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Microscope} className={cx("ui-lucide-icon", className)} {...rest} />
)
