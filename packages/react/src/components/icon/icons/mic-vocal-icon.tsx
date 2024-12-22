import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MicVocal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MicVocalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicVocalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MicVocal} className={cx("ui-lucide-icon", className)} {...rest} />
)