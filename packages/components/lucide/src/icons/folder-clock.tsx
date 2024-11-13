import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { FolderClock as OriginalFolderClock } from "lucide-react"

/**
 * `FolderClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderClockIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalFolderClock}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `FolderClock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FolderClockIcon` instead.
 */
export const FolderClock = FolderClockIcon
