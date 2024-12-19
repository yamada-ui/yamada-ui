import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PenTool } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PenToolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenToolIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PenTool} className={cx("ui-lucide-icon", className)} {...rest} />
)
