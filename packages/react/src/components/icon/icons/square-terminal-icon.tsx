import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareTerminal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareTerminalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareTerminalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareTerminal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
