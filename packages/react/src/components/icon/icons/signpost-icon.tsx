import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Signpost } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SignpostIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignpostIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Signpost} className={cx("ui-lucide-icon", className)} {...rest} />
)
