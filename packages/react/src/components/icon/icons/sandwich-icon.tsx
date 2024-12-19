import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sandwich } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SandwichIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SandwichIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sandwich} className={cx("ui-lucide-icon", className)} {...rest} />
)
