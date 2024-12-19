import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Church } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChurchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChurchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Church} className={cx("ui-lucide-icon", className)} {...rest} />
)
