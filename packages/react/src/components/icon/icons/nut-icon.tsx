import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Nut } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NutIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Nut} className={cx("ui-lucide-icon", className)} {...rest} />
)
