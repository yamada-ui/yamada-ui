import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { NotepadTextDashed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NotepadTextDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotepadTextDashedIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={NotepadTextDashed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
