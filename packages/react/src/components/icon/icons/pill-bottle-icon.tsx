import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PillBottle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PillBottleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PillBottleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PillBottle} className={cx("ui-lucide-icon", className)} {...rest} />
)
