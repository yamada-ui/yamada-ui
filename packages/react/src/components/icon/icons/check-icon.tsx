import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Check } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Check} className={cx("ui-lucide-icon", className)} {...rest} />
)
