import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bird } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BirdIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BirdIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bird} className={cx("ui-lucide-icon", className)} {...rest} />
)
