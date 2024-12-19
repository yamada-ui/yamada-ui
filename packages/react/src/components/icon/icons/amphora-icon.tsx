import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Amphora } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AmphoraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AmphoraIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Amphora} className={cx("ui-lucide-icon", className)} {...rest} />
)
