import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pipette } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PipetteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PipetteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pipette} className={cx("ui-lucide-icon", className)} {...rest} />
)
