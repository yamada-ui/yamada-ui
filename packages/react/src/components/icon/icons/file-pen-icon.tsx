import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FilePen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FilePenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FilePen} className={cx("ui-lucide-icon", className)} {...rest} />
)
