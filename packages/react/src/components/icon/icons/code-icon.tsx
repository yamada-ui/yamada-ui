import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Code } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CodeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Code} className={cx("ui-lucide-icon", className)} {...rest} />
)
