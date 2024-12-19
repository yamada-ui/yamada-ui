import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Volume1 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Volume1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Volume1Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Volume1} className={cx("ui-lucide-icon", className)} {...rest} />
)
