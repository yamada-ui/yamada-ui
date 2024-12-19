import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Medal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MedalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MedalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Medal} className={cx("ui-lucide-icon", className)} {...rest} />
)
