import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Download } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DownloadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DownloadIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Download} className={cx("ui-lucide-icon", className)} {...rest} />
)
