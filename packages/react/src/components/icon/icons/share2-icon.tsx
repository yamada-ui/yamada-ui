import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Share2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Share2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Share2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Share2} className={cx("ui-lucide-icon", className)} {...rest} />
)
