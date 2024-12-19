import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HdmiPort } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HdmiPortIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HdmiPortIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HdmiPort} className={cx("ui-lucide-icon", className)} {...rest} />
)
