import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Command } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CommandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CommandIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Command} className={cx("ui-lucide-icon", className)} {...rest} />
)
