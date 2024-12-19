import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Forklift } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ForkliftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ForkliftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Forklift} className={cx("ui-lucide-icon", className)} {...rest} />
)
