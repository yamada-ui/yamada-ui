import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Diff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DiffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Diff} className={cx("ui-lucide-icon", className)} {...rest} />
)
