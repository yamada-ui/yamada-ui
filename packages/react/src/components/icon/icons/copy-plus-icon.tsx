import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CopyPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CopyPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CopyPlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
