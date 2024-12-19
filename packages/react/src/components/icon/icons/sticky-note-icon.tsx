import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { StickyNote } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StickyNoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StickyNoteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={StickyNote} className={cx("ui-lucide-icon", className)} {...rest} />
)
