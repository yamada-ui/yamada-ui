import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HardDriveDownload } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HardDriveDownloadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardDriveDownloadIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={HardDriveDownload}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
