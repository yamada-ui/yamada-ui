import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sparkles } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SparklesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sparkles} className={cx("ui-lucide-icon", className)} {...rest} />
)
