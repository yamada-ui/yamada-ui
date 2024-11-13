import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { LockKeyholeOpen as OriginalLockKeyholeOpen } from "lucide-react"

/**
 * `LockKeyholeOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockKeyholeOpenIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalLockKeyholeOpen}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `LockKeyholeOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LockKeyholeOpenIcon` instead.
 */
export const LockKeyholeOpen = LockKeyholeOpenIcon
