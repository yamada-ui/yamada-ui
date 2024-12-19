import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Parentheses } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ParenthesesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ParenthesesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Parentheses}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
