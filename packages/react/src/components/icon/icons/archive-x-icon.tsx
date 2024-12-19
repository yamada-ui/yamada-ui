import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArchiveX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArchiveXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArchiveXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ArchiveX} className={cx("ui-lucide-icon", className)} {...rest} />
)
