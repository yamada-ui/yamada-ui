import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Upload } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UploadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UploadIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Upload} className={cx("ui-lucide-icon", className)} {...rest} />
)
