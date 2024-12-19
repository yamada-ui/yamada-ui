import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WheatOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WheatOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WheatOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={WheatOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
