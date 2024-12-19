import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScanFace } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScanFaceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanFaceIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ScanFace} className={cx("ui-lucide-icon", className)} {...rest} />
)
