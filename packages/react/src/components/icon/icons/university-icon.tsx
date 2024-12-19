import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { University } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UniversityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UniversityIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={University} className={cx("ui-lucide-icon", className)} {...rest} />
)
