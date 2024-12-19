import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HandMetal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HandMetalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandMetalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HandMetal} className={cx("ui-lucide-icon", className)} {...rest} />
)
