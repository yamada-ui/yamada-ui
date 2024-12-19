import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Building2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Building2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Building2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Building2} className={cx("ui-lucide-icon", className)} {...rest} />
)
