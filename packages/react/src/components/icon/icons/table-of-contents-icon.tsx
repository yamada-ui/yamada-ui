import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TableOfContents } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TableOfContentsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableOfContentsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TableOfContents}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
