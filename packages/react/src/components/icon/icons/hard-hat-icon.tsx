import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HardHat } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HardHatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardHatIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HardHat} className={cx("ui-lucide-icon", className)} {...rest} />
)
