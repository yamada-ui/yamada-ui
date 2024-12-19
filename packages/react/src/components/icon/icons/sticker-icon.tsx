import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sticker } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StickerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StickerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sticker} className={cx("ui-lucide-icon", className)} {...rest} />
)
