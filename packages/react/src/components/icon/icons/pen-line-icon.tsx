import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PenLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PenLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PenLine} className={cx("ui-lucide-icon", className)} {...rest} />
)
