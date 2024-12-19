import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Syringe } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SyringeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SyringeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Syringe} className={cx("ui-lucide-icon", className)} {...rest} />
)
