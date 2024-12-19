import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CopyCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CopyCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CopyCheck} className={cx("ui-lucide-icon", className)} {...rest} />
)
