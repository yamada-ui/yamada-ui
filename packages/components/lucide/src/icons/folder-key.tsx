import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { FolderKey as OriginalFolderKey } from "lucide-react"

/**
 * `FolderKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderKeyIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalFolderKey}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `FolderKey` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FolderKeyIcon` instead.
 */
export const FolderKey = FolderKeyIcon
