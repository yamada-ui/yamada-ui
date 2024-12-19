import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CircleX} className={cx("ui-lucide-icon", className)} {...rest} />
)
