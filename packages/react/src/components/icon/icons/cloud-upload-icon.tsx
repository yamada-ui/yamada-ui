import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudUpload } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudUploadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudUploadIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CloudUpload}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
