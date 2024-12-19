import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Waves } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WavesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WavesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Waves} className={cx("ui-lucide-icon", className)} {...rest} />
)
