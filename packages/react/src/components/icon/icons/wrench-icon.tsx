import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Wrench } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WrenchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WrenchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Wrench} className={cx("ui-lucide-icon", className)} {...rest} />
)
