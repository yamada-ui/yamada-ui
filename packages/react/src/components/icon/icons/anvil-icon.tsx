import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Anvil } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AnvilIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AnvilIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Anvil} className={cx("ui-lucide-icon", className)} {...rest} />
)
