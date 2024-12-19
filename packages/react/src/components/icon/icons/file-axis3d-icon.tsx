import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileAxis3d } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileAxis3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileAxis3dIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileAxis3d} className={cx("ui-lucide-icon", className)} {...rest} />
)
