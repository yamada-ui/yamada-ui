import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CandyCane } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CandyCaneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CandyCaneIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CandyCane} className={cx("ui-lucide-icon", className)} {...rest} />
)
