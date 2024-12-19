import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Club } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClubIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClubIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Club} className={cx("ui-lucide-icon", className)} {...rest} />
)
