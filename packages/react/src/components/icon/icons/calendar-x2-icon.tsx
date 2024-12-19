import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarX2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarX2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarX2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CalendarX2} className={cx("ui-lucide-icon", className)} {...rest} />
)
