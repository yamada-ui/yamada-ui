import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Drum } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DrumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DrumIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Drum} className={cx("ui-lucide-icon", className)} {...rest} />
)
