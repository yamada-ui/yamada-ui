import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Microwave } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MicrowaveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicrowaveIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Microwave} className={cx("ui-lucide-icon", className)} {...rest} />
)
