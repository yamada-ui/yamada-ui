import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Euro } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EuroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EuroIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Euro} className={cx("ui-lucide-icon", className)} {...rest} />
)
