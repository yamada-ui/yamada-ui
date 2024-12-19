import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Videotape } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VideotapeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VideotapeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Videotape} className={cx("ui-lucide-icon", className)} {...rest} />
)
