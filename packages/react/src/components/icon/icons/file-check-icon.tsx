import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileCheck} className={cx("ui-lucide-icon", className)} {...rest} />
)
