import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Briefcase } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BriefcaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Briefcase} className={cx("ui-lucide-icon", className)} {...rest} />
)
