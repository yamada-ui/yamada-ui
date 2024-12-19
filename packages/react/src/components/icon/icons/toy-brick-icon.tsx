import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ToyBrick } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ToyBrickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToyBrickIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ToyBrick} className={cx("ui-lucide-icon", className)} {...rest} />
)
