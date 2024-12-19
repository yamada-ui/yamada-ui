import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Octagon } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `OctagonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Octagon} className={cx("ui-lucide-icon", className)} {...rest} />
)
