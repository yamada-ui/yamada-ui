import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListChecks } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListChecksIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListChecksIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ListChecks} className={cx("ui-lucide-icon", className)} {...rest} />
)
