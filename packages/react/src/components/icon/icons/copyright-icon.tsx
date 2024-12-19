import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Copyright } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CopyrightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyrightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Copyright} className={cx("ui-lucide-icon", className)} {...rest} />
)
