import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Terminal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TerminalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TerminalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Terminal} className={cx("ui-lucide-icon", className)} {...rest} />
)
