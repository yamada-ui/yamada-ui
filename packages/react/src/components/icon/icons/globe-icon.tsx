import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Globe } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GlobeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GlobeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Globe} className={cx("ui-lucide-icon", className)} {...rest} />
)
