import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cctv } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CctvIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CctvIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cctv} className={cx("ui-lucide-icon", className)} {...rest} />
)
