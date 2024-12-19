import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sword } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SwordIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwordIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sword} className={cx("ui-lucide-icon", className)} {...rest} />
)
