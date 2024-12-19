import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Heading } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeadingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeadingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Heading} className={cx("ui-lucide-icon", className)} {...rest} />
)
