import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Archive } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArchiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArchiveIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Archive} className={cx("ui-lucide-icon", className)} {...rest} />
)
