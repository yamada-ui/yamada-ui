import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudDownload } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudDownloadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudDownloadIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CloudDownload}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
