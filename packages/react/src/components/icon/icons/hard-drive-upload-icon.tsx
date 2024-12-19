import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HardDriveUpload } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HardDriveUploadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardDriveUploadIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={HardDriveUpload}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
