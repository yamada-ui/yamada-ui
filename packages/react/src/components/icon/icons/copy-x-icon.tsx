import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CopyX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CopyXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CopyX} className={cx("ui-lucide-icon", className)} {...rest} />
)
