import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ungroup } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UngroupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UngroupIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ungroup} className={cx("ui-lucide-icon", className)} {...rest} />
)
