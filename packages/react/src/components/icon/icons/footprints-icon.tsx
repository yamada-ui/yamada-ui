import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Footprints } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FootprintsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FootprintsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Footprints} className={cx("ui-lucide-icon", className)} {...rest} />
)
