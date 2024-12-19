import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HeartCrack } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeartCrackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartCrackIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HeartCrack} className={cx("ui-lucide-icon", className)} {...rest} />
)
