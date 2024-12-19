import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileDiff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileDiffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileDiffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileDiff} className={cx("ui-lucide-icon", className)} {...rest} />
)
