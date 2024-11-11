import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { LockKeyhole as OriginalLockKeyhole } from "lucide-react"

/**
 * `LockKeyholeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockKeyholeIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalLockKeyhole} {...props} />
))

/**
 * `LockKeyhole` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LockKeyholeIcon` instead.
 */
export const LockKeyhole = LockKeyholeIcon
