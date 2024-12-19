import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArchiveRestore } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArchiveRestoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArchiveRestoreIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArchiveRestore}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
