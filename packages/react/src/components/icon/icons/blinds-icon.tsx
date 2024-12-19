import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Blinds } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BlindsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BlindsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Blinds} className={cx("ui-lucide-icon", className)} {...rest} />
)
