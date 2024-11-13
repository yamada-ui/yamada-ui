import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { LockKeyhole as OriginalLockKeyhole } from "lucide-react"

/**
 * `LockKeyholeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockKeyholeIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalLockKeyhole}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `LockKeyhole` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LockKeyholeIcon` instead.
 */
export const LockKeyhole = LockKeyholeIcon
