import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Backpack } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BackpackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BackpackIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Backpack} className={cx("ui-lucide-icon", className)} {...rest} />
)
