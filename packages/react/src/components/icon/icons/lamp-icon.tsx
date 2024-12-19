import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Lamp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LampIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Lamp} className={cx("ui-lucide-icon", className)} {...rest} />
)
