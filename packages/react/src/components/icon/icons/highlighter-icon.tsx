import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Highlighter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HighlighterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HighlighterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Highlighter}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
